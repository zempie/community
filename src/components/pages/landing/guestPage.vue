<template>
    <div>
        <div class="landing-header">header img section</div>
        <div class="content-grid">
            <div class="landing-container">
                <div class="landing-title">Search for communities</div>
                community description
                <div class="interactive-input dark search-bar">
                    <input
                        type="text"
                        id="search-main"
                        name="search_main"
                        placeholder="Search for community"
                        v-model="searchInput"
                        @keyup.enter="searchCommunity"
                    />

                    <div class="search-icon" @click="searchCommunity">
                        <svg class="icon-magnifying-glass">
                            <use xlink:href="#svg-magnifying-glass"></use>
                        </svg>
                    </div>

                    <div class="interactive-input-action">
                        <svg
                            class="
                                interactive-input-action-icon
                                icon-cross-thinF
                            "
                        >
                            <use xlink:href="#svg-cross-thin"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="grid grid-3-3-3 centered">
                <div v-for="i in 12" :key="i">
                    <community-card
                        v-for="community in communityList"
                        :key="community.id"
                        :community="community"
                    ></community-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CommunityCard from "@/components/pages/community/CommunityCard.vue";

@Component({
    components: { CommunityCard },
})
export default class guestPage extends Vue {
    private communityList: any = [];
    private searchInput: string = "";

    created() {
        this.communityList = this.$api.getCommunityList();
    }
    searchCommunity() {
        this.$router.push(`/community/list?q=${this.searchInput}`);
    }
}
</script>

<style scoped>
.landing-header {
    padding: 112px 0 100px;
    background-color: #fff;
    width: 100%;
    height: 100%;
}
.content-grid {
    padding-top: 30px;
}
.landing-container {
    background-color: aliceblue;
    font-family: Rajdhani, sans-serif;
}
.landing-title {
    font-weight: 700;
    font-size: 30px;
}
.search-bar {
    margin: 32px auto 0 auto;
    width: 40%;
}
.search-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
}
.icon-magnifying-glass {
    fill: #9b7dff;
}
</style>
