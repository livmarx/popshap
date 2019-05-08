// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';
// index.js or main.js
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loadern

Vue.config.productionTip = false;

Vue.filter('snippet', val => {
  if (!val || typeof val !== 'string' || val.length < 79) {
    return val;
  } else {
    val = val.slice(0, 80);
    return val + '...';
  }
});
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
