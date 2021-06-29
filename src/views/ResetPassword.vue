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
                        <form class="form">
                            <div class="form-row">
                                <div class="form-item">
                                    <div class="form-input small">
                                        <label for="account-current-email"
                                            >Your Email</label
                                        >
                                        <!-- pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" -->
                                        <input
                                            type="email"
                                            required
                                            id="account-current-email"
                                            name="account_current_email"
                                            v-model="email"
                                            @invalid="checkEmail"
                                        />
                                    </div>
                                </div>

                                <div class="form-item">
                                    <b-btn type="submit">submit</b-btn>
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
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Form from "@/script/form";
@Component({
    components: {},
})
export default class ResetPassword extends Vue {
    private email: string = "";
    private emailPattern =
        "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    async mounted() {
        Form.formInput();
    }
    checkEmail(e) {
        console.log(!this.email.match(
                /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            ))
        if (
            !this.email.match(
                /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            )
        ) {
            e.target.setCustomValidity("올바른 이메일 형식으로 입력해주세요");
        }else{
            console.log("correct!")
        }
    }
}
</script>

<style scoped>
</style>
