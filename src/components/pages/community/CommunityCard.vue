<template>
    <div class="user-preview">
        <!-- 배너이미지 -->
        <figure class="user-preview-cover liquid">
            <img :src="community.banner_img" alt="cover-29" />
        </figure>
        <!--/ 배너이미지 -->

        <div class="user-preview-info">
            <!-- Community State -->
            <slot name="communityState"></slot>
            <!-- /Community State -->
            <div class="user-short-description">
                <router-link
                    class="
                        user-short-description-avatar user-avatar
                        medium
                        no-stats
                    "
                    :to="`/community/${community.id}/timeline`"
                >
                    <div class="user-avatar-border">
                        <div class="hexagon-120-130"></div>
                    </div>

                    <div class="user-avatar-content">
                        <div
                            class="hexagon-image-100-110"
                            :data-src="community.profile_img"
                        ></div>
                    </div>
                </router-link>

                <p class="user-short-description-title">
                    <router-link :to="`/community/${community.id}/timeline`">
                        {{ community.name }}
                    </router-link>
                </p>

                <p class="user-short-description-text">
                    {{ community.description }}
                </p>
            </div>
            <!-- Community Detail Info  -->
            <slot name="communityDetail"></slot>
            <!-- /Community Detail Info  -->
            <div class="user-preview-actions">
                <template v-if="!community.is_subscribed">
                    <p class="button secondary full" @click="joinCommunity">
                        <svg class="button-icon icon-join-group">
                            <use xlink:href="#svg-join-group"></use>
                        </svg>
                        Join Group!
                    </p>
                </template>
                <template v-else>
                    <router-link
                        :to="`/community/${community.id}/timeline`"
                        style="display: contents"
                    >
                        <p class="button primary full">Joined</p>
                    </router-link>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Hexagon from "@/plugins/hexagon";
@Component({
    components: {},
})
export default class CommunityCard extends Vue {
    @Prop() community!: any;
    private hexagon: Hexagon = new Hexagon();

    mounted() {
        this.hexagon.init();
    }
    joinCommunity() {
        console.log("joined!");
    }
}
</script>

<style scoped>
svg {
    vertical-align: middle;
}
figure > img {
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
}
</style>
