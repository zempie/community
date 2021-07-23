<template>
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
        <div style="height: 0px; overflow: hidden">
            <input type="file" @change="onFileChange" multiple accept= image/*
            ref="image" name="fileInput" />
        </div>

        <div style="height: 0px; overflow: hidden">
            <input type="file" @change="onFileChange" accept= video/*
            ref="video" />
        </div>
        <div style="height: 0px; overflow: hidden">
            <input type="file" @change="onFileChange" multiple accept= audio/*
            ref="audio" />
        </div>
        <div style="display: flex; justify-content: space-between">
            <b-form-checkbox
                class="private-checkbox"
                v-model="visibility"
                name="checkbox-1"
                value="private"
                unchecked-value="public"
            >
                Private
            </b-form-checkbox>
            <p class="form-textarea-limit-text" style="padding-top: 18px">
                {{ this.postingText.length }}/5000
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class BlogPost extends Vue {
    //첨부파일 업로드
    uploadFile(fileType: string) {
        // this.selectedFileType = fileType;

        (this.$refs[fileType] as HTMLElement).click();
    }

    // 파일 업로드
    onFileChange(event: { target: { accept: any; files: any } }) {
        // this.inputFile(event.target.files);
    }
    
}
</script>

<style scoped>
</style>
