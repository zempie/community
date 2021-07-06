<template>
    <div class="img-preview-container">
        <div class="img-preview" v-for="(img, idx) in imgPreviewArr" :key="idx">
            <svg class="icon-cross" @click="deletePreviewImg(idx)">
                <use xlink:href="#svg-cross-thin"></use>
            </svg>

            <b-img :src="img"></b-img>
        </div>
         <div style="height: 0px; overflow: hidden">
            <input type="file" @change="onFileChange" multiple accept= image/*
            ref="image" name="fileInput" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
    components: {},
})
export default class ImagePreview extends Vue {
    private imgPreviewArr: any[] = [];

    @Watch("$store.getters.previewImgArr")
    watchPreviewImg() {
        this.imgPreviewArr = this.$store.getters.previewImgArr;
        console.log(this.imgPreviewArr);
    }

    //미리보기 사진 삭제
    deletePreviewImg(idx: number) {
        console.log(idx)
        // this.remainFileSize += this.fileList[idx].size;
        // this.imgPreviewArr.splice(idx, 1);
        // this.fileList.splice(idx, 1);
    }
}
</script>

<style lang="scss" scoped>
// image preview of post
.img-preview-container {
    // background-color: #68cef8;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    // border-top: 2px solid #616161;

    .img-preview {
        margin: 5px;
        height: auto;
        width: calc(100% * (1 / 5) - 10px - 1px);
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        .icon-cross {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
        }
        img {
            display: block;
            border-radius: 10px;
            width: 100%;
            height: auto;
        }
    }
}
</style>
