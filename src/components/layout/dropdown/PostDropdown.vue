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
                <p class="simple-dropdown-link" @click="editPost(feedId)">
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
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Modal from "@/components/common/Modal.vue";

import Dropdown from "@/plugins/dropdown";

@Component({
    components: { Modal },
})
export default class PostDropdown extends Vue {
    @Prop() feedId!: any;
    private dropdown: Dropdown = new Dropdown();

    private modalTitle1: string = "Report Post";
    private modalTitle2: string = "Report User";
    private uniqeKey: number = 0;
    private userReport: boolean = false;
    private isUserBlock: boolean = false;
    mounted() {
        this.dropdown.init();
    }
    deletePost(postId: number) {
        (this.$refs.dropbox as HTMLElement).click();
        const result = this.$api.deletePost(postId);
    }
    editPost(postId: number) {
        this.$emit("postEdit", Date.now());
    }
    reportDone(state: boolean) {
        console.log(state);
    }
    report(reportType: string) {
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
