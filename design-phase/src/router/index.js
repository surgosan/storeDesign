import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutViewVue from '../views/AboutView.vue';
import marketView from '../views/marketView.vue';
import contactView from '../views/ContactView.vue';
import NotFound from '../views/NotFoundView.vue';
import login from '../views/LoginView.vue';
import faqViewVue from '@/views/faqView.vue';

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
    path: '/faq',
    name: 'faq',
    component: faqViewVue
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
