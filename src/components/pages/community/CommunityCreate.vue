<template>
  <div class="widget-box">

    <p class="widget-box-title">Group Info</p>



    <div class="widget-box-content">

      <form class="form">

        <div class="form-row">

          <div class="form-item">

            <div class="form-input small active">
              <label for="group-name">Group Name</label>
              <input
                type="text"
                id="group-name"
                name="group_name"
                value="Cosplayers of the World"
              />
            </div>

          </div>

        </div>



        <div class="form-row">

          <div class="form-item">

            <div class="form-input small active">
              <label for="group-tagline">Tagline</label>
              <input
                type="text"
                id="group-tagline"
                name="group_tagline"
                value="All Cosplayers Welcome!"
              />
            </div>

          </div>

        </div>



        <div class="form-row">

          <div class="form-item">

            <div class="form-input small mid-textarea">
              <textarea
                id="group-description"
                name="group_description"
                placeholder="Write a little description about the group..."
              ></textarea>
            </div>

          </div>

        </div>



        <div class="form-row">

          <div class="form-item">

            <div class="form-input small active">
              <label for="group-public-email">Public Email</label>
              <input
                type="text"
                id="group-public-email"
                name="group_public_email"
                value="info@cosworld.com"
              />
            </div>

          </div>

        </div>



        <div class="form-row">

          <div class="form-item">

            <div class="form-input small">
              <label for="group-public-website">Public Website</label>
              <input
                type="text"
                id="group-public-website"
                name="group_public_website"
              />
            </div>

          </div>

        </div>

      </form>

    </div>

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
