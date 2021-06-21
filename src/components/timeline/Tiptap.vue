<template>
    <div>
        <div v-if="editor" class="editor-header">
            <button
                class="menu-item"
                @click="editor.chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') }"
            >
                <i class="ri-bold"></i>
            </button>
            <!-- <button
              class="menu-item"
                @click="editor.chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }"
            >
                italic
            </button>
            <button
              class="menu-item"
                @click="editor.chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }"
            >
                strike
            </button> -->
            <button
                class="menu-item"
                @click="editor.chain().focus().toggleCode().run()"
                :class="{ 'is-active': editor.isActive('code') }"
            >
                <i class="ri-code-view"></i>
            </button>
            <!-- <button  class="menu-item" @click="editor.chain().focus().unsetAllMarks().run()">
                clear marks
            </button>
            <button  class="menu-item" @click="editor.chain().focus().clearNodes().run()">
                clear nodes
            </button>
            <button  class="menu-item"
                @click="editor.chain().focus().setParagraph().run()"
                :class="{ 'is-active': editor.isActive('paragraph') }"
            >
                paragraph
            </button>
            <button  class="menu-item"
                @click="
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                "
                :class="{
                    'is-active': editor.isActive('heading', { level: 1 }),
                }"
            >
                h1
            </button>
            <button  class="menu-item"
                @click="
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                "
                :class="{
                    'is-active': editor.isActive('heading', { level: 2 }),
                }"
            >
                h2
            </button>
            <button  class="menu-item"
                @click="
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                "
                :class="{
                    'is-active': editor.isActive('heading', { level: 3 }),
                }"
            >
                h3
            </button>
            <button  class="menu-item"
                @click="
                    editor.chain().focus().toggleHeading({ level: 4 }).run()
                "
                :class="{
                    'is-active': editor.isActive('heading', { level: 4 }),
                }"
            >
                h4
            </button>
            <button  class="menu-item"
                @click="
                    editor.chain().focus().toggleHeading({ level: 5 }).run()
                "
                :class="{
                    'is-active': editor.isActive('heading', { level: 5 }),
                }"
            >
                h5
            </button>
            <button  class="menu-item"
                @click="
                    editor.chain().focus().toggleHeading({ level: 6 }).run()
                "
                :class="{
                    'is-active': editor.isActive('heading', { level: 6 }),
                }"
            >
                h6
            </button>
            <button  class="menu-item"
                @click="editor.chain().focus().toggleBulletList().run()"
                :class="{ 'is-active': editor.isActive('bulletList') }"
            >
                bullet list
            </button>
            <button  class="menu-item"
                @click="editor.chain().focus().toggleOrderedList().run()"
                :class="{ 'is-active': editor.isActive('orderedList') }"
            >
                ordered list
            </button> -->
            <button
                class="menu-item"
                @click="editor.chain().focus().toggleCodeBlock().run()"
                :class="{ 'is-active': editor.isActive('codeBlock') }"
            >
                <i class="ri-code-box-line"></i>
            </button>
            <!-- <button  class="menu-item"
                @click="editor.chain().focus().toggleBlockquote().run()"
                :class="{ 'is-active': editor.isActive('blockquote') }"
            >
                blockquote
            </button>
            <button  class="menu-item" @click="editor.chain().focus().setHorizontalRule().run()">
                horizontal rule
            </button>
            <button  class="menu-item" @click="editor.chain().focus().setHardBreak().run()">
                hard break
            </button> -->
            <button
                class="menu-item"
                @click="editor.chain().focus().undo().run()"
            >
                <i class="ri-arrow-go-back-line"></i>
            </button>
            <button
                class="menu-item"
                @click="editor.chain().focus().redo().run()"
            >
                <i class="ri-arrow-go-forward-line"></i>
            </button>
            <button class="menu-item" @click="uploadImage">
                <i class="ri-image-line"></i>
            </button>
            <div style="height: 0px; overflow: hidden">
                <input type="file" @change="onFileChange" accept= image/*
                ref="fileInput" name="fileInput" />
            </div>
            
        </div>

        <editor-content :editor="editor" />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";

import Image from "@tiptap/extension-image";
import Placeholder from '@tiptap/extension-placeholder'

@Component({
    components: { EditorContent },
})
export default class Tiptap extends Vue {
    private editor!: Editor;
    private filename: string = "";
    async created() {
        this.editor = new Editor({
            content: "",
            extensions: [StarterKit, Image, Placeholder.configure({placeholder: '안녕하세요'} )],
        });
    }

    beforeDestroy() {
        this.editor.destroy();
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
}
</script>

<style scoped>

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

</style>
