import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import StoryView from '../views/StoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
    },
    {
      path: '/story/:id',
      name: 'story',
      component: StoryView,
      props: true,
    },
  ],
})

export default router
