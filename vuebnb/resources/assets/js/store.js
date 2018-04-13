import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
	state: {
		saved: [5, 10],
		listings: [],
		listing_summaries: []
	},
	mutations: {
		toggleSaved(state, id) {
			let index = state.saved.findIndex(saved => saved === id);
			if (index === -1) {
				state.saved.push(id);
			} else {
				state.saved.splice(index, 1);
			}
		},
		addData(state, { route, data }) {
			if (route === 'listing') {
				state.listings.push(data.listing);
			} else {
				state.listing_summaries = data.listings;
			}
		}
	},
	getters: {
		savedSummaries(state) {
			return state.listing_summaries.filter(
				item => state.saved.indexOf(item.id) > -1
			);
		},
		getListing(state) {
			return id => state.listings.find(listing => id === listing.id);
		}
	}
});

export default store;
