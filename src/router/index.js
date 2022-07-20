import { createRouter, createWebHashHistory } from 'vue-router'
import CatalogView from '../views/CatalogView.vue'

const routes = [
  {
    path: '/',
    name: 'CatalogView',
    component: CatalogView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router