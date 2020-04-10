<template>
	<div id="app">
		<h2>Este es el árbol de items</h2>
		<TreeNodes
			class="tree-node"
			children="inner"
			text="title"
			:indent="25"
			:nodes="menuData"
			v-slot="{ node, isOpen }"
		>
			<div>
				<div class="issue">
					<h2>Desde afuera: {{node.title}}</h2>
					<div @click="addItem($event, node, isOpen)">+</div>
				</div>
			</div>
		</TreeNodes>
	</div>
</template>

<script>
import TreeNodes from '@/components/treeNodes.vue';
import dataResource from '@/shared/data.json';

function addItem(e, node, isOpen) {
	if (isOpen) {
		e.stopPropagation();
	}
	const newItem = {
		title: 'Nuevo registro',
		inner: [],
	};
	const newInner = [].concat(newItem, node.inner || []);
	this.$set(node, 'inner', newInner);
}

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
	methods: {
		addItem,
	},
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
	box-sizing: border-box;
	cursor: pointer;
	display: flex;
	height: 80px;
	justify-content: space-between;
	padding: 0 15px;
}

.tree-node {

	.slot-node-content {
		border-top: 1px solid blue;
	}
}
</style>
