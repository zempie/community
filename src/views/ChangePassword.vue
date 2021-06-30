<template>
    <div class="content-grid">
        <div class="account-hub-content">
            <div class="section-header">
                <div class="section-header-info">
                    <p class="section-pretitle">Account</p>

                    <h2 class="section-title">Change Password</h2>
                </div>
            </div>

            <div class="grid-column">
                <div class="widget-box">
                    <div class="widget-box-content">
                        <form class="form">
                            <div class="form-row">
                                <div class="form-item">
                                    <div class="form-input active small">
                                        <label for="account-current-email"
                                            >Your Email</label
                                        >
                                        <input
                                            type="text"
                                            id="account-current-email"
                                            name="account_current_email"
                                            v-model="email"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-item">
                                    <div class="form-input small">
                                        <label for="account-current-password"
                                            >Confirm your Current
                                            Password</label
                                        >
                                        <input
                                            type="password"
                                            id="account-current-password"
                                            name="account_current_password"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="form-row split">
                                <div class="form-item">
                                    <div class="form-input small">
                                        <label for="account-new-password"
                                            >Your New Password</label
                                        >
                                        <input
                                            type="password"
                                            id="account-new-password"
                                            name="account_new_password"
                                        />
                                    </div>
                                </div>

                                <div class="form-item">
                                    <div class="form-input small">
                                        <label
                                            for="account-new-password-confirm"
                                            >Confirm New Password</label
                                        >
                                        <input
                                            type="password"
                                            id="account-new-password-confirm"
                                            name="account_new_password_confirm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="form-row split">
                                <div class="form-item">
                                    <p class="button full secondary">
                                        <router-link
                                            to="/user/resetPassword"
                                            style="color: #fff"
                                        >
                                            Forgot your Password?</router-link
                                        >
                                    </p>
                                </div>

                                <div class="form-item">
                                    <p class="button full primary">
                                        Change Password Now!
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Form from "@/script/form";
import firebase from "firebase/app";

import { LoginState } from "@/store/modules/user";

@Component({
    components: {},
})
export default class ChangePassword extends Vue {
    private user = this.$store.getters.user;
    private email = this.$store.getters.user.email;

    async mounted() {
        Form.formInput();
        // const loginState = await this.$store.dispatch("loginState");
        // console.log("loginState", loginState);
        // switch (loginState) {
        //     case LoginState.no_user:
        //         await this.$router.replace("/");
        //         break;
        //     case LoginState.logout:
        //         await this.$router.replace("/");
        //         break;
        // }
    }
}
</script>

<style scoped>
</style>
