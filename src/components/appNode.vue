<template>
	<div :style="`margin-left:${indent}`">
		<div @click="isOpen = !isOpen">
			<NodeContent :node="node"></NodeContent>
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
			},
			render() {
				const { grand, text } = this.$parent;
				const { node } = this;
				return (grand.$scopedSlots.default
					? grand.$scopedSlots.default({ node })
					: <span>adentro:{node[text]}</span>);
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
		indent: {
			type: String,
			default: '25px',
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
