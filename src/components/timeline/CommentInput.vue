<template>
    <div class="post-comment-form">
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

        <div class="form-row">
            <div class="form-item">
                <div
                    class="form-input small"
                    :class="editContent ? 'active' : ''"
                >
                    <label for="popup-post-reply">Your Reply</label>
                    <input
                        type="text"
                        id="popup-post-reply"
                        name="popup_post_reply"
                        v-model="content"
                    />
                    <div class="reply-send-wrapper" @click="sendComment">
                        <svg class="icon-send-message">
                            <use xlink:href="#svg-send-message"></use>
                        </svg>
                    </div>
                </div>
                <div class="checkbox-wrap">
                    <input
                        type="checkbox"
                        id="commentState"
                        v-model="isPrivate"
                    />

                    <div class="checkbox-box">
                        <svg class="icon-check">
                            <use xlink:href="#svg-check"></use>
                        </svg>
                    </div>

                    <label for="commentState">Private Comment</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Form from "@/script/form";

@Component({
    components: {},
})
export default class CommentInput extends Vue {
    @Prop() postId!: any;
    @Prop() editContent!: any;

    private content: string = "";
    private isPrivate: boolean = false;

    mounted() {
        Form.formInput();
        if (this.editContent) {
            this.content = this.editContent;
        }
    }

    //수정 , 작성
    sendComment() {
        const result = this.$api.sendComment(
            this.postId,
            11,
            this.isPrivate,
            this.content
        );

        this.content = "";
        this.isPrivate = false;
        this.$emit("editDone", true);
    }
}
</script>


<style scoped>
.reply-send-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
}
.icon-send-message:hover {
    fill: #fff;
}
.checkbox-wrap label {
    text-align: left;
}
.checkbox-wrap {
    margin-top: 8px;
}

.checkbox-wrap input[type="checkbox"]:checked + .checkbox-box,
.checkbox-wrap input[type="radio"]:checked + .checkbox-box {
    background-color: rgb(0 0 0 / 10%);
    border-color: #3f485f;
}
.checkbox-wrap input[type="checkbox"]:checked + .checkbox-box .icon-check,
.checkbox-wrap input[type="radio"]:checked + .checkbox-box .icon-check {
    fill: #ffffff;
}
.checkbox-wrap .checkbox-box .icon-check {
    fill: transparent;
    transition: fill 0.2s ease-in-out;
}
</style>