import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { 
    path: '/', 
    component: () => import('./views/HomeView.vue') 
  },
  {
    path: '/about',
    component: () => import('./views/AboutMeView.vue')
  },
  {
    path: '/contact',
    component: () => import('./views/ContactView.vue')
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: () => import('./views/NotFoundView.vue') 
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})