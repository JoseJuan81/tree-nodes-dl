<template>
    <div class="tree-node-container">
		<AppNode
			v-for="(node, indexNode) in nodes"
			:key="indexNode"
			:node="node"
			:children="children"
			:text="text"
		></AppNode>
    </div>
</template>
<script>
import AppNode from './appNode.vue';

function data() {
	return {
		isTree: true,
	};
}

export default {
	name: 'tree-nodes',
	components: {
		AppNode,
	},
	data,
	props: {
		children: {
			type: String,
			required: true,
		},
		nodes: {
			type: Array,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
};
</script>
