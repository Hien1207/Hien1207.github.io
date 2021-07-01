import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: ()=> import('../views/Blogs.vue')
  },

  { path: '/blog/:id', 
    component: () => import('../views/BlogDetail.vue'),
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {
      layout: 'unauth'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
   component: () => import('../views/Dashboard.vue'),
    meta: {
      layout: 'secret'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
