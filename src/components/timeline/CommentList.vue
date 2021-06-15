<template>
    <div class="widget-box no-padding">
        <div class="widget-box-scrollable" data-simplebar>
            <div class="post-comment-list">
                <comment
                    v-for="comment in comments"
                    :key="comment.id"
                    :comment="comment"
                ></comment>

                <!-- <p class="post-comment-heading">
                    Load More Comments <span class="highlighted">9+</span>
                </p> -->
            </div>
        </div>

        <div class="post-comment-form bordered-top">
            <div class="user-avatar small no-outline">
                <div class="user-avatar-content">
                    <div
                        class="hexagon-image-30-32"
                        data-src="../../img/avatar/01.jpg"
                    ></div>
                </div>

                <div class="user-avatar-progress">
                    <div class="hexagon-progress-40-44"></div>
                </div>

                <div class="user-avatar-progress-border">
                    <div class="hexagon-border-40-44"></div>
                </div>

                
            </div>

            <form class="form">
                <div class="form-row">
                    <div class="form-item">
                        <div class="form-input small">
                            <label for="popup-post-reply">Your Reply</label>
                            <input
                                type="text"
                                id="popup-post-reply"
                                name="popup_post_reply"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Dropdown from "@/plugins/dropdown";

import Comment from "@/components/timeline/Comment.vue";

@Component({
    components: { Comment },
})
export default class CommentList extends Vue {
    @Prop() postId!: any;
    private dropdown: Dropdown = new Dropdown();

    private comments: any = [];

    created() {
        this.comments = this.$api.getCommentList(this.postId);
    }

    mounted() {
        this.dropdown.init();
    }
}
</script>

<style scoped>
</style>
