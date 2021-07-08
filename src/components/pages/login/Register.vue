<template>
    <div class="form-box login-register-form-element">
        <img
            class="form-box-decoration"
            src="../../../img/landing/rocket.png"
            alt="rocket"
        />

        <h2 class="form-box-title">Create your Account!</h2>

        <form class="form" @submit="register">
            <div class="form-row">
                <div class="form-item">
                    <div class="form-input">
                        <b-form-group
                            label="Your Email"
                            label-for="register-email"
                        >
                            <b-form-input
                                type="text"
                                id="register-email"
                                name="register-email"
                                v-model="$v.form.email.$model"
                                :state="
                                    register
                                        ? validateState('email')
                                        : undefined
                                "
                            ></b-form-input>
                            <b-form-invalid-feedback
                                >올바른 이메일 형식을
                                작성해주세요</b-form-invalid-feedback
                            >
                        </b-form-group>
                    </div>
                </div>
            </div>

            <div class="form-row">
                <div class="form-item">
                    <div class="form-input">
                        <b-form-group
                            label="Username"
                            label-for="register-username"
                        >
                            <b-form-input
                                type="text"
                                id="register-username"
                                name="register-username"
                                v-model="$v.form.username.$model"
                            ></b-form-input>
                            <b-form-invalid-feedback
                                >이름은 최소 두글자 이상입력해주세요
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-item">
                    <div class="form-input">
                        <b-form-group
                            label="Nickname"
                            label-for="register-nickname"
                        >
                            <b-form-input
                                type="text"
                                id="register-nickname"
                                name="register-nickname"
                                v-model="$v.form.nickname.$model"
                            ></b-form-input>
                            <b-form-invalid-feedback
                                >닉네임은 최소 두글자 이상입력해주세요
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
                            label-for="register-password"
                        >
                            <b-form-input
                                type="text"
                                id="register-password"
                                name="register-password"
                                v-model="$v.form.password.$model"
                            ></b-form-input>
                            <b-form-invalid-feedback
                                >이름은 최소 두글자 이상입력해주세요
                            </b-form-invalid-feedback>
                        </b-form-group>
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
                    <button class="button medium primary">Register Now!</button>
                </div>
            </div>
        </form>

        <p class="form-text">
            You'll receive a confirmation email in your inbox with a link to
            activate your account. If you have any problems,
            <a :href="'mailto:' + $store.getters.supportEmail">contact us</a>!
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Form from "@/script/form";

import { validationMixin } from "vuelidate";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
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
            username: {
                required,
            },
            nickname: {
                required,
            },
        },
    },
})
export default class Register extends Vue {
    private form = { email: "", password: "", username: "", nickname: "" };

    mounted() {
        Form.formInput();
    }
    // vuelidate
    validateState(name) {
        const { $dirty, $error } = this.$v.form[name]!;
        return $dirty ? !$error : null;
    }

    register(event) {
        event.preventDefault();

         this.$v.form.$touch();
        if (this.$v.form.$anyError) {
            return;
        }
    }
}
</script>

<style scoped>
.form-row + .form-row:not(:last-child) {
    margin-top: 16px !important;
}
</style>
