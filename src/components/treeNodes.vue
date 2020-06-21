<template>
    <div class="tree-node-container">
		<AppNode
			v-for="(node, indexNode) in nodes"
			:key="indexNode"
			:node="node"
			:children="children"
			:text="text"
			:indent="indent"
		></AppNode>
    </div>
</template>
<script>
import AppNode from './appNode.vue';

function data() {
	return {
		isTree: true,
		level: 0,
	};
}

export default {
	name: 'tree-node',
	components: {
		AppNode,
	},
	data,
	props: {
		children: {
			type: String,
			required: true,
		},
		indent: {
			type: [Number, String],
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
