<template>
    <div class="grid">
        <div class="account-hub-content">
            <div class="section-header">
                <div class="section-header-info">
                    <p class="section-pretitle">My Profile</p>

                    <h2 class="section-title">Notifications</h2>
                </div>

                <div class="section-header-actions">
                    <p class="section-header-action">Mark all as Read</p>

                    <router-link
                        class="section-header-action"
                        :to="`/user/${this.user.uid}/settings`"
                    >
                        Settings
                    </router-link>
                </div>
            </div>

            <div class="notification-box-list">
                <div class="notification-box">
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
                                        style="
                                            width: 30px;
                                            height: 32px;
                                            position: relative;
                                        "
                                    >
                                        <canvas
                                            width="30"
                                            height="32"
                                            style="
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                            "
                                        ></canvas>
                                    </div>
                                </div>

                                <div class="user-avatar-progress">
                                    <div
                                        class="hexagon-progress-40-44"
                                        style="
                                            width: 40px;
                                            height: 44px;
                                            position: relative;
                                        "
                                    >
                                        <canvas
                                            width="40"
                                            height="44"
                                            style="
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                            "
                                        ></canvas>
                                    </div>
                                </div>

                                <div class="user-avatar-progress-border">
                                    <div
                                        class="hexagon-border-40-44"
                                        style="
                                            width: 40px;
                                            height: 44px;
                                            position: relative;
                                        "
                                    >
                                        <canvas
                                            width="40"
                                            height="44"
                                            style="
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                            "
                                        ></canvas>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <p class="user-status-title">
                            <a class="bold" href="profile-timeline.html"
                                >Nick Grissom</a
                            >
                            posted a comment on your
                            <a class="highlighted" href="profile-timeline.html"
                                >status update</a
                            >
                        </p>

                        <p class="user-status-timestamp small-space">
                            2 minutes ago
                        </p>

                        <div class="user-status-icon">
                            <svg class="icon-comment">
                                <use xlink:href="#svg-comment"></use>
                            </svg>
                        </div>
                    </div>

                    <div class="notification-box-close-button">
                        <svg
                            class="
                                notification-box-close-button-icon
                                icon-cross
                            "
                        >
                            <use xlink:href="#svg-cross"></use>
                        </svg>
                    </div>

                    <div class="mark-unread-button"></div>
                </div>

                <div class="notification-box unread">
                    <div class="user-status notification">
                        <a
                            class="user-status-avatar"
                            href="profile-timeline.html"
                        >
                            <div class="user-avatar small no-outline">
                                <div class="user-avatar-content">
                                    <div
                                        class="hexagon-image-30-32"
                                        data-src="img/avatar/07.jpg"
                                        style="
                                            width: 30px;
                                            height: 32px;
                                            position: relative;
                                        "
                                    >
                                        <canvas
                                            width="30"
                                            height="32"
                                            style="
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                            "
                                        ></canvas>
                                    </div>
                                </div>

                                <div class="user-avatar-progress">
                                    <div
                                        class="hexagon-progress-40-44"
                                        style="
                                            width: 40px;
                                            height: 44px;
                                            position: relative;
                                        "
                                    >
                                        <canvas
                                            width="40"
                                            height="44"
                                            style="
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                            "
                                        ></canvas>
                                    </div>
                                </div>

                                <div class="user-avatar-progress-border">
                                    <div
                                        class="hexagon-border-40-44"
                                        style="
                                            width: 40px;
                                            height: 44px;
                                            position: relative;
                                        "
                                    >
                                        <canvas
                                            width="40"
                                            height="44"
                                            style="
                                                position: absolute;
                                                top: 0px;
                                                left: 0px;
                                            "
                                        ></canvas>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <p class="user-status-title">
                            <a class="bold" href="profile-timeline.html"
                                >Sarah Diamond</a
                            >
                            left a like
                            <img
                                class="reaction"
                                src="../img/reaction/like.png"
                                alt="reaction-like"
                            />
                            reaction on your
                            <a class="highlighted" href="profile-timeline.html"
                                >status update</a
                            >
                        </p>

                        <p class="user-status-timestamp small-space">
                            17 minutes ago
                        </p>

                        <div class="user-status-icon">
                            <svg class="icon-thumbs-up">
                                <use xlink:href="#svg-thumbs-up"></use>
                            </svg>
                        </div>
                    </div>

                    <div class="notification-box-close-button">
                        <svg
                            class="
                                notification-box-close-button-icon
                                icon-cross
                            "
                        >
                            <use xlink:href="#svg-cross"></use>
                        </svg>
                    </div>

                    <div class="mark-read-button"></div>
                </div>
            </div>
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
export default class NotificationList extends Vue {
    private hexagon: Hexagon = new Hexagon();
    private user!: User;
    mounted() {
        this.hexagon.init();
    }
}
</script>

<style scoped>
</style>
