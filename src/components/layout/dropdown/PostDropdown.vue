<template>
    <div class="widget-box-settings">
        <div class="post-settings-wrap">
            <div
                class="post-settings widget-box-post-settings-dropdown-trigger"
                ref="dropbox"
            >
                <svg class="post-settings-icon icon-more-dots">
                    <use xlink:href="#svg-more-dots"></use>
                </svg>
            </div>

            <div class="simple-dropdown widget-box-post-settings-dropdown">
                <p class="simple-dropdown-link" @click="openEdit">
                    포스팅 수정
                </p>
                <p class="simple-dropdown-link" @click="deletePost(feedId)">
                    포스팅 삭제
                </p>
                <p
                    class="simple-dropdown-link"
                    v-b-modal="feedId.toString()"
                    @click="report('post')"
                >
                    포스팅 신고
                </p>
                <p
                    class="simple-dropdown-link"
                    v-b-modal="feedId.toString()"
                    @click="report('user')"
                >
                    작성자 신고
                </p>
            </div>
        </div>
        <modal
            :reportId="feedId.toString()"
            :title="userReport ? modalTitle2 : modalTitle1"
            :key="uniqeKey"
        >
            <template v-slot:reason1>욕설</template>
            <template v-slot:reason2>스팸</template>
            <template v-slot:reason3>음란성</template>
            <template v-slot:userBlock v-if="userReport">
                <div class="form-row" style="margin-top: 28px">
                    <div class="checkbox-wrap">
                        <input
                            type="checkbox"
                            id="userBlock"
                            name="reportReason"
                            v-model="isUserBlock"
                        />

                        <div class="checkbox-box">
                            <svg class="icon-check">
                                <use xlink:href="#svg-check"></use>
                            </svg>
                        </div>
                        <label for="userBlock" class="report-reason"
                            >유저를 블락하시겠습니까?</label
                        >
                    </div>
                </div></template
            >
        </modal>

        <delete-modal :show="show" :key="show" @closeModal="closeModal">
            <template v-slot:yesDelete>
                <button
                    class="popup-box-action half button tertiary"
                    @click="yesDeletePost"
                >
                    네, 삭제하겠습니다.
                </button>
            </template>
        </delete-modal>

        <b-modal
            modal-class="post-edit-modal"
            centered
            hide-header
            hide-footer
            v-model="isShowEditPost"
            ref="editModal"
        >
            <post>
                <template v-slot:closeBtn>
                    <div class="modal-close-container">
                        <svg class="icon-cross text-right">
                            <use xlink:href="#svg-cross"></use>
                        </svg>
                    </div>
                </template>
                <template v-slot:saveType>
                    <p class="button small secondary">post</p>
                </template>
            </post>
        </b-modal>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Modal from "@/components/common/Modal.vue";
import DeleteModal from "@/components/common/DeleteModal.vue";
import Dropdown from "@/plugins/dropdown";
import { bus } from "@/main";

import Post from "@/components/timeline/Post.vue";
@Component({
    components: { Modal, DeleteModal, Post },
})
export default class PostDropdown extends Vue {
    @Prop() feedId!: any;
    private dropdown: Dropdown = new Dropdown();

    private modalTitle1: string = "Report Post";
    private modalTitle2: string = "Report User";
    private uniqeKey: number = 0;
    private userReport: boolean = false;
    private isUserBlock: boolean = false;
    private show: boolean = false;
    private timeId: number = 0;
    private isShowEditPost: boolean = false;
    mounted() {
        this.dropdown.init();
    }
    destroy() {
        this.timeId = 0;
    }
    deletePost(postId: number) {
        (this.$refs.dropbox as HTMLElement).click();
        this.show = true;

        const result = this.$api.deletePost(postId);
    }

    closeModal() {
        this.timeId = setTimeout(() => {
            this.show = false;
        }, 300);
    }

    async yesDeletePost() {
        console.log("delet", this.feedId);
        const result = await this.$api.deletePost(this.feedId);
    }
    openEdit() {
        //todo:로그인 여부 검사
        this.isShowEditPost = true;
    }
    reportDone(state: boolean) {
        console.log(state);
    }
    report(reportType: string) {
        (this.$refs.dropbox as HTMLElement).click();
        this.uniqeKey = Date.now();
        if (reportType === "user") {
            this.userReport = true;
        } else {
            this.userReport = false;
        }
    }
}
</script>

<style scoped>
</style>
