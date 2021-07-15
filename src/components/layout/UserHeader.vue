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
                    <a class="user-short-description-avatar user-avatar big">
                        <div class="user-avatar-border">
                            <div class="hexagon-148-164"></div>
                        </div>

                        <div class="user-avatar-content">
                            <div
                                class="hexagon-image-100-110"
                                :data-src="userInfo && userInfo.picture"
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
                        <router-link
                            class="user-stat-title"
                            :to="`/channel/${userInfo.uid}/timeline`"
                            >930</router-link
                        >

                        <p class="user-stat-text">posts</p>
                    </div>

                    <div class="user-stat big">
                        <router-link
                            class="user-stat-title"
                            :to="`/channel/${userInfo.uid}/follwers`"
                            >{{ followerCnt }}</router-link
                        >
                        <p class="user-stat-text">Followers</p>
                    </div>
                    <div class="user-stat big">
                        <router-link
                            class="user-stat-title"
                            :to="`/channel/${userInfo.uid}/followings`"
                            >{{ followingCnt }}</router-link
                        >

                        <p class="user-stat-text">Followings</p>
                    </div>
                </div>

                <div
                    class="profile-header-info-actions"
                    v-if="user && user.uid !== userInfo.uid"
                >
                    <p
                        class="profile-header-info-action button secondary"
                        @click="followUser"
                    >
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
                    :to="`/channel/${userUid}/timeline`"
                    :class="
                        $route.name === 'UserTimeline' &&
                        Object.keys($route.query).length === 0
                            ? 'active'
                            : ''
                    "
                >
                    <svg class="section-menu-item-icon icon-timeline">
                        <use xlink:href="#svg-timeline"></use>
                    </svg>

                    <p class="section-menu-item-text">Timeline</p>
                </router-link>

                <router-link
                    class="section-menu-item"
                    :to="`/channel/${userUid}/timeline?media=sns`"
                    :class="$route.query.media === 'sns' ? 'active' : ''"
                >
                    <svg class="section-menu-item-icon icon-forums">
                        <use xlink:href="#svg-forums"></use>
                    </svg>
                    <p class="section-menu-item-text">SNS</p>
                </router-link>

                <router-link
                    class="section-menu-item"
                    :to="`/channel/${userUid}/timeline?media=blog`"
                    :class="$route.query.media === 'blog' ? 'active' : ''"
                >
                    <svg class="section-menu-item-icon icon-forum">
                        <use xlink:href="#svg-forum"></use>
                    </svg>

                    <p class="section-menu-item-text">Blog</p>
                </router-link>

                <router-link
                    class="section-menu-item"
                    :to="`/channel/${userUid}/timeline?media=image`"
                    :class="$route.query.media === 'image' ? 'active' : ''"
                >
                    <svg class="section-menu-item-icon icon-photos">
                        <use xlink:href="#svg-photos"></use>
                    </svg>

                    <p class="section-menu-item-text">Photos</p>
                </router-link>

                <router-link
                    class="section-menu-item"
                    :to="`/channel/${userUid}/timeline?media=video`"
                    :class="$route.query.media === 'video' ? 'active' : ''"
                >
                    <svg class="section-menu-item-icon icon-videos">
                        <use xlink:href="#svg-videos"></use>
                    </svg>

                    <p class="section-menu-item-text">Videos</p>
                </router-link>
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
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import { mapGetters } from "vuex";
import Hexagon from "@/plugins/hexagon";
import { User } from "@/types";
import plugins from "@/plugins/plugins";

@Component({
    computed: { ...mapGetters(["user"]) },
    components: {},
})
export default class UserHeader extends Vue {
    private hexagon: Hexagon = new Hexagon();

    private userUid = this.$route.params.channel_id;
    private userInfo: any = [];
    private followingCnt: number = 0;
    private followerCnt: number = 0;
    private user!: User;

    async mounted() {
        const result = await this.$api.channel(this.userUid);
        this.userInfo = result.target;
        this.followingCnt = await this.$api.followingCnt(
            this.userInfo.user_uid
        );
        this.followerCnt = await this.$api.follwerCnt(this.userInfo.user_uid);
        this.hexagon.init();
    }

    followUser() {}
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
