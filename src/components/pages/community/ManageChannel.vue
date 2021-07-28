<template>
    <div class="grid-column">
        <div class="section">
            <div class="section-header">
                <div class="section-header-info">
                    <p class="section-pretitle text-left">Channels</p>

                    <h2 class="section-title">Manage Channel</h2>
                </div>
            </div>

            <div class="grid grid-3-3-3">
                <div class="create-entity-box">
                    <div class="create-entity-box-cover"></div>

                    <div class="create-entity-box-avatar">
                        <svg class="create-entity-box-avatar-icon icon-group">
                            <use xlink:href="#svg-group"></use>
                        </svg>
                    </div>

                    <div class="create-entity-box-info">
                        <p class="create-entity-box-title">
                            Create New Channel
                        </p>

                        <p class="create-entity-box-text">Create channel</p>

                        <router-link
                            :to="`/community/${$route.params.community_id}/channelCreate`"
                            class="
                                button
                                secondary
                                full
                                popup-manage-group-trigger
                            "
                        >
                            Start Creating!
                        </router-link>
                    </div>
                </div>

                <div
                    class="user-preview small fixed-height-medium"
                    v-for="channel in channelList"
                    :key="channel.id"
                >
                    <figure
                        class="user-preview-cover liquid"
                        style="
                            background: url('img/cover/29.jpg') center center /
                                cover no-repeat;
                        "
                    >
                        <img :src="channel.profile_img" alt="cover-29" />
                    </figure>

                    <div class="user-preview-info">
                        <div class="user-short-description small">
                            <a
                                class="
                                    user-short-description-avatar user-avatar
                                    no-stats
                                "
                                href="group-timeline.html"
                            >
                                <div class="user-avatar-border">
                                    <div
                                        class="hexagon-100-108"
                                        style="
                                            width: 100px;
                                            height: 108px;
                                            position: relative;
                                        "
                                    >
                                        <canvas
                                            width="100"
                                            height="108"
                                            style="
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                            "
                                        ></canvas>
                                    </div>
                                </div>

                                <div class="user-avatar-content">
                                    <div
                                        class="hexagon-image-84-92"
                                        data-src="img/avatar/24.jpg"
                                        style="
                                            width: 84px;
                                            height: 92px;
                                            position: relative;
                                        "
                                    >
                                        <canvas
                                            width="84"
                                            height="92"
                                            style="
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                            "
                                        ></canvas>
                                    </div>
                                </div>
                            </a>

                            <p class="user-short-description-title small">
                                <a href="group-timeline.html">{{
                                    channel.name
                                }}</a>
                            </p>

                            <p class="user-short-description-text regular"></p>
                        </div>

                        <p class="button white full popup-manage-group-trigger">
                            Manage Channel
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Channel } from "@/types/group/group";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class ManageChannel extends Vue {
    private communityId: number = parseInt(this.$route.params.community_id);
    private channelList: Channel[] = [];

    async mounted() {
        this.channelList = await this.$api.getCommunityChannel(
            this.communityId
        );
        console.log(this.channelList);
    }
}
</script>

<style scoped>
</style>
