<template>
    <div class="grid grid-3-6-3 mobile-prefer-content">
        <div class="grid-column">
            <div class="widget-box">
                <p class="widget-box-title">Channels</p>
                <div class="widget-box-content">
                    <div
                        class="user-status-list"
                        :class="isAllPosts ? 'active' : ''"
                        @click="allPost"
                    >
                        <span class="channel-title">All Posts</span>
                        <img class="channel-img" />
                    </div>
                    <div @click="isAllPosts = false">
                        <channel
                            :channel="channel"
                            v-for="channel in community.channels"
                            :key="channel.id"
                            :communityId="communityId"
                            @channelTimeline="channelTimeline"
                        ></channel>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-column">
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
        <div class="grid-column"></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Dropdown from "@/plugins/dropdown";

import Post from "@/components/timeline/Post.vue";
import Channel from "@/components/pages/community/Channel.vue";
import Feed from "@/components/timeline/Feed.vue";

@Component({
    components: { Post, Channel, Feed },
})
export default class CommunityTimeline extends Vue {
    private dropdown: Dropdown = new Dropdown();
    private communityId = parseInt(this.$route.params.community_id);
    private community: any;
    private timeline: any;
    private isAllPosts: boolean = false;

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
        this.isAllPosts = true;
        this.timeline = this.$api.getTimeline(this.communityId);
    }

    channelTimeline(value: any) {
        this.timeline = value;
        console.log("emit", value);
    }
}
</script>

<style scoped>
.channel-img {
    width: 100%;
    height: 65px;
    margin-bottom: 10px;
    background-color: #343a40;
    opacity: 50%;
}
.channel-img:hover,
.user-status-list.active .channel-img {
    opacity: 100%;
    cursor: pointer;
}
.user-status-list.active .channel-title {
    background-color: #fff;
    color: #1d2333;
}

.channel-title {
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
    font-family: "Rajdhani", sans-serif;
}
</style>
