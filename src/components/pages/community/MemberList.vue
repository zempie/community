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
