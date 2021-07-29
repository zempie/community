<template>
    <div class="form-box login-register-form-element" >
        <img
            class="form-box-decoration"
            src="../../../img/landing/rocket.png"
            alt="rocket"
        />

        <h2 class="form-box-title">Create your Account!</h2>

        <form class="form" @submit="register">
            <div class="form-row">
                <div class="form-item">
                    <div
                        class="form-input"
                        :class="this.form.email.length > 0 ? 'active' : ''"
                    >
                        <b-form-group
                            label="Your Email"
                            label-for="register-email"
                        >
                            <b-form-input
                                type="text"
                                name="register-email"
                                v-model="$v.form.email.$model"
                                :state="
                                    register
                                        ? validateState('email')
                                        : undefined
                                "
                            ></b-form-input>
                            <b-form-invalid-feedback
                                v-if="!$v.form.email.emailValidator"
                                >올바른 이메일 형식을
                                작성해주세요</b-form-invalid-feedback
                            >
                            <b-form-invalid-feedback
                                v-if="!$v.form.email.required"
                                >이메일을 입력해주세요</b-form-invalid-feedback
                            >
                        </b-form-group>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-item">
                    <div class="form-input">
                        <b-form-group
                            label="Password"
                            label-for="register-password"
                        >
                            <b-form-input
                                type="password"
                                name="register-password"
                                v-model="$v.form.password.$model"
                                :state="
                                    register
                                        ? validateState('password')
                                        : undefined
                                "
                            ></b-form-input>
                            <b-form-invalid-feedback
                                v-if="!$v.form.password.required"
                                >비밀번호를 입력해주세요
                            </b-form-invalid-feedback>
                            <b-form-invalid-feedback
                                v-if="!$v.form.password.pwdValidator"
                                >영문과 최소 1개의 숫자 혹은 특수 문자를 포함한
                                6~20자리 비밀번호를 입력해주세요.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="form-item">
                    <div class="form-input">
                        <b-form-group
                            label="Repeat Password"
                            label-for="register-repeat-password"
                        >
                            <b-form-input
                                type="password"
                                name="register-repeat-password"
                                v-model="$v.form.repeatPassword.$model"
                                :state="
                                    register
                                        ? validateState('repeatPassword')
                                        : undefined
                                "
                            ></b-form-input>
                            <b-form-invalid-feedback
                                v-if="!$v.form.repeatPassword.required"
                                >비밀번호를 입력해주세요
                            </b-form-invalid-feedback>
                            <b-form-invalid-feedback
                                v-if="!$v.form.repeatPassword.sameAsPassword"
                                >비밀번호가 일치하지 않습니다
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="form-item">
                    <div
                        class="form-input"
                        :class="this.form.username.length > 0 ? 'active' : ''"
                    >
                        <b-form-group
                            label="Username"
                            label-for="register-username"
                        >
                            <b-form-input
                                type="text"
                                name="register-username"
                                v-model="$v.form.username.$model"
                                :state="
                                    register
                                        ? validateState('username')
                                        : undefined
                                "
                            ></b-form-input>
                            <b-form-invalid-feedback
                                v-if="!$v.form.username.required"
                                >이름은 최소 두글자 이상입력해주세요
                            </b-form-invalid-feedback>
                            <b-form-invalid-feedback
                                v-if="!$v.form.username.maxLength"
                                >이름은 12글자 이내로 작성해주세요.
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-item">
                    <div
                        class="form-input"
                        :class="this.form.nickname.length > 0 ? 'active' : ''"
                    >
                        <b-form-group
                            label="Nickname"
                            label-for="register-nickname"
                        >
                            <b-form-input
                                type="text"
                                name="register-nickname"
                                v-model="$v.form.nickname.$model"
                                :state="
                                    register
                                        ? validateState('nickname')
                                        : undefined
                                "
                            ></b-form-input>
                            <b-form-invalid-feedback
                                v-if="!$v.form.nickname.required"
                                >닉네임은 최소 두글자 이상입력해주세요
                            </b-form-invalid-feedback>
                            <b-form-invalid-feedback
                                v-if="!$v.form.nickname.maxLength"
                                >닉네임은 12글자 이내로 작성해주세요
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="checkbox-wrap">
                    <input
                        type="checkbox"
                        id="reportReason3"
                        name="reportReason"
                        v-model="form.policyAgreement1"
                        @click="policy1()"
                    />

                    <div class="checkbox-box">
                        <svg class="icon-check">
                            <use xlink:href="#svg-check"></use>
                        </svg>
                    </div>
                    <label for="reportReason3" class="report-reason"
                        >이용약관 동의</label
                    >
                </div>
            </div>
            <div class="form-row">
                <div class="checkbox-wrap">
                    <input
                        type="checkbox"
                        id="reportReason3"
                        name="reportReason"
                        v-model="form.policyAgreement2"
                        @click="radioBtn()"
                    />

                    <div class="checkbox-box">
                        <svg class="icon-check">
                            <use xlink:href="#svg-check"></use>
                        </svg>
                    </div>
                    <label for="reportReason3" class="report-reason"
                        >개인정보취급방침 동의</label
                    >
                </div>
            </div>
            <div class="form-row">
                <div class="form-item">
                    <button class="button medium primary">Register Now!</button>
                </div>
            </div>
        </form>

        <p class="form-text">
            You'll receive a confirmation email in your inbox with a link to
            activate your account. If you have any problems,
            <a :href="'mailto:' + $store.getters.supportEmail">contact us</a>!
        </p>

        <b-modal
            ref="policy1"
            class="modal-container p-0"
            centered
            hide-header
            :footer-border-variant="footerBgVariant"
            :body-bg-variant="footerBgVariant"
            :footer-bg-variant="footerBgVariant"
        >
            <iframe class="iframe" :src="$store.getters.policyUrl"> </iframe>
            <template #modal-footer>
                <div class="w-100 button-container">
                    <b-button
                        variant="primary"
                        size="sm"
                        class="float-left"
                        @click="
                            form.policyAgreement1 = true;
                            show = false;
                        "
                    >
                        동의
                    </b-button>

                    <b-button
                        variant="secondary"
                        size="sm"
                        class="float-right"
                        @click="form.policyAgreement1 = false"
                    >
                        동의안함
                    </b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import LoginManager from "@/script/login";

import firebase from "firebase/app";
import { LoginState } from "@/store/modules/user";
import Form from "@/script/form";

import { validationMixin } from "vuelidate";
import {
    required,
    minLength,
    maxLength,
    sameAs,
} from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";

const emailValidator = helpers.regex(
    "emailValidator",
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
);

const pwdValidator = helpers.regex(
    "pwdValidator",
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#\$%\^&\*]).{6,20}$/
);

@Component({
    components: {},
    mixins: [validationMixin],
    validations: {
        form: {
            email: {
                required,
                emailValidator,
            },
            password: {
                required,
                pwdValidator,
                minLength: minLength(6),
                maxLength: maxLength(20),
            },
            repeatPassword: {
                required,
                sameAsPassword: sameAs("password"),
            },
            username: {
                required,
                maxLength: maxLength(12),
            },
            nickname: {
                required,
                maxLength: maxLength(12),
            },
        },
    },
})
export default class Register extends Vue {
    @Prop() googleForm!: any;
    private form = {
        email: "",
        password: "",
        username: "",
        nickname: "",
        repeatPassword: "",
        policyAgreement1: false,
        policyAgreement2: false,
    };
    private footerBgVariant = "dark";

    async mounted() {
        Form.formInput();

        const loginState = await this.$store.dispatch("loginState");
        switch (loginState) {
            case LoginState.login:
                await this.$router.replace("/").catch(() => {});
                return;
        }

        const currentUser = firebase.auth().currentUser;

        if (!currentUser) {
            await this.$router.replace("/login").catch(() => {});
            return;
        }

        // this.form.nickname = currentUser.displayName!;
    }
    // vuelidate
    validateState(name) {
        const { $dirty, $error } = this.$v.form[name]!;
        return $dirty ? !$error : null;
    }

    async register(event) {
        event.preventDefault();

        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
            return;
        }

        try {
            await firebase

                .auth()
                .createUserWithEmailAndPassword(
                    this.form.email,
                    this.form.password
                );
            const currentUser = firebase.auth().currentUser;
            const idToken = await currentUser!.getIdToken();
            this.$store.commit("idToken", idToken);
            const result = await this.$api.signUp(this.form.nickname);

            if (!result || result.error) {
                // if (result && result.error && result.error.message === '사용할 수 없는 단어') {
                if (result?.error?.code === 40101) {
                    alert("사용할 수 없는 이름입니다");
                    // todo 닉네임 필터 에러 처리
                    // alert(this.$t('join.joinNicknameError'));
                } else {
                    console.error((result && result.error) || "error");
                    result && result.error && alert(result.error.message);
                }
            } else {
                const { user } = result;
                this.$store.commit("user", user);
                await LoginManager.login();
                // await this.$router.replace('/');

                if (this.$store.getters.redirectRouter) {
                    const router = this.$store.getters.redirectRouter;
                    this.$store.commit("redirectRouter", null);
                    await this.$router.replace(router).catch(() => {});
                } else if (this.$store.getters.redirectUrl) {
                    const url = this.$store.getters.redirectUrl;
                    this.$store.commit("redirectUrl", null);
                    window.location.href = url;
                } else {
                    await this.$router.replace("/").catch(() => {});
                }
            }
        } catch (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorCode === "auth/email-already-in-use");
            if (errorCode === "auth/weak-password") {
                alert("The password is too weak.");
            } else if (errorCode === "auth/email-already-in-use") {
                alert("이미 사용중인 이메일 입니다.");
            } else {
                alert(errorMessage);
            }
        }
    }

    radioBtn(val?: string) {
        // this.isValidateError = false;
        // if((this.$refs.reportReason as HTMLFormElement).checked){
        //     (this.$refs.reportReason as HTMLFormElement).checked = false;
        // }
    }
    policy1() {
        (this.$refs["policy1"] as any).show();
    }

    @Watch("$store.getters.googleAccountInfo")
    watchGoogleInfo() {
        if (this.googleForm && this.googleForm.googleEmail) {
            this.form.email = this.googleForm.googleEmail;
            this.form.username = this.googleForm.googleUsername;
            this.form.nickname = this.googleForm.googleNickname.substring(1);
        }
        console.log("watchGoogleInfo", this.googleForm);
    }
}
</script>

<style scoped>
.form-row + .form-row:not(:last-child) {
    margin-top: 16px !important;
}

.checkbox-wrap input[type="checkbox"]:checked + .checkbox-box .icon-check,
.checkbox-wrap input[type="radio"]:checked + .checkbox-box .icon-check {
    fill: #ffffff;
}
.checkbox-wrap .checkbox-box .icon-check {
    fill: transparent;
    transition: fill 0.2s ease-in-out;
}
.iframe {
    background-color: black;
    width: 100%;
    height: 80vh;
}
.button-container {
    display: flex;
}
</style>
