<template>
    <div>
        <!--  unread reply-2 -->
        <div class="post-comment">
            <!-- {{userInfo}} -->
            <router-link
                class="user-avatar small no-outline"
                :to="`/channel/${userInfo.uid}/timeline`"
            >
                <div class="user-avatar-content">
                    <div
                        class="hexagon-image-30-32"
                        :data-src="userInfo && userInfo.picture"
                    ></div>
                </div>

                <div class="user-avatar-progress">
                    <div class="hexagon-progress-40-44"></div>
                </div>

                <div class="user-avatar-progress-border">
                    <div class="hexagon-border-40-44"></div>
                </div>
            </router-link>

            <p class="post-comment-text">
                <template v-if="!isEditing">
                    <a
                        class="post-comment-text-author"
                        href="profile-timeline.html"
                        >{{ userInfo && userInfo.name }}</a
                    >{{ comment && comment.content }}
                </template>
                <!-- edit comment -->
                <template v-else>
                    <comment-input
                        @editDone="editDone"
                        :postId="postId"
                        :editContent="comment.content"
                    ></comment-input>
                </template>
                <!-- /edit comment -->
            </p>

            <div class="content-actions">
                <div class="content-action">
                    <div class="meta-line">
                        <div class="meta-line-list reaction-item-list small">
                            <div class="reaction-item"></div>

                            <div class="reaction-item">
                                <img
                                    class="reaction-image"
                                    src="../../img/reaction/love.png"
                                    alt="reaction-love"
                                />
                            </div>
                        </div>

                        <p class="meta-line-text">
                            {{ comment && comment.like_cnt }}
                        </p>
                    </div>

                    <div class="meta-line" @click="likeComment">
                        <p
                            class="
                                meta-line-link
                                light
                                reaction-options-small-dropdown-trigger
                            "
                        >
                            Like!
                        </p>
                    </div>

                    <div class="meta-line" @click="openReply(comment)">
                        <p
                            class="meta-line-link light comment"
                            :class="isOpenReply ? 'active' : ''"
                        >
                            Reply
                        </p>
                    </div>

                    <div class="meta-line">
                        <p class="meta-line-timestamp">
                            {{
                                comment &&
                                new Date(comment.created_at).toLocaleString()
                            }}
                        </p>
                    </div>

                    <div class="meta-line settings">
                        <div class="post-settings-wrap">
                            <div
                                class="
                                    post-settings post-settings-dropdown-trigger
                                "
                                ref="dropbox"
                            >
                                <svg class="post-settings-icon icon-more-dots">
                                    <use xlink:href="#svg-more-dots"></use>
                                </svg>
                            </div>

                            <div
                                class="simple-dropdown post-settings-dropdown"
                                ref="dropboxList"
                            >
                                <p
                                    class="
                                        simple-dropdown-link
                                        popup-event-creation-trigger
                                    "
                                    v-b-modal="comment.id.toString()"
                                    @click="reportComment"
                                >
                                    Report Comment
                                </p>
                                <p
                                    class="simple-dropdown-link"
                                    @click="editPost"
                                >
                                    Edit Comment
                                </p>
                                <p
                                    class="simple-dropdown-link"
                                    @click="deletePost(comment.id)"
                                >
                                    Delete Comment
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <modal
            :reportId="comment.id.toString()"
            :title="modalTitle"
            :key="uniqeKey"
        >
            <template v-slot:reason1>욕설</template>
            <template v-slot:reason2>스팸</template>
            <template v-slot:reason3>음란성</template>
        </modal>
        <comment-input
            v-if="isOpenReply"
            :postId="postId"
            :parentId="parentId"
            class="post-comment unread reply-2"
        ></comment-input>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Hexagon from "@/plugins/hexagon";
import PopupPlugin from "@/plugins/popup";

import Modal from "@/components/common/Modal.vue";
import CommentInput from "@/components/timeline/CommentInput.vue";
@Component({
    components: { CommentInput, Modal },
})
export default class Comment extends Vue {
    @Prop() comment!: any;
    @Prop() postId!: any;
    private hexagon: Hexagon = new Hexagon();
    private popupPlugin: PopupPlugin = new PopupPlugin();
    private userInfo: any = [];
    private content: string = this.comment.content;
    private isEditing: boolean = false;
    private isPrivate: boolean = false;
    private isOpenReply: boolean = false;
    private parentId: number = -1;
    private modalTitle: string = "Report Comment";
    private uniqeKey: number = 0;

    mounted() {
        console.log(this.comment);
        this.init();
        this.hexagon.init();
        // this.popupPlugin.init();
    }
    async init() {
        const result = await this.$api.channel(this.comment.user_uid);
        this.userInfo = result.target;
    }
    editPost() {
        this.isEditing = true;
        (this.$refs.dropbox as HTMLElement).click();
    }
    editDone() {
        this.isEditing = false;
    }

    deletePost(commentId: number) {
        const result = this.$api.deleteComment(this.postId, commentId);
        (this.$refs.dropbox as HTMLElement).click();
    }
    reportComment() {
        (this.$refs.dropbox as HTMLElement).click();
        this.$emit("openReport", true);
        this.$emit("commentId", this.comment.id);
        this.uniqeKey = new Date().getTime();
        //  document.documentElement.style.overflow = 'hidden'
    }
    likeComment() {
        const result = this.$api.likeComment(this.comment.id);
    }

    openReply(comment: any) {
        this.isOpenReply = !this.isOpenReply;
        this.parentId = this.comment.id;
    }
}
</script>

<style lang='scss' scoped>
.post-comment-text {
    text-align: left;
}
.comment.active {
    color: #4ff461;
}
</style>
