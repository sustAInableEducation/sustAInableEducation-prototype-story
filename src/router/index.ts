import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import StoryView from '../views/StoryView.vue'
import FeedbackView from '@/views/FeedbackView.vue'

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
    {
      path: '/feedback/:id',
      name: 'feedback',
      component: FeedbackView,
      props: true,
    },
  ],
})

export default router
