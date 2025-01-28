// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import No_to_see from '../components/no_to_see.vue';

const routes = [
    {
        
    path: '/login',
    name: 'Login',
    component: Login
},
{
    path: '/No_to_see',
    name: 'No_to_see',
    component: No_to_see
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;