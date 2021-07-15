<template>
    <div class="grid grid-3-6-3 mobile-prefer-content">
        <div class="grid-column">
            <portfolio :userUid="userUid"></portfolio>
        </div>
        <div class="grid-column">
            <post></post>
            <!-- 타임라인 -->

            <feed v-for="feed in timeline" :key="feed.id" :feed="feed"></feed>
        </div>
        <div class="grid-column">
            <who-to-follow v-if="user"></who-to-follow>
            <joined-community :userUid="userUid"></joined-community>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import Dropdown from "@/plugins/dropdown";
import Hexagon from "@/plugins/hexagon";

import Post from "@/components/timeline/Post.vue";
import Feed from "@/components/timeline/Feed.vue";
import WhoToFollow from "@/components/pages/user/WhoToFollow.vue";
import JoinedCommunity from "@/components/pages/user/JoinedCommunity.vue";
import Portfolio from "@/components/pages/user/PortfolioList.vue";
import { User } from "@/types";

@Component({
    computed: { ...mapGetters(["user"]) },
    components: { Post, Feed, WhoToFollow, Portfolio, JoinedCommunity },
})
export default class UserTimeline extends Vue {
    private dropdown: Dropdown = new Dropdown();
    private hexagon: Hexagon = new Hexagon();
    private userUid = this.$route.params.channel_id;
    private community: any = "";

    private timeline: any = "";
    private user!: User;

    async created() {
        this.community = await this.$api.joinedCommunityList(this.userUid);
        this.timeline = await this.$api.getUserTimeline(this.userUid);
    }
    mounted() {
        this.dropdown.init();
        this.hexagon.init();
    }
}
</script>

<style scoped>
</style>
