<template>
	<div id="app">
		<h1>Menu recursivo</h1>
		<RecursiveMenu :menu="menuData"/>
	</div>
</template>

<script>
import RecursiveMenu from '@/components/RecursiveMenu';
import dataResource from '@/shared/data.json';

function data() {
	return {
		menuData: dataResource.menu,
	};
}

export default {
	name: 'App',
	components: {
		RecursiveMenu,
	},
	data,
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
