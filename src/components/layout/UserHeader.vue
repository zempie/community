<template>
  <div class="content-grid">
    <div class="profile-header">
        <figure class="profile-header-cover liquid">
            <div
                style="background-color: #fff; width: 100%; height: 100%"
            ></div>
        </figure>

        <div class="profile-header-info">
            <div class="user-short-description big">
                <a
                    class="user-short-description-avatar user-avatar big"
                   
                >
                    <div class="user-avatar-border">
                        <div class="hexagon-148-164"></div>
                    </div>

                    <div class="user-avatar-content">
                        <div
                            class="hexagon-image-100-110"
                            :data-src="userInfo.picture"
                        ></div>
                    </div>

                    <div class="user-avatar-progress">
                        <div class="hexagon-progress-124-136"></div>
                    </div>

                    <div class="user-avatar-progress-border">
                        <div class="hexagon-border-124-136"></div>
                    </div>
                </a>

                <a
                    class="
                        user-short-description-avatar
                        user-short-description-avatar-mobile
                        user-avatar
                        medium
                    "
                    href="profile-timeline.html"
                >
                    <div class="user-avatar-border">
                        <div class="hexagon-120-132"></div>
                    </div>

                    <div class="user-avatar-content">
                        <div
                            class="hexagon-image-82-90"
                            :data-src="userInfo.picture"
                        ></div>
                    </div>

                    <div class="user-avatar-progress">
                        <div class="hexagon-progress-100-110"></div>
                    </div>

                    <div class="user-avatar-progress-border">
                        <div class="hexagon-border-100-110"></div>
                    </div>

                  
                </a>

                <p class="user-short-description-title">
                    <a href="profile-timeline.html">{{ userInfo.name }}</a>
                </p>

                <p class="user-short-description-text">
                    <!-- <a href="#">www.gamehuntress.com</a> -->
                </p>
            </div>

            <div class="user-stats">
                <div class="user-stat big">
                    <p class="user-stat-title">930</p>

                    <p class="user-stat-text">posts</p>
                </div>

                <div class="user-stat big">
                    <p class="user-stat-title">82</p>

                    <p class="user-stat-text">Followers</p>
                </div>
                  <div class="user-stat big">
                    <p class="user-stat-title">20</p>

                    <p class="user-stat-text">Followings</p>
                </div>
            </div>

            <div class="profile-header-info-actions">
                <p class="profile-header-info-action button secondary">
                    Follow +
                </p>

                <p class="profile-header-info-action button primary">
                    <span class="hide-text-mobile">Send</span> Message
                </p>
            </div>
        </div>
    </div>
        <nav class="section-navigation">
            
            <div
                id="section-navigation-medium-slider"
                class="section-menu secondary"
            >
                <router-link
                    class="section-menu-item"
                    :to="`/channel/${userInfo.id}/timeline`"
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
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Hexagon from "@/plugins/hexagon";

@Component({
    components: {},
})
export default class UserHeader extends Vue {
    private hexagon: Hexagon = new Hexagon();

    private channelId = this.$route.params.channel_id;
    private userInfo: any = [];

    mounted() {
        this.hexagon.init();
        
        this.init();
    }

    async init() {
        const result = await this.$api.channel(this.channelId);
        this.userInfo = result.target;
    }
}
</script>

<style scoped>
svg {
    vertical-align: middle;
}
figure > div {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
</style>
