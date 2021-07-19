<template>
  <!-- -->
  <div class="quick-post" id="postContainer">
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
      </div>
    </div>

    <!-- blog post -->
    <div class="quick-post-body" v-if="activeTab === 'blog'">
      <div class="form">
        <div class="form-row">
          <div class="form-item">
            <div class="form-textarea">
              <!-- tiptap -->
              <tiptap-post
                :postType="activeTab"
                @isEmpty="editorState"
                :key="activeTab"
              ></tiptap-post>
              <div style="height: 0px; overflow: hidden">
                <input type="file" @change="onFileChange" multiple accept=
                image/* ref="image" name="fileInput" />
              </div>

              <div style="height: 0px; overflow: hidden">
                <input type="file" @change="onFileChange" accept= video/*
                ref="video" />
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
              <div style="display: flex; justify-content: flex-end">
                <p class="form-textarea-limit-text" style="padding-top: 18px">
                  {{ this.postingText.length }}/5000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- sns post -->
    <div class="quick-post-body" v-else-if="activeTab === 'post'">
      <div class="form">
        <div class="form-row">
          <div class="form-item">
            <div class="form-textarea">
              <tiptap-sns @isEmpty="editorState" :key="activeTab"></tiptap-sns>
              <div style="display: flex; justify-content: flex-end">
                <p class="form-textarea-limit-text" style="padding-top: 18px">
                  {{ this.postingText.length }}/300
                </p>
              </div>
              <image-preview></image-preview>

              <div style="height: 0px; overflow: hidden">
                <input type="file" @change="onFileChange" multiple accept=
                video/* ref="video" />
              </div>
              <div style="height: 0px; overflow: hidden">
                <input type="file" @change="onFileChange" multiple accept=
                audio/* ref="audio" />
              </div>
              <video
                width="320"
                height="240"
                controls
                :src="videoSrc"
                :key="videoSrc"
                v-if="videoSrc"
              ></video>
              <div v-for="(audio, idx) in audioPreviewArr" :key="idx">
                <svg class="icon-cross" @click="deletePreviewAudio(idx)">
                  <use xlink:href="#svg-cross-thin"></use>
                </svg>
                <audio controls :src="audio"></audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="quick-post-footer post-select">
      <!-- todo: user id send -->
      <custom-tooltip></custom-tooltip>

      <!-- <div class="community-list">
                <b-button>1</b-button>
                <b-button>2</b-button>
                <b-button>3</b-button>
            </div> -->

      <!-- <div class="form-select dropdown-container">
                <select class="dropbox dropdown-item" @change="selectCommunity">
                    <option value="communities">My games</option>

                    <option>game</option>
                </select>
            </div>
            <div class="form-select dropdown-container">
                <select class="dropbox dropdown-item" @change="selectCommunity">
                    <option value="communities">Portfolios</option>

                    <option>Portfolio</option>
                </select>
            </div> -->
    </div>

    <div class="quick-post-footer checkbox">
      <div class="checkbox-wrap">
        <input
          type="checkbox"
          id="event-add-end-time"
          name="event_add-end-time"
        />

        <div class="checkbox-box">
          <svg class="icon-check">
            <use xlink:href="#svg-check"></use>
          </svg>
        </div>

        <label for="event-add-end-time">private</label>
      </div>
    </div>

    <div class="quick-post-footer attachment">
      <div class="quick-post-footer-actions">
        <!-- upload pic -->

        <image-uploader-btn @fileList="getFileList"></image-uploader-btn>

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
        <!-- upload audio -->
        <div
          class="quick-post-footer-action text-tooltip-tft-medium"
          data-title="Insert Audio"
          @click="uploadFile('audio')"
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
        <!-- /upload audio -->
        <!-- <div
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
                </div> -->

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
        <div
          class="quick-post-footer-action text-tooltip-tft-medium"
          data-title="Poll"
        >
          <svg class="option-item-icon icon-poll">
            <use xlink:href="#svg-poll"></use>
          </svg>
        </div>
        <!-- scheduled post -->
        <div
          class="quick-post-footer-action text-tooltip-tft-medium"
          data-title="Schedule Post"
          @click="isScheduledPost = !isScheduledPost"
        >
          <svg class="option-item-icon icon-blog-posts">
            <use xlink:href="#svg-blog-posts"></use>
          </svg>
        </div>
      </div>

      <div class="quick-post-footer-actions">
        <p class="button small">임시 저장</p>

        <p class="button small secondary" @click="uploadPost">Post</p>
      </div>
    </div>
    <div v-if="isScheduledPost" class="date-container">
      <b-form-datepicker
        today-button
        :min="minDate"
        class="datepicker"
        v-model="reserved_date"
      >
      </b-form-datepicker>
      <b-form-timepicker
        class="timepicker"
        v-model="reserved_time"
      ></b-form-timepicker>
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

      <div>
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
    <b-modal
      ref="loginModal"
      class="modal-container"
      centered
      hide-header
      hide-footer
      no-close-on-backdrop
    >
      <p class="my-4 text-center" style="color: #000">
        로그인 후 사용하시겠습니끼?
      </p>

      <div class="button-container">
        <button
          class="popup-box-action half button tertiary"
          style="width: 47%"
          @click="goLoginPage(true)"
        >
          Login
        </button>
        <button
          class="popup-box-action half button"
          style="width: 47%"
          @click="goLoginPage(false)"
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
import Tooltip from "@/plugins/tooltip";
import FileUpload from "@/components/common/FileUpload.vue";
import TiptapSns from "@/components/timeline/TiptapSns.vue";
import TiptapPost from "@/components/timeline/TiptapPost.vue";
import Modal from "@/components/common/Modal.vue";

import { Editor, EditorContent, HTMLElement, VueRenderer } from "@tiptap/vue-2";
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
import Hashtag from "@/script/tiptap/hashtag";
import Mention from "@/script/tiptap/mention";

import HahstagList from "./HashTagList.vue";
import MentionList from "./MentionList.vue";
import tippy from "tippy.js";

import moment from "moment";
import { FileLoader } from "@/script/fileLoader";
import { mbToByte } from "@/script/fileManager";
import ImageUploaderBtn from "@/components/timeline/post/ImageUploaderBtn.vue";
import ImagePreview from "@/components/timeline/post/ImagePreview.vue";

import AlertModal from "@/components/common/AlertModal.vue";
import { User } from "@/types";

import Messages from "@/components/pages/user/Messages.vue";

import Dropdown from "@/plugins/dropdown";
import CustomTooltip from "@/components/layout/tooltip/Tooltip.vue";

@Component({
  computed: { ...mapGetters(["user"]) },
  components: {
    Messages,
    FileUpload,
    EditorContent,
    Modal,
    ImageUploaderBtn,
    ImagePreview,
    TiptapSns,
    TiptapPost,
    AlertModal,
    CustomTooltip,
  },
})
export default class Post extends Vue {
  private dropdown: Dropdown = new Dropdown();
  private tooltip: Tooltip = new Tooltip();
  private fileLoader: FileLoader = new FileLoader();
  private editor!: Editor;
  private postEditor!: Editor;
  private postingText: string = "";
  private isEditorEmpty: boolean = true;

  private content: string = "";
  private youtubeLink: string[] = [];

  private communityList: any[] = [];
  private isChannelOn: boolean = false;
  private communities: string = "Communities";
  private channelList: any[] = [];
  private channels: string = "Channels";

  // 첨부파일
  private imgPreviewArr: any[] = [];
  private fileList: any[] = [];
  private remainFileSize: number = 20971520; //20mb (binary);
  private audioPreviewArr: any[] = [];
  private remainAudioSize: number = 41943040; //40mb

  private user!: User;

  private tempType: string = "";
  private imageSrcArr: ImageData[] = [];
  private selectedFileType: string = "";

  // follow 공개 여부
  private visibility: string = "public";
  private isScheduledPost: boolean = false;
  private time: any = 0;

  private selectedCommunityId: number = -1;
  private selectedChannelId: number = -1;
  private selectedGameId: number = -1;
  private selectedPfId: number = -1;

  // 예약 포스팅
  private minDate = new Date();
  private reserved_date: string = "";
  private reserved_time: string = "";

  //community
  private isCommunityClick: boolean = false;

  //postring
  private isResetEditor: boolean = false;

  textPreview: any = "";
  tempKey: string = "";
  userTag: string = "";

  videoSrc: string = "";
  audioSrc: string = "";
  imgSrc: string = "";
  activeTab: string = "post";

  hashTagListTest: string[] = [
    "ahashtag1",
    "bhashtag2",
    "chashtag3",
    "dhashtag4",
    "ehashtag5",
    "fhashtag6",
    "ghashtag7",
    "해시태그01",
    "hashtag8",
    "hashtag9",
    "hashtag10",
    "hashtag11",
    "hashtag12",
    "hashtag13",
    "hashtag14",
    "hashtag15",
    "hashtag16",
    "hashtag17",
    "hashtag18",
    "hashtag19",
    "hashtag20",
  ];
  // 해시태그 멘션
  private hasTagSuggestion: boolean = false;
  private postedHashtag: string[] = [];

  private hasMentionSuggestion: boolean = false;
  private mentionList: any[] = [];

  // tiptap

  @Watch("postingText")
  watchChar() {
    if (this.postingText.length > 300) {
      alert("300자 이상은 작성할 수 없습니다.");
      this.postingText = this.postingText.substring(0, 300);
    }
  }

  @Watch("user")
  async watchUser() {
    this.communityList = await this.$api.joinedCommunity(this.user.uid);
    this.mentionList = await this.$api.followingList(this.user.uid);
    // if (temp) {
    //     for (let i in temp) {
    //         this.mentionList.push(temp[i].nickname);
    //     }
    // }
    // console.log(this.mentionList);
  }

  async created() {
    // this.$nextTick(async () => {});
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Image,
        CodeBlockLowlight.configure({
          lowlight,
        }),
        Placeholder.configure({
          placeholder: "멋진 생각을 공유해주세요.",
        }),
        Link,
        Highlight,
        Typography,
        Dropcursor,
        Video,
        Iframe,
        Audio,
        Hashtag.configure({
          HTMLAttributes: {
            class: "hashtag",
          },
          renderLabel({ options, node }) {
            return `${options.suggestion.char}${
              node.attrs.label ?? node.attrs.id
            }`;
          },
          suggestion: {
            //@ts-ignore
            items: (query) => {
              if (query.length > 0) {
                return this.hashTagListTest
                  .filter((item) =>
                    item.toLowerCase().startsWith(query.toLowerCase())
                  )
                  .slice(0, 10);
              }
            },
            render: () => {
              let component;
              let popup;

              return {
                onStart: (props) => {
                  component = new VueRenderer(HahstagList, {
                    parent: this,
                    propsData: props,
                  });

                  popup = tippy("body", {
                    getReferenceClientRect: props.clientRect,
                    appendTo: () => document.body,
                    content: component.element,
                    showOnCreate: true,
                    interactive: false,
                    trigger: "manual",
                    placement: "bottom-start",
                  });
                },
                onUpdate: (props) => {
                  component.updateProps(props);
                  if (props.items && props.items.length > 0) {
                    this.hasTagSuggestion = true;
                  } else {
                    this.hasTagSuggestion = false;
                  }
                  popup[0].setProps({
                    getReferenceClientRect: props.clientRect,
                  });
                },
                onKeyDown: (props) => {
                  // console.log("onKeyDown", props);
                  if (
                    props.event.key === "Enter" &&
                    !this.hasTagSuggestion &&
                    component.ref?._props.query
                  ) {
                    let id = {
                      id: component.ref?._props.query,
                    };
                    this.$store.commit(
                      "hashtagList",
                      component.ref?._props.query
                    );
                    return component.ref?._props.editor
                      .chain()
                      .focus()
                      .insertContentAt(component.ref?._props.range, [
                        {
                          type: "hashtag",
                          attrs: id,
                        },
                        {
                          type: "text",
                          text: " ",
                        },
                      ])
                      .run();
                  } else {
                    return component.ref?.onKeyDown(props);
                  }
                },
                onExit() {
                  popup[0].destroy();
                  component.destroy();
                },
              };
            },
          },
        }),
        Mention.configure({
          HTMLAttributes: {
            class: "mention",
          },
          suggestion: {
            items: (query) => {
              return this.mentionList
                .filter((item) =>
                  item.nickname.toLowerCase().startsWith(query.toLowerCase())
                )
                .slice(0, 10);
            },
            render: () => {
              let component;
              let popup;

              return {
                onStart: (props) => {
                  component = new VueRenderer(MentionList, {
                    parent: this,
                    propsData: props,
                  });

                  popup = tippy("body", {
                    getReferenceClientRect: props.clientRect,
                    appendTo: () => document.body,
                    content: component.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: "manual",
                    placement: "bottom-start",
                  });
                  if (props.items && props.items.length > 0) {
                    this.hasMentionSuggestion = true;
                  } else {
                    this.hasMentionSuggestion = false;
                  }
                },
                onUpdate: (props) => {
                  component.updateProps(props);
                  if (props.items && props.items.length > 0) {
                    this.hasMentionSuggestion = true;
                  } else {
                    this.hasMentionSuggestion = false;
                  }

                  popup[0].setProps({
                    getReferenceClientRect: props.clientRect,
                  });
                },
                onKeyDown: (props) => {
                  if (
                    props.event.key === "Enter" &&
                    !this.hasMentionSuggestion &&
                    component.ref?._props.query
                  ) {
                    let id = {
                      id: component.ref?._props.query,
                    };
                    this.$store.commit(
                      "userTagList",
                      component.ref?._props.query
                    );
                    return component.ref?._props.editor
                      .chain()
                      .focus()
                      .insertContentAt(component.ref?._props.range, [
                        {
                          type: "mention",
                          attrs: id,
                        },
                        {
                          type: "text",
                          text: " ",
                        },
                      ])
                      .run();
                  } else {
                    return component.ref?.onKeyDown(props);
                  }
                },
                onExit() {
                  popup[0].destroy();
                  component.destroy();
                },
              };
            },
          },
        }),
      ],
      autofocus: "end",
    });
  }
  async mounted() {
    this.tooltip.init();
    this.dropdown.init();
    document
      .querySelector("#postContainer")!
      .addEventListener("click", this.interceptClickEvent);
    if (this.user) {
      this.communityList = await this.$api.joinedCommunity(this.user.uid);
    } else {
    }
  }

  beforeDestroy() {
    this.editor.destroy();
  }

  init() {
    console.log("init");
    this.fileLoader.deletePreviewImg("all");
    this.postingText = "";
    this.imgSrc = "";
    this.audioSrc = "";
    this.videoSrc = "";
    this.imgPreviewArr = [];
    this.audioPreviewArr = [];
    this.remainFileSize = 20971520;
    this.remainAudioSize = 41943040;
    this.fileList = [];
    this.$store.dispatch("resetEditor");
  }

  isActive(type: string) {
    if (!this.user) {
      (this.$refs["loginModal"] as any).show();
    } else {
      this.tempType = type;
      if (
        this.postingText ||
        this.imgSrc ||
        this.audioSrc ||
        this.videoSrc ||
        !this.isEditorEmpty
      ) {
        (this.$refs["alertModal"] as any).show();
      } else {
        this.activeTab = type;
      }
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

  deletePreviewAudio(idx: number) {
    this.remainAudioSize += this.fileList[idx].size;
    this.audioPreviewArr.splice(idx, 1);
    this.fileList.splice(idx, 1);
  }

  //파일 용량 & 개수 체크
  checkImgFile(files: any) {
    console.log("this.imgPreviewArr.length", this.imgPreviewArr.length);

    if (files.length > 5 || this.imgPreviewArr.length >= 5) {
      alert("이미지 개수는 최대 5개입니다");
    } else {
      if (files.length <= 5 && this.selectedFileType === "image") {
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
    console.log(this.$store.getters.previewImgArr);
    this.imgPreviewArr = this.$store.getters.previewImgArr;
    return this.fileList;
  }

  checkVideoFile(files: any) {
    let videoFile: File | null = null;
    if (files[0].size / 1024 / 1024 > 40) {
      alert("동영상의 최대 파일크기는 40mb를 넘을 수 없습니다.");
    } else {
      this.fileList.push(files);
      this.fileLoader.videoLoad(files[0]);
      videoFile = files;
    }
    return videoFile;
  }

  checkAudioFile(files: any) {
    if (files.length > 5 || this.audioPreviewArr.length >= 5) {
      alert("오디오 파일 개수는 최대 5개입니다");
    } else {
      if (files.length <= 5 && this.selectedFileType === "audio") {
        for (let i = 0; i < files.length; i++) {
          this.remainAudioSize -= files[i].size;
          this.fileList.push(files[i]);
          if (this.remainAudioSize < 0) {
            alert("최대 파일 용량을 넘었습니다.(최대 40mb)");
            this.remainAudioSize += files[i].size;
            break;
          }
          this.fileLoader.audioLoad(files[i]);
        }
      }
    }
    this.audioPreviewArr = this.$store.getters.previewAudioArr;
    return this.fileList;
  }

  inputFile(files: any) {
    let fileArr: any[] | any = [];

    if (this.selectedFileType === "image") {
      fileArr = this.checkImgFile(files);
    } else if (this.selectedFileType === "video") {
      fileArr = this.checkVideoFile(files);
    } else if (this.selectedFileType === "audio") {
      fileArr = this.checkAudioFile(files);
    }

    if (fileArr && fileArr.length) {
      for (let i = 0; i < fileArr.length; i++) {
        let file = fileArr[i];

        if (this.selectedFileType === "video") {
          this.videoSrc = URL.createObjectURL(file);
          if (this.activeTab === "blog") {
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
          }
        } else if (this.selectedFileType === "audio") {
          this.audioSrc = URL.createObjectURL(file);
          if (this.activeTab === "blog") {
            this.editor
              .chain()
              .focus("end")
              .setAudio({
                src: this.audioSrc,
                type: file.type,
                controls: true,
              })
              .run();
          }
        } else if (this.selectedFileType === "image") {
          // this.imgSrc = URL.createObjectURL(file);

          if (this.activeTab === "blog") {
            this.editor
              .chain()
              .focus("end")
              .setImage({ src: this.imgSrc })
              .run();
          } else {
            this.imageSrcArr.push(file);
          }
        }
      }
    }
  }

  @Watch("reserved_time")
  watchTime(time: Date) {
    let today = moment().format("yyyy-MM-DD");
    let currentTime = moment().format("HH:MM:SS");
    let newTime = moment().add(1, "h").format("HH:MM:SS");

    if (today === this.reserved_date) {
      if (currentTime >= this.reserved_time) {
        alert("현재시간 이전은 선택이 불가능합니다.");
        this.reserved_time = newTime;
      }
    }
  }

  //포스팅

  uploadPost() {
    if (!this.user) {
      (this.$refs["loginModal"] as any).show();
    } else {
      this.sendPost();
    }
  }

  sendPost() {
    let date = this.reserved_date + "T" + this.reserved_time;
    let scheduledTime = moment(date).valueOf();

    const result = this.$api.uploadpost(
      this.user.uid,
      this.fileList,
      this.visibility,
      this.$store.getters.postContents,
      this.$store.getters.hashtagList,
      this.$store.getters.userTagList,
      this.selectedCommunityId,
      this.selectedChannelId,
      this.selectedChannelId,
      this.selectedPfId,
      scheduledTime
    );
    //todo: 백엔드 연결 후 분기처리
    this.init();
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

  // select category
  selectCommunity(e) {
    let selectedItem = e.target.value;
    if (selectedItem.toLowerCase() === "communities") {
      this.isChannelOn = false;
    } else {
      this.isChannelOn = true;
      this.channelList = this.$api.getCommunityInfo(selectedItem.id).channels;
    }
    this.communities = selectedItem.name;
    this.selectedCommunityId = selectedItem.id;
  }

  selectChannel(selectedItem: any) {
    this.channels = selectedItem.name;
    this.selectedChannelId = selectedItem.id;
    // console.log(selectedItem);
  }

  // keyup
  checkText(text: string) {
    console.log(text);
  }

  //emit
  getFileList(files: any) {
    this.fileList = files;
    console.log("getFileList", this.fileList);
  }

  editorState(state: boolean) {
    this.isEditorEmpty = state;
  }

  goLoginPage(state: boolean) {
    if (state) {
      this.$router.push("/login");
    } else {
      (this.$refs["loginModal"] as any).hide();
    }
  }
}
</script>

<style lang="scss" scoped>
.positive {
  margin-right: 4px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;

  border: 1px solid #fff;
}
.quick-post.dimmed {
  // position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
  // background-color: rgb(0, 0, 0);
  // opacity: 0.3;
  pointer-events: none;
}
.date-container {
  display: flex;
  justify-content: space-evenly;

  .datepicker,
  .timepicker {
    width: 48%;
    background-color: #1d2333;
    border: 1px solid #616a82;

    .btn {
      // width: 30% !important;
    }

    label {
      color: #fff !important;
    }

    svg {
      fill: #616a82;
    }
    .dropdown-menu .show {
      width: 100% !important;
    }
  }
}
.form-control {
  .btn {
    width: 50% !important;
  }
}

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

  // modal
}
.dropdown-container {
  height: 25px;
  .dropdown-item {
    font-size: 15px !important;
    font-weight: 100 !important;
    padding: 0px 20px 0px 20px;
    text-overflow: ellipsis;
    border-radius: 5px !important;
    border: none !important;
  }
}
.quick-post-footer.attachment {
  border-top: 0px;
  min-height: 60px !important;
}
.quick-post-footer.checkbox {
  border-top: 0px;
  min-height: 30px !important;
  justify-content: flex-end;
}

.post-select {
  min-height: 50px;
}
.checkbox-wrap {
  margin-right: 5px;
}
.quick-post-footer-actions {
  .button {
    display: flex;
    height: 35px;
    align-items: center;
    justify-content: center;
  }
}

.checkbox-wrap .checkbox-box .icon-check {
  fill: transparent;
  transition: fill 0.2s ease-in-out;
}
.checkbox-wrap input[type="checkbox"]:checked + .checkbox-box .icon-check,
.checkbox-wrap input[type="radio"]:checked + .checkbox-box .icon-check {
  fill: #ffffff;
}

.button-container {
  display: flex;
}
</style>
