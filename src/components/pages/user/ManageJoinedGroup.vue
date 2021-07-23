<template>
    <div class="content-grid">
        <div class="account-hub-content">
            <div class="section-header">
                <div class="section-header-info">
                    <p class="section-pretitle text-left">Groups</p>

                    <h2 class="section-title">Manage Groups</h2>
                </div>
            </div>
        </div>

        <div class="grid grid-4-4-4">
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
                    <div class="user-stats ">
                      
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
                <template v-slot:communityAction>
                    <div class="user-preview-actions">
                        <template v-if="!community.is_subscribed">
                            <p
                                style="width: 100%"
                                class="button secondary full subscribe-btn"
                            >
                                <svg class="icon-leave-group">
                                    <use xlink:href="#svg-leave-group"></use>
                                </svg>

                                Leave
                            </p>
                        </template>
                        <template v-else>
                            <router-link
                                style="width: 100%"
                                :to="`/community/${community.id}/timeline`"
                            >
                                <p class="button primary full subscribe-btn">
                                    Leave
                                </p>
                            </router-link>
                        </template>
                    </div>
                </template>
            </community-card>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import CommunityCard from "@/components/pages/community/CommunityCard.vue";

@Component({
    components: { CommunityCard },
})
export default class ManageJoinedGroup extends Vue {
    private communityList: any = [];
    private memberList: any = [];

    async created() {
        // console.log(this.$store.getters.user)
    }
    async mounted() {
        this.communityList = await this.$api.joinedCommunityList(
            this.$store.getters.user.uid
        );
        console.log(this.communityList);
    }
}
</script>

<style scoped>
</style>
