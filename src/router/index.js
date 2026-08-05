import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import PracticeView from '@/views/PracticeView.vue'
import WeatherHomeView from '@/views/WeatherHomeView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/practice',
    component: PracticeView,
  },
  {
    path: '/weather',
    component: WeatherHomeView,
  },

  {
    name: 'WeatherDetail',
    path: '/weather/:cityId',
    component: () => import('../views/WeatherDetailView.vue'),
  },

  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
