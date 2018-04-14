<template>
  <div id="dashboard" class="dashboard-container">
    <h2>Vuebnb Dashboard</h2>
    <div class="listings-container">
      <listing-summary-admin 
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
      />
    </div>
  </div>
</template>

<script>
import ListingSummaryAdmin from './ListingSummaryAdmin';

export default {
	components: { ListingSummaryAdmin },
	computed: {
		listings() {
			return this.$store.state.listing_summaries;
		}
	}
};
</script>

<style lang="sass" scoped>

</style>
