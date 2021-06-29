<template>
  <div class="widget-box">
    <!-- WIDGET BOX TITLE -->
    <p class="widget-box-title">Group Info</p>
    <!-- /WIDGET BOX TITLE -->

    <!-- WIDGET BOX CONTENT -->
    <div class="widget-box-content">
      <!-- FORM -->
      <form class="form">
        <!-- FORM ROW -->
        <div class="form-row">
          <!-- FORM ITEM -->
          <div class="form-item">
            <!-- FORM INPUT -->
            <div class="form-input small active">
              <label for="group-name">Group Name</label>
              <input
                type="text"
                id="group-name"
                name="group_name"
                value="Cosplayers of the World"
              />
            </div>
            <!-- /FORM INPUT -->
          </div>
          <!-- /FORM ITEM -->
        </div>
        <!-- /FORM ROW -->

        <!-- FORM ROW -->
        <div class="form-row">
          <!-- FORM ITEM -->
          <div class="form-item">
            <!-- FORM INPUT -->
            <div class="form-input small active">
              <label for="group-tagline">Tagline</label>
              <input
                type="text"
                id="group-tagline"
                name="group_tagline"
                value="All Cosplayers Welcome!"
              />
            </div>
            <!-- /FORM INPUT -->
          </div>
          <!-- /FORM ITEM -->
        </div>
        <!-- /FORM ROW -->

        <!-- FORM ROW -->
        <div class="form-row">
          <!-- FORM ITEM -->
          <div class="form-item">
            <!-- FORM INPUT -->
            <div class="form-input small mid-textarea">
              <textarea
                id="group-description"
                name="group_description"
                placeholder="Write a little description about the group..."
              ></textarea>
            </div>
            <!-- /FORM INPUT -->
          </div>
          <!-- /FORM ITEM -->
        </div>
        <!-- /FORM ROW -->

        <!-- FORM ROW -->
        <div class="form-row">
          <!-- FORM ITEM -->
          <div class="form-item">
            <!-- FORM INPUT -->
            <div class="form-input small active">
              <label for="group-public-email">Public Email</label>
              <input
                type="text"
                id="group-public-email"
                name="group_public_email"
                value="info@cosworld.com"
              />
            </div>
            <!-- /FORM INPUT -->
          </div>
          <!-- /FORM ITEM -->
        </div>
        <!-- /FORM ROW -->

        <!-- FORM ROW -->
        <div class="form-row">
          <!-- FORM ITEM -->
          <div class="form-item">
            <!-- FORM INPUT -->
            <div class="form-input small">
              <label for="group-public-website">Public Website</label>
              <input
                type="text"
                id="group-public-website"
                name="group_public_website"
              />
            </div>
            <!-- /FORM INPUT -->
          </div>
          <!-- /FORM ITEM -->
        </div>
        <!-- /FORM ROW -->
      </form>
      <!-- /FORM -->
    </div>
    <!-- WIDGET BOX CONTENT -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Form from "@/script/form";
@Component({
  components: {},
})
export default class CommunityCreate extends Vue {
  mounted() {
    Form.formInput();
  }
}
</script>

<style scoped>
</style>
