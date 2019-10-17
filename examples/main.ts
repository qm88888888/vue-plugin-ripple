import Vue from 'vue';
import App from './App.vue';
import Ripple from '../packages/index';

Vue.config.productionTip = false;
Vue.use(Ripple);

new Vue({
  render: h => h(App),
}).$mount('#app');
