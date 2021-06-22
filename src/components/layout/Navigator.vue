<template>
    <header class="header">
        <div class="header-actions">
            <div class="header-brand">
                <div class="logo">
                    <svg class="icon-logo-vikinger small">
                        <use xlink:href="#svg-logo-vikinger"></use>
                    </svg>
                </div>

                <h1 class="header-brand-text">Zempie</h1>
            </div>
        </div>

        <div class="header-actions">
            <div class="mobilemenu-trigger navigation-widget-mobile-trigger">
                <div class="burger-icon inverted">
                    <div class="burger-icon-bar"></div>

                    <div class="burger-icon-bar"></div>

                    <div class="burger-icon-bar"></div>
                </div>
            </div>

            <nav class="navigation">
                <ul class="menu-main">
                    <li class="menu-main-item">
                        <router-link class="menu-main-item-link" to="/"
                            >Home</router-link
                        >
                    </li>

                    <li class="menu-main-item">
                        <router-link
                            class="menu-main-item-link"
                            to="/community/list"
                            >Community</router-link
                        >
                    </li>

                    <!--  <li class="menu-main-item">
                        <a class="menu-main-item-link" href="#">Faqs</a>
                    </li>

                    <li class="menu-main-item">
                        <p class="menu-main-item-link">
                            <svg class="icon-dots">
                                <use xlink:href="#svg-dots"></use>
                            </svg>
                        </p>

                        <ul class="menu-main">
                            <li class="menu-main-item">
                                <a class="menu-main-item-link" href="#"
                                    >About Us</a
                                >
                            </li>

                            <li class="menu-main-item">
                                <a class="menu-main-item-link" href="#"
                                    >Our Blog</a
                                >
                            </li>

                            <li class="menu-main-item">
                                <a class="menu-main-item-link" href="#"
                                    >Contact Us</a
                                >
                            </li>

                            <li class="menu-main-item">
                                <a class="menu-main-item-link" href="#"
                                    >Privacy Policy</a
                                >
                            </li>
                        </ul>
                    </li> -->
                </ul>
            </nav>
        </div>

        <div class="header-actions search-bar">
            <div class="interactive-input dark">
                <input
                    type="text"
                    id="search-main"
                    name="search_main"
                    placeholder="Search here for people or groups"
                />

                <div class="interactive-input-icon-wrap">
                    <svg class="interactive-input-icon icon-magnifying-glass">
                        <use xlink:href="#svg-magnifying-glass"></use>
                    </svg>
                </div>

                <div class="interactive-input-action">
                    <svg class="interactive-input-action-icon icon-cross-thin">
                        <use xlink:href="#svg-cross-thin"></use>
                    </svg>
                </div>
            </div>
        </div>

        <profile-menu v-if="$store.getters.user"></profile-menu>

        <div class="header-actions" v-else>
            <div class="login" @click="login">login</div>
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Dropdown from "@/plugins/dropdown";
import router from "@/router";

import ProfileMenu from "@/components/layout/header/ProfileMenu.vue";
@Component({
    components: { ProfileMenu },
})
export default class Navtigator extends Vue {
    private dropdown: Dropdown = new Dropdown();
    mounted() {
        this.dropdown.init();
    }
    login() {
        router.push("/login");
    }
}
</script>

<style scoped>
.login {
    color: #fff;
    display: flex;
    margin-right: 26px;
    text-transform: uppercase;
    cursor: pointer;
}
</style>
