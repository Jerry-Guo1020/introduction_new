
// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import No_to_see from '../components/no_to_see.vue';
import Home from '../components/Home.vue';

// import Introduce from '../components/Introduce.vue';

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
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  // {
  //   path:'introduce',
  //   name:'introduce',
  //   component: Introduce
  // },

 
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;