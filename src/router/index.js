import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'home',
      component: HomeView,
      meta:{
        needsAuth: true
      }
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
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import('../views/404Page.vue')
    }
  ],
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (to.meta.needsAuth && !isLoggedIn) {
    next('/auth/signin');
  }
  else if (isLoggedIn && (to.name === 'signin' || to.name === 'signup')) {
    next('/dashboard');
  } 
  else {
    next();
  }
});

export default router
