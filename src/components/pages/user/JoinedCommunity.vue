<template>
    <div class="widget-box">
        <p class="widget-box-title">Groups</p>

        <div class="widget-box-content">
            <div class="user-status-list">
                <div
                    v-for="community in communityList"
                    :key="community.id"
                    class="user-status"
                >
                    <router-link
                        class="user-status-avatar"
                        :to="`/community/${community.id}/timeline`"
                    >
                        <div class="user-avatar small no-border">
                            <div class="user-avatar-content">
                                <div
                                    class="hexagon-image-40-44"
                                   :data-src="community.profile_img"
                                    style="
                                        width: 40px;
                                        height: 44px;
                                        position: relative;
                                    "
                                >
                                    <canvas
                                        width="40"
                                        height="44"
                                        style="
                                            position: absolute;
                                            top: 0px;
                                            left: 0px;
                                        "
                                    ></canvas>
                                </div>
                            </div>
                        </div>
                    </router-link>

                    <p class="user-status-title text-left">
                        <router-link
                            class="bold"
                            :to="`/community/${community.id}/timeline`"
                            >{{ community.name }}</router-link
                        >
                    </p>

                    <p class="user-status-text small text-left">
                        {{ community.member_cnt }} members
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Group } from "@/types";
import { Component, Prop, Vue } from "vue-property-decorator";

import Hexagon from "@/plugins/hexagon";
@Component({
    components: {},
})
export default class JoinedCommunity extends Vue {
    @Prop() userUid!: string;
    private hexagon: Hexagon = new Hexagon();
    private communityList: {
        id: number;
        name: string;
        profile_img: string;
        state: string;
        member_cnt: number;
    }[] = [];

    async mounted() {
        this.hexagon.init();
        this.communityList = await this.$api.joinedCommunityList(this.userUid);

        console.log(this.communityList);
    }
}
</script>

<style scoped>
</style>
