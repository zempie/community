<template>
    <div class="action-list-item-wrap">
        <div
            class="action-list-item unread header-dropdown-trigger"
            ref="dropdown"
        >
            <svg class="action-list-item-icon icon-notification">
                <use xlink:href="#svg-notification"></use>
            </svg>
        </div>

        <div class="dropdown-box header-dropdown">
            <div class="dropdown-box-header">
                <p class="dropdown-box-header-title">Notifications</p>

                <div class="dropdown-box-header-actions">
                    <p class="dropdown-box-header-action">Mark all as Read</p>

                    <p
                        class="dropdown-box-header-action"
                        @click="toGeneralSettings"
                    >
                        Settings
                    </p>
                </div>
            </div>

            <div class="dropdown-box-list" data-simplebar>
                <div class="dropdown-box-list-item unread">
                    <div class="user-status notification">
                        <a
                            class="user-status-avatar"
                            href="profile-timeline.html"
                        >
                            <div class="user-avatar small no-outline">
                                <div class="user-avatar-content">
                                    <div
                                        class="hexagon-image-30-32"
                                        data-src="img/avatar/03.jpg"
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

                        <p class="user-status-title text-left">
                            <a class="bold" href="profile-timeline.html"
                                >Nick Grissom</a
                            >
                            posted a comment on your
                            <a class="highlighted" href="profile-timeline.html"
                                >status update</a
                            >
                        </p>

                        <p class="user-status-timestamp text-left">
                            2 minutes ago
                        </p>

                        <div class="user-status-icon">
                            <svg class="icon-comment">
                                <use xlink:href="#svg-comment"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <router-link
                @click.native="closeDropdown"
                class="dropdown-box-button secondary"
                :to="`/user/${user.uid}/notificationList`"
                >View all Notifications</router-link
            >
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

import Hexagon from "@/plugins/hexagon";
import { User } from "@/types";

@Component({
    computed: { ...mapGetters(["user"]) },
    components: {},
})
export default class Notification extends Vue {
    private hexagon: Hexagon = new Hexagon();
    private user!: User;

    async mounted() {
        this.hexagon.init();
    }

    toGeneralSettings() {
        this.$router.push(`/user/${this.user.uid}/settings`);
        this.closeDropdown();
    }
    closeDropdown() {
        (this.$refs.dropdown as HTMLElement).click();
    }
}
</script>

<style scoped>
</style>
