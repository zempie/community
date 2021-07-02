<template>
    <div class="quick-post" v-if="user">
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

                <!-- <div
                    class="option-item"
                    @click="isActive('schedule')"
                    :class="activeTab === 'schedule' ? 'active' : ''"
                >
                    <svg class="option-item-icon icon-blog-posts">
                        <use xlink:href="#svg-blog-posts"></use>
                    </svg>

                    <p class="option-item-title">Schedule Post</p>
                </div> -->
            </div>
        </div>

        <!-- blog post -->
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
                                <input type="file" @change="onFileChange"
                                multiple accept= image/* ref="image"
                                name="fileInput" />
                            </div>

                            <div style="height: 0px; overflow: hidden">
                                <input type="file" @change="onFileChange"
                                multiple accept= video/* ref="video" />
                            </div>
                            <div style="height: 0px; overflow: hidden">
                                <input type="file" @change="onFileChange"
                                multiple accept= audio/* ref="audio" />
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
                            <div
                                style="
                                    display: flex;
                                    justify-content: space-between;
                                "
                            >
                                <b-form-checkbox
                                    class="private-checkbox"
                                    v-model="visibility"
                                    name="checkbox-1"
                                    value="private"
                                    unchecked-value="public"
                                >
                                    Private
                                </b-form-checkbox>
                                <p
                                    class="form-textarea-limit-text"
                                    style="padding-top: 18px"
                                >
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
                            <editor-content
                                :editor="editor"
                                class="editor-container"
                                v-model="postingText"
                                ref="editorContainer"
                            />
                            <div
                                style="
                                    display: flex;
                                    justify-content: space-between;
                                "
                            >
                                <b-form-checkbox
                                    class="private-checkbox"
                                    v-model="visibility"
                                    name="checkbox-1"
                                    value="private"
                                    unchecked-value="public"
                                >
                                    Private
                                </b-form-checkbox>
                                <p
                                    class="form-textarea-limit-text"
                                    style="padding-top: 18px"
                                >
                                    {{ this.postingText.length }}/300
                                </p>
                            </div>
                            <div class="img-preview-container">
                                <div
                                    class="img-preview"
                                    v-for="(img, idx) in imgPreviewArr"
                                    :key="idx"
                                >
                                    <svg
                                        class="icon-cross"
                                        @click="deletePrevieImg(idx)"
                                    >
                                        <use xlink:href="#svg-cross-thin"></use>
                                    </svg>

                                    <b-img :src="img"></b-img>
                                </div>
                            </div>

                            <div style="height: 0px; overflow: hidden">
                                <input type="file" @change="onFileChange"
                                multiple accept= image/* ref="image"
                                name="fileInput" />
                            </div>

                            <div style="height: 0px; overflow: hidden">
                                <input type="file" @change="onFileChange"
                                multiple accept= video/* ref="video" />
                            </div>
                            <div style="height: 0px; overflow: hidden">
                                <input type="file" @change="onFileChange"
                                multiple accept= audio/* ref="sound" />
                            </div>
                            <video
                                width="320"
                                height="240"
                                controls
                                :src="videoSrc"
                                :key="videoSrc"
                                v-if="videoSrc"
                            ></video>

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
            <b-dropdown
                id="dropdown-1"
                :text="communities"
                class="m-md-2 dropdown"
                style="width: 25%"
            >
                <b-dropdown-item
                    class="dropdown-item"
                    @click="selectCommunity({ name: 'communities' })"
                    >communities</b-dropdown-item
                >
                <b-dropdown-item
                    class="dropdown-item"
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
                    class="dropdown-item"
                    @click="selectChannel(channel)"
                    v-for="channel in channelList"
                    :key="channel.id"
                    >{{ channel.name }}</b-dropdown-item
                >
            </b-dropdown>

            <b-dropdown id="dropdown-1" text="My games" class="m-md-2">
                <b-dropdown-item class="dropdown-item"
                    >First Action</b-dropdown-item
                >
            </b-dropdown>
            <b-dropdown id="dropdown-1" text="Portfolios" class="m-md-2">
                <b-dropdown-item class="dropdown-item"
                    >First Action</b-dropdown-item
                >
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
                <p class="button small void">임시 저장</p>

                <p class="button small secondary" @click="uploadPost">Post</p>
            </div>
        </div>
        <div v-if="isScheduledPost" class="date-container">
            <b-form-datepicker today-button class="datepicker">
            </b-form-datepicker>
            <b-timepicker v-model="time" class="timepicker"></b-timepicker>
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
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import FileUpload from "@/components/common/FileUpload.vue";
import Modal from "@/components/common/Modal.vue";

import { VueEditor } from "vue2-editor";

import { Editor, EditorContent, VueRenderer } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";

import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import Dropcursor from "@tiptap/extension-dropcursor";
import Mention from "@tiptap/extension-mention";

import lowlight from "lowlight";

import Video from "@/script/tiptap/customVideo";
import Audio from "@/script/tiptap/customAudio";
import Iframe from "@/script/tiptap/iframe";
import Hashtag from "@/script/tiptap/hashtag";

import HahstagList from "./HashTagList.vue";
import MentionList from "./MentionList.vue";
import tippy from "tippy.js";

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

    private imgPreviewArr: any[] = [];
    private fileList: any[] = [];
    private remainFileSize: number = 20971520; //20mb (binary);

    private user!: any;

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

    private hasTagSuggestion: boolean = false;
    private postedHashtag: string[] = [];

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
                                        item
                                            .toLowerCase()
                                            .startsWith(query.toLowerCase())
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
                                        getReferenceClientRect:
                                            props.clientRect,
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
                                        getReferenceClientRect:
                                            props.clientRect,
                                    });
                                },
                                onKeyDown: (props) => {
                                    // console.log("onKeyDown", props);
                                    if (
                                        props.event.key === "Enter" &&
                                        !this.hasTagSuggestion
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
                                            .insertContentAt(
                                                component.ref?._props.range,
                                                [
                                                    {
                                                        type: "hashtag",
                                                        attrs: id,
                                                    },
                                                    {
                                                        type: "text",
                                                        text: " ",
                                                    },
                                                ]
                                            )
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
                            return [
                                "Lea Thompson",
                                "Cyndi Lauper",
                                "Tom Cruise",
                                "Madonna",
                                "Jerry Hall",
                                "Joan Collins",
                                "Winona Ryder",
                                "Christina Applegate",
                                "Alyssa Milano",
                                "Molly Ringwald",
                                "Ally Sheedy",
                                "Debbie Harry",
                                "Olivia Newton-John",
                                "Elton John",
                                "Michael J. Fox",
                                "Axl Rose",
                                "Emilio Estevez",
                                "Ralph Macchio",
                                "Rob Lowe",
                                "Jennifer Grey",
                                "Mickey Rourke",
                                "John Cusack",
                                "Matthew Broderick",
                                "Justine Bateman",
                                "Lisa Bonet",
                            ]
                                .filter((item) =>
                                    item
                                        .toLowerCase()
                                        .startsWith(query.toLowerCase())
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
                                        getReferenceClientRect:
                                            props.clientRect,
                                        appendTo: () => document.body,
                                        content: component.element,
                                        showOnCreate: true,
                                        interactive: true,
                                        trigger: "manual",
                                        placement: "bottom-start",
                                    });
                                },
                                onUpdate(props) {
                                    component.updateProps(props);

                                    popup[0].setProps({
                                        getReferenceClientRect:
                                            props.clientRect,
                                    });
                                },
                                onKeyDown(props) {
                                    return component.ref?.onKeyDown(props);
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
        if (this.user) {
            this.communityList = await this.$api.joinedCommunity(this.user.uid);
        }
    }
    beforeDestroy() {
        this.editor.destroy();
    }

    init() {
        this.postingText = "";
        this.imgSrc = "";
        this.audioSrc = "";
        this.videoSrc = "";
        this.editor.commands.clearContent();
        this.$store.dispatch("resetHashtag");
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
    deletePrevieImg(idx: number) {
        this.remainFileSize += this.fileList[idx].size;
        this.imgPreviewArr.splice(idx, 1);
        this.fileList.splice(idx, 1);
    }

    //파일 용량 & 개수 체크
    checkFile(files: any) {
        console.log("imgPreviewArr", this.imgPreviewArr);

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
                    this.imgPreviewArr.push(URL.createObjectURL(files[i]));
                }
            }
        }

        console.log(this.remainFileSize);
        return this.fileList;
    }

    inputFile(files: any) {
        // let fileArr: any[] = files;
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

                    this.editor
                        .chain()
                        .focus("end")
                        .setImage({ src: this.imgSrc })
                        .run();
                }
            }
        }
    }

    //포스팅

    uploadPost() {
        this.content = this.editor.getHTML();

        console.log(
            this.user.uid,
            this.fileList,
            this.visibility,
            this.$store.getters.hashtagList,
            this.$store.getters.userTagList,
            this.content,
            this.selectedCommunityId,
            this.selectedChannelId
        );
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
    selectCommunity(selectedItem: any) {
        if (selectedItem.name.toLowerCase() === "communities") {
            this.isChannelOn = false;
        } else {
            this.isChannelOn = true;
            this.channelList = this.$api.getCommunityInfo(
                selectedItem.id
            ).channels;
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
}
</script>

<style lang="scss" scoped>
.date-container {
    display: flex;
    justify-content: space-evenly;

    .datepicker,
    .timepicker {
        width: 48%;
        background-color: #1d2333;
        border: 1px solid #616a82;

        .btn {
            width: 30% !important;
        }

        label {
            color: #fff !important;
        }

        svg {
            fill: #616a82;
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
</style>
