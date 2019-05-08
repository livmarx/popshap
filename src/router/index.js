import Vue from 'vue';
import Router from 'vue-router';
// Components:
import Home from '@/components/Home';
import Users from '@/components/Users';
import Clients from '@/components/Clients';
import Inventory from '@/components/Inventory';
import AddUser from '@/components/AddUser';
import AddClient from '@/components/AddClient';
import AddProduct from '@/components/AddProduct';
import SingleUser from '@/components/SingleUser';
import SingleClient from '@/components/SingleClient';
// import SingleProduct from '@/components/SingleProduct';

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
    {
      path: '/add-client',
      name: 'AddClient',
      component: AddClient,
    },
    {
      path: '/add-product',
      name: 'AddProduct',
      component: AddProduct,
    },
    {
      path: '/user/:user_id',
      name: 'SingleUser',
      component: SingleUser,
    },
    {
      path: '/client/:client_id',
      name: 'SingleClient',
      component: SingleClient,
    },
    // {
    //   path: '/product/:product_id',
    //   name: 'SingleProduct',
    //   component: SingleProduct,
    // },
  ],
});
