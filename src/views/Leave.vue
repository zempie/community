<template>
    <div class="content-grid">
        <div class="account-hub-content">
            <div class="section-header">
                <div class="section-header-info">
                    <p class="section-pretitle">Account</p>

                    <h2 class="section-title">계정 탈퇴</h2>
                </div>
            </div>
        </div>
        <div class="grid-column">
            <div class="widget-box mb-5 text-left">
                <p class="widget-box-title">회원 탈퇴 약관</p>
                <div class="widget-box-content">
                    <h5 class="mb-3">
                        회원탈퇴 시 개인 정보 및 Zempie에서 만들어진 모든
                        데이터는 삭제됩니다.
                    </h5>
                    <ol class="list">
                        <li>
                            모든 게임 플레이 정보 및 구매 정보는 삭제됩니다.
                        </li>
                        <li>
                            서비스 이용시 보유하고 있던, 개인의 모든 재산은
                            삭제됩니다.
                        </li>
                        <li>
                            사이버 머니가 남아있을 시, 탈퇴 정채겡 의해 환불에
                            따른 수수료 지급 및 소액 잔액 미환급 등의 불이익이
                            있을 수 있습니다.
                        </li>
                        <li>
                            회원탈퇴를 하더라도 특정한 사유가 있을 시 일정
                            기간동안 개인정보를 보관할 수 있습니다.
                        </li>
                        <li>
                            회원 탈퇴 진행 시 해당 아이디는 영구적으로 삭제되어
                            재가입이 불가능합니다.
                        </li>
                    </ol>
                </div>
            </div>
            <div class="widget-box text-left mb-5">
                <p class="widget-box-title">탈퇴 사유</p>
                <form class="form">
                    <b-form-input
                        placeholder="탈퇴 사유를 입력해주세요."
                        class="leave-reason"
                        type="text"
                        v-model="reason"
                    ></b-form-input>
                </form>
            </div>
            <div class="checkbox-wrap mb-3">
                <input
                    type="checkbox"
                    id="leaveConfirm1"
                    name="reportReason"
                    v-model="check1"
                />

                <div class="checkbox-box">
                    <svg class="icon-check">
                        <use xlink:href="#svg-check"></use>
                    </svg>
                </div>
                <label for="leaveConfirm1" class="report-reason text-left"
                    >미결 거래로 인한 수익금을 지급받을 수 없다는 사실을
                    이해합니다.</label
                >
            </div>
            <div class="checkbox-wrap">
                <input
                    type="checkbox"
                    id="leaveConfirm2"
                    name="reportReason"
                    v-model="check2"
                />

                <div class="checkbox-box">
                    <svg class="icon-check">
                        <use xlink:href="#svg-check"></use>
                    </svg>
                </div>
                <label for="leaveConfirm2" class="report-reason text-left"
                    >해당 내용을 모두 확인했으며, 회원 탈퇴에 동의합니다.</label
                >
            </div>
        </div>
        <div class="delete-account-btn mt-5 text-center">
            <b-button variant="danger" @click="openConfirmModal"
                >계정 비활성화</b-button
            >
        </div>

        <b-modal
            ref="alertModal"
            centered
            hide-header
            no-close-on-backdrop
            v-model="show"
        >
            <div class="text-center">젬파이를 정말 탈퇴하시겠습니까?</div>

            <template #modal-footer>
                <div class="w-100" style="display: flex">
                    <b-button
                        variant="secondary"
                        size="sm"
                        class="float-right"
                        @click="leave(true)"
                    >
                        네
                    </b-button>
                    <b-button
                        variant="primary"
                        size="sm"
                        class="float-right"
                        @click="leave(false)"
                    >
                        아니요
                    </b-button>
                </div>
            </template>
        </b-modal>

        <b-modal
            ref="alertModal2"
            centered
            hide-header
            no-close-on-backdrop
            v-model="show2"
        >
            <div class="text-center">탈퇴약관에 동의해주세요</div>

            <template #modal-footer>
                <b-button
                    variant="primary"
                    size="sm"
                    class="float-right"
                    @click="show2 = false"
                >
                    OK
                </b-button>
            </template>
        </b-modal>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { LoginState } from "@/store/modules/user";
import Login from "@/script/login";

@Component({
    components: {},
})
export default class Leave extends Vue {
    private reason: string = "";
    private check1: boolean = false;
    private check2: boolean = false;
    private show: boolean = false;
    private show2: boolean = false;

    async mounted() {
        const loginState = await this.$store.dispatch("loginState");
        switch (loginState) {
            case LoginState.login:
                return;
        }
    }

    openConfirmModal() {
        if (this.check1 && this.check2) {
            (this.$refs["alertModal"] as any).show();
        } else {
            (this.$refs["alertModal2"] as any).show();
        }
    }
    async leave(state: boolean) {
        if (state) {
            const result = await this.$api.leave(this.reason);
            if (!result || result.error) {
                result && result.error && alert(result.error.message);
                console.error((result && result.error) || "error");
            } else {
                await Login.logout();
                await this.$router.push("/");
            }
            console.log(result);
        } else {
            this.show = false;
        }
    }
}
</script>
<style lang="scss" scoped>
.textColor {
    color: #b7b7b7;
}
.list {
    padding-left: 18px;
}
li {
    color: #b7b7b7;
    list-style: auto;
}
.leave-reason {
    border-bottom: 1px solid #3f485f !important;
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-radius: 0% !important;
}
input[type="text"]:focus {
    box-shadow: none !important;
}
.delete-account-btn {
    button {
        width: 15% !important;
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
</style>
