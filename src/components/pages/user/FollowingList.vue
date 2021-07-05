<template>
    <div class="grid-column">
        <section class="section">
            <div class="section-header">
                <div class="section-header-info">
                    <h2 class="section-title">
                        Followings
                        <span class="highlighted secondary">{{
                            followingList.length
                        }}</span>
                    </h2>
                </div>
            </div>

            <div class="grid grid-4-4-4 centered">
                <member-card
                    v-for="member in followingList"
                    :key="member.id"
                    :member="member"
                ></member-card>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import MemberCard from "@/components/pages/community/MemberCard.vue";
@Component({
    components: { MemberCard },
})
export default class FollowingList extends Vue {
    private followingList: any = [];
    private userId = this.$route.params.channel_id;

    async created() {
        this.followingList = await this.$api.followingList(this.userId);
     
    }
}
</script>

<style scoped>
</style>
