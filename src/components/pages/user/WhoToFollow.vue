<template>
    <div class="widget-box">
        <p class="widget-box-title">Who to Follow</p>

        <div class="widget-box-content">
            <div class="user-status-list">
                <div class="user-status request-small">
                    <router-link class="user-status-avatar" to="/channel/2x1H8Fn5EVdYQ9EchRPCOXhdyKn1/timeline">
                        <div class="user-avatar small no-outline">
                            <div class="user-avatar-content">
                                <div
                                    class="hexagon-image-30-32"
                                    data-src="img/avatar/05.jpg"
                                    style="
                                        width: 30px;
                                        height: 32px;
                                        position: relative;
                                    "
                                >
                                    <canvas
                                        width="30"
                                        height="32"
                                        style="
                                            position: absolute;
                                            top: 0px;
                                            left: 0px;
                                        "
                                    ></canvas>
                                </div>
                            </div>

                            <div class="user-avatar-progress">
                                <div
                                    class="hexagon-progress-40-44"
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

                            <div class="user-avatar-progress-border">
                                <div
                                    class="hexagon-border-40-44"
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

                    <p class="user-status-title">
                        <a class="bold" href="profile-timeline.html"
                            >User name</a
                        >
                    </p>

                    <p class="user-status-text small">@userNickname</p>

                    <div class="action-request-list">
                        <div class="action-request accept">
                            <svg class="action-request-icon icon-add-friend">
                                <use xlink:href="#svg-add-friend"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Hexagon from "@/plugins/hexagon";
@Component({
    components: {},
})
export default class WhoToFollow extends Vue {
    private hexagon: Hexagon = new Hexagon();

    mounted() {
        this.hexagon.init();
    }
}
</script>

<style scoped>
</style>
