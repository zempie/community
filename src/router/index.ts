import store from '@/store'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import { LoginState } from "@/store/modules/user";
Vue.use(VueRouter)

// duplicate error
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    //@ts-ignore
    return originalPush.call(this, location).catch(err => {
        if (err.name !== 'NavigationDuplicated') throw err;
    });
};


const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter: async function (to, from, next) {
            const loginState = await store.dispatch("loginState");
            switch (loginState) {
                case LoginState.login:
                    console.log("login")
                    router.push(`/channel/${store.getters.user.uid}/timeline`)
                    break;
                case LoginState.no_user:
                    console.log("no_user")
                    router.push('/guestPage')
                    break;
                case LoginState.logout:
                    console.log("logout")
                    router.push('/guestPage')
                    break;
                default:
                    next();

            }
        }

    },
    {
        path: '/login',
        name: 'Login',
        component: () => import("@/views/Login.vue"),
    },
    {
        path: '/user/:userUid/changePassword',
        name: 'ChangePassword',
        component: () => import("@/views/ChangePassword.vue"),
    },
    // {
    //     path: '/user/resetPassword',
    //     name: 'ResetPassword',
    //     component: () => import("@/views/ResetPassword.vue"),
    // },
    {
        path: '/user/:userUid/settings',
        name: 'UserSettings',
        component: () => import("@/components/pages/user/UserSettings.vue"),
    },
    {
        path: '/user/:userUid/manageJoinedGroup',
        name: 'ManageJoinedGroup',
        component: () => import("@/components/pages/user/ManageJoinedGroup.vue"),
    },

    {
        path: '/community/list',
        name: 'Community',
        component: () => import(/* webpackChunkName: "about" */ '@/components/pages/community/CommunityList.vue'),

    },
    {
        path: '/community/:community_id/setting',
        name: 'CommunitySettingHeader',
        component: () => import("@/components/layout/CommunitySettingHeader.vue"),
        children: [
            {
                path: '/community/:community_id/setting',
                name: 'CommunitySetting',
                component: () => import("@/components/pages/community/communitySetting.vue"),
            },
            {
                path: '/community/:community_id/setting/member',
                name: 'CommunitySettingMember',
                component: () => import("@/components/pages/community/communitySettingMember.vue"),
            },
            {
                path: '/community/:community_id/manageChannel',
                name: 'ManageChannel',
                component: () => import("@/components/pages/community/manageChannel.vue"),
            },
            {
                path: '/community/:community_id/channelCreate',
                name: 'ChannelCreate',
                component: () => import("@/components/pages/community/channel/ChannelCreate.vue"),
            },
        ]
    },
    {
        path: '/createCommunity',
        name: 'CreateCommunity',
        component: () => import("@/components/pages/community/CommunityCreate.vue"),
    },


    {
        path: '/community/:community_id',
        name: 'CommunityDetail',
        component: () => import(/* webpackChunkName: "about" */ "@/components/layout/CommunityHeader.vue"),
        children: [
            {
                path: '/community/:community_id/timeline',
                name: 'CommunityTimeline',
                component: () => import("@/components/pages/community/CommunityTimeline.vue"),
            },
            {
                path: '/community/:community_id/members',
                name: 'MemberList',
                component: () => import("@/components/pages/community/MemberList.vue"),
            },

        ]
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import("@/components/pages/SearchPage.vue"),
        // children: [
        //   {
        //     path: '/search/',
        //     name: 'CommunityTimeline',
        //     component: () => import("@/components/pages/community/CommunityTimeline.vue"),
        //   },
        // ]
    },


    // /api/v1/timeline/:community_id/channel/:channel_id
    {
        path: '/community/:community_id/channel/:channel_id',
        name: 'Channel',
        component: () => import("@/components/pages/community/Channel.vue"),
    },
    {
        path: '/channel/:channel_id',
        name: 'UserChannel',
        component: () => import("@/components/layout/UserHeader.vue"),
        redirect: '/channel/:channel_id/timeline',
        children: [
            {
                path: '/channel/:channel_id/timeline',
                name: 'UserTimeline',
                component: () => import("@/components/pages/user/UserTimeline.vue"),
            },
            {
                path: '/channel/:channel_id/follwers',
                name: 'FollowerList',
                component: () => import("@/components/pages/user/FollowerList.vue"),
            },
            {
                path: '/channel/:channel_id/followings',
                name: 'FollowingList',
                component: () => import("@/components/pages/user/FollowingList.vue"),
            },
            {
                path: '/channel/:channel_id/games',
                name: 'AllGameList',
                component: () => import("@/components/pages/user/AllGameList.vue"),
            },


        ]
    },

    {
        path: '/timeline/game/:game_pathname',
        name: 'Game',
        component: () => import("@/components/layout/gameHeader.vue"),
        redirect: '/timeline/game/:game_pathname/timeline',
        children: [
            {
                path: '/timeline/game/:game_pathname/timeline',
                name: 'GameTimeline',
                component: () => import("@/components/pages/game/GameTimeline.vue"),
            },
        ]
    },

    {
        path: '/guestPage',
        name: 'GuestPage',
        component: () => import("@/components/pages/landing/guestPage.vue")
    },
    {
        path: '/feedDetail/:feedId',
        name: 'feedDetail',
        component: () => import("@/components/timeline/FeedDetail.vue")
    },
    {
        path: '/play/:pathname',
        name: 'Play',
        component: () => import('@/views/Play.vue'),
        props: true
    },


    {
        path: '*',
        component: () => import('@/views/Error404.vue')
    },
    {
        path: '/leave',
        name: 'leave',
        component: () => import('@/views/leave.vue'),
    },
    {
        path: '/messageList',
        name: 'MessageList',
        component: () => import('@/views/MessageList.vue'),
    },
    {
        path: '/notificationList',
        name: 'NotificationList',
        component: () => import('@/views/NotificationList.vue'),
    },

]

const router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
    routes
})



router.beforeEach((to, from, next) => {
    if (from.name !== 'redirect') {
        store.commit('fromRouterName', from.name);
    }
    next();
});
export default router
