<template>
  <div class="grid-column">
    <section class="section">
      <div class="section-header">
        <div class="section-header-info">
          <h2 class="section-title">
            Portfolios
            <span class="highlighted secondary">{{ portfolioList.length }}</span>
          </h2>
        </div>
      </div>

      <div class="grid grid-4-4-4">
        <portfolio-card
          v-for="portfolio in portfolioList"
          :key="portfolio.id"
          :portfolio="portfolio"
        ></portfolio-card>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import PortfolioCard from "@/components/pages/user/portfolio/PortfolioCard.vue";
@Component({
  components: { PortfolioCard },
})
export default class FollowerList extends Vue {
  private portfolioList: any = [];
  private userId = this.$route.params.channel_id;

  async created() {
    this.portfolioList = await this.$api.portfolioList('123');
  }
}
</script>

<style scoped>
</style>
