<template>
    <div class="content-grid">
        <!-- todo:dimmed -->
        <template v-if="reportPopup">
            <popup></popup>
        </template>
        <div class="grid mobile-prefer-content">
            <div class="widget-box no-padding">
                <!-- WIDGET BOX SETTINGS -->
                <div class="widget-box-settings">
                    <!-- POST SETTINGS WRAP -->
                    <div class="post-settings-wrap">
                        <!-- POST SETTINGS -->
                        <div
                            class="
                                post-settings
                                widget-box-post-settings-dropdown-trigger
                            "
                        >
                            <!-- POST SETTINGS ICON -->
                            <svg class="post-settings-icon icon-more-dots">
                                <use xlink:href="#svg-more-dots"></use>
                            </svg>
                            <!-- /POST SETTINGS ICON -->
                        </div>
                        <!-- /POST SETTINGS -->

                        <!-- SIMPLE DROPDOWN -->
                        <div
                            class="
                                simple-dropdown
                                widget-box-post-settings-dropdown
                            "
                        >
                            <p class="simple-dropdown-link">포스팅 수정</p>
                            <p class="simple-dropdown-link">포스팅 삭제</p>
                            <p
                                class="simple-dropdown-link"
                                @click="reportPopup = true"
                            >
                                포스팅 신고
                            </p>
                            <p class="simple-dropdown-link">작성자 신고</p>
                        </div>
                        <!-- /SIMPLE DROPDOWN -->
                    </div>
                    <!-- /POST SETTINGS WRAP -->
                </div>
                <!-- /WIDGET BOX SETTINGS -->

                <!-- WIDGET BOX STATUS -->
                <div class="widget-box-status">
                    <!-- WIDGET BOX STATUS CONTENT -->
                    <div class="widget-box-status-content">
                        <!-- USER STATUS -->
                        <div class="user-status">
                            <!-- USER STATUS AVATAR -->
                            <a
                                class="user-status-avatar"
                                href="profile-timeline.html"
                            >
                                <!-- USER AVATAR -->
                                <div class="user-avatar small no-outline">
                                    <!-- USER AVATAR CONTENT -->
                                    <div class="user-avatar-content">
                                        <!-- HEXAGON -->
                                        <div
                                            class="hexagon-image-30-32"
                                            data-src="img/avatar/05.jpg"
                                        ></div>
                                        <!-- /HEXAGON -->
                                    </div>
                                    <!-- /USER AVATAR CONTENT -->

                                    <!-- USER AVATAR PROGRESS -->
                                    <div class="user-avatar-progress">
                                        <!-- HEXAGON -->
                                        <div
                                            class="hexagon-progress-40-44"
                                        ></div>
                                        <!-- /HEXAGON -->
                                    </div>
                                    <!-- /USER AVATAR PROGRESS -->

                                    <!-- USER AVATAR PROGRESS BORDER -->
                                    <div class="user-avatar-progress-border">
                                        <!-- HEXAGON -->
                                        <div class="hexagon-border-40-44"></div>
                                        <!-- /HEXAGON -->
                                    </div>
                                    <!-- /USER AVATAR PROGRESS BORDER -->

                                    <!-- /USER AVATAR BADGE -->
                                </div>
                                <!-- /USER AVATAR -->
                            </a>
                            <!-- /USER STATUS AVATAR -->

                            <!-- USER STATUS TITLE -->
                            <p class="user-status-title medium">
                                <a class="bold" href="profile-timeline.html"
                                    >유저 ID</a
                                >
                                uploaded a <span class="bold">포스팅 타입</span>
                            </p>
                            <!-- /USER STATUS TITLE -->

                            <!-- USER STATUS TEXT -->
                            <p class="user-status-text small">2 minutes ago</p>
                            <!-- /USER STATUS TEXT -->
                        </div>
                        <!-- /USER STATUS -->

                        <!-- WIDGET BOX STATUS TEXT -->
                        <p class="widget-box-status-text">동영상 업로드</p>
                        <!-- /WIDGET BOX STATUS TEXT -->
                    </div>
                    <!-- /WIDGET BOX STATUS CONTENT -->

                    <!-- IFRAME WRAP -->
                    <!-- <div class="iframe-wrap">
              <iframe src="123" allowfullscreen></iframe>
            </div> -->
                    <!-- /IFRAME WRAP -->

                    <!-- WIDGET BOX STATUS CONTENT -->
                    <div class="widget-box-status-content">
                        <!-- TAG LIST -->
                        <div class="tag-list">
                            <!-- TAG ITEM -->
                            <a class="tag-item secondary" href="newsfeed.html"
                                >태그1</a
                            >
                            <!-- /TAG ITEM -->

                            <!-- TAG ITEM -->
                            <a class="tag-item secondary" href="newsfeed.html"
                                >태그2</a
                            >
                            <!-- /TAG ITEM -->

                            <!-- TAG ITEM -->
                            <a class="tag-item secondary" href="newsfeed.html"
                                >태그3</a
                            >
                            <!-- /TAG ITEM -->

                            <!-- TAG ITEM -->
                            <a class="tag-item secondary" href="newsfeed.html"
                                >태그4</a
                            >
                            <!-- /TAG ITEM -->
                        </div>
                        <!-- /TAG LIST -->

                        <!-- CONTENT ACTIONS -->
                        <div class="content-actions">
                            <!-- CONTENT ACTION -->
                            <div class="content-action">
                                <!-- META LINE -->
                                <div class="meta-line">
                                    <!-- META LINE LIST -->
                                    <div
                                        class="
                                            meta-line-list
                                            reaction-item-list
                                        "
                                    >
                                        <!-- REACTION ITEM -->
                                        <div class="reaction-item">
                                            <!-- REACTION IMAGE -->
                                            <img
                                                class="
                                                    reaction-image
                                                    reaction-item-dropdown-trigger
                                                "
                                                src="../../img/reaction/love.png"
                                                alt="reaction-love"
                                            />
                                            <!-- /REACTION IMAGE -->

                                            <!-- SIMPLE DROPDOWN -->
                                            <div
                                                class="
                                                    simple-dropdown
                                                    padded
                                                    reaction-item-dropdown
                                                "
                                            >
                                                <!-- SIMPLE DROPDOWN TEXT -->
                                                <p class="simple-dropdown-text">
                                                    <img
                                                        class="reaction"
                                                        src="../../img/reaction/love.png"
                                                        alt="reaction-love"
                                                    />
                                                    <span class="bold"
                                                        >Love</span
                                                    >
                                                </p>
                                                <!-- /SIMPLE DROPDOWN TEXT -->

                                                <!-- SIMPLE DROPDOWN TEXT -->
                                                <p class="simple-dropdown-text">
                                                    Matt Parker
                                                </p>
                                                <!-- /SIMPLE DROPDOWN TEXT -->

                                                <!-- SIMPLE DROPDOWN TEXT -->
                                                <p class="simple-dropdown-text">
                                                    Destroy Dex
                                                </p>
                                                <!-- /SIMPLE DROPDOWN TEXT -->

                                                <!-- SIMPLE DROPDOWN TEXT -->
                                                <p class="simple-dropdown-text">
                                                    The Green Goo
                                                </p>
                                                <!-- /SIMPLE DROPDOWN TEXT -->
                                            </div>
                                            <!-- /SIMPLE DROPDOWN -->
                                        </div>
                                        <!-- /REACTION ITEM -->

                                        <!-- /REACTION ITEM -->
                                    </div>
                                    <!-- /META LINE LIST -->

                                    <!-- META LINE TEXT -->
                                    <p class="meta-line-text">16</p>
                                    <!-- /META LINE TEXT -->
                                </div>
                                <!-- /META LINE -->
                            </div>
                            <!-- /CONTENT ACTION -->

                            <!-- CONTENT ACTION -->
                            <div class="content-action">
                                <!-- META LINE -->
                                <div class="meta-line">
                                    <!-- META LINE LINK -->
                                    <p class="meta-line-link">2 Comments</p>
                                    <!-- /META LINE LINK -->
                                </div>
                                <!-- /META LINE -->

                                <!-- META LINE -->
                                <div class="meta-line">
                                    <!-- META LINE TEXT -->
                                    <p class="meta-line-text">0 Shares</p>
                                    <!-- /META LINE TEXT -->
                                </div>
                                <!-- /META LINE -->
                            </div>
                            <!-- /CONTENT ACTION -->
                        </div>
                        <!-- /CONTENT ACTIONS -->
                    </div>
                    <!-- /WIDGET BOX STATUS CONTENT -->
                </div>
                <!-- /WIDGET BOX STATUS -->

                <!-- POST OPTIONS -->
                <div class="post-options">
                    <!-- POST OPTION WRAP -->
                    <div class="post-option-wrap">
                        <!-- POST OPTION -->
                        <div
                            class="
                                post-option
                                reaction-options-dropdown-trigger
                            "
                        >
                            <!-- POST OPTION ICON -->
                            <svg class="post-option-icon icon-thumbs-up">
                                <use xlink:href="#svg-thumbs-up"></use>
                            </svg>
                            <!-- /POST OPTION ICON -->

                            <!-- POST OPTION TEXT -->
                            <p class="post-option-text">좋아요</p>
                            <!-- /POST OPTION TEXT -->
                        </div>
                        <!-- /POST OPTION -->

                        <!-- /REACTION OPTIONS -->
                    </div>
                    <!-- /POST OPTION WRAP -->

                    <!-- POST OPTION -->
                    <div class="post-option">
                        <!-- POST OPTION ICON -->
                        <svg class="post-option-icon icon-comment">
                            <use xlink:href="#svg-comment"></use>
                        </svg>
                        <!-- /POST OPTION ICON -->

                        <!-- POST OPTION TEXT -->
                        <p class="post-option-text">Comment</p>
                        <!-- /POST OPTION TEXT -->
                    </div>
                    <!-- /POST OPTION -->

                    <!-- POST OPTION -->
                    <div class="post-option">
                        <!-- POST OPTION ICON -->
                        <svg class="post-option-icon icon-share">
                            <use xlink:href="#svg-share"></use>
                        </svg>
                        <!-- /POST OPTION ICON -->

                        <!-- POST OPTION TEXT -->
                        <p class="post-option-text">Share</p>
                        <!-- /POST OPTION TEXT -->
                    </div>
                    <!-- /POST OPTION -->
                </div>
                <!-- /POST OPTIONS -->
                <comment></comment>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Comment from "./Comment.vue";
import Post from "./Post.vue";
import Popup from "@/components/common/popup.vue";

@Component({
    components: { Comment, Post, Popup },
})
export default class Feed extends Vue {
    private reportPopup: boolean = false;
}
</script>

<style scoped>
.content-grid {
    transform: translate(199.5px, 0px);
    transition: transform 0.4s ease-in-out 0s;
}
</style>
