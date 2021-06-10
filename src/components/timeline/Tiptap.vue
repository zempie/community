<template>
    <editor-content :editor="editor" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";

@Component({
    components: { EditorContent },
})
export default class Tiptap extends Vue {
    private editor!: Editor;

    async created() {
        this.editor = new Editor({
            content: "<p>I’m running tiptap with Vue.js. 🎉</p>",
            extensions: [StarterKit],
        });
        console.log(this.editor);
    }

    beforeDestroy() {
        this.editor.destroy();
    }
}
</script>

<style scoped>
</style>
