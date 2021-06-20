<template>
    <div class="content-grid">
        <div class="profile-header v2">
            <figure class="profile-header-cover liquid">
                <img :src="`${community.banner_img}`" alt="cover-29" />
            </figure>

            <div class="profile-header-info">
                <div class="user-short-description big">
                    <div
                        class="
                            user-short-description-avatar user-avatar
                            big
                            no-stats
                        "
                    >
                        <div class="user-avatar-border">
                            <div class="hexagon-148-164"></div>
                        </div>
                        <div class="user-avatar-content">
                            <div
                                class="hexagon-image-124-136"
                                :data-src="community.profile_img"
                            ></div>
                        </div>
                    </div>
                    <div
                        class="
                            user-short-description-avatar
                            user-short-description-avatar-mobile
                            user-avatar
                            medium
                            no-stats
                        "
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
                    </div>

                    <p class="user-short-description-title">
                        {{ community.name }}
                    </p>

                    <p class="user-short-description-text">
                        {{ community.description }}
                    </p>
                </div>

                <div class="user-stats">
                    <div class="user-stat big">
                        <div class="user-stat-icon">
                            <template v-if="community.state === 'public'">
                                <svg class="icon-public">
                                    <use xlink:href="#svg-public"></use>
                                </svg>
                            </template>
                            <template v-else>
                                <svg class="icon-private">
                                    <use xlink:href="#svg-private"></use>
                                </svg>
                            </template>
                        </div>

                        <p class="user-stat-text">{{ community.state }}</p>
                    </div>

                    <router-link class="user-stat big" :to="`/community/${community.id}/members`">
                        <p class="user-stat-title">
                            {{ community.member_cnt }}
                        </p>

                        <p class="user-stat-text">members</p>
                    </router-link>

                    <div class="user-stat big">
                        <p class="user-stat-title">{{ community.posts_cnt }}</p>

                        <p class="user-stat-text">posts</p>
                    </div>

                    <div class="user-stat big">
                        <p class="user-stat-title">{{ community.visit_cnt }}</p>

                        <p class="user-stat-text">visits</p>
                    </div>
                </div>

                <div class="tag-sticker">
                    <svg class="tag-sticker-icon icon-public">
                        <use xlink:href="#svg-public"></use>
                    </svg>
                </div>

                <div class="profile-header-info-actions" @click="subscribe">
                    <p class="profile-header-info-action button secondary">
                        <svg class="icon-join-group">
                            <use xlink:href="#svg-join-group"></use>
                        </svg>
                    </p>

                    <a
                        class="profile-header-info-action button"
                        href="hub-group-management.html"
                    >
                        <svg class="icon-more-dots">
                            <use xlink:href="#svg-more-dots"></use>
                        </svg>
                    </a>
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
                    :to="`/community/${community.id}/timeline`"
                    :class="$route.name === 'CommunityTimeline' ? 'active' : ''"
                >
                    <svg class="section-menu-item-icon icon-timeline">
                        <use xlink:href="#svg-timeline"></use>
                    </svg>

                    <p class="section-menu-item-text">Timeline</p>
                </router-link>

                <router-link
                    class="section-menu-item"
                    :to="`/community/${community.id}/members`"
                    :class="$route.name === 'MemberList' ? 'active' : ''"
                >
                    <svg class="section-menu-item-icon icon-members">
                        <use xlink:href="#svg-members"></use>
                    </svg>

                    <p class="section-menu-item-text">Members</p>
                </router-link>

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

import Dropdown from "@/plugins/dropdown";
import Hexagon from "@/plugins/hexagon";

import Tiptap from "@/components/timeline/Tiptap.vue";

@Component({
    components: { Tiptap },
})
export default class CommunityHeader extends Vue {
    private dropdown: Dropdown = new Dropdown();
    private hexagon: Hexagon = new Hexagon();

    private communityId = parseInt(this.$route.params.community_id);
    private community: any;

    created() {
        this.community = this.$api.getCommunityInfo(this.communityId);
    }
    mounted() {
        this.dropdown.init();
        this.hexagon.init();
    }

    subscribe() {
        const result = this.$api.subscribeCommunity(this.communityId, 1);
        console.log("subscribes", result);
    }
}
</script>

<style scoped>
svg {
    vertical-align: middle;
}
figure > img {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
}
</style>
