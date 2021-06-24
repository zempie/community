<template>
    <div class="content-grid">
        <div class="section-banner">
            <img
                class="section-banner-icon"
                src="../../../img/banner/accounthub-icon.png"
                alt="accounthub-icon"
            />

            <p class="section-banner-title">Manage Group</p>
        </div>
        <div class="simple-tab-items">
            <div class="form">
                <div class="form-select">
                    <select
                        id="newsfeed-filter-category"
                        name="newsfeed_filter_category"
                    >
                        <option value="0">All Updates</option>
                        <option value="1">Mentions</option>
                        <option value="2">Friends</option>
                        <option value="3">Groups</option>
                        <option value="4">Blog Posts</option>
                    </select>

                    <svg class="form-select-icon icon-small-arrow">
                        <use xlink:href="#svg-small-arrow"></use>
                    </svg>
                </div>
            </div>

            <p class="simple-tab-item active">정보</p>

            <p class="simple-tab-item">유저 관리</p>

            <p class="simple-tab-item">Groups</p>

            <p class="simple-tab-item">Blog Posts</p>
        </div>
        <div class="grid-column">
            <div class="section-header-info mt-5">
                <h2 class="section-title mb-3">프로필 사진</h2>
                <p class="section-pretitle">
                    프로필 사진은 ZEMPIE가 제공하는 커뮤니티를 나타내는 위치에
                    표시됩니다.
                </p>
            </div>

            <div class="grid grid-3-3-3 centered">
                <div class="user-preview small fixed-height">
                    <figure
                        class="user-preview-cover liquid"
                        style="
                            background: url('../../../img/cover/01.jpg') center
                                center / cover no-repeat;
                        "
                    >
                        <img
                            src="../../../img/cover/01.jpg"
                            alt="cover-01"
                            style="display: none"
                        />
                    </figure>

                    <div class="user-preview-info">
                        <div class="user-short-description small">
                            <div
                                class="
                                    user-short-description-avatar user-avatar
                                "
                            >
                                <div class="user-avatar-content">
                                    <div
                                        :key="imgSrc"
                                        class="hexagon-image-68-74"
                                        :data-src="imgSrc"
                                        style="
                                            width: 68px;
                                            height: 74px;
                                            position: relative;
                                        "
                                    >
                                        <canvas
                                            width="68"
                                            height="74"
                                            style="
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                            "
                                        ></canvas>
                                    </div>
                                </div>

                                <div class="user-avatar-progress">
                                    <div
                                        class="hexagon-progress-84-92"
                                        style="
                                            width: 84px;
                                            height: 92px;
                                            position: relative;
                                        "
                                    >
                                        <canvas
                                            width="84"
                                            height="92"
                                            style="
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                            "
                                        ></canvas>
                                    </div>
                                </div>

                                <div class="user-avatar-progress-border">
                                    <div
                                        class="hexagon-border-84-92"
                                        style="
                                            width: 84px;
                                            height: 92px;
                                            position: relative;
                                        "
                                    >
                                        <canvas
                                            width="84"
                                            height="92"
                                            style="
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                            "
                                        ></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="upload-box" @click="uploadFile('profileImg')">
                    <div style="height: 0px; overflow: hidden">
                        <input type="file" @change="onFileChange" accept=
                        image/* ref="profileImg" name="fileInput" />
                    </div>
                    <svg class="upload-box-icon icon-members">
                        <use xlink:href="#svg-members"></use>
                    </svg>

                    <p class="upload-box-title">Change Avatar</p>

                    <p class="upload-box-text">110x110px size minimum</p>
                </div>

                <div class="upload-box" @click="uploadFile('bannerImg')">
                     <div style="height: 0px; overflow: hidden">
                        <input type="file" @change="onFileChange" accept=
                        image/* ref="bannerImg" name="fileInput" />
                    </div>
                    <svg class="upload-box-icon icon-photos">
                        <use xlink:href="#svg-photos"></use>
                    </svg>

                    <p class="upload-box-title">Change Cover</p>

                    <p class="upload-box-text">1184x300px size minimum</p>
                </div>
            </div>
        </div>

        <div class="section-header-info mt-5">
            <h2 class="section-title mb-3">정보</h2>
        </div>

        <div class="widget-box-content">
            <form class="form">
                <div class="form-item">
                    <p class="left">커뮤니티 명</p>
                    <div class="form-input right">
                        <input
                            type="text"
                            id="account-recovery-email"
                            name="account_recovery_email"
                            :value="community.name"
                        />
                    </div>
                </div>

                <div class="form-item mt-4">
                    <p class="left">커뮤니티 설명</p>
                    <div class="form-input right full">
                        <textarea
                            id="profile-description"
                            name="profile_description"
                            v-model="description"
                            placeholder="Write a little description about community..."
                        ></textarea>
                    </div>
                </div>
            </form>
            <p class="button small white add-field-button">SAVE</p>
        </div>
        <div class="form-item delete-container">
            <p class="left">커뮤니티 삭제</p>
            <p class="button small white add-field-button">DELETE</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import Dropdown from "@/plugins/dropdown";
import Hexagon from "@/plugins/hexagon";

@Component({
    computed: { ...mapGetters(["user"]) },
    components: {},
})
export default class CommunitySettings extends Vue {
    private dropdown: Dropdown = new Dropdown();
    private hexagon: Hexagon = new Hexagon();

    private user!: any;
    private communityId = parseInt(this.$route.params.community_id);
    private community: any;
    private description: string = "";

    private filename: string = "";
    private imgSrc: string = "";
    created() {
        this.community = this.$api.getCommunityInfo(this.communityId);
        this.imgSrc = this.community.profile_img;
    }
    mounted() {
        this.hexagon.init();
        this.dropdown.init();
        this.description = this.community.description;
        
        if (!this.user) {
            this.$store.subscribe(async ({ type }) => {
                if (type.toLowerCase() === "user") {
                }
            });
        } else {
        }
    }
    // 파일 업로드
    onFileChange(event: { target: { files: any } }) {
        this.inputFile(event.target.files);
        console.log(event.target.files);
    }
    //첨부파일 업로드
    uploadFile(fileType: string) {
        console.log(fileType);
        (this.$refs[fileType] as HTMLElement).click();
    }
    inputFile(files: string | any[]) {
        if (files.length) {
            let file = files[0];
            this.filename = file.name;
            this.imgSrc = URL.createObjectURL(file);
        }
    }
}
</script>

<style lang='scss' scoped>
.simple-tab-items {
    margin-top: 32px;
}
.form-item {
    display: flex;
    .left {
        width: 30%;
    }
    .right {
        width: 70%;
    }
}
</style>
