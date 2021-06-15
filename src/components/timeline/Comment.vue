<template>
    <!--  unread reply-2 -->
    <div class="post-comment">
        <!-- {{userInfo}} -->
        <router-link class="user-avatar small no-outline" :to="`/channel/${userInfo.uid}/timeline`">
            <div class="user-avatar-content">
                <div
                    class="hexagon-image-30-32"
                    :data-src="userInfo && userInfo.picture"
                ></div>
            </div>

            <div class="user-avatar-progress">
                <div class="hexagon-progress-40-44"></div>
            </div>

            <div class="user-avatar-progress-border">
                <div class="hexagon-border-40-44"></div>
            </div>
        </router-link>

        <p class="post-comment-text">
            <a class="post-comment-text-author" href="profile-timeline.html">{{
                userInfo && userInfo.name
            }}</a
            >{{ comment && comment.content }}
        </p>
        <div class="content-actions">
            <div class="content-action">
                <div class="meta-line">
                    <div class="meta-line-list reaction-item-list small">
                        <div class="reaction-item"></div>

                        <div class="reaction-item">
                            <img
                                class="reaction-image"
                                src="../../img/reaction/love.png"
                                alt="reaction-love"
                            />
                        </div>
                    </div>

                    <p class="meta-line-text">
                        {{ comment && comment.like_cnt }}
                    </p>
                </div>

                <div class="meta-line">
                    <p
                        class="
                            meta-line-link
                            light
                            reaction-options-small-dropdown-trigger
                        "
                    >
                        Like!
                    </p>
                </div>

                <div class="meta-line">
                    <p class="meta-line-link light">Reply</p>
                </div>

                <div class="meta-line">
                    <p class="meta-line-timestamp">15 min ago</p>
                </div>

                <div class="meta-line settings">
                    <div class="post-settings-wrap">
                        <div
                            class="post-settings post-settings-dropdown-trigger"
                        >
                            <svg class="post-settings-icon icon-more-dots">
                                <use xlink:href="#svg-more-dots"></use>
                            </svg>
                        </div>

                        <div class="simple-dropdown post-settings-dropdown">
                            <p class="simple-dropdown-link">Report Post</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Hexagon from "@/plugins/hexagon";
import Form from "@/script/form";

@Component({
    components: {},
})
export default class Comment extends Vue {
    @Prop() comment!: any;
    private hexagon: Hexagon = new Hexagon();
    private userInfo: any = [];

    mounted() {
         Form.formInput();
        console.log(this.comment);
        this.init();
        this.hexagon.init();
    }
    async init() {
        const result = await this.$api.channel(this.comment.user_uid);
        this.userInfo = result.target;
    }
}
</script>

<style scoped>
.post-comment-text {
    text-align: left;
}
</style>
