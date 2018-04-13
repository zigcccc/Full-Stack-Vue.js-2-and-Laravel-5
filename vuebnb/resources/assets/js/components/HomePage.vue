<template>
  <div class="home-container">
    <listing-summary-group
      v-for="(group, country) in listing_groups"
      :key="country"
      :listings="group"
      :country="country"
    />
  </div>
</template>

<script>
import { groupByCountry } from '../helpers';
import ListingSummaryGroup from './ListingSummaryGroup';

export default {
	components: { ListingSummaryGroup },
	computed: {
		listing_groups() {
			return groupByCountry(this.$store.state.listing_summaries);
		}
	}
};
</script>