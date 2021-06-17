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
        <div v-show="isOpenReport">
            <popup :commentId="selectedCommentId" :postId="postId"
                ><template v-slot:popupHeader
                    ><h2 class="popup-header">Report Comment</h2></template
                >
                <template v-slot:reason1>욕설</template>
                <template v-slot:reason2>스팸</template>
            </popup>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Dropdown from "@/plugins/dropdown";
import Comment from "@/components/timeline/Comment.vue";
import CommentInput from "@/components/timeline/CommentInput.vue";
import Popup from "@/components/common/Popup.vue";

@Component({
    components: { Comment, CommentInput, Popup },
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
}
</script>

<style scoped>
.popup-header {
    margin-top: 32px;
}
</style>
