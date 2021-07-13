<template>
    <editor-content
        :editor="editor"
        class="editor-container"
        v-model="postingText"
    />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import { mapGetters } from "vuex";
import { Editor, EditorContent, VueRenderer } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";

import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import Dropcursor from "@tiptap/extension-dropcursor";

import lowlight from "lowlight";

//custom tiptap
import Video from "@/script/tiptap/customVideo";
import Audio from "@/script/tiptap/customAudio";
import Iframe from "@/script/tiptap/iframe";
import Hashtag from "@/script/tiptap/hashtag";
import Mention from "@/script/tiptap/mention";
import Image from "@/script/tiptap/image"

import HahstagList from "./HashTagList.vue";
import MentionList from "./MentionList.vue";
import tippy from "tippy.js";
import { bus } from "@/main";

@Component({
    computed: { ...mapGetters(["user"]) },
    components: { EditorContent },
})
export default class TiptapPost extends Vue {
    @Prop() postType !:any;
    private imgPreviewArr: any[] = [];
    private postingText: string = "";
    private editor!: Editor;
    private fileLoader: any;
    private user!: any;

    // 해시태그 멘션
    private hasTagSuggestion: boolean = false;
    private postedHashtag: string[] = [];

    private hasMentionSuggestion: boolean = false;
    private mentionList: any[] = [];
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
    // tiptap

    @Watch("user")
    async watchUser() {
        this.mentionList = await this.$api.followingList(this.user.uid);
    }

    async created() {
        this.editor = new Editor({
            content: this.postingText,
            extensions: [
                StarterKit,
                Image,
                CodeBlockLowlight.configure({
                    lowlight,
                }),
                Placeholder.configure({ placeholder: "멋진 생각을 공유해주세요." }),
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
                            return this.mentionList
                                .filter((item) =>
                                    item.nickname
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
                                        getReferenceClientRect:
                                            props.clientRect,
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
                                            .insertContentAt(
                                                component.ref?._props.range,
                                                [
                                                    {
                                                        type: "mention",
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
            ],
            autofocus: "end",
            onUpdate: () => {
                this.$emit("isEmpty", this.editor.isEmpty);
            },
        });
    }
    mounted(){
        console.log(this.postType)
    }
}
</script>

<style lang="scss" scoped>
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
}
</style>
