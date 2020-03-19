function render(h) {
	return h('div', this.recur(h, this.menu));
}

function eventHandler(e) {
	console.log(e);
}

function recur(h, array) {
	const globalStyle = {
		cursor: 'pointer',
		margin: '15px',
	};
	const collection = [];
	const len = array.length;
	for (let i = 0; i < len; i += 1) {
		const item = array[i];
		Object.keys(item).forEach((k) => {
			if (Array.isArray(item[k])) {
				collection.push(this.recur(h, item[k]));
			} else if (typeof item[k] === 'string') {
				const title = h('div', [h('span', 'saludos '), item[k]]);
				const style = {
					background: 'grey',
					boxSizing: 'border-box',
					display: 'flex',
					justifyContent: 'space-between',
					marginBottom: '15px',
					padding: '5px 10px',
					width: '100%',
				};
				style.backgroundColor = 'grey';
				const newDiv = h(
					'div',
					{
						style,
						on: {
							click: this.eventHandler.bind(null, item[k]),
						},
					},
					[title, h('div', '+')],
				);
				collection.push(newDiv);
			}
		});
	}
	return [h('div', { style: globalStyle }, collection)];
}

export default {
	name: 'recursive-menu',
	methods: {
		eventHandler,
		recur,
	},
	props: {
		menu: {
			type: Array,
			required: true,
		},
	},
	render,
};
