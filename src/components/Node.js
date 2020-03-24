function render(h) {
	const nodes = this.recur.call(this, [h, this.menu]);
	return h('div', [nodes]);
}

function recur([h, arr]) {
	const self = this;
	const collection = [];
	const len = arr.length;
	const uniqueId = this.uuid();
	for (let i = 0; i < len; i += 1) {
		const item = arr[i];
		item.uniqueId = uniqueId;
		const slot = self.$scopedSlots.default({
			item,
			toogle: self.toogle.bind(this, item),
		});
		collection.push(slot);
		if (item[self.children]) {
			const children = self.recur.call(self, [h, item[self.children]]);
			const childrenContainer = h('div', {
				attrs: {
					ref: item.uniqueId,
					dataRecu: 'hola',
				},
			}, [children]);
			collection.push(childrenContainer);
		}
	}
	return h(
		'div', {
			style: {
				marginLeft: this.indent,
			},
		},
		collection,
	);
}

function toogle(item) {
	console.log(item.uniqueId);
}

function uuid() {
	return Math.random().toString(32).slice(2);
}

export default {
	name: 'recursive-menu',
	data() {
		return {
			isOpen: true,
		};
	},
	methods: {
		toogle,
		recur,
		uuid,
	},
	props: {
		children: {
			type: String,
			required: true,
		},
		indent: {
			type: String,
			default: '25px',
		},
		menu: {
			type: Array,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
	render,
};
