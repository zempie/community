<template>
    <div class="user-preview small fixed-height">
        <figure
            class="user-preview-cover liquid"
            :style="`background: url('${bannerImgSrc}') center
                                center / cover no-repeat;`"
        >
            <img :src="bannerImgSrc" alt="cover-01" style="display: none" />
        </figure>

        <div class="user-preview-info">
            <div class="user-short-description small">
                <div class="user-short-description-avatar user-avatar">
                    <div class="user-avatar-content">
                        <div
                            :key="profileImgSrc"
                            class="hexagon-image-68-74"
                            :data-src="profileImgSrc"
                            style="
                                width: 68px;
                                height: 74px;
                                position: relative;
                            "
                        >
                            <canvas
                                width="68"
                                height="74"
                                style="position: absolute; top: 0px; left: 0px"
                            ></canvas>
                        </div>
                    </div>

                    <div class="user-avatar-progress">
                        <div
                            class="hexagon-progress-84-92"
                            style="
                                width: 84px;
                                height: 92px;
                                position: relative;
                            "
                        >
                            <canvas
                                width="84"
                                height="92"
                                style="position: absolute; top: 0px; left: 0px"
                            ></canvas>
                        </div>
                    </div>

                    <div class="user-avatar-progress-border">
                        <div
                            class="hexagon-border-84-92"
                            style="
                                width: 84px;
                                height: 92px;
                                position: relative;
                            "
                        >
                            <canvas
                                width="84"
                                height="92"
                                style="position: absolute; top: 0px; left: 0px"
                            ></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { bus } from "@/main";
import plugins from "@/plugins/plugins";
import { ProgressPlugin } from "bootstrap-vue";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Hexagon from "@/plugins/hexagon";

@Component({
    components: {},
})
export default class ImgPreview extends Vue {
    private hexagon: Hexagon = new Hexagon();
    @Prop() profileImg!: string;
    @Prop() bannerImg!: string;
    private profileImgSrc: string = this.profileImg;
    private bannerImgSrc: string = this.bannerImg;

    mounted() {
        bus.$on("profileImgSrc", (src: string) => {
            this.profileImgSrc = src;
        });
        bus.$on("bannerImgSrc", (src: string) => {
            this.bannerImgSrc = src;
        });
    }
    beforeDestroy() {
        bus.$off("profileImgSrc");
        bus.$off("bannerImgSrc");
    }
    @Watch("profileImgSrc", { immediate: true })
    watchImg(val: any) {
        console.log("watch imgSrc", val);
        this.$nextTick(() => {
            this.hexagon.init();
        });
    }
}
</script>

<style scoped>
</style>
