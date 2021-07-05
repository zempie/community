<template>
    <div>
        <nav class="section-navigation">
            <div
                id="section-navigation-medium-slider"
                class="section-menu secondary"
            >
                <router-link
                    class="section-menu-item"
                    :to="`/channel/${userUid}/timeline`"
                    :class="$route.name === 'UserTimeline' ? 'active' : ''"
                >
                    <svg class="section-menu-item-icon icon-timeline">
                        <use xlink:href="#svg-timeline"></use>
                    </svg>

                    <p class="section-menu-item-text">Timeline</p>
                </router-link>

                <!-- <router-link
                    class="section-menu-item"
                    :to="`/channel/${community.id}/members`"
                    :class="$route.name === 'MemberList' ? 'active' : ''"
                >
                    <svg class="section-menu-item-icon icon-members">
                        <use xlink:href="#svg-members"></use>
                    </svg>

                    <p class="section-menu-item-text">Members</p>
                </router-link> -->

                <a class="section-menu-item" href="#">
                    <svg class="section-menu-item-icon icon-photos">
                        <use xlink:href="#svg-photos"></use>
                    </svg>

                    <p class="section-menu-item-text">Photos</p>
                </a>

                <a class="section-menu-item" href="#">
                    <svg class="section-menu-item-icon icon-videos">
                        <use xlink:href="#svg-videos"></use>
                    </svg>

                    <p class="section-menu-item-text">Videos</p>
                </a>
            </div>

            <div
                id="section-navigation-medium-slider-controls"
                class="slider-controls"
            >
                <div class="slider-control left">
                    <svg class="slider-control-icon icon-small-arrow">
                        <use xlink:href="#svg-small-arrow"></use>
                    </svg>
                </div>

                <div class="slider-control right">
                    <svg class="slider-control-icon icon-small-arrow">
                        <use xlink:href="#svg-small-arrow"></use>
                    </svg>
                </div>
            </div>
        </nav>
        <div class="grid grid-3-6-3 mobile-prefer-content">
            <div class="grid-column"></div>
            <div class="grid-column">
                <post></post>
                <!-- 타임라인 -->

                <feed
                    v-for="feed in timeline"
                    :key="feed.id"
                    :feed="feed"
                ></feed>
            </div>
            <div class="grid-column"></div>
        </div>
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
export default class UserTimeline extends Vue {
    private dropdown: Dropdown = new Dropdown();
    private userUid = parseInt(this.$route.params.community_id);
    private community: any;

    private timeline: any;

    created() {
        this.community = this.$api.getCommunityInfo(this.userUid);
        this.timeline = this.$api.getTimeline(this.userUid);
    }
    mounted() {
        this.dropdown.init();
    }
}
</script>

<style scoped>
</style>
