import { createRouter, createWebHistory } from 'vue-router';

//define a routes
const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
];

//create router
const router = createRouter({
  history: createWebHistory(),
  routes, // config routes
});

export default router;
