<template>
    <div class="content-grid">
        <div class="section-banner">
            <img
                class="section-banner-icon"
                src="../../img/banner/overview-icon.png"
                alt="overview-icon"
            />

            <p class="section-banner-title">Settings</p>
        </div>
        <div class="simple-tab-items">
            <router-link
                class="simple-tab-item"
                :class="
                    $route.name === 'UserSettings' ||
                    $route.name === 'ChangePassword'
                        ? 'active'
                        : ''
                "
                :to="`/user/${user.uid}/settings`"
                >계정</router-link
            >

            <router-link
                class="simple-tab-item"
                :class="$route.name === 'FollowerList' ? 'active' : ''"
                :to="`/user/${user.uid}/follwers`"
                >팔로워</router-link
            >
            <router-link
                class="simple-tab-item"
                :class="$route.name === 'FollowingList' ? 'active' : ''"
                :to="`/user/${user.uid}/followings`"
                >팔로잉</router-link
            >
            <router-link
                class="simple-tab-item"
                :class="$route.name === 'ManageJoinedGroup' ? 'active' : ''"
                :to="`/user/${user.uid}/manageJoinedGroup`"
                >그룹</router-link
            >

            <router-link
                class="simple-tab-item"
                :class="$route.name === 'NotificationList' ? 'active' : ''"
                :to="`/user/${user.uid}/notificationList`"
                >알림</router-link
            >
             <router-link
                class="simple-tab-item"
                :class="$route.name === 'MessageList' ? 'active' : ''"
                :to="`/user/${user.uid}/messageList`"
                >메세지</router-link
            >
        </div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { User } from "@/types";
import { Component, Prop, Vue } from "vue-property-decorator";

import { mapGetters } from "vuex";
@Component({
    components: {},
    computed: { ...mapGetters(["user"]) },
})
export default class UserSettingHeader extends Vue {
    private user!: User;
    mounted() {
        console.log(this.user);
    }
}
</script>

<style scoped lang="scss">
.simple-tab-items {
    margin-top: 32px;
}
</style>
