<template>
  <div class="content-grid">
    <div class="section-banner">
      <img
        class="section-banner-icon"
        src="../../img/banner/accounthub-icon.png"
        alt="accounthub-icon"
      />

      <p class="section-banner-title">Manage Group</p>
    </div>
    <div class="simple-tab-items">
      <router-link
        class="simple-tab-item"
        :class="$route.name === 'CommunitySetting' ? 'active' : ''"
        :to="`/community/${community.id}/setting`"
      >
        정보
      </router-link>

      <router-link
        class="simple-tab-item"
        :class="$route.name === 'CommunitySettingMember' ? 'active' : ''"
        :to="`/community/${community.id}/setting/member`"
        >유저 관리</router-link
      >

      <p class="simple-tab-item">Groups</p>

      <p class="simple-tab-item">Blog Posts</p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class CommunitySettingHeader extends Vue {
  private community: any;
  private communityId = parseInt(this.$route.params.community_id);
  created() {
    this.community = this.$api.getCommunityInfo(this.communityId);
  }
}
</script>

<style lang="scss" scoped>
.simple-tab-items {
  margin-top: 32px;
}
</style>
