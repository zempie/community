<template>
    <div class="quick-post">
        <div class="quick-post-header">
            <div class="option-items">
                <div class="option-item active">
                    <svg class="option-item-icon icon-status">
                        <use xlink:href="#svg-status"></use>
                    </svg>

                    <p class="option-item-title">Status</p>
                </div>

                <div class="option-item">
                    <svg class="option-item-icon icon-blog-posts">
                        <use xlink:href="#svg-blog-posts"></use>
                    </svg>

                    <p class="option-item-title">Blog Post</p>
                </div>

                <div class="option-item">
                    <svg class="option-item-icon icon-poll">
                        <use xlink:href="#svg-poll"></use>
                    </svg>

                    <p class="option-item-title">Poll</p>
                </div>
            </div>
        </div>

        <div class="quick-post-body">
            <form class="form">
                <div class="form-row">
                    <div class="form-item">
                        <div class="form-textarea">
                            <textarea
                                v-model="postingText"
                                id="quick-post-text"
                                name="quick-post-text"
                                placeholder="Hi Marina! Share your post here..."
                            ></textarea>

                            <p class="form-textarea-limit-text">
                                {{ this.postingText.length }}/5000
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>

        <div class="quick-post-footer">
            <div class="quick-post-footer-actions">
                <div
                    class="quick-post-footer-action text-tooltip-tft-medium"
                    data-title="Insert Photo"
                >
                    <svg class="quick-post-footer-action-icon icon-camera">
                        <use xlink:href="#svg-camera"></use>
                    </svg>
                </div>

                <div
                    class="quick-post-footer-action text-tooltip-tft-medium"
                    data-title="Insert Video"
                >
                    video
                </div>

                <div
                    class="quick-post-footer-action text-tooltip-tft-medium"
                    data-title="Insert Tag"
                >
                    link
                </div>
                  <div
                    class="quick-post-footer-action text-tooltip-tft-medium"
                    data-title="Insert Tag"
                >
                    sound
                </div>
            </div>

            <div class="quick-post-footer-actions">
                <p class="button small void" >임시 저장</p>

                <p class="button small secondary">Post</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
    components: {},
})
export default class Post extends Vue {
    private postingText: string = "";

    @Watch("postText")
    watchChar() {
        if (this.postingText.length > 5000) {
            alert("5000자 이상은 작성할 수 없습니다.")
            this.postingText = this.postingText.substring(0, 5000);
        }
    }
}
</script>

<style scoped>
</style>
