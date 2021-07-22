<template>
    <div>
        <editor-content
            v-if="user"
            :editor="editor"
            class="editor-container"
            v-model="postingText"
        />
        <div class="character-count">
            <p>{{ charCnt }}/{{ limit }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import { mapGetters } from "vuex";
import { Editor, EditorContent, VueRenderer } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";

import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import Dropcursor from "@tiptap/extension-dropcursor";

import lowlight from "lowlight";

import Video from "@/script/tiptap/customVideo";
import Audio from "@/script/tiptap/customAudio";
import Iframe from "@/script/tiptap/iframe";
import Hashtag from "@/script/tiptap/hashtag";
import CharacterCount from "@tiptap/extension-character-count";
import Mention from "@/script/tiptap/mention";

import HahstagList from "./HashTagList.vue";
import MentionList from "./MentionList.vue";
import tippy from "tippy.js";
import { bus } from "@/main";
import { User } from "@/types";

@Component({
    computed: { ...mapGetters(["user"]) },
    components: { EditorContent },
})
export default class TiptapSns extends Vue {
    @Prop() feed!: any;
    @Prop() postType!: any;
    private imgPreviewArr: any[] = [];
    private postingText: string = "";
    private editor!: Editor;
    private fileLoader: any;
    private user!: User;
    private limit: number = 300;
    private charCnt: number = 0;

    // 해시태그 멘션
    private hasTagSuggestion: boolean = false;
    private postedHashtag: string[] = [];

    private hasMentionSuggestion: boolean = false;
    private mentionList: any[] = [];
    hashTagList: string[] = [];
    // tiptap

    @Watch("user")
    async watchUser() {
        this.mentionList = await this.$api.followingList(this.user.uid);
    }

    @Watch("$store.getters.isClearEditor")
    watchReset() {
        this.editor.commands.clearContent();
    }
    async created() {
        this.editorInit();
    }
    async mounted() {
        await this.$store.dispatch("loginState");
        console.log("TiptapSns", this.feed);
        if (this.feed) {
            this.editor.commands.setContent(this.feed.content);
            this.charCnt = this.editor.getCharacterCount();
        }
    }
    @Watch("user")
    editorInit() {
        console.log("editor init", this.user);
        this.editor = new Editor({
            content: this.postingText,
            extensions: [
                StarterKit,
                Placeholder.configure({
                    placeholder: this.user
                        ? "멋진 생각을 공유해주세요."
                        : " 로그인 후 사용해주세요.",
                }),
                Link,
                Highlight,
                Typography,
                Dropcursor,
                CharacterCount.configure({
                    limit: this.limit,
                }),
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
                        items: async (query) => {
                            if (query.length > 0) {
                                this.hashTagList =
                                    await this.$api.hashtagList();
                                return this.hashTagList
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
                this.$store.commit("postContents", this.editor.getHTML());
                this.$store.commit("isClearEditor", false);
                this.charCnt = this.editor.getCharacterCount();
            },
        });
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
