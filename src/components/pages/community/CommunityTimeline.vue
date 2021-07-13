<template>
    <div class="grid grid-3-6-3 mobile-prefer-content">
        <div class="grid-column">
            <div class="widget-box">
                <p class="widget-box-title">Channels</p>
                <div class="widget-box-content">
                    <div
                        class="user-status-list"
                        :class="{ active: isActive(-1) }"
                        @click="allPost"
                    >
                        <!-- todo: 이미지 있없 -->
                        <span class="all-post-title">All Posts</span>
                        <div class="all-post-container"></div>
                        <!-- <img  /> -->
                    </div>
                    <div @click="isActive">
                        <channel
                            :channel="channel"
                            v-for="channel in community.channels"
                            :key="channel.id"
                            :communityId="communityId"
                            :class="{ active: isActive(channel.id) }"
                            @channelId="getChannelId"
                            @channelTimeline="getChannelTL"
                        ></channel>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-column">
            <!-- todo: 블락회원 진입때 표시  -->
            <p class="block-alarm">
                블락으로 인해 포스팅을 작성하실 수 없습니다.
            </p>
            <post></post>
            <!-- 타임라인 -->
            <template v-if="timeline">
                <feed
                    v-for="feed in timeline"
                    :key="feed.id"
                    :feed="feed"
                ></feed>
            </template>
            <template v-if="timeline.length === 0">
                <!-- todo: design -->
                <h2>No Result</h2>
            </template>
        </div>
        <div class="grid-column">
            <desctiption :community="community"></desctiption>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Dropdown from "@/plugins/dropdown";

import Post from "@/components/timeline/Post.vue";
import Channel from "@/components/pages/community/Channel.vue";
import Desctiption from "@/components/pages/community/CommunityDescBox.vue";
import Feed from "@/components/timeline/Feed.vue";

@Component({
    components: { Post, Channel, Feed, Desctiption },
})
export default class CommunityTimeline extends Vue {
    private dropdown: Dropdown = new Dropdown();
    private communityId = parseInt(this.$route.params.community_id);
    private community: any;
    private timeline: any;
    private isAllPosts: boolean = false;

    private channelId: number = -1;

    created() {
        this.isAllPosts = true;
        this.community = this.$api.getCommunityInfo(this.communityId);
        //all posts
        this.timeline = this.$api.getTimeline(this.communityId);
    }
    mounted() {
        this.dropdown.init();
    }

    allPost() {
        this.channelId = -1;
        this.isActive(-1);
        this.timeline = this.$api.getTimeline(this.communityId);
    }
    getChannelId(id?: any) {
        this.channelId = id;
    }
    getChannelTL(timeline: any) {
        this.timeline = timeline;
    }

    isActive(id?: any) {
        return id == this.channelId;
    }
    @Watch("$route.query")
    watchQuery(query: any) {
        console.log(query);
    }
    @Watch("timeline")
    watchTimeline() {}
}
</script>

<style scoped>
.all-post-container {
    width: 100%;
    height: 65px;
    margin-bottom: 10px;
    background-color: #343a40;
    opacity: 50%;
}
.all-post-container:hover,
.user-status-list.active .all-post-container {
    opacity: 100%;
    cursor: pointer;
}
.user-status-list.active .all-post-title {
    background-color: #fff;
    color: #1d2333;
}

.all-post-title {
    border-radius: 6px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;
    padding: 2px 6px;
    background-color: #1d2333;
    color: #fff;
    position: absolute;
    z-index: 3;
    margin: 8px;
    display: flex;
    justify-content: space-between;
}
.all-post-container {
    border-radius: 7px;
}
.block-alarm {
    background-color: red;
    border-radius: 5px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
