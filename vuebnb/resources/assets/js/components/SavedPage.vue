<template>
  <div id="saved" class="saved-container">
    <h2>Saved listings</h2>
    <div v-if="listings.length" class="listing-summaries">
      <listing-summary 
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
      />
    </div>
    <div v-else>
      No saved listings.
    </div>
  </div> 
</template>

<script>
import ListingSummary from './ListingSummary'

export default {
  components: {ListingSummary},
  computed: {
    listings(){
      return this.$store.state.listing_summaries.filter(
        item => this.$store.state.saved.indexOf(item.id) > -1
      )
    }
  }
}
</script>

<style scoped>
h2 {
  font-size: 2em;
}
.listing-summaries {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  overflow: hidden;
}
.listing-summaries .listing-summary {
  padding-bottom: 30px;
  margin-right: 15px;
}
</style>
