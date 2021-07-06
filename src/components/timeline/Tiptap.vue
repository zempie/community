<template>
    <div>
       
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Editor, EditorContent } from "@tiptap/vue-2";
import StarterKit from "@tiptap/starter-kit";

import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";

@Component({
    components: { EditorContent },
})
export default class Tiptap extends Vue {
  
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
