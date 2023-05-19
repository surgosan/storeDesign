import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutViewVue from '../views/AboutView.vue';
import marketView from '../views/marketView.vue';
import contactView from '../views/faqAndContactView.vue';
import NotFound from '../views/NotFoundView.vue';
import login from '../views/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutViewVue
  },
  {
    path: '/market',
    name: 'market',
    component: marketView
  },
  {
    path: '/contact',
    name: 'contact',
    component: contactView
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: "/:patchMatch(.*)*",
    name: NotFound,
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
