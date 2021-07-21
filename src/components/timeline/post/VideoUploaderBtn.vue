<template>
  <div
    class="quick-post-footer-action text-tooltip-tft-medium"
    data-title="Insert Video"
    style="width: 30px"
    @click="uploadFile"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 20.007V3.993zM5 5v14h14V5H5zm5.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z"
        fill="rgba(97,106,130,1)"
      />
    </svg>
    <div style="height: 0px; overflow: hidden">
      <input type="file" @change="onFileChange" accept= video/* ref="video" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { FileLoader } from "@/script/fileLoader";
import { mbToByte } from "@/script/fileManager";
import { bus } from "@/main";
@Component({
  components: {},
})
export default class ImageUploaderBtn extends Vue {
  @Prop() fileLoader!: FileLoader;
  private remainFileSize: number = mbToByte(40); //20mb (binary);
  private file: any = "";

  uploadFile() {
    (this.$refs.video as HTMLElement).click();
  }

  // 파일 업로드
  onFileChange(event: { target: { accept: any; files: any } }) {
    if (this.fileLoader.checkVideoFile(event.target.files)) {
      this.$emit("fileCheckDone");
    //   bus.$emit("fileLoader", this.fileLoader);
    }
  }
}
</script>

<style scoped>
</style>
