<template>
    <div class="grid grid-3-6-3 mobile-prefer-content">
        
        <div class="grid-column"></div>
        <div class="grid-column">
            <post></post>
            <!-- 타임라인 -->

            <feed v-for="feed in timeline" :key="feed.id" :feed="feed"></feed>
        </div>
        <div class="grid-column"></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Dropdown from "@/plugins/dropdown";

import Post from "@/components/timeline/Post.vue";
import Channel from "@/components/pages/community/Channel.vue";
import Feed from "@/components/timeline/Feed.vue";

@Component({
    components: { Post, Channel, Feed },
})
export default class UserTimeline extends Vue {
    private dropdown: Dropdown = new Dropdown();
    private communityId = parseInt(this.$route.params.community_id);
    private community: any;

    private timeline: any;

    created() {
        this.community = this.$api.getCommunityInfo(this.communityId);
        this.timeline = this.$api.getTimeline(this.communityId);
    }
    mounted() {
        this.dropdown.init();
    }
}
</script>

<style scoped>
</style>
