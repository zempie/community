<template>
    <div class="upload-box" @click="uploadFile">
        <div style="height: 0px; overflow: hidden">
            <input type="file" @change="onFileChange" accept= image/*
            ref="bannerImg" name="fileInput" />
        </div>
        <svg class="upload-box-icon icon-photos">
            <use xlink:href="#svg-photos"></use>
        </svg>

        <p class="upload-box-title">Change Banner</p>

        <p class="upload-box-text">Recommended 1184x300px / maximum 15mb</p>
    </div>
</template>

<script lang="ts">
import { bus } from "@/main";
import { FileLoader } from "@/script/fileLoader";
import { FileSizeCheck } from "@/script/fileManager";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class BannerImgUploader extends Vue {
    private fileLoader: FileLoader = new FileLoader();

    uploadFile() {
        (this.$refs.bannerImg as HTMLElement).click();
    }

    onFileChange(event: { target: { files: any } }) {
        this.inputFile(event.target.files);
    }

    inputFile(files: File) {
        if (FileSizeCheck(files[0], 15)) {
            this.fileLoader.imgLoad(files[0], (e) => {
                this.$emit("bannerImgSrc", e.target!.result);
                bus.$emit("bannerImgSrc", e.target!.result);
            });
        } else {
            alert("5mb 이하의 사진으로 업로드해주세요");
        }
        // let file = files[0];
        // this.filename = file.name;
    }
}
</script>

<style scoped>
</style>
