import Vue from 'vue'
import Router from 'vue-router'
import authRouter from '@/modules/auth/router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...authRouter,
    { path: '', redirect: '/login' }
  ]
})
