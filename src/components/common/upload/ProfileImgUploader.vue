<template>
    <div class="upload-box" @click="uploadFile">
        <div style="height: 0px; overflow: hidden">
            <input type="file" @change="onFileChange" accept= image/*
            ref="profileImg" name="fileInput" />
        </div>
        <svg class="upload-box-icon icon-members">
            <use xlink:href="#svg-members"></use>
        </svg>

        <p class="upload-box-title">Change Profile</p>

        <p class="upload-box-text">recommended 300x300px / maximum 5mb</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { FileSizeCheck } from "@/script/fileManager";
import { FileLoader } from "@/script/fileLoader";
import { bus } from "@/main";
@Component({
    components: {},
})
export default class ProfileImgUploader extends Vue {
    private fileLoader: FileLoader = new FileLoader();
    private filename: string = "";

    uploadFile() {
        (this.$refs.profileImg as HTMLElement).click();
    }

    onFileChange(event: { target: { files: any } }) {
        this.inputFile(event.target.files);
    }

    inputFile(files: File) {
        if (FileSizeCheck(files[0], 5)) {
            this.fileLoader.getFileUrl(files[0], (e) => {
                bus.$emit("profileImgSrc", e.target!.result);
                this.$emit("profileImgSrc", e.target!.result);
            });
        } else {
            alert("5mb 이하의 사진으로 업로드해주세요");
        }
        // let file = files[0];
        // this.filename = file.name;
    }
}
</script>

<style lang="scss" scoped>
</style>
