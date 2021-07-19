<template>
    <div>
        <div class="landing-header">
            <p class="header-title">GAMES TO CREATORS</p>
            <p class="header-desc mt-4">
                Game-sharing platform Zempie allows anyone to upload
            </p>
            <p class="header-desc mt-2">
                and share games Upload the game I made and share fun with people
                all around the world
            </p>

            <!-- <b-img src="image/default/guest_header_500.png" /> -->
        </div>
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
                       <svg class="interactive-input-icon icon-magnifying-glass">
                            <use xlink:href="#svg-magnifying-glass"></use>
                        </svg>
                    </div>

                    <div class="interactive-input-action">
                        <svg
                            class="
                                interactive-input-action-icon
                                icon-cross-thin
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
import Dropdown from "@/plugins/dropdown";

@Component({
    components: { CommunityCard },
})
export default class guestPage extends Vue {
    private communityList: any = [];
    private searchInput: string = "";
    private dropdown: Dropdown = new Dropdown();
    
    created() {
        this.communityList = this.$api.getCommunityList();
    }
    mounted() {
        this.dropdown.init();
    }
    searchCommunity() {
        this.$router.push(`/community/list?q=${this.searchInput}`);
    }
}
</script>

<style lang="scss" scoped>
.landing-header {
    padding-top: 80px;
    width: 100vw;
    height: 500px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url("../../../img/default/guest_header_500.png");
    display: flex;
    flex-direction: column;
    justify-content: center;

    .header-title {
        font-size: 50px;
        font-weight: bold;
    }
    .header-desc {
        font-size: 20px;
    }
}
.content-grid {
    padding-top: 30px;
}
.landing-container {
    color: #fff;
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
