<template>
    <div class="grid-column">
        <section class="section">
            <div class="section-header">
                <div class="section-header-info">
                    <h2 class="section-title">
                        Members
                        <span class="highlighted secondary">{{
                            memberList.length
                        }}</span>
                    </h2>
                </div>
            </div>

            <div class="grid grid-4-4-4 centered">
                <member-card
                    v-for="member in memberList"
                    :key="member.id"
                    :member="member"
                >
                    <template v-slot:action-button1>
                        <p class="button secondary primary">블락</p>
                    </template>
                    <template v-slot:action-button2>
                        <p class="button secondary tertiary">강퇴</p>
                    </template>
                </member-card>
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
export default class CommunitySettingMember extends Vue {
    private communityId = parseInt(this.$route.params.community_id);
    private memberList: any = [];

    created() {
        this.memberList = this.$api.getCommunityMember(this.communityId);
    }
}
</script>

<style scoped>
</style>
