<template>
  <div>
    <div class="grid-column">
      <div class="section-header-info mt-5">
        <h2 class="section-title mb-3">프로필 사진</h2>
        <p class="section-pretitle">
          프로필 사진은 ZEMPIE가 제공하는 커뮤니티를 나타내는 위치에 표시됩니다.
        </p>
      </div>

      <div class="grid grid-3-3-3 centered">
        <div class="user-preview small fixed-height">
          <figure
            class="user-preview-cover liquid"
            :style="`background: url('${bannerImgSrc}') center
                                center / cover no-repeat;`"
          >
            <img :src="bannerImgSrc" alt="cover-01" style="display: none" />
          </figure>

          <div class="user-preview-info">
            <div class="user-short-description small">
              <div class="user-short-description-avatar user-avatar">
                <div class="user-avatar-content">
                  <div
                    :key="profileImgSrc"
                    class="hexagon-image-68-74"
                    :data-src="profileImgSrc"
                    style="width: 68px; height: 74px; position: relative"
                  >
                    <canvas
                      width="68"
                      height="74"
                      style="position: absolute; top: 0px; left: 0px"
                    ></canvas>
                  </div>
                </div>

                <div class="user-avatar-progress">
                  <div
                    class="hexagon-progress-84-92"
                    style="width: 84px; height: 92px; position: relative"
                  >
                    <canvas
                      width="84"
                      height="92"
                      style="position: absolute; top: 0px; left: 0px"
                    ></canvas>
                  </div>
                </div>

                <div class="user-avatar-progress-border">
                  <div
                    class="hexagon-border-84-92"
                    style="width: 84px; height: 92px; position: relative"
                  >
                    <canvas
                      width="84"
                      height="92"
                      style="position: absolute; top: 0px; left: 0px"
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="upload-box" @click="uploadFile('profileImg')">
          <div style="height: 0px; overflow: hidden">
            <input type="file" @change="onFileChange" accept= image/*
            ref="profileImg" name="fileInput" />
          </div>
          <svg class="upload-box-icon icon-members">
            <use xlink:href="#svg-members"></use>
          </svg>

          <p class="upload-box-title">Change Avatar</p>

          <p class="upload-box-text">110x110px size minimum</p>
        </div>

        <div class="upload-box" @click="uploadFile('bannerImg')">
          <div style="height: 0px; overflow: hidden">
            <input type="file" @change="onFileChange" accept= image/*
            ref="bannerImg" name="fileInput" />
          </div>
          <svg class="upload-box-icon icon-photos">
            <use xlink:href="#svg-photos"></use>
          </svg>

          <p class="upload-box-title">Change Banner</p>

          <p class="upload-box-text">1184x300px size minimum</p>
        </div>
      </div>
    </div>

    <div class="section-header-info mt-5">
      <h2 class="section-title mb-3">관리자</h2>
    </div>
    <!-- todo: call manager data -->
    <div>
     
                    <div class="form-row">
                        <div class="form-item">
                            <div class="form-select dropbox-container">
                                <p class="dropbox-label">manager</p>
                                <select class="dropbox">
                                    <option value="0">Regular</option>
                                    <option value="1">Extended</option>
                                </select>

                                <svg class="form-select-icon icon-small-arrow">
                                    <use xlink:href="#svg-small-arrow"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
    </div>

    <div class="form-row">
                        <div class="form-item">
                            <div class="form-select dropbox-container">
                                <p class="dropbox-label">sub-manager</p>
                                <select class="dropbox">
                                    <option value="0">Regular</option>
                                    <option value="1">Extended</option>
                                </select>
                                <svg class="form-select-icon icon-small-arrow">
                                    <use xlink:href="#svg-small-arrow"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
    <div class="section-header-info mt-5">
      <h2 class="section-title mb-3">정보</h2>
    </div>

    <div class="widget-box-content">
      <form class="form">
        <div class="form-item">
          <p class="left">커뮤니티 명</p>
          <div
            class="form-input right community-name"
            :class="isNameError ? 'active' : ''"
          >
            <input
              type="text"
              id="account-recovery-email"
              name="account_recovery_email"
              v-model="communityName"
            />
            <p :class="isNameError ? 'name-error active' : 'name-error'">
              50자 이내로 작성해주세요
            </p>
          </div>
        </div>

        <div class="form-item mt-4">
          <p class="left">커뮤니티 설명</p>
          <div class="form-input right full">
            <div class="form-textarea" :class="isDescError ? 'active' : ''">
              <textarea
                id="profile-description"
                name="profile_description"
                v-model="description"
                placeholder="Write a little description about community..."
              ></textarea>
              <div
                class="limit-text-container"
                :style="
                  isDescError
                    ? ' justify-content: space-between;'
                    : 'justify-content: flex-end;'
                "
              >
                <p
                  :style="
                    isDescError
                      ? 'display:block; color:red; padding-left:28px'
                      : 'display:none'
                  "
                >
                  2000자 이내로 작성해주세요
                </p>
                <p class="form-textarea-limit-text">
                  {{ this.description.length }}/2000
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div class="button-container" @click="saveCommuInfo">
        <p class="button small white add-field-button save-btn primary">SAVE</p>
      </div>
    </div>
    <div style="border: 1px solid red">
      <p style="color: red">Danger zone</p>
      <div class="form-item delete-container">
        <p class="left">커뮤니티 삭제</p>
        <p
          class="button small white add-field-button m-0 tertiary"
          style="color: #fff"
          @click="deleteCommunity"
        >
          DELETE
        </p>
      </div>
      <div class="form-row">
        <div class="form-item">
          <div class="form-input small dropbox-container">
            <p>state</p>
            public/privat toggle button
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import Dropdown from "@/plugins/dropdown";
import Hexagon from "@/plugins/hexagon";

import plugins from "@/plugins/plugins";
@Component({
  computed: { ...mapGetters(["user"]) },
  components: {},
})
export default class CommunitySetting extends Vue {
  private dropdown: Dropdown = new Dropdown();
  private hexagon: Hexagon = new Hexagon();

  private user!: any;
  private communityId = parseInt(this.$route.params.community_id);
  private community: any;
  private description: string = "";
  private communityName: string = "";

  private filename: string = "";
  private profileImgSrc: string = "";
  private bannerImgSrc: string = "";
  private imgType: string = "";
  private isDescError: boolean = false;
  private isNameError: boolean = false;

  created() {
    this.community = this.$api.getCommunityInfo(this.communityId);
    this.profileImgSrc = this.community.profile_img;
    this.bannerImgSrc = this.community.banner_img;
  }
  mounted() {
    this.hexagon.init();
    this.dropdown.init();
    this.description = this.community.description;
    this.communityName = this.community.name;

    if (!this.user) {
      this.$store.subscribe(async ({ type }) => {
        if (type.toLowerCase() === "user") {
        }
      });
    } else {
    }
  }

  // 파일 업로드
  onFileChange(event: { target: { files: any } }) {
    this.inputFile(event.target.files);
  }
  //첨부파일 업로드
  uploadFile(fileType: string) {
    this.imgType = fileType;
    (this.$refs[fileType] as HTMLElement).click();
  }
  inputFile(files: string | any[]) {
    if (files.length) {
      let file = files[0];
      this.filename = file.name;
      if (this.imgType === "bannerImg") {
        this.bannerImgSrc = URL.createObjectURL(file);
      } else {
        this.profileImgSrc = URL.createObjectURL(file);
      }
    }
  }
  saveCommuInfo() {
    const result = this.$api.modifiedCommunityInfo(
      this.communityId,
      this.communityName,
      this.description,
      this.profileImgSrc,
      this.bannerImgSrc
    );

    console.log(result);
    if (result === true) {
    }
  }
  deleteCommunity() {
    const result = this.$api.deleteCommunity(this.communityId);
  }

  @Watch("profileImgSrc")
  watchImg(val: any) {
    console.log("watch imgSrc", val);
    this.$nextTick(() => {
      plugins.createHexagon({
        container: ".hexagon-image-68-74",
        width: 68,
        height: 74,
        roundedCorners: true,
        roundedCornerRadius: 3,
        clip: true,
      });
    });
  }

  @Watch("description")
  watchChar() {
    if (this.description.length > 2000) {
      this.description = this.description.substring(0, 2000);
      this.isDescError = true;
    } else if (this.description.length < 2000) {
      this.isDescError = false;
    }
  }

  @Watch("communityName")
  watchCommuName() {
    if (this.communityName.length > 50) {
      this.communityName = this.communityName.substring(0, 50);
      this.isNameError = true;
    } else if (this.communityName.length < 50) {
      this.isNameError = false;
    }
  }
}
</script>

<style lang='scss' scoped>
.name-error.active {
  text-align: left;
  display: block;
  color: red;
  padding-left: 28px;
  margin-top: 10px;
}
.name-error {
  display: none;
}
.limit-text-container {
  display: flex;
  width: 100%;
}
.form-textarea {
  height: 300px;
}
.form-textarea.active {
  textarea {
    border: 1px solid red;
  }
}
.community-name.active {
  input {
    border: 1px solid red;
  }
}
.form-item {
  display: flex;
  .left {
    width: 30%;
    height: auto;
    display: flex;
    /* align-content: center; */
    justify-content: center;
    align-items: center;
  }
  .right {
    width: 70%;
  }
}
.button-container {
  display: flex;
  justify-content: flex-end;

  .save-btn {
    color: #fff;
  }
}
.delete-container {
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dropbox-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 48px;
  font-size: 1rem;
}
.dropbox {
  width: 50%;
}
</style>
