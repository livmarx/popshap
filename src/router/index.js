import Vue from 'vue';
import Router from 'vue-router';
// Components:
import Home from '@/components/Home';
import Users from '@/components/Users';
import Clients from '@/components/Clients';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/users',
      name: 'Users',
      component: Users,
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients,
    },
  ],
});
