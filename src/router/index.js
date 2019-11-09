import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/landingPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Landing',
      component: Landing
    }
  ]
})