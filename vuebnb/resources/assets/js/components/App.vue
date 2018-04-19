<template>
  <div>
    <toolbar />
    <success-message />
    <router-view />
    <custom-footer />
  </div>
</template>

<script>
import CustomFooter from './CustomFooter';
import Toolbar from './Toolbar';
import SuccessMessage from './SuccessMessage';

export default {
	components: { CustomFooter, Toolbar, SuccessMessage }
};
</script>

<style scoped>
</style>

