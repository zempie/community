<template>
    <div class="header-actions">
        <div class="login" @click="logout">logout</div>
        <div class="action-list dark">
            <!-- messages -->
            <messages></messages>

            <notification></notification>
        </div>

        <div class="action-item-wrap">
            <div class="action-item dark header-settings-dropdown-trigger">
                <svg class="action-item-icon icon-settings">
                    <use xlink:href="#svg-settings"></use>
                </svg>
            </div>

            <div class="dropdown-navigation header-settings-dropdown">
                <div class="dropdown-navigation-header">
                    <div class="user-status">
                        <a
                            class="user-status-avatar"
                            href="profile-timeline.html"
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
                        </a>

                        <p class="user-status-title">
                            <span class="bold">Hi {{ user.name }}!</span>
                        </p>

                        <p class="user-status-text small">
                            <a href="profile-timeline.html"
                                >@{{ user.nickname }}</a
                            >
                        </p>
                    </div>
                </div>

                <p class="dropdown-navigation-category">My Profile</p>

                <router-link
                    class="dropdown-navigation-link"
                    :to="`/channel/${user.channel_id}`"
                    >Profile Info</router-link
                >

                <!-- 
                    <a
                        class="dropdown-navigation-link"
                        href="hub-profile-notifications.html"
                        >Notifications</a
                    > -->

                <a
                    class="dropdown-navigation-link"
                    href="hub-profile-messages.html"
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
                    >Change Password</router-link
                >

                <router-link
                    class="dropdown-navigation-link"
                    :to="`/user/${user.uid}/settings`"
                    >General Settings</router-link
                >

                <p class="dropdown-navigation-category">Groups</p>

                <a
                    class="dropdown-navigation-link"
                    href="hub-group-management.html"
                    >Manage Groups</a
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
