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
    path: '/community',
    name: 'Community',
    component: () => import(/* webpackChunkName: "about" */ '../views/Community.vue')
  },
  {
    path: '/community/:community_id',
    name: 'CommunityDetail',
    component: () => import(/* webpackChunkName: "about" */ "@/components/pages/community/CommunityDetail.vue"),
  },
  {
    // path: '/community/:community_id/members',
    path: '/community/communityDetail/members',
    name: 'MemberList',
    component: () => import(/* webpackChunkName: "about" */ "@/components/pages/community/MemberList.vue"),
  },

  {
    path: '/timeline',
    name: 'Timeline',
    component: () => import(/* webpackChunkName: "about" */ '../views/Timeline.vue')
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
