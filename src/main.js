import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
// import { Button, Select } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/style/theme-blue/theme/index.css'
import '@/style/theme-red/theme/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(Button)
// Vue.use(Select)

new Vue({
  render: h => h(App),
}).$mount('#app')
