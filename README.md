# tree-nodes-dl
<img src="https://img.shields.io/github/repo-size/josejuan81/tree-nodes-dl">
<img src="https://img.shields.io/npm/dm/tree-nodes-dl">
<img src="https://img.shields.io/npm/v/tree-nodes-dl">

> code Pen

https://codepen.io/JOSEJUAN/pen/jOWBreV?editors=1101


## Install
```code 
npm install tree-nodes-dl
```
## Use
global use
```js
import Vue from 'vue';
import treeNodesDl from 'tree-nodes-dl';

Vue.use(treeNodesDl);

```
local use
```js
import treeNodes from 'tree-nodes-dl';
...
export default {
    components: {
        treeNodes,
    }
}
```
### html
```html
<template>
    <tree-nodes-dl
    class="tree-container"
    children=inner
    text=title
    :indent="15"
    :nodes="treeData"
     v-slot="{ node, isOpen }"
  >
    <div class="slot-node">
      <span v-if="!isOpen && node.inner">+</span>
      <span v-if="isOpen && node.inner">-</span>
      <h2
        :class="{'lm': !node.inner }"
      >Desde slot: {{node.title}}</h2>
      <button
        type="button"
        @click.stop
      >click me!</button>
    </div>
  </tree-nodes-dl>
</template>
```
```js
<script>
import treeNodes from 'tree-nodes-dl';

function data() {
  return {
    treeData: [
        {
            title: "A",
            otherProp: false,
            inner: [
                {
                    title: "A.1",
                    inner: [
                        {
                            title: "A.1.1"
                        }
                    ]
                },
                {
                    title: "A.2",
                    inner: [
                        {
                            title: "A.2.1"
                        },
                        {
                            title: "A.2.2"
                        }
                    ]
                },
                {
                    title: "A.3",
                    inner: [
                        {
                            title: "A.3.1"
                        }
                    ]
                },
                {
                    title: "A.4",
                    inner: [
                        {
                            title: "A.4.1"
                        }
                    ]
                }
            ]
        },
        {
            title: "B",
            inner: [
                {
                    title: "B.1",
                    inner: [
                        {
                            title: "B.1.1"
                        },
                        {
                            title: "B.1.2"
                        }
                    ]
                },
                {
                    title: "B.2",
                    inner: [
                        {
                            title: "B.2.1"
                        }
                    ]
                },
                {
                    title: "B.3",
                    inner: [
                        {
                            title: "B.3.1"
                        }
                    ]
                },
                {
                    title: "B.4",
                    inner: [
                        {
                        title: "B.4.1"
                        }
                    ]
                }
            ]
        },
        {
            title: "C"
        },
        {
            title: "D"
        }
    ],
  }
}

export default {
    components: {
        treeNodes,
    },
    data,
}
</script>
```
```scss
.slot-node {
  align-items: center;
  cursor: default;
  display: flex;
  span {
    font-weight: bold;
    font-size: 20px;
    height: 20px;
    margin-right: 10px;
    width: 20px;
  }
  h2 {
    width: 100%;
    
    &.lm { 
      margin-left: 30px;  
    }
  }
  button {
    cursor:pointer;
    width: 10%;
  }
}
```
### Slot - scoped
|**name** | **type** | **observation**
|-|-|-|
`node`| Object | Element of the array
`isOpen`| `Boolean` | `true`: node open. `false` node collapsed

>Note: you can use event handlers like `click` in de slot but this will change the node state (collapsed or opened). If you don't want this behavior just add `stop` as modifier in the `event` (@click.stop="clickHandler") or `stopPropagation()` (function clickHandler(e, node, isOpen) { e.stopPropagation()...})

### Classes
name | Observation |
--|--|
`.node-container-wrapper` | This is the main `class` and it's wrapping the `node`. You can access the `node` through this class.
`collapsing` | This is de vue transition name. You can use it to apply custom transitions for collaping the `node`
`.node` | This is the node class.

> Note: If you want more details please check [here](https://codepen.io/JOSEJUAN/pen/jOWBreV?editors=1101).