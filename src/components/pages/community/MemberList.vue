<template>
  <div class="grid-column">
    <section class="section">
      <div class="section-header">
        <div class="section-header-info">
          <h2 class="section-title">
            Members
            <span class="highlighted secondary">{{ memberList.length }}</span>
          </h2>
        </div>
      </div>

      <div class="section-filters-bar v1">
        <div class="section-filters-bar-actions">
          <form class="form">
            <div class="form-input small with-button">
              <label for="members-search">Search Members</label>
              <input type="text" id="members-search" name="members_search" />

              <button class="button secondary">
                <svg class="icon-magnifying-glass">
                  <use xlink:href="#svg-magnifying-glass"></use>
                </svg>
              </button>
            </div>

            <div class="form-select">
              <label for="members-filter-category">Filter By</label>
              <select
                id="members-filter-category"
                name="members_filter_category"
              >
                <option value="0">Recently Active</option>
                <option value="1">Newest Members</option>
                <option value="2">Alphabetical</option>
              </select>

              <svg class="form-select-icon icon-small-arrow">
                <use xlink:href="#svg-small-arrow"></use>
              </svg>
            </div>
          </form>

          <div class="filter-tabs">
            <div class="filter-tab secondary active">
              <p class="filter-tab-text">Recently Active</p>
            </div>

            <div class="filter-tab secondary">
              <p class="filter-tab-text">Newest Members</p>
            </div>

            <div class="filter-tab secondary">
              <p class="filter-tab-text">Alphabetical</p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-4-4-4 centered">
        <member-card
          v-for="member in memberList"
          :key="member.id"
          :member="member"
        ></member-card>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import MemberCard from "@/components/pages/community/MemberCard.vue";

@Component({
  components: { MemberCard },
})
export default class MemberList extends Vue {
  private communityId = parseInt(this.$route.params.community_id);
  private memberList: any = [];

  created() {
    this.memberList = this.$api.getCommunityMember(this.communityId);
  }
  mounted() {
    console.log("mounted");
  }
}
</script>

<style scoped>
svg {
  vertical-align: middle;
}
</style>
