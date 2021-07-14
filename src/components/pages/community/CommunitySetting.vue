<template>
    <div>
        <div class="grid-column">
            <div class="section-header-info mt-5">
                <h2 class="section-title mb-3">프로필 사진</h2>
                <p class="section-pretitle">
                    프로필 사진은 ZEMPIE가 제공하는 커뮤니티를 나타내는 위치에
                    표시됩니다.
                </p>
            </div>

            <div class="grid grid-3-3-3 centered">
                <img-preview
                    :profileImg="community.profile_img"
                    :bannerImg="community.banner_img"
                ></img-preview>
                <profile-img-uploader
                    @profileImgSrc="getProfileImgSrc"
                ></profile-img-uploader>
                <banner-img-uploader
                    @bannerImgSrc="getBannerImgSrc"
                ></banner-img-uploader>
            </div>
        </div>

        <div class="section-header-info mt-5">
            <h2 class="section-title mb-3">관리자</h2>
        </div>

        <!-- todo: call manager data -->

        <div>
            <div class="form-row mt-4">
                <div class="form-item">
                    <div class="form-select dropbox-container">
                        <b-form-group label="Manager" label-for="manager">
                            <b-form-select
                                @change="selectManager"
                                name="manager"
                                class="dropbox"
                                :value="managerInfo.uid"
                            >
                                <b-form-select-option
                                    v-for="member in memberList"
                                    :key="member.id"
                                    :value="member.uid"
                                >
                                    {{ member.name }}
                                </b-form-select-option>
                            </b-form-select>
                        </b-form-group>
                    </div>
                </div>
            </div>
        </div>

        <!-- subManager -->
        <!-- <div class="form-row mt-4">
            <div class="form-item">
                <div class="form-select dropbox-container">
                    <b-form-group label="Submanager" label-for="sub-manager">
                        <b-form-select name="sub-manager" class="dropbox">
                            <b-form-select-option
                                v-for="member in memberList"
                                :key="member.id"
                                :value="member.name"
                                >{{ member.name }}</b-form-select-option
                            >
                        </b-form-select>
                    </b-form-group>
                </div>
            </div>
        </div> -->
        <div class="section-header-info mt-5">
            <h2 class="section-title mb-3">정보</h2>
        </div>

        <div class="widget-box-content">
            <form class="form">
                <div
                    class="form-input right community-name"
                    :class="communityName.length > 0 ? 'active' : ''"
                >
                    <b-form-group label="Group name" label-for="communityName">
                        <b-form-input
                            type="text"
                            id="communityName"
                            v-model="$v.form.groupName.$model"
                            :state="
                                saveCommuInfo
                                    ? validateState('groupName')
                                    : undefined
                            "
                        ></b-form-input>
                        <b-form-invalid-feedback
                            >필수 입력사항입니다. 50자 이내로
                            작성해주세요</b-form-invalid-feedback
                        >
                    </b-form-group>
                </div>

                <div
                    class="form-input right community-name form-textarea"
                    :class="description.length > 0 ? 'active' : ''"
                >
                    <b-form-group label="Description" label-for="description">
                        <b-form-textarea
                            style="height: 300px"
                            id="description"
                            name="description"
                            v-model="$v.form.description.$model"
                            :state="
                                saveCommuInfo
                                    ? validateState('description')
                                    : undefined
                            "
                        ></b-form-textarea>

                        <b-form-invalid-feedback
                            >필수 입력사항입니다. 2000자 이내로
                            작성해주세요</b-form-invalid-feedback
                        >
                    </b-form-group>
                    <p class="form-textarea-limit-text">
                        {{ this.form.description.length }}/2000
                    </p>
                </div>
            </form>
            <div class="button-container" @click="saveCommuInfo">
                <p class="button small white add-field-button save-btn primary">
                    SAVE
                </p>
            </div>
        </div>

        <div class="danger-zone-conianer form-input active">
            <label class="danger-zone-label">Danger zone</label>
            <div class="danger-zone-table">
                <div class="form-item delete-container">
                    <div class="danger-zone-grid">
                        <p>커뮤니티 삭제</p>
                    </div>
                    <div class="danger-zone-grid">
                        <p
                            class="
                                button
                                small
                                white
                                add-field-button
                                m-0
                                tertiary
                            "
                            style="color: #fff"
                            @click="deleteCommunity"
                        >
                            DELETE
                        </p>
                    </div>
                </div>

                <div class="form-item delete-container">
                    <div class="toggle-container danger-zone-grid">
                        <p class="switch-option-title">Public community</p>

                        <p class="switch-option-text">
                            zempie에 방문하는 모든 회원에게 커뮤니티 공개
                        </p>
                    </div>

                    <div class="danger-zone-grid">
                        <div
                            class="form-switch"
                            @click="form.isPrivate = !form.isPrivate"
                            :class="form.isPrivate ? '' : 'active'"
                        >
                            <div class="form-switch-button"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";
import Dropdown from "@/plugins/dropdown";
import Hexagon from "@/plugins/hexagon";

import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

import ImgPreview from "@/components/common/upload/ImgPreview.vue";
import ProfileImgUploader from "@/components/common/upload/ProfileImgUploader.vue";
import BannerImgUploader from "@/components/common/upload/BannerImgUploader.vue";
import { User } from "@/types";
@Component({
    computed: { ...mapGetters(["user"]) },
    components: { ImgPreview, ProfileImgUploader, BannerImgUploader },
    mixins: [validationMixin],
    validations: {
        form: {
            groupName: {
                required,
                maxLength: maxLength(50),
            },
            groupUrl: {
                required,
                maxLength: maxLength(50),
            },
            description: {
                required,
                maxLength: maxLength(2000),
            },
        },
    },
})
export default class CommunitySetting extends Vue {
    private dropdown: Dropdown = new Dropdown();
    private hexagon: Hexagon = new Hexagon();

    private form = {
        groupName: "",
        groupUrl: "",
        managerUid: "",
        description: "",
        bannerImgSrc: "",
        profileImgSrc: "",
        isPrivate: false,
    };

    private user!: User;
    private communityId = parseInt(this.$route.params.community_id);
    private community: any;
    private description: string = "";
    private communityName: string = "";
    // private communityMember: string

    private filename: string = "";
    private imgType: string = "";
    private isDescError: boolean = false;
    private isNameError: boolean = false;

    private memberList: User[] = [];
    private managerInfo: User = {} as User;
    private selectedManager: string = "";

    async created() {
        this.community = this.$api.getCommunityInfo(this.communityId);
        this.form.groupName = this.community.name;
        this.form.description = this.community.description;
        this.form.isPrivate = this.community.is_private;
        this.memberList = this.$api.getCommunityMember(this.communityId);
        this.managerInfo = await this.$api.getUserInfo(
            this.community.manager_uid
        );
        this.selectedManager = this.managerInfo.uid;

        // this.profileImgSrc = this.community.profile_img;
        // this.bannerImgSrc = this.community.banner_img;
    }

    validateState(name) {
        const { $dirty, $error } = this.$v.form[name]!;
        return $dirty ? !$error : null;
    }
    mounted() {
        this.hexagon.init();
        this.dropdown.init();
        this.description = this.community.description;
        this.communityName = this.community.name;
    }
    selectManager(e) {
        this.selectedManager = e;
    }

    async saveCommuInfo(event) {
        event.preventDefault();
        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
            return;
        }
        console.log(
            this.selectedManager,
            this.communityId,
            this.form.groupName,
            this.form.description,
            this.form.isPrivate
        );
        // const result = this.$api.modifiedCommunityInfo(
        //     this.communityId,
        //     this.communityName,
        //     this.description,
        //     this.profileImgSrc,
        //     this.bannerImgSrc
        // );
        // console.log(result);
        // if (result === true) {
        // }
    }
    deleteCommunity() {
        const result = this.$api.deleteCommunity(this.communityId);
    }

    @Watch("description")
    watchChar() {
        if (this.description.length > 2000) {
            this.description = this.description.substring(0, 2000);
            this.isDescError = true;
        } else if (this.description.length < 2000) {
            this.isDescError = false;
        }
    }

    @Watch("communityName")
    watchCommuName() {
        if (this.communityName.length > 50) {
            this.communityName = this.communityName.substring(0, 50);
            this.isNameError = true;
        } else if (this.communityName.length < 50) {
            this.isNameError = false;
        }
    }
    getBannerImgSrc(imgSrc: string) {
        this.form.bannerImgSrc = imgSrc;
    }
    getProfileImgSrc(imgSrc: string) {
        this.form.profileImgSrc = imgSrc;
    }
}
</script>

<style lang='scss' scoped>
.limit-text-container {
    display: flex;
    width: 100%;
}
.button-container {
    display: flex;
    justify-content: flex-end;

    .save-btn {
        color: #fff;
    }
}
.delete-container {
    margin: 30px 0px 30px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.dropbox-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 48px;
    font-size: 1rem;
    .dropbox {
        height: 54px;
    }
}
.form-group {
    width: 100%;
}
.danger-zone-conianer {
    border: 1px solid red;
    border-radius: 12px;
    margin-top: 50px;
    .danger-zone-label {
        color: red;
        font-size: 30px;
        top: -13px;
    }
    .switch-option {
        display: flex;
        justify-content: space-around;
        margin-bottom: 30px;
    }
    .danger-zone-table {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .form-switch {
        margin: 0 auto;
    }
    .danger-zone-grid {
        width: 50%;
        text-align: center;
        .switch-option-text {
            margin-top: 4px;
            color: #8f91ac;
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1.4285714286em;
        }
    }
}
</style>
