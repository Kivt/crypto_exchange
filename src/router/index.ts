import { createRouter, createWebHistory } from 'vue-router'
import PricesView from '../views/PricesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PricesView,
    },
    {
      path: '/exchange-history',
      name: 'history',
      component: () => import('../views/ExchangeHistoryView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
