<template>
    <div class="landing">
        <div class="landing-decoration"></div>

        <div class="landing-info">
            <div class="logo">
                <b-img src="img/zempie_logo.png" />
            </div>

            <h2 class="landing-info-pretitle">Welcome to</h2>

            <h1 class="landing-info-title">Zempie</h1>

            <p class="landing-info-text">설명설명설명</p>

            <div class="tab-switch">
                <p
                    ref="loginBtn"
                    class="tab-switch-button login-register-form-trigger"
                    @click="googleRegister = false"
                >
                    Login
                </p>

                <p
                    class="tab-switch-button login-register-form-trigger"
                    style="display: none"
                    ref="googleRegister"
                >
                    googleRegister
                </p>
                <p
                    class="tab-switch-button login-register-form-trigger"
                    @click="googleRegister = false"
                >
                    Register
                </p>
            </div>
        </div>
        <div class="landing-form">
            <div class="form-box login-register-form-element">
                <img
                    class="form-box-decoration overflowing"
                    src="../img/landing/rocket.png"
                    alt="rocket"
                />

                <h2 class="form-box-title">Account Login</h2>

                <b-form
                    @submit.stop.prevent="onSubmit"
                    style="margin-top: 76px"
                >
                    <div class="form-row">
                        <div class="form-item">
                            <div class="form-input">
                                <b-form-group
                                    label="Username or Email"
                                    label-for="login-username"
                                >
                                    <b-form-input
                                        class="form-control"
                                        type="text"
                                        name="login-username"
                                        v-model="$v.form.email.$model"
                                        :state="
                                            isClickedLoginBtn
                                                ? validateState('email')
                                                : undefined
                                        "
                                    ></b-form-input>
                                    <!-- aria-describedby="input-1-live-feedback" -->

                                    <b-form-invalid-feedback
                                        >올바른 이메일 형식으로 작성해주세요
                                    </b-form-invalid-feedback>
                                </b-form-group>
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-item">
                            <div class="form-input">
                                <b-form-group
                                    label="Password"
                                    label-for="login-password"
                                >
                                    <b-form-input
                                        class="form-control"
                                        type="password"
                                        name="login-password"
                                        v-model="$v.form.password.$model"
                                        :state="
                                            isClickedLoginBtn
                                                ? validateState('password')
                                                : undefined
                                        "
                                    ></b-form-input>

                                    <b-form-invalid-feedback
                                        >영문과 최소 1개의 숫자 혹은 특수 문자를
                                        포함한 6~20자리 비밀번호를
                                        입력해주세요.</b-form-invalid-feedback
                                    >
                                </b-form-group>
                            </div>
                        </div>
                    </div>

                    <div class="form-row space-between">
                        <!-- <div class="form-item">
                            <div class="checkbox-wrap">
                                <input
                                    type="checkbox"
                                    id="login-remember"
                                    name="login_remember"
                                    checked
                                />

                                <div class="checkbox-box">
                                    <svg class="icon-cross">
                                        <use xlink:href="#svg-cross"></use>
                                    </svg>
                                </div>

                                <label for="login-remember">Remember Me</label>
                            </div>
                        </div> -->

                        <div
                            class="
                                form-item
                                forgot-pwd-btn
                                login-register-form-trigger
                            "
                        >
                            <p @click="googleRegister = false">
                                Forgot Password?
                            </p>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-item">
                            <b-button
                                class="button medium secondary login-submit-btn"
                                type="submit"
                            >
                                Login to your Account!</b-button
                            >
                        </div>
                    </div>
                </b-form>

                <p class="lined-text">Login with your Social Account</p>

                <div
                    class="social-links"
                    @click="google"
                    @mouseenter="goolgeBtnHover"
                    @mouseout="goolgeBtnOut"
                >
                    <!-- <a class="social-link google" style="width:100%"> -->
                    <b-img :src="googleBtn"></b-img>
                    <!-- <svg class="icon-google">
                            <use xlink:href="#svg-google"></use>
                        </svg> -->
                    <!-- </a> -->
                </div>
            </div>

            <!-- google register -->
            <div class="form-box login-register-form-element" style="top: 27%">
                <img
                    class="form-box-decoration"
                    src="../img/landing/rocket.png"
                    alt="rocket"
                />

                <h2 class="form-box-title">Create your Account with Google</h2>

                <form class="form">
                    <div class="form-row">
                        <div class="form-item">
                            <div class="form-input active">
                                <label for="googleEmail">Your Email</label>
                                <input
                                    readonly
                                    type="text"
                                    id="googleEmail"
                                    name="googleEmail"
                                    v-model="googleEmail"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-item">
                            <div class="form-input active">
                                <label for="googleUsername">Username</label>
                                <input
                                    type="text"
                                    id="googleUsername"
                                    name="googleUsername"
                                    v-model="googleUsername"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-item">
                            <div class="form-input">
                                <label for="googleNickname">Nickname</label>
                                <input
                                    type="text"
                                    id="googleNickname"
                                    v-model="googleNickname"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-item">
                            <button class="button medium primary">
                                Register Now!
                            </button>
                        </div>
                    </div>
                </form>

                <p class="form-text">
                    You'll receive a confirmation email in your inbox with a
                    link to activate your account. If you have any problems,
                    <a href="#">contact us</a>!
                </p>
            </div>
            <!-- /google register -->

            <!-- zempie register -->
            <register></register>
            <!-- /zempie register -->
            <!-- reset pwd -->
            <reset-password @loginTab="loginTab"></reset-password>
            <!-- /reset pwd -->
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Form from "@/script/form";

import firebase from "firebase/app";
import { LoginState } from "@/store/modules/user";
import store from "src/store";
import LoginManager from "@/script/login";
import { UrlHelper } from "@/script/utils/util";
import plugins from "@/plugins/plugins";

import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";
import Register from "@/components/pages/login/Register.vue";
import ResetPassword from "@/components/pages/login/ResetPassword.vue";

const emailValidator = helpers.regex(
    "emailValidator",
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
);

const pwdValidator = helpers.regex(
    "pwdValidator",
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[!@#\$%\^&\*]).{6,20}$/
);
@Component({
    components: { Register, ResetPassword },
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
        },
    },
})
export default class Login extends Vue {
    private redirect: string = "";
    private form = { email: "", password: "" };

    private emailError: string = "";
    private passwordError: string = "";

    private googleNickname: string = "@";
    private googleUsername: string = "";
    private googleEmail: string = "";
    private googleRegister: boolean = false;

    private isClickedLoginBtn: boolean = false;

    private googleBtn: string = "img/btn_google_signin_dark_normal_web.png";

    goolgeBtnHover() {
        this.googleBtn = "img/btn_google_signin_dark_focus_web.png";
    }
    goolgeBtnOut() {
        this.googleBtn = "img/btn_google_signin_dark_normal_web.png";
    }

    // vuelidate
    validateState(name) {
        console.log(this.$v);
        const { $dirty, $error } = this.$v.form[name]!;
        return $dirty ? !$error : null;
    }

    async onSubmit() {
        this.isClickedLoginBtn = true;
        this.$v.form.$touch();
        if (this.$v.form.$anyError) {
            return;
        }

        try {
            const result = await firebase
                .auth()
                .signInWithEmailAndPassword(
                    this.form.email,
                    this.form.password
                );
            // console.log(result);
            // await this.$router.replace('/');

            if (result.user) {
                const token = await firebase.auth().currentUser!.getIdToken();
                this.$store.commit("idToken", token);

                const result = await Vue.$api.user();
                // if( result.error && result.error && result.error.message === '잘 못 된 유저 아이디입니다' ) {
                if (result?.error?.code === 20001) {
                    // alert( this.$t('login.joinError') as string );
                    this.$store.commit("loginState", LoginState.no_user);
                    await this.$router.replace("/joinEmailContinue");
                    return;
                }

                const { user } = result;
                this.$store.commit("user", user);
                await LoginManager.login();
                // this.$store.commit('loginState', LoginState.login );

                if (this.$store.getters.redirectRouter) {
                    const router = this.$store.getters.redirectRouter;
                    this.$store.commit("redirectRouter", null);
                    await this.$router.replace(router);
                } else if (this.$store.getters.redirectUrl) {
                    const url = this.$store.getters.redirectUrl;
                    this.$store.commit("redirectUrl", null);
                    window.location.href = url;
                } else {
                    await this.$router.replace("/");
                }
            }
        } catch (e) {
            // console.log(e);

            const code = e.code;
            // console.log(code);
            if (code) {
                switch (code) {
                    case "auth/wrong-password":
                        // alert(this.$t('login.firebaseError.password') as string);
                        // this.passwordError = '잘못된 비밀번호 입니다. 다시 입력하세요.'
                        break;
                    case "auth/user-not-found":
                        // alert(this.$t('login.firebaseError.userNotFound') as string);
                        break;
                    default:
                        // alert('잠시 후 다시 시도해주세요.');
                        break;
                }
            }
        }
    }

    async mounted() {
        this.createTab();

        //로그인
        const loginState = await this.$store.dispatch("loginState");
        switch (loginState) {
            case LoginState.login:
                // if(this.redirect) {
                //     window.location.href = this.redirect;
                // }
                // else {
                //     await this.$router.replace('/');
                // }

                await this.$router.replace("/");
                break;
        }

        this.redirect = UrlHelper.getParameterByName("z_redirect_url");

        if (this.redirect) {
            // console.log(this.redirect);
            this.$store.commit("redirectUrl", this.redirect);
        }
    }

    // @Watch("email")
    // watchEmail() {
    //     if (this.email) {
    //         this.emailError = "";
    //     }
    // }

    // @Watch("password")
    // watchPassword() {
    //     if (this.password) {
    //         this.passwordError = "";
    //     }
    // }

    async google() {
        await this.$store.dispatch("loginState");

        const provider = new firebase.auth.GoogleAuthProvider();
        const result: any = await firebase.auth().signInWithPopup(provider);
        this.googleUsername = result.user.displayName;
        this.googleEmail = result.user.email;

        console.log("google", result);
        if (result.user) {
            const token = await firebase.auth().currentUser?.getIdToken();
            this.$store.commit("idToken", token);

            const result = await Vue.$api.user();
            // if( result.error && result.error && result.error.message === '잘 못 된 유저 아이디입니다' ) {
            if (result?.error?.code === 20001) {
                //@ts-ignore
                this.$refs.googleRegister.click();
                // alert(this.$t("login.googleJoinError") as string);
                this.$store.commit("loginState", LoginState.no_user);

                // await this.$router.replace("/join");
                return;
            }

            const { user } = result;
            this.$store.commit("user", user);
            console.log("user", user);
            await LoginManager.login();
            // this.$store.commit('loginState', LoginState.login );
            // await this.$router.replace('/');
            if (this.$store.getters.redirectRouter) {
                console.log(
                    "redirectRouter",
                    this.$store.getters.redirectRouter
                );
                const router = this.$store.getters.redirectRouter;
                this.$store.commit("redirectRouter", null);
                await this.$router.replace(router);
            } else if (this.$store.getters.redirectUrl) {
                console.log("redirectUrl", this.$store.getters.redirectUrl);
                const url = this.$store.getters.redirectUrl;
                this.$store.commit("redirectUrl", null);
                window.location.href = url;
            } else {
                console.log("replace");
                await this.$router.push(
                    `/channel/${this.$store.getters.user.uid}/timeline`
                );
            }
        }
    }

    createTab() {
        Form.formInput();

        plugins.createTab({
            triggers: ".login-register-form-trigger",
            elements: ".login-register-form-element",
            animation: {
                type: "slide-in-right",
            },
            onTabChange: function (activeTab: {
                querySelector: (arg0: string) => any;
            }) {
                const firstInput = activeTab.querySelector("input");

                firstInput.focus();
            },
        });
    }
    loginTab() {
        (this.$refs.loginBtn as HTMLElement).click();
    }
}
</script>

<style scoped>
.login-submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
}
.form-control:valid {
    background-color: #1d2333 !important;
    color: #fff !important;
}
.form-control:focus {
    box-shadow: none;
}
.forgot-pwd-btn {
    margin-left: auto;
    cursor: pointer;
}
.forgot-pwd-btn p:hover {
    color: #4ff461;
}
</style>
