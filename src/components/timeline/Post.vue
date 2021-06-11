<template>
    <!-- todo: 첨부파일 연결해야됨 -->
    <!-- <div id="player"></div> -->
    <div class="quick-post">
        <div class="quick-post-header">
            <div class="option-items">
                <div class="option-item active">
                    <svg class="option-item-icon icon-status">
                        <use xlink:href="#svg-status"></use>
                    </svg>

                    <p class="option-item-title">Post</p>
                </div>

                <div class="option-item">
                    <svg class="option-item-icon icon-blog-posts">
                        <use xlink:href="#svg-blog-posts"></use>
                    </svg>

                    <p class="option-item-title">Schedule Post</p>
                </div>
            </div>
        </div>

        <div class="quick-post-body">
            <form class="form">
                <div class="form-row">
                    <div class="form-item">
                        <div class="form-textarea">
                            <textarea
                                v-model="postingText"
                                id="quick-post-text"
                                name="quick-post-text"
                                placeholder="Hi Marina! Share your post here..."
                            ></textarea>
                            <div
                                v-if="imageSrc.length > 0"
                                class="upload-image"
                            >
                                <hr style="border-bottom: 1px solid" />
                                <img
                                    class="preview-img"
                                    v-for="img in imageSrc"
                                    :key="img.id"
                                    :src="img"
                                />
                            </div>
                            <p class="form-textarea-limit-text">
                                {{ this.postingText.length }}/5000
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div class="quick-post-footer">
            <div class="quick-post-footer-actions">
                <div
                    class="quick-post-footer-action text-tooltip-tft-medium"
                    data-title="Insert Photo"
                    @click="onClickUpload"
                >
                    <svg class="quick-post-footer-action-icon icon-camera">
                        <use xlink:href="#svg-camera"></use>
                    </svg>
                </div>

                <!-- file uploader -->
                <input
                    type="file"
                    class="file-input"
                    accept="image/*"
                    ref="fileInput"
                    style="display: none"
                    @change="onFileChange"
                />

                <div
                    class="quick-post-footer-action text-tooltip-tft-medium"
                    data-title="Insert Video"
                >
                    video
                </div>

                <div
                    class="quick-post-footer-action text-tooltip-tft-medium"
                    data-title="Insert Tag"
                >
                    link
                </div>
                
                <div
                    class="quick-post-footer-action text-tooltip-tft-medium"
                    data-title="Insert Tag"
                >
                    sound
                </div>
                <!-- 투표 -->
                <div class="option-item">
                    <svg class="option-item-icon icon-poll">
                        <use xlink:href="#svg-poll"></use>
                    </svg>
                </div>
            </div>

            <div class="quick-post-footer-actions">
                <p class="button small void">임시 저장</p>

                <p class="button small secondary" @click="uploadPost">Post</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import FileUpload from "@/components/common/FileUpload.vue";
import Tiptap from "@/components/timeline/Tiptap.vue";

@Component({
    components: { FileUpload, Tiptap },
})
export default class Post extends Vue {
    private postingText: string = "";
    private videoTag?: HTMLScriptElement;
    private player: any;
    private done = false;

    private filename: string = "";
    private imageSrc: string[] = [];

    @Watch("postText")
    watchChar() {
        if (this.postingText.length > 5000) {
            alert("5000자 이상은 작성할 수 없습니다.");
            this.postingText = this.postingText.substring(0, 5000);
        }
    }

    created() {}

    mounted() {
        this.onYouTubeIframeAPIReady();
    }

    onYouTubeIframeAPIReady() {
        //@ts-ignore
        this.player = new YT.Player("player", {
            height: "360",
            width: "640",
            videoId: "M7lc1UVf-VE",
            events: {
                onReady: this.onPlayerReady,
                onStateChange: this.onPlayerStateChange,
            },
        });
    }

    // 4. The API will call this function when the video player is ready.
    onPlayerReady(event: { target: { playVideo: () => void } }) {
        event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.

    onPlayerStateChange(event: { data: any }) {
        //@ts-ignore
        if (event.data == YT.PlayerState.PLAYING && !this.done) {
            setTimeout(this.stopVideo, 6000);
            this.done = true;
        }
    }
    stopVideo() {
        this.player.stopVideo();
    }

    // 이미지 업로드
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
        //@ts-ignore
        this.$refs.fileInput.click();
        this.preview(this.filename);
    }

    preview(file: string | Blob) {
        if (typeof file === "string") {
        } else {
            let vm = this;
            let reader = new FileReader();
            reader.onload = () => {
                //@ts-ignore
                vm.imageSrc.push(reader.result);
                console.log("imageSrc", vm.imageSrc);
            };
            reader.readAsDataURL(file);
        }
    }

    //포스팅

    uploadPost() {
        console.log(this.imageSrc, this.postingText);
    }
}
</script>

<style scoped>
.upload-image {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    white-space: nowrap;
    overflow-x: auto;
}
.preview-img {
    max-width: 100%;
    height: 100%;
}
</style>
