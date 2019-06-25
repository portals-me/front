import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'
import App from './App.vue'
import store from '@/store'
import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin } from 'aws-amplify-vue'
import awsconfig from './aws-exports'
const vueConfig = require('vue-config');
const GAuth = require('vue-google-oauth2').default;

Vue.use(Vuetify);
Vue.use(GAuth, {
  clientId: '670077302427-0r21asrffhmuhkvfq10qa8kj86cslojn.apps.googleusercontent.com',
});

Amplify.configure(awsconfig);
Amplify.configure({
  API: {
    graphql_headers: async () => {
      const token = localStorage.getItem('id_token');

      return {
        'Authorization': `Bearer ${token}`
      };
    }
  }
});

Vue.use(AmplifyPlugin, AmplifyModules);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
