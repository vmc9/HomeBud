import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  //Application Level Routes
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Application/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/Application/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Application/Signup.vue')
  },
  {
    path: '/signup/ok',
    name: 'SignupOk',
    component: () => import('../views/Application/SignupOk.vue')
  },
  {
    path: '/signup/error',
    name: 'SignupError',
    component: () => import('../views/Application/SignupError.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Application/Login.vue')
  },
  {
    path: '/user/:username',
    name: 'UserPage',
    component: () => import('../views/Application/UserPage.vue')
  },
  //HomeBase Level Routes
  {
    path: '/user/:username/pets',
    name: 'MyPets',
    component: () => import('../views/HomeBase/Profile/Pets.vue')
  },
  {
    path: '/user/:username/communities',
    name: 'MyCommunities',
    component: () => import('../views/HomeBase/Profile/Communities.vue')
  },
  {
    path: '/user/:username/account',
    name: 'MyAccount',
    component: () => import('../views/HomeBase/Profile/Account.vue')
  },
  //HomeBase Pets Routes
  {
    path: '/pets/register',
    name: 'RegisterPet',
    component: () => import('../views/HomeBase/Pets/RegisterPet.vue')
  }
  //HomeBase Communities Routes

  //HomeBase Sightings Routes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
