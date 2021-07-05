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
    <div class="form-row" v-if="parentId">
      <div class="form-item reply-container">
        <div class="user-tag" :class="[parentId ? 'active' : '']">
          <router-link :to="`/channel/${userTag}/timeline`"
            >@{{ userTag }}</router-link
          >
        </div>
        <div class="form-input small reply-form">
          <label for="popup-post-reply" class="reply-label">Your Reply</label>
          <input
            class="reply-input"
            type="text"
            id="popup-post-reply"
            v-model="content"
          />
          <div class="reply-send-wrapper" @click="sendComment">
            <svg class="icon-send-message">
              <use xlink:href="#svg-send-message"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="form-row" v-else>
      <div class="form-item">
        <div
          class="form-input small"
          :class="[editContent ? 'active' : '', parentId ? 'active' : '']"
        >
        <!-- todo: css -->
          <!-- <div
          style="display:inline-block"
            class="quick-post-footer-action text-tooltip-tft-medium"
            data-title="Insert Image"
            @click="uploadFile('image')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="rgba(97,106,130,1)"
              />
            </svg>
          </div> -->
          <label for="popup-post-reply">Your Reply</label>

          <input type="text" id="popup-post-reply" v-model="content" />

          <div class="reply-send-wrapper" @click="sendComment">
            <svg class="icon-send-message">
              <use xlink:href="#svg-send-message"></use>
            </svg>
          </div>
        </div>
        <div class="checkbox-wrap">
          <input type="checkbox" id="commentState" v-model="isPrivate" />

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
  @Prop() parentId!: any;
  @Prop() editContent!: any;

  private content: string = "";
  private isPrivate: boolean = false;
  private userTag: string = "";
  mounted() {
    Form.formInput();
    if (this.editContent) {
      this.content = this.editContent;
    }
    //대댓글
    if (this.parentId) {
      // this.content = `<router-link @${this.parentId}></router-link>`;
      this.userTag = this.parentId;
    }
  }

  //수정 , 작성
  sendComment() {
    const result = this.$api.sendComment(
      this.postId,
      11,
      this.isPrivate,
      this.content,
      undefined,
      this.parentId
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
.user-tag {
  font-weight: 700;
  margin-left: 10px;
}
.form-input.small {
  height: 48px;
}
.reply-container {
  display: flex;
  align-items: center;
  background-color: #1d2333;
  border: 1px solid #3f485f;
  color: #fff;
  transition: border-color 0.2s ease-in-out;
  border-radius: 12px;
}
.reply-form {
  width: 100%;
}
.reply-input {
  border: none;
  width: 100%;
}
/* .reply-label {
    margin-left: 20%;
} */
</style>