<template>
    <div class="content-grid">
        <div class="account-hub-content">
            <div class="section-header">
                <div class="section-header-info">
                    <p class="section-pretitle">Account</p>

                    <h2 class="section-title">Reset Password</h2>
                </div>
            </div>
            <div class="grid-column">
                <div class="widget-box">
                    <div class="widget-box-content">
                        <form class="form" @submit="resetPwd">
                            <div class="form-row">
                                <div class="form-item">
                                    <div class="form-input small">
                                        <b-form-group
                                            label="Your Email"
                                            label-for="account-current-email"
                                        >
                                            <b-form-input
                                                name="account-current-email"
                                                v-model="$v.email.$model"
                                                :state="
                                                    resetPwd
                                                        ? validateState()
                                                        : undefined
                                                "
                                            ></b-form-input>

                                            <b-form-invalid-feedback
                                                v-if="!$v.email.emailValidator"
                                                >올바른 이메일 형식을
                                                작성해주세요</b-form-invalid-feedback
                                            >
                                             <b-form-invalid-feedback
                                                v-if="!$v.email.required"
                                                >이메일을 입력해주세요</b-form-invalid-feedback
                                            >
                                            <b-form-invalid-feedback
                                                v-if="!$v.email.notExist"
                                                >존재하지않는
                                                이메일입니다.</b-form-invalid-feedback
                                            >
                                        </b-form-group>
                                    </div>
                                </div>

                                <div class="form-item submit-btn mt-3">
                                    <b-btn type="submit" class="">submit</b-btn>
                                    <!-- <p class="button full primary">
                                        Change Password Now!
                                    </p> -->
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <b-modal
            ref="alertModal"
            centered
            hide-header
            hide-footer
            no-close-on-backdrop
        >
            <div>
                작성하신 이메일로 비밀번호 재설정 메일을 보냈습니다. 메일함을
                확인해주세요.
            </div>

            <div>
                <button
                    class="popup-box-action half button tertiary"
                    style="width: 47%"
                    @click="toLoginPage"
                >
                    OK
                </button>
            </div>
        </b-modal>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Form from "@/script/form";

import firebase from "firebase/app";
import { LoginState } from "@/store/modules/user";

import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";

const notExist = (value, vm) => {
    if (vm.submitError) {
        // clear error after 1st display
        const error = vm.submitError;
        vm.submitErrorMessage = error;
        vm.submitError = false;
        return false;
    }
    return true;
};

const emailValidator = helpers.regex(
    "emailValidator",
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
);

@Component({
    components: {},
    mixins: [validationMixin],
    validations: {
        email: {
            required,
            emailValidator,
            notExist,
        },
    },
})
export default class ResetPassword extends Vue {
    private email: string = "";

    private submitError: boolean = false;
    async mounted() {
        Form.formInput();

        const loginState = await this.$store.dispatch("loginState");
        switch (loginState) {
            case LoginState.login:
                await this.$router.replace("/");
                break;
        }
    }
    validateState() {
        const { $dirty, $error } = this.$v.email!;
        return $dirty ? !$error : null;
    }
    validEmail() {
        return false;
    }

    async resetPwd(event) {
        
        event.preventDefault()
        this.$v.email.$touch();
        if (this.$v.email.$anyError) {
            return;
        }

        try {
            const result = await firebase
                .auth()
                .sendPasswordResetEmail(this.email);
            (this.$refs["alertModal"] as any).show();
        } catch {
            this.submitError = true;
        }
    }
    toLoginPage() {
        this.$router.replace("/login");
    }
}
</script>

<style scoped>
.form-row {
    justify-content: flex-end;
}
.submit-btn {
    /* text-align: right; */
    width: 130px;
}
</style>
