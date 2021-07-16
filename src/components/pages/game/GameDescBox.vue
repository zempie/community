<template>
    <div class="widget-box">
        <p class="widget-box-title">About Game</p>

        <div class="widget-box-content">
            <p class="paragraph">
                {{ game.description }}
            </p>

            <!-- <div class="information-line-list">
                <div class="information-line">
                    <p class="information-line-title">Owner</p>
                    <a class="user-status-avatar" href="profile-timeline.html">
                        <div class="user-avatar small no-outline">
                            <div class="user-avatar-content">
                                <div
                                    class="hexagon-image-24-26"
                                    data-src="https://placekitten.com/300/300"
                                ></div>
                            </div>

                        
                        </div>
                    </a>
                  
                    <router-link
                        :to="`/channel/${ownerInfo.uid}/timeline`"
                        class="information-line-text"
                    >
                        {{ ownerInfo.name }}(@닉네임)
                    </router-link>
                </div>
                <div class="information-line">
                    <p class="information-line-title">Manager</p>

                    <router-link
                        :to="`/channel/${managerInfo.uid}/timeline`"
                        class="information-line-text"
                    >
                        {{ managerInfo.name }}(@닉네임)
                    </router-link>
                </div>

               
            </div> -->
            <div class="information-line-list">
                <div class="information-line">
                    <p class="information-line-title">Version</p>

                    <p class="information-line-text">
                        {{ game.version }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import moment from "moment";

import Hexagon from "@/plugins/hexagon";
@Component({
    components: {},
})
export default class CommunityDescBox extends Vue {
    @Prop() game!: any;

    private hexagon: Hexagon = new Hexagon();

    async created() {
        console.log(this.game);
    }
    mounted() {
        this.hexagon.init();
    }
}
</script>

<style scoped>
</style>
