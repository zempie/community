<template>
    <div>
        <div class="landing-header">header img section</div>
        <div class="content-grid">
            <div class="landing-container">
              <div class="landing-title">Search for communities</div>
                community description
                <search-bar class="search-bar"></search-bar>
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
import PageLoader from "../components/common/PageLoader.vue";

import CommunityCard from "@/components/pages/community/CommunityCard.vue";
import SearchBar from "@/components/common/SearchBar.vue";

@Component({
    components: { PageLoader, CommunityCard, SearchBar },
})
export default class Home extends Vue {
    private communityList: any = [];

    created() {
        this.communityList = this.$api.getCommunityList();
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
     font-family: Rajdhani,sans-serif;
}
.landing-title{
  font-weight: 700;
  font-size: 30px;
 
}
.search-bar {
    margin: 32px auto 0 auto;
    
    width: 40%;
}
</style>
