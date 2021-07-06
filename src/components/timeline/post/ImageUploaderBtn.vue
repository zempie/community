<template>
    <div
        class="quick-post-footer-action text-tooltip-tft-medium"
        data-title="Insert Image"
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
                d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                fill="rgba(97,106,130,1)"
            />
        </svg>
       
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mbToByte, FileLoader } from "@/script/fileLoader";
@Component({
    components: {},
})
export default class ImageUploaderBtn extends Vue {
    private fileLoader: FileLoader = new FileLoader();
    private remainFileSize: number = mbToByte(20); //20mb (binary);
    private fileList: any[] = [];

    uploadFile() {
        (this.$refs[fileType] as HTMLElement).click();
    }

    // 파일 업로드
    onFileChange(event: { target: { accept: any; files: any } }) {
        this.inputFile(event.target.files);
    }
    inputFile(files: any) {
        let fileArr: any[] | any = [];
        this.checkImgFile(files)
    } 
    //파일 용량 & 개수 체크
    checkImgFile(files: any) {
        if (files.length > 5 || this.$store.getters.previewImgArr.length >= 5) {
            alert("이미지 개수는 최대 5개입니다");
        } else {
            if (files.length <= 5) {
                for (let i = 0; i < files.length; i++) {
                    this.remainFileSize -= files[i].size;
                    this.fileList.push(files[i]);
                    if (this.remainFileSize < 0) {
                        alert("최대 파일 용량을 넘었습니다.(최대 20mb)");
                        this.remainFileSize += files[i].size;
                        break;
                    }

                    this.fileLoader.imgLoad(files[i]);
                }
            }
        }

        return this.fileList;
    }
}
</script>

<style scoped>
</style>
