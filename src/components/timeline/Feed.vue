<template>
    <div>
        <template v-if="reportPopup">
            <popup></popup>
        </template>
        <div class="grid mobile-prefer-content">
            <div class="widget-box no-padding">
                <div class="widget-box-settings">
                    <div class="post-settings-wrap">
                        <div
                            class="
                                post-settings
                                widget-box-post-settings-dropdown-trigger
                            "
                            ref="dropbox"
                        >
                            <svg class="post-settings-icon icon-more-dots">
                                <use xlink:href="#svg-more-dots"></use>
                            </svg>
                        </div>

                        <div
                            class="
                                simple-dropdown
                                widget-box-post-settings-dropdown
                            "
                        >
                            <p class="simple-dropdown-link">포스팅 수정</p>
                            <p
                                class="simple-dropdown-link"
                                @click="deletePost(feed.id)"
                            >
                                포스팅 삭제
                            </p>
                            <p
                                class="simple-dropdown-link"
                                @click="reportPopup = true"
                            >
                                포스팅 신고
                            </p>
                            <p class="simple-dropdown-link">작성자 신고</p>
                        </div>
                    </div>
                </div>

                <div class="widget-box-status">
                    <div class="widget-box-status-content">
                        <div class="user-status">
                            <a
                                class="user-status-avatar"
                                href="profile-timeline.html"
                            >
                                <div class="user-avatar small no-outline">
                                    <div class="user-avatar-content">
                                        <div
                                            class="hexagon-image-30-32"
                                            :data-src="feed.user.profile_img"
                                        ></div>
                                    </div>

                                    <div class="user-avatar-progress">
                                        <div
                                            class="hexagon-progress-40-44"
                                        ></div>
                                    </div>

                                    <div class="user-avatar-progress-border">
                                        <div class="hexagon-border-40-44"></div>
                                    </div>
                                </div>
                            </a>

                            <p class="user-status-title medium">
                                <a class="bold" href="profile-timeline.html">{{
                                    feed.user.name
                                }}</a>
                                uploaded a <span class="bold">포스팅 타입</span>
                            </p>

                            <p class="user-status-text small">{{ postDate }}</p>
                        </div>

                        <div class="widget-box-status-text" v-html="feed.content">
                        <!-- {{ feed.content }} -->
                                

                        </div>

                    </div>

<!-- <h2>{{feed.attatchment_files}} </h2>         -->
           <div class="widget-box-status-content">

                        <div class="tag-list">
                            <router-link
                                class="tag-item secondary"
                                :to="`/search?hashtag=${hashtag}`"
                                v-for="hashtag in feed.hashtags"
                                :key="hashtag.id"
                                >{{ hashtag }}</router-link
                            >
                        </div>

                        <div class="content-actions">
                            <div class="content-action">
                                <div class="meta-line">
                                    <div
                                        class="
                                            meta-line-list
                                            reaction-item-list
                                        "
                                    >
                                        <div
                                            class="
                                                reaction-item
                                                reaction-item-dropdown-trigger
                                            "
                                        >
                                            <img
                                                class="reaction-image"
                                                src="../../img/reaction/love.png"
                                                alt="reaction-love"
                                            />

                                            <div
                                                class="
                                                    simple-dropdown
                                                    padded
                                                    reaction-item-dropdown
                                                "
                                            >
                                                <p class="simple-dropdown-text">
                                                    <img
                                                        class="reaction"
                                                        src="../../img/reaction/love.png"
                                                        alt="reaction-love"
                                                    />
                                                    <span class="bold"
                                                        >Like</span
                                                    >
                                                </p>

                                                <p
                                                    class="simple-dropdown-text"
                                                    v-for="like in likeList"
                                                    :key="like.id"
                                                >
                                                    <router-link
                                                        :to="`/channel/${like.user.channel_id}/timeline`"
                                                        style="color: #fff"
                                                        >{{
                                                            like.user.name
                                                        }}</router-link
                                                    >
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <p class="meta-line-text">
                                        {{ feed.like_cnt }}
                                    </p>
                                </div>
                            </div>

                            <div class="content-action">
                                <div class="meta-line">
                                    <p class="meta-line-link">
                                        {{ feed.comment_cnt }} Comments
                                    </p>
                                </div>

                                <div class="meta-line">
                                    <p class="meta-line-text">
                                        {{ feed.shared_cnt }} Shares
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="post-options"
                    :style="
                        this.isOpenedComments
                            ? 'border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;'
                            : ''
                    "
                >
                    <div class="post-option-wrap">
                        <div
                            class="
                                post-option
                                reaction-options-dropdown-trigger
                            "
                            @click="sendLike"
                        >
                            <svg
                                class="post-option-icon icon-thumbs-up"
                                :class="feed.liked === true ? 'active' : ''"
                            >
                                <use xlink:href="#svg-thumbs-up"></use>
                            </svg>

                            <p
                                class="post-option-text thumbs-up"
                                :class="feed.liked === true ? 'active' : ''"
                            >
                                좋아요
                            </p>
                        </div>
                    </div>

                    <div class="post-option" @click="openComments">
                        <svg
                            class="post-option-icon icon-comment"
                            :class="isOpenedComments ? 'active' : ''"
                        >
                            <use xlink:href="#svg-comment"></use>
                        </svg>

                        <p
                            class="post-option-text"
                            :class="isOpenedComments ? 'active' : ''"
                        >
                            Comment
                        </p>
                    </div>
                    <div
                        class="post-option copy-url-tooltip"
                        @click="copyUrl"
                        @mouseover="isCopied = false"
                        data-title="Copy URL"
                    >
                        <svg class="post-option-icon icon-share">
                            <use xlink:href="#svg-share"></use>
                        </svg>

                        <p class="post-option-text">Share</p>
                    </div>
                </div>
            </div>
            
        </div>
        <template v-if="isOpenedComments">
            <comment-list :postId="feed.id"></comment-list>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import CommentList from "./CommentList.vue";
// import Popup from "@/components/common/Popup.vue";

import Hexagon from "@/plugins/hexagon";
import Dropdown from "@/plugins/dropdown";
import Tooltip from "@/plugins/tooltip";
import Modal from "@/components/common/Modal.vue";

@Component({
    components: { CommentList, Modal },
})
export default class Feed extends Vue {
    @Prop() feed!: any;
    private dropdown: Dropdown = new Dropdown();
    private hexagon: Hexagon = new Hexagon();
    private tooltip: Tooltip = new Tooltip();
    private reportPopup: boolean = false;
    private isOpenedComments: boolean = false;
    private likeList: any = [];
    private postDate: Date = new Date(this.feed.created_at);
    private isCopied: boolean = false;

    mounted() {
        this.dropdown.init();
        this.hexagon.init();
        this.tooltip.init();
    }
    sendLike() {
        console.log("liked!");
    }
    openComments() {
        this.isOpenedComments = !this.isOpenedComments;
    }

    created() {
        this.likeList = this.$api.likeList(this.feed.id);
    }
    copyUrl() {
        let input = document.body.appendChild(document.createElement("input"));
        input.value = window.location.href;
        input.focus();
        input.select();
        document.execCommand("copy");
        input.parentNode?.removeChild(input);

        this.isCopied = true;
    }
    deletePost(postId: number) {
        (this.$refs.dropbox as HTMLElement).click();
        const result = this.$api.deletePost(postId);
    }
}
</script>

<style scoped>
.content-grid {
    transform: translate(199.5px, 0px);
    transition: transform 0.4s ease-in-out 0s;
}

.icon-thumbs-up.active,
.icon-comment.active {
    fill: #4ff461;
    opacity: 1;
}
.thumbs-up.active,
.post-option-text.active {
    color: #fff;
}

.reaction {
    top: 5px;
}
#copied {
    z-index: 999999;
}
</style>
