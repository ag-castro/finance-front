import Vue from 'vue'
import Router from 'vue-router'
import authRouter from '@/modules/auth/router'
import dashboardRoutes from '@/modules/dashboard/router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...authRouter,
    ...dashboardRoutes,
    { path: '', redirect: '/login' }
  ]
})
