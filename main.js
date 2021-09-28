import Vue from 'vue'
import App from './App'
import api from '@/common/vmeitime-http/'
import VueI18n from "vue-i18n";
Vue.prototype.$api = api
Vue.use(VueI18n);
const i18n = new VueI18n({ 
	// #ifdef MP 	
	locale: 'en', 
	// #endif
	// #ifdef APP-PLUS
	locale: plus.storage.getItem('locale') || 'en', 
	// #endif
	// #ifdef H5
	locale: localStorage.getItem('locale') || 'en', 
	// #endif
	messages: { 
		'zh-CN': require('./locale/zh_CN.js').lang,
		'en': require('./locale/en_US.js').lang
	}
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	i18n,
    ...App
})
app.$mount()
