import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import router from './router';

Vue.use(Vuex);

let store = new Vuex.Store({
	state: {
		saved: [],
		listings: [],
		listing_summaries: [],
		auth: false,
		user: null,
		successMessage: null
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
		deleteListing(state, id) {
			state.listing_summaries = state.listing_summaries.filter(item => {
				return item.id !== id;
			});
		},
		addData(state, { route, data }) {
			if (data.auth) {
				state.auth = data.auth;
				state.user = data.user;
			}
			if (route === 'listing') {
				state.listings.push(data.listing);
			} else {
				state.listing_summaries = data.listings;
			}
		},
		clearSuccessMessage(state) {
			state.successMessage = null;
		}
	},
	actions: {
		toggleSaved({ commit, state }, id) {
			if (state.auth) {
				axios.post('/api/user/toggle_saved', { id }).then(() => {
					commit('toggleSaved', id);
				});
			} else {
				router.push('/login');
			}
		},
		deleteListing({ commit, state }, id) {
			if (state.auth) {
				axios
					.delete(`/api/listing/${id}/delete`)
					.then(data => {
						state.successMessage = data.data.message;
						commit('deleteListing', id);
					})
					.catch(err => {
						console.error(err);
					});
			} else {
				router.push('/login');
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

axios.defaults.headers.common = {
	'X-Requested-With': 'XMLHttpRequest',
	'X-CSRF-TOKEN': window.csrf_token
};

export default store;
