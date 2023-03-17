import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import Home from './views/Home.vue';

export default () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/jadwal',
        name: 'Jadwal',
        component: () => import('./views/Jadwal.vue'),
      },
    ],
  });
