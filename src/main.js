import Vue from 'vue'
import App from './App'
import vuetify from './plugins/vuetify'
import i18n from '@/plugins/i18n'
import router from './router'

// Vue.config.KAKAO_API_KEY = process.env.KAKAO_API_KEY || '';
Vue.config.productionTip = false
/*

new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify,
  template: '<App/>'
});
*/


new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
