<template>
    <div class="content-grid">
        <div class="profile-header v2">
            <figure class="profile-header-cover liquid">
                <img src="img/cover/29.jpg" alt="cover-29" />
            </figure>

            <div class="profile-header-info">
                <div class="user-short-description big">
                    <a
                        class="
                            user-short-description-avatar user-avatar
                            big
                            no-stats
                        "
                        href="group-timeline.html"
                    >
                        <div class="user-avatar-border">
                            <div class="hexagon-148-164"></div>
                        </div>

                        <div class="user-avatar-content">
                            <div
                                class="hexagon-image-124-136"
                                data-src="img/avatar/24.jpg"
                            ></div>
                        </div>
                    </a>

                    <a
                        class="
                            user-short-description-avatar
                            user-short-description-avatar-mobile
                            user-avatar
                            medium
                            no-stats
                        "
                        href="group-timeline.html"
                    >
                        <div class="user-avatar-border">
                            <div class="hexagon-120-130"></div>
                        </div>

                        <div class="user-avatar-content">
                            <div
                                class="hexagon-image-100-110"
                                data-src="img/avatar/24.jpg"
                            ></div>
                        </div>
                    </a>

                    <p class="user-short-description-title">
                        <a href="group-timeline.html">{{community.name}}</a>
                    </p>

                    <p class="user-short-description-text">
                        All cosplayers welcome!
                    </p>
                </div>

                <div class="user-stats">
                    <div class="user-stat big">
                        <div class="user-stat-icon">
                            <svg class="icon-public">
                                <use xlink:href="#svg-public"></use>
                            </svg>
                        </div>

                        <p class="user-stat-text">public</p>
                    </div>

                    <div class="user-stat big">
                        <p class="user-stat-title">139</p>

                        <p class="user-stat-text">members</p>
                    </div>

                    <div class="user-stat big">
                        <p class="user-stat-title">105</p>

                        <p class="user-stat-text">posts</p>
                    </div>

                    <div class="user-stat big">
                        <p class="user-stat-title">7.3k</p>

                        <p class="user-stat-text">visits</p>
                    </div>
                </div>

                <div class="tag-sticker">
                    <svg class="tag-sticker-icon icon-public">
                        <use xlink:href="#svg-public"></use>
                    </svg>
                </div>

                <div class="profile-header-info-actions">
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
                <a class="section-menu-item active" href="group-timeline.html">
                    <svg class="section-menu-item-icon icon-timeline">
                        <use xlink:href="#svg-timeline"></use>
                    </svg>

                    <p class="section-menu-item-text">Timeline</p>
                </a>

                <a class="section-menu-item" href="group-info.html">
                    <svg class="section-menu-item-icon icon-info">
                        <use xlink:href="#svg-info"></use>
                    </svg>

                    <p class="section-menu-item-text">Info</p>
                </a>

                <router-link
                    class="section-menu-item"
                    to="/community/communityDetail/members"
                >
                    <svg class="section-menu-item-icon icon-members">
                        <use xlink:href="#svg-members"></use>
                    </svg>

                    <p class="section-menu-item-text">Members</p>
                </router-link>

                <a class="section-menu-item" href="#">
                    <svg class="section-menu-item-icon icon-forum">
                        <use xlink:href="#svg-forum"></use>
                    </svg>

                    <p class="section-menu-item-text">Forum</p>
                </a>

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
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Dropdown from "@/plugins/dropdown";

@Component({
    components: {},
})
export default class CommunityDetail extends Vue {
    private dropdown: Dropdown = new Dropdown();
    private communityId = parseInt(this.$route.params.community_id);
    private community: any;
     async mounted() {
        this.dropdown.init();
        await this.getCommunityInfo();
        
    }

    async getCommunityInfo(){
      const result =  await this.$api.getCommunityInfo(this.communityId);
      this.community = result;
      
    }
}
</script>

<style scoped>
</style>
