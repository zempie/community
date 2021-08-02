<template>
    <div class="header-actions">
        <!-- <div class="login" @click="logout">logout</div> -->
        <div class="lang-selector form-select dropbox-container">
            <b-select name="sub-manager" class="dropbox">
                <b-select-option v-for="lang in langList" :key="lang.id">{{
                    lang
                }}</b-select-option>
            </b-select>
        </div>
        <div class="action-list dark">
            <!-- messages -->
            <messages></messages>

            <notification></notification>
        </div>

        <div class="action-item-wrap">
            <div
                class="action-item dark header-settings-dropdown-trigger"
                ref="dropdown"
            >
                <svg class="action-item-icon icon-settings">
                    <use xlink:href="#svg-settings"></use>
                </svg>
            </div>

            <div class="dropdown-navigation header-settings-dropdown text-left">
                <div class="dropdown-navigation-header">
                    <div class="user-status">
                        <router-link
                            class="user-status-avatar"
                            :to="`/channel/${user.channel_id}`"
                        >
                            <div class="user-avatar small no-outline">
                                <div class="user-avatar-content">
                                    <div
                                        class="hexagon-image-30-32"
                                        :data-src="user.picture"
                                    ></div>
                                </div>

                                <div class="user-avatar-progress">
                                    <div class="hexagon-progress-40-44"></div>
                                </div>

                                <div class="user-avatar-progress-border">
                                    <div class="hexagon-border-40-44"></div>
                                </div>
                            </div>
                        </router-link>

                        <p class="user-status-title">
                            <span class="bold">Hi {{ user.name }}!</span>
                        </p>

                        <p class="user-status-text small">
                            <router-link :to="`/channel/${user.channel_id}`"
                                >@{{ user.nickname }}</router-link
                            >
                        </p>
                    </div>
                </div>

                <p class="dropdown-navigation-category">My Profile</p>

                <router-link
                    class="dropdown-navigation-link"
                    :to="`/channel/${user.channel_id}`"
                    @click.native="routerClick"
                    >Profile Info</router-link
                >

                <!-- 
                    <a
                        class="dropdown-navigation-link"
                        href="hub-profile-notifications.html"
                        >Notifications</a
                    > -->

                <a class="dropdown-navigation-link" @click="moveGameDashBoard"
                    >Game Studio</a
                >

                <p class="dropdown-navigation-category">Account</p>

                <!-- <a
                        class="dropdown-navigation-link"
                        href="hub-account-info.html"
                        >Account Info</a
                    > -->
                <router-link
                    class="dropdown-navigation-link"
                    :to="`/user/${user.uid}/changePassword`"
                    @click.native="routerClick"
                    >Change Password</router-link
                >

                <router-link
                    class="dropdown-navigation-link"
                    :to="`/user/${user.uid}/settings`"
                    @click.native="routerClick"
                    >General Settings</router-link
                >

                <p class="dropdown-navigation-category">Groups</p>
                <router-link
                    class="dropdown-navigation-link"
                    :to="`/user/${user.uid}/manageJoinedGroup`"
                    @click.native="routerClick"
                    >Manage Groups</router-link
                >

                <p
                    class="dropdown-navigation-button button small secondary"
                    @click="logout"
                >
                    Logout
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Dropdown from "@/plugins/dropdown";
import Hexagon from "@/plugins/hexagon";
import Login from "@/script/login";

import Messages from "@/components/pages/user/Messages.vue";
import Notification from "@/components/pages/user/Notification.vue";
@Component({
    components: { Messages, Notification },
})
export default class ProfileMenu extends Vue {
    private dropdown: Dropdown = new Dropdown();

    private hexagon: Hexagon = new Hexagon();
    private user = this.$store.getters.user;
    private langList = ["한국어", "English"];
    mounted() {
        // await this.$store.dispatch('loginState');

        this.hexagon.init();
        this.dropdown.init();
    }
    async logout() {
        this.$store.state.pathName = "logout";
        await Login.logout();
        this.$router.push("/guestPage");
    }
    moveGameDashBoard() {
        window.location.href = this.$store.getters.studioUrl + "selectStage";
    }
    routerClick() {
        (this.$refs.dropdown as HTMLElement).click();
    }
}
</script>

<style lang="scss" scoped>
.login {
    color: #fff;
    display: flex;
    margin-right: 26px;
    text-transform: uppercase;
    cursor: pointer;
}
.lang-selector {
    display: flex;
    margin-right: 26px;
    align-items: center;
    height: 80px;
    .custom-select {
        height: 38px;
        border: none !important;
        background: #7750f8
            url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='white' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e")
            no-repeat right 0.75rem center/8px 10px !important;
    }
    .custom-select:focus {
        box-shadow: none !important;
    }
    .custom-select::after {
        color: #fff;
    }
}
</style>
