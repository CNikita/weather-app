import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import NotFound from '@/layouts/NotFound.vue'
import CityView from '@/views/CityView.vue'
import HomeView from '@/views/HomeView.vue'

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
          component: HomeView,
        },
        {
          path: '/weather-:CITY_NAME',
          name: 'Weather',
          component: CityView
        },
        { path: '/:path(.*)*', name: 'NotFound', component: NotFound },
      ]
    },


  ]
})

export default router
