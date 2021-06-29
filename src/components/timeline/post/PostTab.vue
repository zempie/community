<template>
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
                            />
                        </div>
                        <div v-if="activeTab === 'post'">
                            <editor-content
                                :editor="editor"
                                class="editor-container"
                                v-model="content"
                            />
                        </div>

                        <div style="height: 0px; overflow: hidden">
                            <input type="file" @change="onFileChange" accept=
                            image/* ref="image" name="fileInput" />
                        </div>

                        <div style="height: 0px; overflow: hidden">
                            <input type="file" @change="onFileChange" accept=
                            video/* ref="video" />
                        </div>
                        <div style="height: 0px; overflow: hidden">
                            <input type="file" @change="onFileChange" accept=
                            audio/* ref="sound" />
                        </div>

                        <p class="form-textarea-limit-text">
                            {{ this.postingText.length }}/5000
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class PostTab extends Vue {}
</script>

<style scoped>
</style>
