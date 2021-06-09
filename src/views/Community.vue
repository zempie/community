<template>

   <div class="content-grid">
      <div class="section-banner">
      <!-- SECTION BANNER ICON -->
      <img class="section-banner-icon" src="img/banner/groups-icon.png" alt="groups-icon">
      <!-- /SECTION BANNER ICON -->
  
      <!-- SECTION BANNER TITLE -->
      <p class="section-banner-title">Groups (7)</p>
      <!-- /SECTION BANNER TITLE -->
  
      <!-- SECTION BANNER TEXT -->
      <p class="section-banner-text">Browse all the groups of the community!</p>
      <!-- /SECTION BANNER TEXT -->
    </div>
    <!-- /SECTION BANNER -->

    <!-- SECTION FILTERS BAR -->
    <div class="section-filters-bar v1">
      <!-- SECTION FILTERS BAR ACTIONS -->
      <div class="section-filters-bar-actions">
        <!-- FORM -->
        <form class="form">
          <!-- FORM INPUT -->
          <div class="form-input small with-button" :class="clicked ? 'active':''">
            <label for="groups-search">Search Groups</label>
            <input type="text" id="groups-search" name="groups_search" @mousedown="clicked = !clicked" >
            <!-- BUTTON -->
            <button class="button primary">
              <!-- ICON MAGNIFYING GLASS -->
              <svg class="icon-magnifying-glass">
                <use xlink:href="#svg-magnifying-glass"></use>
              </svg>
              <!-- /ICON MAGNIFYING GLASS -->
            </button>
            <!-- /BUTTON -->
          </div>
          <!-- /FORM INPUT -->
  
          <!-- FORM SELECT -->
          <div class="form-select">
            <label for="groups-filter-category">Filter By</label>
            <select id="groups-filter-category" name="groups_filter_category">
              <option value="0">Newly Created</option>
              <option value="1">Most Members</option>
              <option value="2">Alphabetical</option>
            </select>
            <!-- FORM SELECT ICON -->
            <svg class="form-select-icon icon-small-arrow">
              <use xlink:href="#svg-small-arrow"></use>
            </svg>
            <!-- /FORM SELECT ICON -->
          </div>
          <!-- /FORM SELECT -->
        </form>
        <!-- /FORM -->
  
        <!-- FILTER TABS -->
        <div class="filter-tabs">
          <!-- FILTER TAB -->
          <div class="filter-tab active">
            <!-- FILTER TAB TEXT -->
            <p class="filter-tab-text">Newly Created</p>
            <!-- /FILTER TAB TEXT -->
          </div>
          <!-- /FILTER TAB -->
  
          <!-- FILTER TAB -->
          <div class="filter-tab">
            <!-- FILTER TAB TEXT -->
            <p class="filter-tab-text">Most Members</p>
            <!-- /FILTER TAB TEXT -->
          </div>
          <!-- /FILTER TAB -->
  
          <!-- FILTER TAB -->
          <div class="filter-tab">
            <!-- FILTER TAB TEXT -->
            <p class="filter-tab-text">Alphabetical</p>
            <!-- /FILTER TAB TEXT -->
          </div>
          <!-- /FILTER TAB -->
        </div>
        <!-- /FILTER TABS -->
      </div>
      <!-- /SECTION FILTERS BAR ACTIONS -->
  
      <!-- SECTION FILTERS BAR ACTIONS -->
      <div class="section-filters-bar-actions">
        <!-- VIEW ACTIONS -->
        <div class="view-actions">
          <!-- VIEW ACTION -->
          <div class="view-action text-tooltip-tft-medium active" data-title="Big Grid">
            <!-- VIEW ACTION ICON -->
            <svg class="view-action-icon icon-big-grid-view">
              <use xlink:href="#svg-big-grid-view"></use>
            </svg>
            <!-- /VIEW ACTION ICON -->
          </div>
          <!-- /VIEW ACTION -->
  
          <!-- VIEW ACTION -->
          <div class="view-action text-tooltip-tft-medium" data-title="Small Grid">
            <!-- VIEW ACTION ICON -->
            <svg class="view-action-icon icon-small-grid-view">
              <use xlink:href="#svg-small-grid-view"></use>
            </svg>
            <!-- /VIEW ACTION ICON -->
          </div>
          <!-- /VIEW ACTION -->
  
          <!-- VIEW ACTION -->
          <div class="view-action text-tooltip-tft-medium" data-title="List">
            <!-- VIEW ACTION ICON -->
            <svg class="view-action-icon icon-list-grid-view">
              <use xlink:href="#svg-list-grid-view"></use>
            </svg>
            <!-- /VIEW ACTION ICON -->
          </div>
          <!-- /VIEW ACTION -->
        </div>
        <!-- /VIEW ACTIONS -->
      </div>
      <!-- /SECTION FILTERS BAR ACTIONS -->
    </div>
    <!-- /SECTION FILTERS BAR -->
     <div class="grid grid-4-4-4 centered">
        <card></card>
    </div>
   </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PageLoader from "../components/common/PageLoader.vue";
import Card from "@/components/common/Card.vue";

@Component({
    components: { PageLoader, Card },
})
export default class Community extends Vue {
  private clicked: boolean = false;
}
</script>

<style scoped>
svg {
    overflow: hidden;
    vertical-align: middle;
}
</style>
