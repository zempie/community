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
            <div class="form">
                <div class="form-row">
                    <div class="form-item">
                        <div class="form-textarea">
                            <!-- tiptap -->

                            <editor-content
                                :editor="editor"
                                class="editor-container"
                                v-model="content"
                            />

                            <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/5KG-5kEhzu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                            <!-- <iframe src="https://youtu.be/5KG-5kEhzu4"></iframe> -->
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

                            <!-- <vue-editor v-model="content" :editorToolbar="customToolbar"></vue-editor> -->
                            <!-- <textarea
                                v-model="postingText"
                                id="quick-post-text"
                                name="quick-post-text"
                                placeholder="Hi Marina! Share your post here..."
                            ></textarea> -->
                            <div style="height: 0px; overflow: hidden">
                                <input type="file" @change="onFileChange"
                                accept= image/* ref="fileInput" name="fileInput"
                                />
                            </div>
                            <p class="form-textarea-limit-text">
                                {{ this.postingText.length }}/5000
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="quick-post-footer">
            <div class="quick-post-footer-actions">
                <div
                    class="quick-post-footer-action text-tooltip-tft-medium"
                    data-title="Insert Photo"
                    @click="uploadImage"
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

                <div
                    class="quick-post-footer-action text-tooltip-tft-medium"
                    data-title="Insert Video"
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
                    data-title="Insert Sound"
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
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import FileUpload from "@/components/common/FileUpload.vue";

import { VueEditor } from "vue2-editor";

import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";

import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";

import lowlight from "lowlight";

@Component({
    components: { FileUpload, VueEditor, EditorContent },
})
export default class Post extends Vue {
    private editor!: Editor;
    private postingText: string = "";
    private videoTag?: HTMLScriptElement;
    private player: any;
    private done = false;

    private filename: string = "";
    private imageSrc: string[] = [];

    private content: string = "";
    private youtubeLink: string[] = [];
    customToolbar = [""];
    textPreview: any = "";
    tempKey: string = "";
    userTag: string = "";

    // tiptap

    @Watch("postText")
    watchChar() {
        if (this.postingText.length > 5000) {
            alert("5000자 이상은 작성할 수 없습니다.");
            this.postingText = this.postingText.substring(0, 5000);
        }
    }

    async created() {
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
            ],
        });
    }

    beforeDestroy() {
        this.editor.destroy();
    }

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

    //이미지 업로드
    uploadImage() {
        (this.$refs.fileInput as HTMLElement).click();
    }
    // 이미지 업로드
    onFileChange(event: { target: { files: any } }) {
        this.inputImageFile(event.target.files);
        console.log(event.target.files);
    }

    inputImageFile(files: string | any[]) {
        if (files.length) {
            let file = files[0];
            if (!/^image\//.test(file.type)) {
                alert("이미지 파일만 등록이 가능합니다");
                return false;
            }
            this.filename = file.name;
            console.log(URL.createObjectURL(file));

            this.editor
                .chain()
                .focus()
                .setImage({ src: URL.createObjectURL(file) })
                .run();
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
}
</script>

<style lang="scss">
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
}
</style>
