<template>
    <article class="post-open">
        <div class="post-open-body pt-0" style="margin-top: 150px">
            <div class="post-top">
                <div class="user-avatar small no-outline profile-img-container">
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
                                style="position: absolute; top: 0px; left: 0px"
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
                                style="position: absolute; top: 0px; left: 0px"
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
                                style="position: absolute; top: 0px; left: 0px"
                            ></canvas>
                        </div>
                    </div>
                </div>
                <div class="forum-post-user-title">
                    <router-link :to="`${feed.user.uid}`"
                        >{{ feed.user.name }}@{{
                            feed.user.nickname
                        }}</router-link
                    >
                    <span>{{ new Date(feed.created_at) }}</span>
                </div>

                <b-btn>follow</b-btn>
            </div>

            <div class="post-open-content">
                <div class="post-open-content-body">
                    <div v-html="feed.content">{{ feed.content }}</div>
                </div>
            </div>

            <div class="content-actions">
                <div class="content-action">
                    <div class="post-option-wrap" style="position: relative">
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
                        </div>
                    </div>

                    <div class="post-option active">
                        <svg class="post-option-icon icon-comment">
                            <use xlink:href="#svg-comment"></use>
                        </svg>
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
                    </div>
                </div>
                <post-dropdown
                    class="dropdown"
                    :feedId="feed.id"
                ></post-dropdown>
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

    align-items: center;
}

.post-open-content-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    .forum-post-user-title {
        margin-top: 16px;
    }
}
.content-actions {
    border-bottom: 1px solid #2f3749;
}
.post-top {
    margin-left: 30px;
    margin-right: 30px;
    display: flex;
    height: 100px;
    justify-content: space-around;
    align-items: center;
    .forum-post-user-title {
        margin-right: 30%;
        display: flex;
        flex-direction: column;
    }
    button {
        width: 100px !important;
    }
}
</style>
