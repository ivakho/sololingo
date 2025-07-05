import StartScreen from '@/components/StartScreen.vue'
import Topic from '@/components/Topic.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StartScreen,
    },
    {
      path: '/topic',
      name: 'topic',
      component: Topic,
    },
  ],
})

export default router
