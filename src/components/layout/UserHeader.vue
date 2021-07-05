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
                    <router-link class="user-stat-title" :to="`/channel/${userInfo.uid}/timeline`">930</router-link>

                    <p class="user-stat-text">posts</p>
                </div>

                <div class="user-stat big">
                    <router-link class="user-stat-title" :to="`/channel/${userInfo.uid}/follwers`">{{followerCnt}}</router-link>
                    <p class="user-stat-text">Followers</p>
                </div>
                  <div class="user-stat big">
                    <router-link class="user-stat-title" :to="`/channel/${userInfo.uid}/followings`">{{followingCnt}}</router-link>

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
    private followingCnt: number = 0;
    private followerCnt: number = 0;

    

    async mounted() {
        this.hexagon.init();
        
        this.init();

        this.followingCnt = await this.$api.followingCnt(this.userInfo.user_uid);
        this.followerCnt = await this.$api.follwerCnt(this.userInfo.user_uid);
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
