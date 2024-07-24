import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pedidos from '../views/Pedidos.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/pedidos', component: Pedidos }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router