import store from '@/store'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import { LoginState } from "@/store/modules/user";
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: async function (to, from, next) {
      const loginState = await store.dispatch("loginState");
      console.log("next",next)
      switch (loginState) {
        case LoginState.login:
          console.log("login")
          next(`/channel/${store.getters.user.uid}/timeline`)
          break;
        case LoginState.no_user:
          console.log("no_user")
          next('/guestPage');
          break;
        case LoginState.logout:
          console.log("logout")
          next('/guestPage');
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
  {
    path: '/user/resetPassword',
    name: 'ResetPassword',
    component: () => import("@/views/ResetPassword.vue"),
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
    children:[
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


    ]
  },

  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('@/views/Timeline.vue')
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
    path: '*',
    component: () => import('@/views/Error404.vue')
  },


]

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  routes
})

export default router
