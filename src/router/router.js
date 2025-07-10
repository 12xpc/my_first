import { createRouter, createWebHistory } from 'vue-router';

import Welcome from '../view/Welcome.vue';
import InterviewGuide from '../view/InterviewGuide.vue';
import AcceptChallenge from '../view/AcceptChallenge.vue';
import CompleteChallenge from '../view/CompleteChallenge.vue';

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/interview-guide',
    name: 'InterviewGuide',
    component: InterviewGuide
  },
  {
    path: '/accept-challenge',
    name: 'AcceptChallenge',
    component: AcceptChallenge
  },
  {
    path: '/complete-challenge',
    name: 'CompleteChallenge',
    component: CompleteChallenge
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;