import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from './components/HomePage';
import ListingPage from './components/ListingPage';

Vue.use(VueRouter);

export default new VueRouter({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	},
	routes: [
		{ path: '/', component: HomePage, name: 'home' },
		{ path: '/listing/:listing', component: ListingPage, name: 'listing' }
	]
});
