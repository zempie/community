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
      <div class="form-row mt-4">
        <div class="form-item">
          <div class="form-select dropbox-container">
            <b-form-group label="Manager" label-for="manager">
              <b-form-select name="manager" class="dropbox">
                <b-form-select-option>Regular</b-form-select-option>
                <b-form-select-option>Extended</b-form-select-option>
              </b-form-select>
              <svg class="form-select-icon icon-small-arrow">
                <use xlink:href="#svg-small-arrow"></use>
              </svg>

              <svg class="form-select-icon icon-small-arrow">
                <use xlink:href="#svg-small-arrow"></use>
              </svg>
            </b-form-group>
          </div>
        </div>
      </div>
    </div>

    <div class="form-row mt-4">
      <div class="form-item">
        <div class="form-select dropbox-container">
          <b-form-group label="Sub-manager" label-for="sub-manager">
            <b-form-select name="sub-manager" class="dropbox">
              <b-form-select-option>Regular</b-form-select-option>
              <b-form-select-option>Extended</b-form-select-option>
            </b-form-select>
            <svg class="form-select-icon icon-small-arrow">
              <use xlink:href="#svg-small-arrow"></use>
            </svg>
          </b-form-group>
        </div>
      </div>
    </div>
    <div class="section-header-info mt-5">
      <h2 class="section-title mb-3">정보</h2>
    </div>

    <div class="widget-box-content">
      <form class="form">
        <div
          class="form-input right community-name"
          :class="communityName.length > 0 ? 'active' : ''"
        >
          <b-form-group label="Group name" label-for="communityName">
            <b-form-input
              type="text"
              id="communityName"
              v-model="communityName"
            ></b-form-input>
            <b-form-invalid-feedback
              >필수 입력사항입니다. 50자 이내로
              작성해주세요</b-form-invalid-feedback
            >
          </b-form-group>
        </div>

        <div
          class="form-input right community-name form-textarea"
          :class="description.length > 0 ? 'active' : ''"
        >
          <b-form-group label="Description" label-for="description">
            <b-form-textarea
              style="height: 300px"
              id="description"
              name="description"
              v-model="description"
            ></b-form-textarea>

            <b-form-invalid-feedback
              >필수 입력사항입니다. 2000자 이내로
              작성해주세요</b-form-invalid-feedback
            >
          </b-form-group>
          <p class="form-textarea-limit-text">
            {{ this.description.length }}/2000
          </p>
        </div>
      </form>
      <div class="button-container" @click="saveCommuInfo">
        <p class="button small white add-field-button save-btn primary">SAVE</p>
      </div>
    </div>

    <div class="danger-zone-conianer form-input active">
      <label class="danger-zone-label">Danger zone</label>
      <div class="danger-zone-table">
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

        <div class="switch-option">
          <div class="toggle-container">
            <p class="switch-option-title">Public community</p>

            <p class="switch-option-text">
              zempie에 방문하는 모든 회원에게 커뮤니티 공개
            </p>
          </div>
          <div
            class="form-switch"
            @click="isPrivate = !isPrivate"
            :class="isPrivate ? '' : 'active'"
          >
            <div class="form-switch-button"></div>
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
.limit-text-container {
  display: flex;
  width: 100%;
}
.button-container {
  display: flex;
  justify-content: flex-end;

  .save-btn {
    color: #fff;
  }
}
.delete-container {
  margin: 30px 0px 30px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.dropbox-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 48px;
  font-size: 1rem;
  .dropbox {
    height: 54px;
  }
}
.form-group {
  width: 100%;
}
.danger-zone-conianer {
  border: 1px solid red;
  border-radius: 12px;
  .danger-zone-label {
    color: red;
    font-size: 30px;
    top: -13px;
  }
  .switch-option {
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
  }
  .danger-zone-table {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .form-switch{
    
  }
}
</style>
