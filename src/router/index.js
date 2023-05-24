import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/weather-:CITY_NAME',
          name: 'Weather',
          component: () => import('@/views/CityView.vue')
        },
        { path: '/:path(.*)*', name: 'NotFound', component: () => import('@/layouts/NotFound.vue') },
      ]
    },


  ]
})

export default router
