//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


function created() {
	var parent = this.$parent;
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

var script = {
	name: 'AppNode',
	components: {
		NodeContent: {
			props: {
				node: { required: true },
				isOpen: { required: true },
			},
			render: function render(h) {
				var ref = this.$parent;
				var grand = ref.grand;
				var text = ref.text;
				var ref$1 = this;
				var node = ref$1.node;
				var isOpen = ref$1.isOpen;
				var slot = (grand.$scopedSlots.default
					? grand.$scopedSlots.default({ node: node, isOpen: isOpen })
					: h('span', node[text]));
				return Array.isArray(slot) ? slot[0] : slot;
			},
		},
	},
	created: created,
	data: data,
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

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "node-container-wrapper" },
    [
      _c(
        "div",
        {
          staticClass: "slot-node-content",
          style: "padding-left:" + _vm.indent * _vm.level + "px",
          on: {
            click: function($event) {
              _vm.isOpen = !_vm.isOpen;
            }
          }
        },
        [_c("NodeContent", { attrs: { node: _vm.node, isOpen: _vm.isOpen } })],
        1
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "collapsing", mode: "out-in" } }, [
        _vm.node[_vm.children]
          ? _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isOpen,
                    expression: "isOpen"
                  }
                ],
                staticClass: "node"
              },
              _vm._l(_vm.node[_vm.children], function(child, indexChild) {
                return _c("AppNode", {
                  key: indexChild,
                  attrs: {
                    children: _vm.children,
                    text: _vm.text,
                    node: child,
                    indent: _vm.indent
                  }
                })
              }),
              1
            )
          : _vm._e()
      ])
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

//

function data$1() {
	return {
		isTree: true,
		level: 0,
	};
}

var script$1 = {
	name: 'tree-node',
	components: {
		AppNode: __vue_component__,
	},
	data: data$1,
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

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "tree-node-container" },
    _vm._l(_vm.nodes, function(node, indexNode) {
      return _c("AppNode", {
        key: indexNode,
        attrs: {
          node: node,
          children: _vm.children,
          text: _vm.text,
          indent: _vm.indent
        }
      })
    }),
    1
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$1 = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

// Declare install function executed by Vue.use()
// export function install(Vue) {
// 	if (install.installed) return;
// 	install.installed = true;
// 	Vue.component('tree-nodes-dl', treeNodesDl);
// }
// Declare install function executed by Vue.use()
var install = function (Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('tree-nodes-dl', __vue_component__$1);
};
__vue_component__$1.install = install;


// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

export default __vue_component__$1;
