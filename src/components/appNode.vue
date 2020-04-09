<template>
	<div class="node-container-wrapper">
		<div @click="isOpen = !isOpen">
			<NodeContent :node="node" :isOpen="isOpen"></NodeContent>
		</div>
		<div v-if="node[children]" v-show="isOpen">
			<AppNode
				v-for="(child, indexChild) in node[children]"
				:key="indexChild"
				:children="children"
				:text="text"
				:node="child"
			>
			</AppNode>
		</div>
	</div>
</template>
<script>

function created() {
	const parent = this.$parent;
	if (parent.isTree) {
		this.grand = parent;
	} else {
		this.grand = parent.grand;
	}
}

function data() {
	return {
		grand: null,
		isOpen: true,
	};
}

export default {
	name: 'AppNode',
	components: {
		NodeContent: {
			props: {
				node: { required: true },
				isOpen: { required: true },
			},
			render() {
				const { grand, text } = this.$parent;
				const { node, isOpen } = this;
				const slot = (grand.$scopedSlots.default
					? grand.$scopedSlots.default({ node, isOpen })
					: <span>{node[text]}</span>);
				return slot[0];
			},
		},
	},
	created,
	data,
	props: {
		children: {
			type: String,
			required: true,
		},
		node: {
			type: Object,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
};
</script>
