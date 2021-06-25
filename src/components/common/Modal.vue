<template>
    <div class="modal-popup">
        <b-modal
            hide-footer
            :id="reportId"
            modal-header="modal-header"
            modal-class="modal-container"
            :title="title"
            no-stacking
        >
            <template #default="{ close }">
                <form class="form" @submit.prevent="submit">
                    <div class="form-row">
                        <div class="checkbox-wrap">
                            <input
                                type="radio"
                                id="reportReason1"
                                name="reportReason"
                                @click="radioBtn()"
                                value="1"
                                v-model="pickedReason"
                            />

                            <div class="checkbox-box">
                                <svg class="icon-check">
                                    <use xlink:href="#svg-check"></use>
                                </svg>
                            </div>
                            <label for="reportReason1" class="report-reason"
                                ><slot name="reason1"></slot
                            ></label>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="checkbox-wrap">
                            <input
                                type="radio"
                                id="reportReason2"
                                name="reportReason"
                                value="2"
                                @click="radioBtn()"
                                v-model="pickedReason"
                            />

                            <div class="checkbox-box">
                                <svg class="icon-check">
                                    <use xlink:href="#svg-check"></use>
                                </svg>
                            </div>
                            <label for="reportReason2" class="report-reason"
                                ><slot name="reason2"></slot
                            ></label>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="checkbox-wrap">
                            <input
                                type="radio"
                                id="reportReason3"
                                name="reportReason"
                                value="3"
                                @click="radioBtn()"
                                v-model="pickedReason"
                            />

                            <div class="checkbox-box">
                                <svg class="icon-check">
                                    <use xlink:href="#svg-check"></use>
                                </svg>
                            </div>
                            <label for="reportReason3" class="report-reason"
                                ><slot name="reason3"></slot
                            ></label>
                        </div>
                    </div>

                    <div class="form-row" style="flex-direction: column">
                        <div class="checkbox-wrap">
                            <input
                                type="radio"
                                id="report-description"
                                name="reportReason"
                                @click="radioBtn('description')"
                                ref="reportReason"
                            />

                            <div class="checkbox-box">
                                <svg class="icon-check">
                                    <use xlink:href="#svg-check"></use>
                                </svg>
                            </div>
                            <label
                                for="report-description"
                                class="report-reason"
                                >기타</label
                            >

                            <div
                                class="form-input small"
                                style="width: 100%"
                                v-if="isOpenTextarea"
                            >
                                <textarea
                                    @keyup="
                                        pickedReason.length > 0
                                            ? (isValidateError = false)
                                            : (isValidateError = true)
                                    "
                                    id="report-description"
                                    for="report-description"
                                    v-model="pickedReason"
                                ></textarea>
                            </div>
                        </div>
                    </div>
<div><slot name="userBlock"></slot></div>
                   

                    <div class="popup-box-actions medium void">
                        <button
                            ref="closeModal"
                            @click="close()"
                            style="
                                height: 0px;
                                width: 0px;
                                overflow: hidden;
                                pointer-events: none;
                            "
                            v-b-modal="`reportDone${reportId.toString()}`"
                        ></button>
                        <button
                            class="popup-box-action full button secondary"
                            type="submit"
                        >
                            REPORT
                        </button>
                        <p
                            class="mt-3 text-center"
                            :style="
                                isValidateError ? 'color:red;' : 'display:none;'
                            "
                        >
                            신고사유를 입력해주세요
                        </p>
                    </div>
                </form>
            </template>
        </b-modal>

        <b-modal
            :id="`reportDone${reportId.toString()}`"
            hide-footer
            hide-header
            modal-class="modal-container"
        >
            <template #default="{ close }">
                <p class="report-done-content">신고가 완료되었습니다.</p>
                <button
                    class="popup-box-action full button secondary"
                    @click="close()"
                >
                    확인
                </button>
            </template>
        </b-modal>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {},
})
export default class Modal extends Vue {
    @Prop() reportId!: any;
    @Prop() title!: string;
    private pickedReason: any = null;
    private isOpenTextarea: boolean = false;
    private isReportDone: boolean = false;
    private isValidateError: boolean = false;
    radioBtn(val?: string) {
        this.isValidateError = false;
        // if((this.$refs.reportReason as HTMLFormElement).checked){
        //     (this.$refs.reportReason as HTMLFormElement).checked = false;
        // }
        if (val === "description") {
            this.isOpenTextarea = true;
            this.pickedReason = "";
        } else {
            this.isOpenTextarea = false;
        }
    }

    submit() {
        if (!this.pickedReason || this.pickedReason.length <= 0) {
            this.isValidateError = true;
        } else {
            (this.$refs.closeModal as HTMLElement).click();
            const result = this.$api.sendReport(
                this.reportId,
                1,
                this.pickedReason
            );
            if (result) {
                this.isReportDone = true;
                // this.inputInit();
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.modal-popup {
    .modal-container > div {
        display: block;
        height: 100vh;
        display: flex;
        width: 100vw;
        align-items: center;
        justify-content: center;
        align-content: center;
    }
}

.checkbox-wrap input[type="checkbox"]:checked + .checkbox-box .icon-check,
.checkbox-wrap input[type="radio"]:checked + .checkbox-box .icon-check {
    fill: #ffffff;
}
.checkbox-wrap .checkbox-box .icon-check {
    fill: transparent;
    transition: fill 0.2s ease-in-out;
}
.popup-box-actions,
.form-input textarea {
    margin-top: 28px;
}
.report-done-content {
    height: 100px;
    display: flex;
    /* align-content: center; */
    justify-content: center;
    align-items: center;
}
</style>
