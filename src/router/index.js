import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin);



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/RegistrationView.vue')
  },
  {
    path: '/signup_predavac',
    name: 'signup_predavac',
    component: () => import('../views/InstructorRegisterView.vue')
  },
  {
    path: '/signup_student',
    name: 'signup_student',
    component: () => import('../views/UserRegisterView.vue')
  },
  {
    path: '/searchInstructors',
    name: 'searchInstructors',
    component: () => import('../views/SearchInstructorsView.vue')
  },
  {
    path: '/searchUsers',
    name: 'searchUsers',
    component: () => import('../views/SearchUsersView.vue')
  },
  
]
  


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
