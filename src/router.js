import { createWebHistory, createRouter } from 'vue-router'

import Login from './components/Login.vue'
import Index from './components/Index.vue'
import { isAuthenticated } from './services/auth'

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Index },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})



router.beforeEach((to, from, next) => {
  const publicPages = ['/login' ];
  const authRequired = !publicPages.includes(to.path);

  if (authRequired && !isAuthenticated()) {
    next('/login');
  } else {
    next();
  }
});

export default router
