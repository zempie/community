<template>
    <div class="action-list-item-wrap">
        <div class="action-list-item header-dropdown-trigger" ref="dropdown">
            <svg class="action-list-item-icon icon-messages">
                <use xlink:href="#svg-messages"></use>
            </svg>
        </div>
        <div class="dropdown-box header-dropdown">
            <div class="dropdown-box-header">
                <p class="dropdown-box-header-title">Messages</p>

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

            <div class="dropdown-box-list medium" data-simplebar>
                <a
                    class="dropdown-box-list-item"
                    href="hub-profile-messages.html"
                >
                    <div class="user-status">
                        <div class="user-status-avatar">
                            <div class="user-avatar small no-outline">
                                <div class="user-avatar-content">
                                    <div
                                        class="hexagon-image-30-32"
                                        data-src="img/avatar/04.jpg"
                                    ></div>
                                </div>

                                <div class="user-avatar-progress">
                                    <div class="hexagon-progress-40-44"></div>
                                </div>

                                <div class="user-avatar-progress-border">
                                    <div class="hexagon-border-40-44"></div>
                                </div>
                            </div>
                        </div>

                        <p class="user-status-title">
                            <span class="bold">Bearded Wonder</span>
                        </p>

                        <p class="user-status-text">
                            Great! Then will meet with them at the party...
                        </p>

                        <p class="user-status-timestamp floaty">29 mins ago</p>
                    </div>
                </a>
            </div>

            <router-link
                class="dropdown-box-button primary"
               to="/messageList"
                >View all Messages</router-link
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
export default class Messages extends Vue {
    private hexagon: Hexagon = new Hexagon();
    private user!: User;

    async mounted() {
        this.hexagon.init();
    }
    toGeneralSettings() {
        this.$router.push(`/user/${this.user.uid}/settings`);

        (this.$refs.dropdown as HTMLElement).click();
    }
}
</script>

<style scoped>
</style>
