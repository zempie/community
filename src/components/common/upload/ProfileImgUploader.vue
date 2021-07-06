<template>
    <div class="grid grid-3-3-3 centered">
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
                                    style="
                                        position: absolute;
                                        top: 0px;
                                        left: 0px;
                                    "
                                ></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="upload-box" @click="uploadFile('profileImg')">
            <div style="height: 0px; overflow: hidden">
                <input type="file" @change="onFileChange" accept= image/*
                ref="profileImg" name="fileInput" />
            </div>
            <svg class="upload-box-icon icon-members">
                <use xlink:href="#svg-members"></use>
            </svg>

            <p class="upload-box-title">Change Avatar</p>

            <p class="upload-box-text">110x110px size minimum</p>
        </div>

        <div class="upload-box" @click="uploadFile('bannerImg')">
            <div style="height: 0px; overflow: hidden">
                <input type="file" @change="onFileChange" accept= image/*
                ref="bannerImg" name="fileInput" />
            </div>
            <svg class="upload-box-icon icon-photos">
                <use xlink:href="#svg-photos"></use>
            </svg>

            <p class="upload-box-title">Change Banner</p>

            <p class="upload-box-text">1184x300px size minimum</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import plugins from "@/plugins/plugins";
import Hexagon from "@/plugins/hexagon";
@Component({
    components: {},
})
export default class ProfileImgUploader extends Vue {
    private hexagon: Hexagon = new Hexagon();
    private filename: string = "";
    private profileImgSrc: string = "";
    mounted() {
        this.hexagon.init();
    }

    uploadFile(fileType: string) {
        (this.$refs.profileImg as HTMLElement).click();
    }

    onFileChange(event: { target: { files: any } }) {
        this.inputFile(event.target.files);
    }
    inputFile(files: string | any[]) {
        if (files.length) {
            let file = files[0];
            this.filename = file.name;

            this.profileImgSrc = URL.createObjectURL(file);
        }
    }

    @Watch("profileImgSrc")
    watchImg(val: any) {
        console.log("watch imgSrc", val);
        this.$nextTick(() => {
            plugins.createHexagon({
                container: ".hexagon-image-68-74",
                width: 68,
                height: 74,
                roundedCorners: true,
                roundedCornerRadius: 3,
                clip: true,
            });
        });
    }
}
</script>

<style lang="scss" scoped>
</style>
