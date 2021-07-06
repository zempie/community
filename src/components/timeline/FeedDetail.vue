<template>
    <article class="post-open">
        <div class="post-open-body" style="margin-top: 150px">
            <post-dropdown class="dropdown" :feedId="feed.id"></post-dropdown>
            <div class="post-open-heading">
                <p class="post-open-timestamp">
                    <span class="highlighted">2 days ago</span>5 mins read
                </p>
            </div>

            <div class="post-open-content">
                <div class="post-open-content-sidebar">
                    <div class="user-avatar small no-outline">
                        <div class="user-avatar-content">
                            <div
                                class="hexagon-image-30-32"
                                :data-src="feed.user.profile_img"
                                style="
                                    width: 30px;
                                    height: 32px;
                                    position: relative;
                                "
                            >
                                <canvas
                                    width="30"
                                    height="32"
                                    style="
                                        position: absolute;
                                        top: 0px;
                                        left: 0px;
                                    "
                                ></canvas>
                            </div>
                        </div>

                        <div class="user-avatar-progress">
                            <div
                                class="hexagon-progress-40-44"
                                style="
                                    width: 40px;
                                    height: 44px;
                                    position: relative;
                                "
                            >
                                <canvas
                                    width="40"
                                    height="44"
                                    style="
                                        position: absolute;
                                        top: 0px;
                                        left: 0px;
                                    "
                                ></canvas>
                            </div>
                        </div>

                        <div class="user-avatar-progress-border">
                            <div
                                class="hexagon-border-40-44"
                                style="
                                    width: 40px;
                                    height: 44px;
                                    position: relative;
                                "
                            >
                                <canvas
                                    width="40"
                                    height="44"
                                    style="
                                        position: absolute;
                                        top: 0px;
                                        left: 0px;
                                    "
                                ></canvas>
                            </div>
                        </div>
                    </div>
                    <p class="forum-post-user-title">
                        <router-link :to="`${feed.user.uid}`">{{
                            feed.user.name
                        }}</router-link>
                    </p>
                </div>

                <div class="post-open-content-body">
                    <div v-html="feed.content">{{ feed.content }}</div>
                </div>
            </div>

            <div class="content-actions">
                <div class="content-action"></div>

                <div class="content-action">
                    <div class="meta-line">
                        <p class="meta-line-link">
                            {{ feed.comment_cnt }} Comments
                        </p>
                    </div>
                </div>
            </div>

            <div class="post-options">
                <div class="post-option-wrap" style="position: relative">
                    <div
                        class="post-option reaction-options-dropdown-trigger"
                        @click="sendLike"
                    >
                        <svg
                            class="post-option-icon icon-thumbs-up"
                            :class="feed.liked === true ? 'active' : ''"
                        >
                            <use xlink:href="#svg-thumbs-up"></use>
                        </svg>

                        <p class="post-option-text">좋아요</p>
                    </div>
                </div>

                <div class="post-option active">
                    <svg class="post-option-icon icon-comment">
                        <use xlink:href="#svg-comment"></use>
                    </svg>

                    <p class="post-option-text">Comment</p>
                </div>

                <div
                    class="post-option"
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

            <div id="comments" class="post-comment-list">
                <comment-list :postId="feedId"></comment-list>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CommentList from "./CommentList.vue";

import Dropdown from "@/plugins/dropdown";

import PostDropdown from "@/components/layout/dropdown/PostDropdown.vue";

@Component({
    components: { CommentList, PostDropdown },
})
export default class FeedDetail extends Vue {
    private dropdown: Dropdown = new Dropdown();
    private feedId = parseInt(this.$route.params.feedId);
    private feed: any = null;
    private isCopied: boolean = false;

    created() {
        console.log(this.feedId);
        this.feed = this.$api.getFeed(this.feedId);
    }
    mounted() {
        this.dropdown.init();
    }
    sendLike() {
        console.log("liked!");
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
}
</script>

<style lang="scss" scoped>
.dropdown {
    display: flex;
    justify-content: flex-end;
    margin-right: 28px;
}

.post-open-content-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    .forum-post-user-title{
        margin-top:16px;
    }
}
</style>
