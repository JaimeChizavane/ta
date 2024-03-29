import Vue from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './trans';
import VueAxios from 'vue-axios';
import axios from './axios';
import moment from 'moment';
import 'moment/locale/pt';
import VueLazyload from 'vue-lazyload';
import { VuejsDatatableFactory } from 'vuejs-datatable';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap and BootstrapVue CSS files (order is important)
//import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-vue/dist/bootstrap-vue.css';

import vuetify from './plugins/vuetify';

const loadimage = require('./assets/loading2.gif');

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

Vue.use(VueAxios, axios);
Vue.use(VueLazyload, {
	error: loadimage,
	loading: loadimage,
});

Vue.use(BootstrapVue);

Vue.use(IconsPlugin);

Vue.use(VuejsDatatableFactory);

Vue.filter('upper', function(value) {
	if (!value) return '';
	value = value.toString();
	return value.toUpperCase();
});

Vue.filter('date', function(value) {
	if (!value) return '';
	return moment(value)
		.locale('pt')
		.format('LLLL')
		.slice(0, -5);
});

Vue.filter('date_short', function(value) {
	if (!value) return '';
	return moment(value)
		.locale('pt')
		.format('LL');
});

Vue.filter('date_with_week', function(value) {
	if (!value) return '';
	return moment(value)
		.locale('pt')
		.format('LLLL')
		.slice(0, -5);
});

Vue.filter('excerpt', function(value) {
	if (!value) return '';

	if (value.length > 100) {
		value = value.substring(0, 100) + '...';
	}

	return value;
});
Vue.filter('excerpt2', function(value) {
	if (!value) return '';

	if (value.length > 100) {
		value = value.substring(0, 500) + '...';
	}

	return value;
});

Vue.filter('excerpt_shorter', function(value) {
	if (!value) return '';

	if (value.length > 50) {
		value = value.substring(0, 50) + '...';
	}

	return value;
});

window.vm = new Vue({
	router,
	i18n,
	vuetify,
	render: (h) => h(App),
}).$mount('#app');
