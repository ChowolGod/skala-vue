import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/WeatherHomeView.vue'),
  },

  {
    path: '/about',
    component: () => import('../views/WeatherAboutView.vue'),
  },

  {
    path: '/weather/:cityId',
    component: () => import('../views/WeatherDetailView.vue'),
  },

  // {
  //   path: '/examples',
  //   component: () => import('../views/ExampleHomeView.vue'),
  // },

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
