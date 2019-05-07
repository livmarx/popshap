import Vue from 'vue';
import Router from 'vue-router';
// Components:
import Home from '@/components/Home';
import Users from '@/components/Users';
import Clients from '@/components/Clients';
import Inventory from '@/components/Inventory';
import AddUser from '@/components/AddUser';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: Inventory,
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
    {
      path: '/add-user',
      name: 'AddUser',
      component: AddUser,
    },
  ],
});
