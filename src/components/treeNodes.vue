<template>
    <div>
		<div
            v-for="(node, indexNode) in nodes"
            :key="indexNode"
		>
			<AppNode
				:indent="indent"
				:node="node"
				:children="children"
				:text="text"
			></AppNode>
		</div>
    </div>
</template>
<script>
import AppNode from '@/components/appNode.vue';

function created() {
	this.isTree = true;
}

function data() {
	return {
		isTree: false,
	};
}

export default {
	name: 'tree-nodes',
	components: {
		AppNode,
	},
	created,
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
