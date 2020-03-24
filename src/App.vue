<template>
	<div id="app">
		<h2>Este es el árbol de items</h2>
		<TreeNodes
			class="tree-node"
			children="inner"
			text="title"
			:nodes="menuData"
			v-slot="{ node }"
		>
			<h2 class="issue">Desde afuera: {{node.title}}</h2>
		</TreeNodes>
	</div>
</template>

<script>
import TreeNodes from '@/components/treeNodes.vue';
import dataResource from '@/shared/data.json';

function data() {
	return {
		menuData: dataResource.menu,
	};
}

export default {
	name: 'App',
	components: {
		TreeNodes,
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

.issue {
	align-items: center;
	border: 1px solid blue;
	border-radius: 15px;
	display: flex;
	height: 80px;
	justify-content: flex-start;
	margin: 0 0 2px 0;
	padding-left: 15px;
}
</style>
