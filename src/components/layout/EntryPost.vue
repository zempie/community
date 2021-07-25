<template>
  <div class="quick-post">  
    <div class="quick-post-body">
      <div class="form">
        <div class="form-row">
          <div class="form-item">
            <div class="form-textarea entry-post-container">
              <div class="user-status-avatar">
                <div class="user-avatar small no-outline">
                  <div class="user-avatar-content">
                    <div
                      class="hexagon-image-30-32"
                      :data-src="user && user.picture"
                    ></div>
                  </div>

                  <div class="user-avatar-progress">
                    <div class="hexagon-progress-40-44"></div>
                  </div>

                  <div class="user-avatar-progress-border">
                    <div class="hexagon-border-40-44"></div>
                  </div>
                </div>
              </div>
              <textarea
                readonly
                @click="openEdit"
                placeholder="무슨 생각을 하고 계신가요"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      modal-class="post-edit-modal"
      centered
      hide-header
      hide-footer
      v-model="show"
      ref="editModal"
    >
      <post>
        <template v-slot:closeBtn>
          <div class="modal-close-container">
            <svg class="icon-cross text-right">
              <use xlink:href="#svg-cross"></use>
            </svg>
          </div>
        </template>
        <template v-slot:saveType>
          <p class="button small secondary">post</p>
        </template>
      </post>
    </b-modal>
    <b-modal
      ref="loginModal"
      class="modal-container"
      centered
      hide-header
      hide-footer
      no-close-on-backdrop
    >
      <p class="my-4 text-center" style="color: #000">
        로그인 후 사용하시겠습니끼?
      </p>

      <div class="button-container">
        <button
          class="popup-box-action half button tertiary"
          style="width: 47%"
          @click="goLoginPage(true)"
        >
          Login
        </button>
        <button
          class="popup-box-action half button"
          style="width: 47%"
          @click="goLoginPage(false)"
        >
          Cancel
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

import Hexagon from "@/plugins/hexagon";

import Post from "@/components/timeline/Post.vue";
@Component({
  computed: { ...mapGetters(["user"]) },
  components: { Post },
})
export default class EntryPost extends Vue {
  private hexagon: Hexagon = new Hexagon();
  private show: boolean = false;
  mounted() {
    this.hexagon.init();
  }
  openEdit() {
      //todo:로그인 여부 검사
    this.show = true;
  }
}
</script>

<style lang="scss" scoped>
.quick-post {
  height: 100px;
  border-radius: 12px;
  .quick-post-body {
    height: 100%;
    display: flex;
  }
  .form-row {
    height: 100%;
  }
}
.entry-post-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
.user-avatar {
  display: flex;
}
textarea {
  height: 57px !important;
  width: 500px !important;
  padding: 14px 18px;
}
</style>
