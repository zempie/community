<template>
    <div class="content-grid">
        <div class="section-banner">
            <h3>Search result for</h3>
            <p class="section-banner-title">{{ $route.query.hashtag }}</p>
        </div>

        <div class="grid grid-9-3 mobile-prefer-content">
            <div class="forum-content grid-column">
                <h3 style="margin-bottom: 16px" class="text-left">Users</h3>
                <div class="grid grid-3-3-3-3">
                    <member-card
                        v-for="member in memberList"
                        :key="member.id"
                        :member="member"
                    ></member-card>
                </div>
                <h3 style="margin-bottom: 16px" class="text-left">Posts</h3>
                <feed v-for="feed in posts" :key="feed.id" :feed="feed"></feed>
            </div>
            <div class="forum-content grid-column">
                <h3 style="margin-bottom: 16px" class="text-left">Games</h3>
                <card></card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Feed from "@/components/timeline/Feed.vue";
import Card from "@/components/pages/search/GameCard.vue";
import MemberCard from "@/components/pages/community/MemberCard.vue";
@Component({
    components: { Feed, Card, MemberCard },
})
export default class SearchPage extends Vue {
    private type: string = Object.keys(this.$route.query)[0];
    private query: any = this.$route.query[Object.keys(this.$route.query)[0]];
    private posts: any = [];
    private games: any = [];
    private memberList: any = [];
    async created() {
        this.memberList = this.$api.getCommunityMember(12);
        const result = await this.$api.search(this.query, this.type);
        this.posts = result.posts;
        this.games = result.games;
    }
}
</script>

<style scoped>
.section-banner {
    padding: 0;
    display: flex;
    align-content: space-around;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
