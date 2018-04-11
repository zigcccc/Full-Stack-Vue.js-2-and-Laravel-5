<template>
  <div class="home-container">
    <listing-summary-group
      v-for="(group, country) in listings_groups"
      :key="country"
      :listings="group"
      :country="country"
    />
  </div>
</template>

<script>
import axios from 'axios';
import routeMixin from '../route-mixin';
import { groupByCountry } from '../helpers';
import ListingSummaryGroup from './ListingSummaryGroup';

export default {
	mixins: [routeMixin],
	components: { ListingSummaryGroup },
	data() {
		return {
			listings_groups: []
		};
	},
	methods: {
		assignData({ listings }) {
			this.listings_groups = groupByCountry(listings);
		}
	}
};
</script>

<style scoped>

</style>


