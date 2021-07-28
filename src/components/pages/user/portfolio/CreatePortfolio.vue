<template>
  <div class="content-grid">
    <div class="grid-column">
      <div class="section-header-info mb-5">
        <h2 class="section-title mb-3">대표 사진</h2>
        <p class="section-pretitle">포트폴리오 썸네일</p>
      </div>

      <div class="grid grid-3-3-3">
        <img-preview
          :profileImg="'https://contattafiles.s3.us-west-1.amazonaws.com/tnt34018/3zSt8zXVMKCNeeG/default_profile.png'"
          :bannerImg="'https://contattafiles.s3.us-west-1.amazonaws.com/tnt34018/7tA7006wJaTGd1F/Pasted%20Image%3A%20Jul%2012%2C%202021%20-%2011%3A40%3A07am'"
        ></img-preview>
        <profile-img-uploader
          @profileImgSrc="getProfileImgSrc"
        ></profile-img-uploader>
      </div>

      <div class="mt-5">
        <form class="form">
          <div class="form-row">
            <div class="form-item">
              <div class="form-input small">
                <b-form-group label="title" label-for="title">
                  <b-form-input
                    class="form-control"
                    type="text"
                    id="title"
                    name="title"
                    v-model="$v.form.title.$model"
                    :state="
                      createPortfolio ? validateState('title') : undefined
                    "
                  ></b-form-input>
                  <b-form-invalid-feedback
                    >필수 입력사항입니다. 50자 이내로
                    작성해주세요</b-form-invalid-feedback
                  >
                </b-form-group>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item">
              <div class="form-input small mid-textarea">
                <b-form-group label="Description" label-for="description">
                  <b-form-textarea
                    id="description"
                    name="description"
                    v-model="$v.form.description.$model"
                    :state="
                      createPortfolio ? validateState('description') : undefined
                    "
                  ></b-form-textarea>
                  <p class="form-textarea-limit-text" style="padding-top: 18px">
                    {{ this.form.description.length }}/2000
                  </p>
                  <b-form-invalid-feedback
                    >필수 입력사항입니다. 2000자 이내로
                    작성해주세요</b-form-invalid-feedback
                  >
                </b-form-group>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item">
              <div class="switch-option">
                <div class="toggle-container">
                  <p class="switch-option-title">Public community</p>

                  <p class="switch-option-text">포트폴리오 공개여부</p>
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
        </form>
        <div class="button-container" @click="createPortfolio">
          <p class="button small white add-field-button save-btn primary">
            SAVE
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import Form from "@/script/form";
import Hexagon from "@/plugins/hexagon";

import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

import ImgPreview from "@/components/common/upload/ImgPreview.vue";
import ProfileImgUploader from "@/components/common/upload/ProfileImgUploader.vue";
import BannerImgUploader from "@/components/common/upload/BannerImgUploader.vue";

@Component({
  computed: { ...mapGetters(["user"]) },
  components: { ImgPreview, ProfileImgUploader, BannerImgUploader },
  mixins: [validationMixin],
  validations: {
    form: {
      title: {
        required,
        maxLength: maxLength(50),
      },

      description: {
        required,
        maxLength: maxLength(2000),
      },
    },
  },
})
export default class CreatePortfolio extends Vue {
  private form = {
    title: "",
    description: "",
    thumbnailImgSrc: "",
  };
  private hexagon: Hexagon = new Hexagon();
  private user!: any;
  private isPrivate: boolean = false;

  mounted() {
    this.hexagon.init();
    Form.formInput();
  }

  validateState(name: string | number) {
    const { $dirty, $error } = this.$v.form[name]!;
    return $dirty ? !$error : null;
  }

  async createPortfolio() {
    this.$v.form.$touch();
    if (this.$v.form.$anyError) {
      return;
    }
    const result = await this.$api.createPortfolio(
      this.user.uid,
      this.form.title,
      this.form.description,
      this.form.thumbnailImgSrc,
      this.isPrivate
    );

    // 백엔드 연결 후 분기처리
    console.log(result);
  }

  getProfileImgSrc(imgSrc: string) {
    this.form.thumbnailImgSrc = imgSrc;
  }
}
</script>

<style lang="scss" scoped>
.dropbox-container {
  display: flex;
  justify-content: space-around;
  height: 48px;
  font-size: 1rem;
}
.dropbox {
  width: 50%;
}
.dropbox-label {
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.toggle-container {
  display: flex;
  flex-direction: column;
  height: 48px;
  justify-content: center;
  width: 40%;
  align-items: flex-start;
}
.button.white {
  color: white;
}
</style>
