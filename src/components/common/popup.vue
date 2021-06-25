<template>
    <div class="popup-box small popup-event-creation">
        <div
            class="popup-close-button popup-event-creation-trigger"
            ref="popupClose"
        >
            <svg class="popup-close-button-icon icon-cross">
                <use xlink:href="#svg-cross"></use>
            </svg>
        </div>
        <div v-if="!isReportDone">
            <slot name="popupHeader"></slot>
            <div class="form">
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
                        <label for="report-description" class="report-reason"
                            >기타</label
                        >

                        <div
                            class="form-input small"
                            style="width: 100%"
                            v-if="isOpenTextarea"
                        >
                            <textarea
                                id="report-description"
                                for="report-description"
                                v-model="pickedReason"
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div class="popup-box-actions medium void" @click="sendReport">
                    <button class="popup-box-action full button secondary">
                        REPORT
                    </button>
                </div>
            </div>
        </div>
        <div v-else class="report-done-container">
            <div class="form">
                <h3>신고가 완료되었습니다.</h3>
            </div>
            <div class="popup-box-actions medium void" @click="reportDone">
                <button class="popup-box-action full button secondary">
                    확인
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Form from "@/script/form";
import PopupPlugin from "@/plugins/popup";
@Component({
    components: {},
})
export default class Popup extends Vue {
    @Prop() commentId!: any;
    @Prop() postId!: any;

    private popupPlugin: PopupPlugin = new PopupPlugin();

    private isOpenTextarea: boolean = false;
    private pickedReason: any = "";
    private reasonText: string = "";
    private isReportDone: boolean = false;

    mounted() {
        console.log("popup mount!!!!");
        this.popupPlugin.init();
    }

    beforeDestroy() {
        console.log("distroy popup");
    }
    radioBtn(val?: string) {
        console.log("other btn", val);
        if (val === "description") {
            this.isOpenTextarea = true;
            this.pickedReason = "";
        } else {
            this.isOpenTextarea = false;
        }
    }
    sendReport() {
        // console.log("send", this.pickedReason, this.postId, this.commentId);
        const result = this.$api.sendReport(
            this.commentId,
            1,
            this.pickedReason
        );
        console.log("div", result);
        if (result) {
            this.isReportDone = true;
            // this.inputInit();
        }
    }

    inputInit() {
        this.isReportDone = !this.isReportDone;
        this.pickedReason = "";
        this.isOpenTextarea = false;
        // (this.$refs.reportReason as HTMLInputElement).checked = false;
        (this.$refs.popupClose as HTMLElement).click();
    }
    reportDone() {
        (this.$refs.popupClose as HTMLElement).click();
        this.$emit("reportDone", true);
    }
}
</script>

<style scoped>
.popup-event-creation {
    transform: translate(-50%, 50%) !important;
}
.report-reason {
    text-align: left;
}

.checkbox-wrap input[type="checkbox"]:checked + .checkbox-box .icon-check,
.checkbox-wrap input[type="radio"]:checked + .checkbox-box .icon-check {
    fill: #ffffff;
}
.checkbox-wrap .checkbox-box .icon-check {
    fill: transparent;
    transition: fill 0.2s ease-in-out;
}

.form-input {
    margin-top: 16px;
}
.popup-box {
    height: 500px;
}
.report-done-container {
    display: flex;
    height: 100%;
    align-content: center;
    flex-direction: column;
    justify-content: center;
}
</style>
