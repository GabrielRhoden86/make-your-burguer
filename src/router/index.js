import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pedidos from '../views/Pedidos.vue'
import Teste from '../views/Teste.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/pedidos', component: Pedidos },
  { path: '/teste', component: Teste }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router