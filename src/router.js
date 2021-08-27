import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import Post0 from './components/Post0.vue'
import Post1 from './components/Post1.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/learning-lessons',
    component: Post0
  },
  {
    path: '/a-homme-between-places',
    component: Post1
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
