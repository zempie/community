<template>
    <div class="content-grid">
        <div class="section-banner">
            <img
                class="section-banner-icon"
                src="../../../img/banner/groups-icon.png"
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

                        <template v-if="isSearched">
                            <button class="button primary" @click="searchReset">
                                <svg class="icon-cross-thin">
                                    <use xlink:href="#svg-cross-thin"></use>
                                </svg>
                            </button>
                        </template>
                        <template v-else>
                            <button
                                class="button primary"
                                @click="searchCommunity"
                            >
                                <svg class="icon-magnifying-glass">
                                    <use
                                        xlink:href="#svg-magnifying-glass"
                                    ></use>
                                </svg>
                            </button>
                        </template>
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
                    <div
                        class="filter-tab"
                        :class="filter === 0 ? 'active' : ''"
                    >
                        <p class="filter-tab-text" @click="filterList(0)">
                            Newly Created
                        </p>
                    </div>

                    <div
                        class="filter-tab"
                        :class="filter === 1 ? 'active' : ''"
                    >
                        <p class="filter-tab-text" @click="filterList(1)">
                            Most Members
                        </p>
                    </div>

                    <div
                        class="filter-tab"
                        :class="filter === 2 ? 'active' : ''"
                    >
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
            >
                <template v-slot:communityState>
                    <template v-if="community.state === 'public'">
                        <div class="tag-sticker">
                            <svg class="tag-sticker-icon icon-public">
                                <use xlink:href="#svg-public"></use>
                            </svg>
                        </div>
                    </template>
                    <template v-else>
                        <div class="tag-sticker">
                            <svg class="tag-sticker-icon icon-private">
                                <use xlink:href="#svg-private"></use>
                            </svg>
                        </div>
                    </template>
                </template>
                <template v-slot:communityDetail>
                    <div class="user-stats">
                        <div class="user-stat">
                            <p class="user-stat-title">
                                {{ community.member_cnt }}
                            </p>
                            <p class="user-stat-text">members</p>
                        </div>
                        <div class="user-stat">
                            <p class="user-stat-title">
                                {{ community.posts_cnt }}
                            </p>

                            <p class="user-stat-text">posts</p>
                        </div>

                        <div class="user-stat">
                            <p class="user-stat-title">
                                {{ community.visit_cnt }}
                            </p>

                            <p class="user-stat-text">visits</p>
                        </div>
                    </div>
                </template>
            </community-card>
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
    private filter: number = 0;
    private isSearched: boolean = false;

    created() {
        if (this.$route.query.q) {
            console.log("yes query");
            const query: any = this.$route.query.q;
            this.communityList = this.$api.search(query, "community");
        } else {
            console.log("no query");
            this.communityList = this.$api.getCommunityList();
        }
    }

    mounted() {
        Form.formInput();
    }

    filterList(filter: number) {
        this.filter = filter;
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
        this.communityList = this.$api.search(this.searchInput, "community");
        if (this.communityList) {
            this.isSearched = true;
        }
    }
    searchReset() {
        console.log("search Reset");
    }
}
</script>

<style scoped>
svg {
    overflow: hidden;
    vertical-align: middle;
}
</style>
