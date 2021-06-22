import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/Login.vue"),
  },
  {
    path: '/community/list',
    name: 'CommunityList',
    component: () => import(/* webpackChunkName: "about" */ '@/components/pages/community/CommunityList.vue')
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
    component: () => import( "@/components/pages/SearchPage.vue"),
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
    component: () => import( "@/components/layout/UserHeader.vue"),
    children: [
      {
        path: '/channel/:channel_id/timeline',
        name: 'UserTimeline',
        component: () => import("@/components/pages/user/UserTimeline.vue"),
      },
    ]
  },

  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('../views/Timeline.vue')
  },


]

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  routes
})

export default router
