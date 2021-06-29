<template>
  <div class="quick-post">
    <div class="quick-post-header">
      <div class="option-items">
        <div
          class="option-item"
          @click="isActive('post')"
          :class="activeTab === 'post' ? 'active' : ''"
        >
          <svg class="option-item-icon icon-status">
            <use xlink:href="#svg-status"></use>
          </svg>

          <p class="option-item-title">Post</p>
        </div>
        <div
          class="option-item"
          @click="isActive('blog')"
          :class="activeTab === 'blog' ? 'active' : ''"
        >
          <svg class="option-item-icon icon-status">
            <use xlink:href="#svg-status"></use>
          </svg>

          <p class="option-item-title">Blog Post</p>
        </div>

        <div
          class="option-item"
          @click="isActive('schedule')"
          :class="activeTab === 'schedule' ? 'active' : ''"
        >
          <svg class="option-item-icon icon-blog-posts">
            <use xlink:href="#svg-blog-posts"></use>
          </svg>

          <p class="option-item-title">Schedule Post</p>
        </div>
      </div>
    </div>

    <!-- <div class="quick-post-header">
            <b-dropdown id="dropdown-1" text="My games" class="m-md-2">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
            </b-dropdown>
             <b-dropdown id="dropdown-1" text="Communities" class="m-md-2">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
            </b-dropdown>
             <b-dropdown id="dropdown-1" text="Portfolios" class="m-md-2">
                <b-dropdown-item>First Action</b-dropdown-item>
                <b-dropdown-item>Second Action</b-dropdown-item>
            </b-dropdown>
        </div> -->
    <b-datepicker></b-datepicker>
    <b-timepicker></b-timepicker>

    <div class="quick-post-body" v-if="activeTab === 'blog'">
      <div class="form">
        <div class="form-row">
          <div class="form-item">
            <div class="form-textarea">
              <!-- tiptap -->
              <div v-if="activeTab === 'blog'">
                <editor-content
                  :editor="editor"
                  class="editor-container"
                  v-model="content"
                  ref="editorContainer"
                />
              </div>
              <!-- custom -->
              <!-- <div
                            class="input"
                                contenteditable="true"
                                ref="postContent"
                            ></div>
                            <input
                                type="text"
                                style="
                                    display: none;
                                    border: none;
                                    background: transparent;
                                    outline: 0;
                                "
                            />
                            <p v-html="textPreview"></p> -->

              <!-- <textarea
                                v-model="postingText"
                                id="quick-post-text"
                                name="quick-post-text"
                                placeholder="Hi Marina! Share your post here..."
                            ></textarea> -->
              <div style="height: 0px; overflow: hidden">
                <input type="file" @change="onFileChange" multiple accept=
                image/* ref="image" name="fileInput" />
              </div>

              <div style="height: 0px; overflow: hidden">
                <input type="file" @change="onFileChange" multiple accept=
                video/* ref="video" />
              </div>
              <div style="height: 0px; overflow: hidden">
                <input type="file" @change="onFileChange" multiple accept=
                audio/* ref="audio" />
              </div>
              <!-- <video
                                width="320"
                                height="240"
                                controls
                                v-if="videoSrc"
                            >
                                <source
                                    :src="videoSrc"
                                    :type="`video/${fileExt}`"
                                    :key="videoSrc"
                                />
                            </video> -->
              <!-- <audio controls v-if="audioSrc">
                                <source
                                    :src="audioSrc"
                                    :type="`audio/${fileExt}`"
                                    :key="audioSrc"
                                />
                            </audio> -->
              <p class="form-textarea-limit-text">
                {{ this.postingText.length }}/5000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="quick-post-body" v-else-if="activeTab === 'post'">
      <div class="form">
        <div class="form-row">
          <div class="form-item">
            <div class="form-textarea">
              <!-- custom -->
              <!-- <div
                            class="input"
                                contenteditable="true"
                                ref="postContent"
                            ></div>
                            <input
                                type="text"
                                style="
                                    display: none;
                                    border: none;
                                    background: transparent;
                                    outline: 0;
                                "
                            />
                            <p v-html="textPreview"></p> -->

              <textarea
                v-model="postingText"
                id="quick-post-text"
                name="quick-post-text"
                placeholder="Hi Marina! Share your post here..."
              ></textarea>
              <p class="form-textarea-limit-text">
                {{ this.postingText.length }}/5000
              </p>
              <div class="img-preview-container">
                <div class="img-preview" v-for="img in imgTest" :key="img">
                  <svg class="icon-cross" @click="deletePrevieImg">
                    <use xlink:href="#svg-cross-thin"></use>
                  </svg>

                  <b-img :src="img"></b-img>
                </div>
              </div>

              <div style="height: 0px; overflow: hidden">
                <input type="file" @change="onFileChange" multiple accept=
                image/* ref="image" name="fileInput" />
              </div>

              <div style="height: 0px; overflow: hidden">
                <input type="file" @change="onFileChange" multiple accept=
                video/* ref="video" />
              </div>
              <div style="height: 0px; overflow: hidden">
                <input type="file" @change="onFileChange" multiple accept=
                audio/* ref="sound" />
              </div>
              <video
                width="320"
                height="240"
                controls
                :src="videoSrc"
                :key="videoSrc"
                v-if="videoSrc"
              >
                <!-- <source
                                    :src="videoSrc"
                                    :type="`video/${fileExt}`"
                                    :key="videoSrc"
                                /> -->
              </video>
              <!-- <audio controls v-if="audioSrc">
                                <source
                                    :src="audioSrc"
                                    :type="`audio/${fileExt}`"
                                    :key="audioSrc"
                                />
                            </audio> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="quick-post-footer">
      <b-dropdown id="dropdown-1" :text="communities" class="m-md-2">
        <b-dropdown-item @click="selectCommunity({ name: 'communities' })"
          >communities</b-dropdown-item
        >
        <b-dropdown-item
          @click="selectCommunity(community)"
          v-for="community in communityList"
          :key="community.id"
          >{{ community.name }}</b-dropdown-item
        >
      </b-dropdown>

      <b-dropdown
        id="dropdown-1"
        :text="channels"
        class="m-md-2"
        :style="!isChannelOn ? 'display:none' : ''"
      >
        <b-dropdown-item
          @click="channels = channel.name"
          v-for="channel in channelList"
          :key="channel.id"
          >{{ channel.name }}</b-dropdown-item
        >
      </b-dropdown>

      <b-dropdown id="dropdown-1" text="My games" class="m-md-2">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-1" text="Portfolios" class="m-md-2">
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-item>Second Action</b-dropdown-item>
      </b-dropdown>
    </div>

    <div class="quick-post-footer">
      <div class="quick-post-footer-actions">
        <!-- upload pic -->
        <div
          class="quick-post-footer-action text-tooltip-tft-medium"
          data-title="Insert Image"
          @click="uploadFile('image')"
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

        <!-- upload video -->

        <div
          class="quick-post-footer-action text-tooltip-tft-medium"
          data-title="Insert Video"
          @click="uploadFile('video')"
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
        </div>

        <!-- /upload video  -->
        <!-- upload sound -->
        <div
          class="quick-post-footer-action text-tooltip-tft-medium"
          data-title="Insert Sound"
          @click="uploadFile('sound')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M16 8v2h-3v4.5a2.5 2.5 0 1 1-2-2.45V8h4V4H5v16h14V8h-3zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992z"
              fill="rgba(97,106,130,1)"
            />
          </svg>
        </div>
        <!-- /upload sound -->
        <div
          class="quick-post-footer-action text-tooltip-tft-medium"
          data-title="Insert Link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"
              fill="rgba(97,106,130,1)"
            />
          </svg>
        </div>

        <div
          class="quick-post-footer-action text-tooltip-tft-medium"
          data-title="Code Block"
          @click="editor.chain().focus().toggleCodeBlock().run()"
          :class="{
            'is-active': editor.isActive('codeBlock'),
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm16 7l-3.536 3.536-1.414-1.415L17.172 12 15.05 9.879l1.414-1.415L20 12zM6.828 12l2.122 2.121-1.414 1.415L4 12l3.536-3.536L8.95 9.88 6.828 12zm4.416 5H9.116l3.64-10h2.128l-3.64 10z"
              fill="rgba(97,106,130,1)"
            />
          </svg>
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

    <iframe
      v-for="link in youtubeLink"
      :key="link.id"
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${link}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <div v-html="content"></div>
    <b-modal
      ref="alertModal"
      class="modal-container"
      centered
      hide-header
      hide-footer
      no-close-on-backdrop
    >
      <p class="my-4" style="color: #000">
        작성중인 글은 저장되지 않고 사라집니다. 작성을 끝내시겠습니까?
      </p>

      <div
        style="
          display: flex;
          justify-content: center;
          justify-content: space-between;
        "
      >
        <button
          class="popup-box-action half button tertiary"
          style="width: 47%"
          @click="postDone(true)"
        >
          OK
        </button>
        <button
          class="popup-box-action half button"
          style="width: 47%"
          @click="postDone(false)"
        >
          Cancel
        </button>
      </div>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import FileUpload from "@/components/common/FileUpload.vue";
import Modal from "@/components/common/Modal.vue";

import { VueEditor } from "vue2-editor";

import { Editor, EditorContent, mergeAttributes } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";

import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import Dropcursor from "@tiptap/extension-dropcursor";
import lowlight from "lowlight";

import Video from "@/script/tiptap/customVideo";
import Audio from "@/script/tiptap/customAudio";
import Iframe from "@/script/tiptap/iframe";

@Component({
  computed: { ...mapGetters(["user"]) },
  components: { FileUpload, VueEditor, EditorContent, Modal },
})
export default class Post extends Vue {
  private editor!: Editor;
  private postEditor!: Editor;
  private postingText: string = "";

  private content: string = "";
  private youtubeLink: string[] = [];

  private communityList: any[] = [];
  private isChannelOn: boolean = false;
  private communities: string = "Communities";
  private channelList: any[] = [];
  private channels: string = "Channels";

  private imgTest: any[] = [
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3yBeTfeUbKg3USYZ9VPQjQGX-6qyafbqrCA&usqp=CAU",
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2WLbm-fxTuZwCibXha0GpdADZeLyYNJU7vg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKlUd7JhMawptSauuMAzmTMj5-a9bNx_UiQ&usqp=CAU",
  ];

  // private user: any = this.$store.getters.user;
  private user!: any;
  private tempType: string = "";
  private imageSrcArr: ImageData[] = [];
  private selectedFileType: string = "";
  textPreview: any = "";
  tempKey: string = "";
  userTag: string = "";

  videoSrc: string = "";
  audioSrc: string = "";
  imgSrc: string = "";
  activeTab: string = "post";

  // tiptap

  @Watch("postText")
  watchChar() {
    if (this.postingText.length > 5000) {
      alert("5000자 이상은 작성할 수 없습니다.");
      this.postingText = this.postingText.substring(0, 5000);
    }
  }

  created() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Image,
        CodeBlockLowlight.configure({
          lowlight,
        }),
        Placeholder.configure({ placeholder: "안녕하세요" }),
        Link,
        Highlight,
        Typography,
        Dropcursor,
        Video,
        Iframe,
        Audio,
      ],
      autofocus: "end",
    });
  }

  beforeDestroy() {
    this.editor.destroy();
  }

  async mounted() {
    console.log("this.user", this.user);
    if (this.user) {
      console.log("community List!@");
      this.communityList = await this.$api.joinedCommunity(this.user.uid);
    }
    // else {
    //     this.$store.subscribe(async ({ type }) => {
    //         if (type.toLowerCase() === "user") {
    //             console.log("mounted", this.user)
    //             // this.communityList = await this.$api.joinedCommunity(
    //             //     this.user.uid
    //             // );
    //         }
    //     });
    // }
    // console.log(result)
  }

  init() {
    this.postingText = "";
    this.imgSrc = "";
    this.audioSrc = "";
    this.videoSrc = "";
    this.editor.commands.clearContent();
  }

  isActive(type: string) {
    console.log(this.editor.isEmpty);
    this.tempType = type;
    if (
      this.postingText ||
      this.imgSrc ||
      this.audioSrc ||
      this.videoSrc ||
      !this.editor.isEmpty
    ) {
      (this.$refs["alertModal"] as any).show();
    } else {
      this.activeTab = type;
    }
  }
  postDone(state: boolean) {
    if (state) {
      this.init();
      this.activeTab = this.tempType;
    }
    (this.$refs["alertModal"] as any).hide();
  }

  //첨부파일 업로드
  uploadFile(fileType: string) {
    this.selectedFileType = fileType;

    (this.$refs[fileType] as HTMLElement).click();
  }

  // 파일 업로드
  onFileChange(event: { target: { accept: any; files: any } }) {
    this.inputFile(event.target.files);
  }

  //미리보기 사진 삭제
  deletePrevieImg() {
    console.log("delete");
  }

  //파일 용량 & 개수 체크
  checkFile(files: any) {
    let fileList: any[] = [];
    let totalFileSize: number = 0;
    let maxTotalSize: number = 20971520; //20mb
    if (files.length > 4 && this.selectedFileType === "image") {
      for (let i = 0; i < 5; i++) {
        totalFileSize += files[i].size;
        fileList.push(files[i]);
      }
      alert("이미지 개수는 최대 5개입니다");
    }
    console.log("file", totalFileSize);

    return fileList;
  }

  inputFile(files: any) {
    let fileArr: any[] = this.checkFile(files);

    if (fileArr.length) {
      for (let i = 0; i < fileArr.length; i++) {
        let file = fileArr[i];

        if (this.selectedFileType === "video") {
          this.videoSrc = URL.createObjectURL(file);

          this.editor
            .chain()
            .focus("end")
            .setVideo({
              src: this.videoSrc,
              type: file.type,
              width: 360,
              height: 240,
              controls: true,
            })
            .run();
        } else if (this.selectedFileType === "audio") {
          this.audioSrc = URL.createObjectURL(file);
          this.editor
            .chain()
            .focus("end")
            .setAudio({
              src: this.audioSrc,
              type: file.type,
              controls: true,
            })
            .run();
        } else if (this.selectedFileType === "image") {
          this.imgSrc = URL.createObjectURL(file);

          this.imageSrcArr.push(file);

          this.editor.chain().focus("end").setImage({ src: this.imgSrc }).run();
        }
      }
    }
  }

  //포스팅

  uploadPost() {
    this.content = this.editor.getHTML();
    console.log(this.stringToHTML(this.content));
    // https://www.youtube.com/watch?v=5KG-5kEhzu4
    // console.log(this.imageSrc, this.content);
    // console.log(this.editor.getHTML());
    // this.textPreview = (this.$refs.postContent as Element).innerHTML;
    // this.handleImageAdded
  }

  stringToHTML = (str: any) => {
    var dom = document.createElement("div");
    dom.innerHTML = str;
    console.log(str);
    for (let i = 0; i < dom.getElementsByTagName("a").length; i++) {
      this.youtubeLink.push(
        dom
          .getElementsByTagName("a")
          [i].href.match(
            /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
          )![1]
      );
    }
    return dom;
  };

  selectCommunity(selectedItem: any) {
    if (selectedItem.name.toLowerCase() === "communities") {
      this.isChannelOn = false;
    } else {
      this.isChannelOn = true;
      this.channelList = this.$api.getCommunityInfo(selectedItem.id).channels;
    }
    this.communities = selectedItem.name;
  }
}
</script>

<style lang="scss">
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
.input {
  height: 150px;
  color: #fff;
  text-align: left;
  padding: 20px;
  overflow: auto;
}

.editor-header {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  flex-wrap: wrap;
  padding: 0.25rem;
  border-bottom: 1px solid #fff;
  /* margin-bottom: 20px; */
}
.menu-item {
  width: 1.75rem;
  height: 1.75rem;
  color: #fff;
  border: none;
  background-color: transparent;
  border-radius: 0.4rem;
  padding: 0.25rem;
  margin-right: 0.25rem;
}

.editor-container {
  text-align: left;
  padding: 15px;
  .iframe-wrapper {
    position: relative;
    padding-bottom: 100/16 * 9%;
    height: 0;
    overflow: hidden;
    width: 100%;
    height: auto;
    &.ProseMirror-selectednode {
      outline: 3px solid #68cef8;
    }
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .video-wrapper {
    position: relative;
    padding-bottom: 100/16 * 9%;

    overflow: hidden;
    width: 360px;
    height: 240px;
    &.ProseMirror-selectednode {
      outline: 3px solid #68cef8;
    }
  }
  .audio-wrapper {
    position: relative;

    overflow: hidden;
    width: 360px;
    height: 100px;
    &.ProseMirror-selectednode {
      outline: 3px solid #68cef8;
    }
  }

  .ProseMirror {
    > * + * {
      margin-top: 0.75em;
    }
    img {
      max-width: 100% !important;
      height: auto;
    }
    p.is-editor-empty:first-child::before {
      content: attr(data-placeholder);
      float: left;
      color: #ced4da;
      pointer-events: none;
      height: 0;
    }

    ul,
    ol {
      padding: 0 1rem;
      color: #fff;
      list-style: auto;
    }
    hr {
      background-color: #fff;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    code {
      background-color: rgba(#616161, 0.1);
      color: #616161;
    }

    pre {
      background: #0d0d0d;
      color: #fff;
      font-family: "JetBrainsMono", monospace;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;

      code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
      }

      .hljs-comment,
      .hljs-quote {
        color: #616161;
      }

      .hljs-variable,
      .hljs-template-variable,
      .hljs-attribute,
      .hljs-tag,
      .hljs-name,
      .hljs-regexp,
      .hljs-link,
      .hljs-name,
      .hljs-selector-id,
      .hljs-selector-class {
        color: #f98181;
      }

      .hljs-number,
      .hljs-meta,
      .hljs-built_in,
      .hljs-builtin-name,
      .hljs-literal,
      .hljs-type,
      .hljs-params {
        color: #fbbc88;
      }

      .hljs-string,
      .hljs-symbol,
      .hljs-bullet {
        color: #b9f18d;
      }

      .hljs-title,
      .hljs-section {
        color: #faf594;
      }

      .hljs-keyword,
      .hljs-selector-tag {
        color: #70cff8;
      }

      .hljs-emphasis {
        font-style: italic;
      }

      .hljs-strong {
        font-weight: 700;
      }
    }

    hr {
      margin: 1rem 0;
    }

    blockquote {
      padding-left: 1rem;
      border-left: 2px solid rgba(#0d0d0d, 0.1);
    }
  }

  // modal
}
</style>
