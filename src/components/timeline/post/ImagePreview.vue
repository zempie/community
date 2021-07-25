<template>
  <div class="img-preview-container">
    <div class="img-preview" v-for="(img, idx) in imgPreviewArr" :key="idx">
      <svg class="icon-cross" @click="deletePreviewImg(idx)">
        <use xlink:href="#svg-cross-thin"></use>
      </svg>

      <b-img :src="img.url"></b-img>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import { bus } from "@/main";
@Component({
  components: {},
})
export default class ImagePreview extends Vue {
  @Prop() editFileLoader!: any;
  @Prop() feed!: any;
  private imgPreviewArr: any[] = [];
  private fileLoader: any;

  beforeDestroy() {
    bus.$off("fileLoder");
  }
  mounted() {
    //post 수정
    if (this.editFileLoader) {
      this.fileLoader = this.editFileLoader;
    }
    if (this.feed) {
      if (this.feed.attatchment_files.img) {
        this.imgPreviewArr = this.feed.attatchment_files.img;
      }
    }

    //post 작성
    bus.$on("fileLoader", (fileLoader: any) => {
      this.fileLoader = fileLoader;
      this.imgPreviewArr = fileLoader.fileObj.img;
      console.log("bus", fileLoader);
    });
  }

  //미리보기 사진 삭제
  deletePreviewImg(idx: number) {
    console.log("fileLoader", this.fileLoader);
    this.fileLoader.deletePreviewImg(idx);
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
