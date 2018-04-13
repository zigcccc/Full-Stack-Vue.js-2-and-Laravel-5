import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import store from './store';

import HomePage from './components/HomePage';
import ListingPage from './components/ListingPage';
import SavedPage from './components/SavedPage';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 };
	},
	routes: [
		{ path: '/', component: HomePage, name: 'home' },
		{ path: '/listing/:listing', component: ListingPage, name: 'listing' },
		{ path: '/saved', component: SavedPage, name: 'saved' }
	]
});

router.beforeEach((to, from, next) => {
	let serverData = JSON.parse(window.vuebnb_server_data);
	if (
		to.name === 'listing'
			? store.getters.getListing(to.params.listing)
			: store.state.listing_summaries.length > 0
	) {
		next();
	} else if (!serverData.path || to.path !== serverData.path) {
		axios.get(`/api${to.path}`).then(({ data }) => {
			store.commit('addData', { route: to.name, data });
			next();
		});
	} else {
		store.commit('addData', { route: to.name, data: serverData });
		next();
	}
});

export default router;