<template>
    <div>
        <div class="input-group">
            <input
                type="text"
                class="form-control"
                placeholder="Input Image URL or  Drag & Drop or Select"
                v-model="filename"
                @dragover.prevent
                @dragenter.prevent
                @drop.prevent="onDrop"
            />
            <div class="input-group-append">
                <span class="input-group-text" @click="onClickFile"
                    >123<i class="fa fa-paperclip"> </i
                ></span>
                <button class="btn btn-outline-info" @click="onClickUpload">
                    Upload
                </button>
            </div>
            <input
                type="file"
                class="file-input"
                accept="image/*"
                ref="fileInput"
                @change="onFileChange"
            />
        </div>
        <div v-show="imageSrc" class="upload-image">
            <img :src="imageSrc" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class FileUpload extends Vue {
    private filename: string = "";
    private imageSrc: string = "";

    onDrop(event: { dataTransfer: { files: any } }) {
        this.inputImageFile(event.dataTransfer.files);
    }

    onClickFile(event: any) {
        //@ts-ignore
        this.$refs.fileInput.click();
    }

    onFileChange(event: { target: { files: any } }) {
        this.inputImageFile(event.target.files);
    }

    inputImageFile(files: string | any[]) {
        if (files.length) {
            let file = files[0];
            if (!/^image\//.test(file.type)) {
                alert("이미지 파일만 등록이 가능합니다");
                return false;
            }
            this.filename = file.name;
            this.preview(file);
        }
    }

    onClickUpload() {
        this.preview(this.filename);
    }

    preview(file: string | Blob) {
        if (typeof file === "string") {
            this.imageSrc = file;
        } else {
            let vm = this;
            let reader = new FileReader();
            reader.onload = () => {
                //@ts-ignore
                vm.imageSrc = reader.result;
            };
            reader.readAsDataURL(file);
        }
    }
}
</script>

<style scoped>
.file-input {
    display: none;
}
.upload-image {
    padding-top: 1rem;
    width: 200px;
    height: 200px;
}

</style>
