<template>
    <div>
		<AppNode
			v-for="(node, indexNode) in nodes"
			:key="indexNode"
			:indent="indent"
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
		indent: {
			type: String,
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
