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

            <div class="grid grid-4-4-4">
                <member-card
                    v-for="member in memberList"
                    :key="member.id"
                    :member="member"
                >
                    <template v-slot:action-button1 v-if="user">
                        <p class="button secondary" @click="followUser">
                            Follow
                        </p>
                    </template>
                    <template v-slot:action-button2 v-if="user">
                        <p class="button primary">Send Message</p>
                    </template>
                </member-card>
            </div>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

import MemberCard from "@/components/pages/community/MemberCard.vue";
import { User } from "@/types/index";

@Component({
    computed: { ...mapGetters(["user"]) },
    components: { MemberCard },
})
export default class MemberList extends Vue {
    private communityId = parseInt(this.$route.params.community_id);
    private memberList: User[] = [];
    private user!: User;
    created() {
        this.memberList = this.$api.getCommunityMember(this.communityId);
    }
    mounted() {
        console.log("mounted");
    }

    async followUser() {
        if (!this.user) {
        } else {
            const result = this.$api.follow(this.user.uid);
            console.log("follow");
        }
    }

  
}
</script>

<style lang="scss" scoped>
svg {
    vertical-align: middle;
}
.button-container {
    display: flex;
}
</style>
