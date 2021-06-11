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
    path: '/community/list',
    name: 'CommunityList',
    component: () => import(/* webpackChunkName: "about" */ '@/components/pages/community/CommunityList.vue')
  },
  {
    path: '/community/:community_id',
    name: 'CommunityDetail',
    component: () => import(/* webpackChunkName: "about" */ "@/components/pages/community/CommunityDetail.vue"),
  },
  {
    path: '/community/:community_id/members',
    name: 'MemberList',
    component: () => import("@/components/pages/community/MemberList.vue"),
  },

  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import('../views/Timeline.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
