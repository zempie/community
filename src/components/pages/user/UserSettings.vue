<template>
    <div class="content-grid">
        <div class="account-hub-content">
            <div class="section-header">
                <div class="section-header-info">
                    <p class="section-pretitle">Account</p>

                    <h2 class="section-title">General Settings</h2>
                </div>
            </div>
            <div class="grid-column">
                <div class="widget-box mb-5 text-left">
                    <p class="widget-box-title">Personal Info</p>
                    <div class="grid grid-half centered" v-if="user">
                        <img-preview
                            :profileImg="user && user.picture"
                            :bannerImg="'https://contattafiles.s3.us-west-1.amazonaws.com/tnt34018/7tA7006wJaTGd1F/Pasted%20Image%3A%20Jul%2012%2C%202021%20-%2011%3A40%3A07am'"
                        ></img-preview>
                        <profile-img-uploader
                            @profileImgSrc="getProfileImgSrc"
                        ></profile-img-uploader>
                    </div>
                    <div class="widget-box-content">
                        <form class="form">
                            <div class="form-row split">
                                <div class="form-item">
                                    <div class="form-input small active">
                                        <label for="account-full-name"
                                            >Nickname</label
                                        >
                                        <input
                                            readonly
                                            type="text"
                                            id="account-full-name"
                                            name="account_full_name"
                                            :value="user && user.name"
                                        />
                                    </div>
                                </div>

                                <div class="form-item">
                                    <div class="form-input small active">
                                        <label for="account-email"
                                            >Account Email</label
                                        >
                                        <input
                                            readonly
                                            type="text"
                                            id="account-email"
                                            name="account_email"
                                            :value="user && user.email"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="widget-box text-left mb-5">
                    <p class="widget-box-title">Notifications</p>

                    <div class="widget-box-content">
                        <div class="switch-option-list">
                            <div class="switch-option">
                                <p class="switch-option-title">Comments</p>

                                <p class="switch-option-text">
                                    You'll be notified when someone comments on
                                    your posts and/or replies to your comments
                                </p>

                                <div
                                    class="form-switch"
                                    @click="switchOnOff('comment')"
                                    :class="isCommentOn ? 'active' : ''"
                                >
                                    <div class="form-switch-button"></div>
                                </div>
                            </div>

                            <div class="switch-option">
                                <p class="switch-option-title">Likes</p>

                                <p class="switch-option-text">
                                    These are notifications for when someone
                                    likes your comment or post
                                </p>

                                <div
                                    class="form-switch"
                                    @click="switchOnOff('like')"
                                    :class="isLikeOn ? 'active' : ''"
                                >
                                    <div class="form-switch-button"></div>
                                </div>
                            </div>

                            <div class="switch-option">
                                <p class="switch-option-title">Follow</p>

                                <p class="switch-option-text">
                                    You'll be notified when someone follow you
                                </p>

                                <div
                                    class="form-switch"
                                    @click="switchOnOff('follow')"
                                    :class="isFollowOn ? 'active' : ''"
                                >
                                    <div class="form-switch-button"></div>
                                </div>
                            </div>

                            <div class="switch-option">
                                <p class="switch-option-title">Mention</p>

                                <p class="switch-option-text">
                                    These are notifications for when someone
                                    mentions you in a post or comment
                                </p>

                                <div
                                    class="form-switch"
                                    @click="switchOnOff('mention')"
                                    :class="isMentionOn ? 'active' : ''"
                                >
                                    <div class="form-switch-button"></div>
                                </div>
                            </div>

                            <div class="switch-option">
                                <p class="switch-option-title">Retweet</p>

                                <p class="switch-option-text">
                                    You'll be notified when someone retweet your
                                    post
                                </p>

                                <div
                                    class="form-switch"
                                    @click="switchOnOff('retweet')"
                                    :class="isRetweetOn ? 'active' : ''"
                                >
                                    <div class="form-switch-button"></div>
                                </div>
                            </div>

                            <div class="switch-option">
                                <p class="switch-option-title">
                                    Direct Message
                                </p>

                                <p class="switch-option-text">
                                    These are notifications for when someone
                                    send you direct message
                                </p>

                                <div
                                    class="form-switch"
                                    @click="switchOnOff('dm')"
                                    :class="isDmOn ? 'active' : ''"
                                >
                                    <div class="form-switch-button"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="widget-box text-left">
                    <p class="widget-box-title">Account</p>
                    <div class="widget-box-content">
                        <div class="switch-option-list">
                            <div class="switch-option">
                                <p class="switch-option-title">계정 비활성화</p>
                                <p class="switch-option-text">
                                    계정을 비활성화하시면 해당 계정이 삭제되고
                                    관련된 게시글은 그대로 유지됩니다.
                                </p>
                                <div class="delete-account-btn">
                                    <b-button variant="danger" @click="leave"
                                        >계정 비활성화</b-button
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

import Hexagon from "@/plugins/hexagon";
import ImgPreview from "@/components/common/upload/ImgPreview.vue";
import ProfileImgUploader from "@/components/common/upload/ProfileImgUploader.vue";
import BannerImgUploader from "@/components/common/upload/BannerImgUploader.vue";
import { User } from "@/types";

@Component({
    computed: { ...mapGetters(["user"]) },
    components: { ImgPreview, ProfileImgUploader, BannerImgUploader },
})
export default class UserSettings extends Vue {
    private hexagon: Hexagon = new Hexagon();
    private user!: User;
    private isCommentOn: boolean = false;
    private isLikeOn: boolean = false;
    private isFollowOn: boolean = false;
    private isMentionOn: boolean = false;
    private isRetweetOn: boolean = false;
    private isDmOn: boolean = false;

    private form = {
        bannerImgSrc: "",
        profileImgSrc: "",
    };
    mounted() {
        this.hexagon.init();
    }
    async switchOnOff(type: string) {
        if (type === "comment") {
            this.isCommentOn = !this.isCommentOn;
        } else if (type === "like") {
            this.isLikeOn = !this.isLikeOn;
        } else if (type === "follow") {
            this.isFollowOn = !this.isFollowOn;
        } else if (type === "mention") {
            this.isMentionOn = !this.isMentionOn;
        } else if (type === "retweet") {
            this.isRetweetOn = !this.isRetweetOn;
        } else if (type === "dm") {
            this.isDmOn = !this.isDmOn;
        }

        await this.$api.alarmOnOff(type);
    }

    getProfileImgSrc(imgSrc: string) {
        this.form.profileImgSrc = imgSrc;
    }

    userInfo() {
        try {
            return this.user;
        } catch (error) {}
    }
    async leave() {
        await this.$router.push("/leave");
    }
}
</script>

<style lang="scss" scoped>
.delete-account-btn {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
}
</style>
