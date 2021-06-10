<template>
    <div class="content-grid">
        <div class="section-banner">
            <img
                class="section-banner-icon"
                src="../img/banner/groups-icon.png"
                alt="groups-icon"
            />

            <p class="section-banner-title">
                Groups ({{ communityList.length }})
            </p>

            <p class="section-banner-text">
                Browse all the groups of the community!
            </p>
        </div>

        <div class="section-filters-bar v1">
            <div class="section-filters-bar-actions">
                <form class="form">
                    <div class="form-input small with-button">
                        <label for="groups-search">Search Groups</label>
                        <input
                            type="text"
                            id="groups-search"
                            name="groups_search"
                            v-model="searchInput"
                        />

                        <button class="button primary" @click="searchCommunity">
                            <svg class="icon-magnifying-glass">
                                <use xlink:href="#svg-magnifying-glass"></use>
                            </svg>
                        </button>
                    </div>

                    <div class="form-select">
                        <label for="groups-filter-category">Filter By</label>
                        <select
                            id="groups-filter-category"
                            name="groups_filter_category"
                            @change="filterList($event.target.value)"
                        >
                            <option value="0">Newly Created</option>
                            <option value="1">Most Members</option>
                            <option value="2">Alphabetical</option>
                        </select>

                        <svg class="form-select-icon icon-small-arrow">
                            <use xlink:href="#svg-small-arrow"></use>
                        </svg>
                    </div>
                </form>

                <div class="filter-tabs">
                    <div class="filter-tab active">
                        <p class="filter-tab-text" @click="filterList(0)">
                            Newly Created
                        </p>
                    </div>

                    <div class="filter-tab">
                        <p class="filter-tab-text" @click="filterList(1)">
                            Most Members
                        </p>
                    </div>

                    <div class="filter-tab">
                        <p class="filter-tab-text" @click="filterList(2)">
                            Alphabetical
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-4-4-4 centered">
            <community-card
                v-for="community in communityList"
                :key="community.id"
                :community="community"
            ></community-card>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PageLoader from "@/components/common/PageLoader.vue";
import CommunityCard from "@/components/pages/community/CommunityCard.vue";

import Form from "@/script/form";

@Component({
    components: { PageLoader, CommunityCard },
})
export default class Community extends Vue {
    private selectedFilter: number = 0;
    private communityList: any = [];
    private searchInput: string = "";

    created() {
        this.communityList = this.$api.getCommunityList();
    }

    mounted() {
        Form.formInput();
    }

    filterList(filter: number) {
        if (filter == 0) {
            this.communityList = this.$api.getCommunityList(filter);
            console.log(this.communityList);
        } else if (filter == 1) {
            this.communityList = this.$api.getCommunityList(filter);
            console.log(this.communityList);
        }
    }
    searchCommunity(e: Event) {
        e.preventDefault();
        this.communityList = this.$api.searchCommunity(this.searchInput);
    }
}
</script>

<style scoped>
svg {
    overflow: hidden;
    vertical-align: middle;
}
</style>
