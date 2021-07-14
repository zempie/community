<template>
  <div class="content-grid">
    <div class="grid-column">
      <div class="widget-box">
        <p class="widget-box-title">Personal Info</p>
        <div class="grid grid-3-3-3 centered">
          <!-- <img-preview
        :profileImg="user.profile_img"
        :bannerImg="user.banner_img"
      ></img-preview> -->
          <profile-img-uploader
            @profileImgSrc="getProfileImgSrc"
          ></profile-img-uploader>
          <banner-img-uploader
            @bannerImgSrc="getBannerImgSrc"
          ></banner-img-uploader>
        </div>
        <div class="widget-box-content">
          <form class="form">
            <div class="form-row split">
              <div class="form-item">
                <div class="form-input small active">
                  <label for="account-full-name">Nickname</label>
                  <input
                    type="text"
                    id="account-full-name"
                    name="account_full_name"
                    value="Marina Valentine"
                  />
                </div>
              </div>

              <div class="form-item">
                <div class="form-input small active">
                  <label for="account-email">Account Email</label>
                  <input
                    type="text"
                    id="account-email"
                    name="account_email"
                    value="ghuntress@yourmail.com"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="account-hub-content">
      <div class="section-header">
        <div class="section-header-info">
          <p class="section-pretitle">Account</p>

          <h2 class="section-title">General Settings</h2>
        </div>
      </div>

      <div class="grid-column">
        <div class="widget-box">
          <p class="widget-box-title">Email Notifications</p>

          <div class="widget-box-content">
            <div class="switch-option-list">
              <div class="switch-option">
                <p class="switch-option-title">Comments</p>

                <p class="switch-option-text">
                  You'll be notified when someone comments on your posts and/or
                  replies to your comments
                </p>

                <div
                  class="form-switch"
                  @click="commentSwitch(isCommentOn)"
                  :class="isCommentOn ? 'active' : ''"
                >
                  <div class="form-switch-button"></div>
                </div>
              </div>

              <div class="switch-option">
                <p class="switch-option-title">Tags</p>

                <p class="switch-option-text">
                  These are notifications for when someone tags you in a post of
                  image
                </p>

                <div class="form-switch active">
                  <div class="form-switch-button"></div>
                </div>
              </div>

              <div class="switch-option">
                <p class="switch-option-title">Friend Requests</p>

                <p class="switch-option-text">
                  You'll be notified when someone send you a friend request
                </p>

                <div class="form-switch active">
                  <div class="form-switch-button"></div>
                </div>
              </div>

              <div class="switch-option">
                <p class="switch-option-title">Groups</p>

                <p class="switch-option-text">
                  These are notifications for activity on groups you created or
                  joined
                </p>

                <div class="form-switch">
                  <div class="form-switch-button"></div>
                </div>
              </div>

              <div class="switch-option">
                <p class="switch-option-title">Events</p>

                <p class="switch-option-text">
                  You'll be notified about events you created or added to your
                  calendar
                </p>

                <div class="form-switch active">
                  <div class="form-switch-button"></div>
                </div>
              </div>

              <div class="switch-option">
                <p class="switch-option-title">Marketplace</p>

                <p class="switch-option-text">
                  These are notifications for marketplace items you posted
                </p>

                <div class="form-switch">
                  <div class="form-switch-button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="widget-box">
          <p class="widget-box-title">Privacy Settings</p>

          <div class="widget-box-content">
            <form class="form">
              <div class="form-row split">
                <div class="form-item centered">
                  <label class="form-title" for="profile-privacy-visibility"
                    >Who can see your profile?</label
                  >
                </div>

                <div class="form-item">
                  <div class="form-select">
                    <select
                      id="profile-privacy-visibility"
                      name="profile_privacy_visibility"
                    >
                      <option value="1" selected>Members Only</option>
                      <option value="2">Everyone (Public)</option>
                    </select>

                    <svg class="form-select-icon icon-small-arrow">
                      <use xlink:href="#svg-small-arrow"></use>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="form-row split">
                <div class="form-item centered">
                  <label class="form-title" for="profile-privacy-friend-request"
                    >Who can send you a friend request?</label
                  >
                </div>

                <div class="form-item">
                  <div class="form-select">
                    <select
                      id="profile-privacy-friend-request"
                      name="profile_privacy_friend_request"
                    >
                      <option value="1" selected>Everyone (Public)</option>
                      <option value="2">Friends of Friends</option>
                      <option value="3">No One (Private)</option>
                    </select>

                    <svg class="form-select-icon icon-small-arrow">
                      <use xlink:href="#svg-small-arrow"></use>
                    </svg>
                  </div>
                </div>
              </div>

              <div class="form-row split">
                <div class="form-item centered">
                  <label class="form-title" for="profile-privacy-chat-activity"
                    >Who can see your chat activity?</label
                  >
                </div>

                <div class="form-item">
                  <div class="form-select">
                    <select
                      id="profile-privacy-chat-activity"
                      name="profile_privacy_chat_activity"
                    >
                      <option value="1" selected>Friends Only</option>
                      <option value="2">Everyone (Public)</option>
                    </select>

                    <svg class="form-select-icon icon-small-arrow">
                      <use xlink:href="#svg-small-arrow"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

import ImgPreview from "@/components/common/upload/ImgPreview.vue";
import ProfileImgUploader from "@/components/common/upload/ProfileImgUploader.vue";
import BannerImgUploader from "@/components/common/upload/BannerImgUploader.vue";
import { User } from "@/types";

@Component({
  computed: { ...mapGetters(["user"]) },
  components: { ImgPreview, ProfileImgUploader, BannerImgUploader },
})
export default class UserSettings extends Vue {
  private user!: User;
  private isCommentOn: boolean = false;

  commentSwitch() {
    console.log("?");
    this.isCommentOn = !this.isCommentOn;
  }
}
</script>

<style scoped>
</style>
