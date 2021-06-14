<template>
    <div class="landing">
        <div class="landing-decoration"></div>

        <div class="landing-info">
            <div class="logo">
                <svg class="icon-logo-vikinger">
                    <use xlink:href="#svg-logo-vikinger"></use>
                </svg>
            </div>

            <h2 class="landing-info-pretitle">Welcome to</h2>

            <h1 class="landing-info-title">Vikinger</h1>

            <p class="landing-info-text">
                The next generation social network &amp; community! Connect with
                your friends and play with our quests and badges gamification
                system!
            </p>

            <div class="tab-switch">
                <p
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

                <form class="form">
                    <div class="form-row">
                        <div class="form-item">
                            <div class="form-input">
                                <label for="login-username"
                                    >Username or Email</label
                                >
                                <input
                                    type="text"
                                    id="login-username"
                                    name="login_username"
                                    v-model="email"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-item">
                            <div class="form-input">
                                <label for="login-password">Password</label>
                                <input
                                    type="password"
                                    id="login-password"
                                    name="login_password"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-row space-between">
                        <div class="form-item">
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
                        </div>

                        <div class="form-item">
                            <a class="form-link" href="#">Forgot Password?</a>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-item">
                            <button class="button medium secondary">
                                Login to your Account!
                            </button>
                        </div>
                    </div>
                </form>

                <p class="lined-text">Login with your Social Account</p>

                <div class="social-links" @click="google">
                    <a class="social-link google">
                        <svg class="icon-google">
                            <use xlink:href="#svg-google"></use>
                        </svg>
                    </a>
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
                            <div class="checkbox-wrap">
                                <input
                                    type="checkbox"
                                    id="register-newsletter"
                                    name="register_newsletter"
                                    checked
                                />

                                <div class="checkbox-box">
                                    <svg class="icon-cross">
                                        <use xlink:href="#svg-cross"></use>
                                    </svg>
                                </div>

                                <label for="register-newsletter"
                                    >Send me news and updates via email</label
                                >
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

            <div class="form-box login-register-form-element">
                <img
                    class="form-box-decoration"
                    src="../img/landing/rocket.png"
                    alt="rocket"
                />

                <h2 class="form-box-title">Create your Account!</h2>

                <form class="form">
                    <div class="form-row">
                        <div class="form-item">
                            <div class="form-input">
                                <label for="register-email">Your Email</label>
                                <input
                                    type="text"
                                    id="register-email"
                                    name="register_email"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-item">
                            <div class="form-input">
                                <label for="register-username">Username</label>
                                <input
                                    type="text"
                                    id="register-username"
                                    name="register_username"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-item">
                            <div class="form-input">
                                <label for="register-password">Password</label>
                                <input
                                    type="password"
                                    id="register-password"
                                    name="register_password"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-item">
                            <div class="form-input">
                                <label for="register-password-repeat"
                                    >Repeat Password</label
                                >
                                <input
                                    type="password"
                                    id="register-password-repeat"
                                    name="register_password_repeat"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-item">
                            <div class="checkbox-wrap">
                                <input
                                    type="checkbox"
                                    id="register-newsletter"
                                    name="register_newsletter"
                                    checked
                                />

                                <div class="checkbox-box">
                                    <svg class="icon-cross">
                                        <use xlink:href="#svg-cross"></use>
                                    </svg>
                                </div>

                                <label for="register-newsletter"
                                    >Send me news and updates via email</label
                                >
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

@Component({
    components: {},
})
export default class Login extends Vue {
    private redirect: string = "";

    private email: string = "";
    private password: string = "";

    private emailError: string = "";
    private passwordError: string = "";

    private googleNickname: string = "@";
    private googleUsername: string = "";
    private googleEmail: string = "";
    private googleRegister: boolean = false;

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
        console.log("mounted", this.$store.getters.isLoginComplete);
    }

    @Watch("email")
    watchEmail() {
        if (this.email) {
            this.emailError = "";
        }
    }

    @Watch("password")
    watchPassword() {
        if (this.password) {
            this.passwordError = "";
        }
    }

    async emailLogin() {
        if (!this.email) {
            // this.emailError = this.$t("login.emailBlankError") as string;
            // alert('이메일을 입력해주세요.');
            return;
        }

        if (!this.password) {
            // alert('비밀번호를 입력해주세요.');
            // this.passwordError = this.$t("login.passwordBlankError") as string;
            return;
        }

        if (!this.emailError && !this.passwordError) {
            try {
                const result = await firebase
                    .auth()
                    .signInWithEmailAndPassword(this.email, this.password);
                // console.log(result);
                // await this.$router.replace('/');

                if (result.user) {
                    const token = await firebase
                        .auth()
                        .currentUser?.getIdToken();
                    this.$store.commit("idToken", token);

                    const result = await Vue.$api.user();
                    // if( result.error && result.error && result.error.message === '잘 못 된 유저 아이디입니다' ) {
                    if (result?.error?.code === 20001) {
                        // alert(this.$t("login.joinError") as string);
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
                            // alert(
                            //     this.$t(
                            //         "login.firebaseError.password"
                            //     ) as string
                            // );
                            // this.passwordError = '잘못된 비밀번호 입니다. 다시 입력하세요.'
                            break;
                        case "auth/user-not-found":
                            // alert(
                            //     this.$t(
                            //         "login.firebaseError.userNotFound"
                            //     ) as string
                            // );
                            break;
                        default:
                            // alert('잠시 후 다시 시도해주세요.');
                            break;
                    }
                }
            }
        }
    }

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
}
</script>

<style scoped>
</style>
