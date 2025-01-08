import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: () => import('../views/auth/SignUp.vue'),
    },
    {
      path: '/auth/signin',
      name: 'signin',
      component: () => import('../views/auth/SignIn.vue'),
    },
    {
      path: '/auth/forgot-password',
      name: 'forgotPassword',
      component: () => import('../views/auth/ForgotPassword.vue'),
    },
  ],
})

export default router
