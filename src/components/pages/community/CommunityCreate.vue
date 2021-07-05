<template>
  <div class="content-grid">
    <div class="widget-box">
      <p class="widget-box-title">Create Group</p>

      <div class="widget-box-content">
        <form class="form">
          <div class="form-row">
            <div class="form-item">
              <div class="form-input small">
                <label for="group-name">Group Name</label>
                <input
                  type="text"
                  id="group-name"
                  name="group_name"
                  v-model="groupName"
                />
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item">
              <div class="form-input small active">
                <label for="group-url">URL</label>
                <input type="text" name="group-url" v-model="groupUrl" />
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item">
              <div class="form-input small mid-textarea">
                <label for="group_description">Description</label>
                <textarea
                  id="group-description"
                  name="group_description"
                ></textarea>
                <!-- placeholder="Write a little description about the group..." -->
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item">
              <div class="form-input small dropbox-container">
                <p>manager</p>
                <b-dropdown text="manager" class="dropbox">
                  <b-dropdown-item>First Action</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item">
              <div class="form-input small dropbox-container">
                <p>sub-manager</p>
                <b-dropdown text="sub-manager" class="dropbox">
                  <b-dropdown-item>First Action</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-item">
              <div class="form-input small dropbox-container">
                <p>state</p>
                public/privat toggle button
              </div>
            </div>
          </div>
          <div class="form-row">
            <profile-img-upload></profile-img-upload>
          </div>
        </form>
        <div class="button-container" @click="createCommunity">
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
import Form from "@/script/form";
import ProfileImgUpload from "@/components/common/upload/ProfileImgUpload.vue";
@Component({
  components: { ProfileImgUpload },
})
export default class CommunityCreate extends Vue {
  private groupName: string = "";
  private groupUrl: string = "";
  mounted() {
    Form.formInput();
  }
  createCommunity() {
    console.log("createCommunity");
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
</style>
