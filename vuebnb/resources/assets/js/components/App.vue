<template>
  <div>
    <toolbar />
    <router-view />
    <custom-footer />
  </div>
</template>

<script>
import CustomFooter from './CustomFooter';
import Toolbar from './Toolbar'

export default {
	components: { CustomFooter, Toolbar }
};
</script>

<style scoped>
</style>

