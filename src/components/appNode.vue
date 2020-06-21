<template>
	<div class="node-container-wrapper">
		<div
			class="slot-node-content"
			:style="`padding-left:${indent * level}px`"
			@click="isOpen = !isOpen"
		>
			<NodeContent :node="node" :isOpen="isOpen"></NodeContent>
		</div>
		<transition name="collapsing" mode="out-in">
			<div v-if="node[children]" v-show="isOpen" class="node">
				<AppNode
					v-for="(child, indexChild) in node[children]"
					:key="indexChild"
					:children="children"
					:text="text"
					:node="child"
					:indent="indent"
				>
				</AppNode>
			</div>
		</transition>
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
	this.level = parent.level + 1;
}

function data() {
	return {
		grand: null,
		isOpen: true,
		level: 0,
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
			render(h) {
				const { grand, text } = this.$parent;
				const { node, isOpen } = this;
				const slot = (grand.$scopedSlots.default
					? grand.$scopedSlots.default({ node, isOpen })
					: h('span', node[text]));
				return Array.isArray(slot) ? slot[0] : slot;
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
			default: 5,
			type: [Number, String],
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
