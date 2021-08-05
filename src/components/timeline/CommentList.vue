<template>
    <div>
        <div class="widget-box no-padding">
            <div class="widget-box-scrollable" data-simplebar>
                <div class="post-comment-list">
                    <comment
                        v-for="comment in comments"
                        :key="comment.id"
                        :comment="comment"
                        :postId="postId"
                        @openReport="openReport"
                        @commentId="selectedComment"
                    ></comment>

                    <!-- <p class="post-comment-heading">
                    Load More Comments <span class="highlighted">9+</span>
                </p> -->
                </div>
            </div>
            <!-- comment input -->

            <comment-input
                :postId="postId"
                class="bordered-top"
            ></comment-input>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Dropdown from "@/plugins/dropdown";
import Comment from "@/components/timeline/Comment.vue";
import CommentInput from "@/components/timeline/CommentInput.vue";

@Component({
    components: { Comment, CommentInput },
})
export default class CommentList extends Vue {
    @Prop() postId!: any;
    private dropdown: Dropdown = new Dropdown();

    private comments: any = [];
    private isOpenReport: boolean = false;
    private selectedCommentId: number = 0;

    created() {
        this.comments = this.$api.getCommentList(this.postId);
    }

    mounted() {
        this.dropdown.init();
    }
    openReport() {
        this.isOpenReport = true;
    }
    selectedComment(val: number) {
        this.selectedCommentId = val;
    }
    // reportDone(state: boolean) {
    //     if (state) {
    //         this.uniqeKey = new Date().getTime();
    //     }
    // }
}
</script>

<style scoped>
.popup-header {
    margin-top: 32px;
}
</style>
