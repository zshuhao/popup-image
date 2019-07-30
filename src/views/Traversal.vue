<template>
    <div>
        <div class="parent" ref="parent">
            <div class="child-1">
                <div class="child-1-1">
                    <div class="child-1-1-1">a</div>
                </div>
                <div class="child-1-2">
                    <div class="child-1-2-1">b</div>
                </div>
                <div class="child-1-3">c</div>
            </div>
            <div class="child-2">
                <div class="child-2-1">d</div>
                <div class="child-2-2">e</div>
            </div>
            <div class="child-3">
                <div class="child-3-1">f</div>
            </div>
        </div>
        <button @click="deep">深度优先遍历DFS</button>
        <button @click="breadth">广度优先遍历BFS</button>
        <div>
            <button @click="arrText">数组扁平</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Traversal',
    data () {
        return {
        }
    },
    mounted () {
    },
    methods: {
        deep () {
            const parentNode = this.$refs.parent
            console.log(parentNode)
            console.log(this.deepTraversal1(parentNode))
            console.log(this.deepTraversal2(parentNode))
            console.log(this.deepTraversal3(parentNode))
        },
        breadth () {
            const parentNode = this.$refs.parent
            console.log(parentNode)
            console.log(this.breadthTraversal(parentNode))
        },
        // 递归方式
        deepTraversal1 (node) {
            let nodes = []
            if (node !== null) {
                nodes.push(node)
                let children = node.children
                for (let i = 0; i < children.length; i++) {
                    nodes = nodes.concat(this.deepTraversal1(children[i]))
                }
                return nodes
            }
        },
        deepTraversal2 (node, nodes = []) {
            if (node !== null) {
                nodes.push(node)
                let children = node.children
                for (let i = 0; i < children.length; i++) {
                    this.deepTraversal2(children[i], nodes)
                }
                return nodes
            }
        },
        // 非递归
        deepTraversal3 (node) {
            let stack = []
            let nodes = []
            if (node) {
                // 推入当前处理的node
                stack.push(node)
                while (stack.length) {
                    let item = stack.pop() // 删除最后一个元素并返回删除的元素
                    let children = item.children
                    nodes.push(item)
                    for (let i = children.length - 1; i >= 0; i--) {
                        stack.push(children[i])
                    }
                }
            }
            return nodes
        },
        breadthTraversal (node) {
            let nodes = []
            let stack = []
            if (node) {
                stack.push(node)
                while (stack.length) {
                    let item = stack.shift() // 删除第一个元素并返回删除的元素
                    let children = item.children
                    nodes.push(item)
                    for (let i = 0; i < children.length; i++) {
                        stack.push(children[i])
                    }
                }
            }
            return nodes
        },
        arrText () {
            let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]
            console.log(this.text(arr))
        },
        text (arr, result = []) {
            for (const item of arr) {
                if (Array.isArray(item)) {
                    this.text(item, result)
                } else {
                    result.push(item)
                }
            }
            return [...new Set(result)].sort((i, j) => i - j)
        }
    }
}
</script>

<style lang="less" scoped>
.container {
    height: 300px;
    overflow: auto;
}
.he {
    height: 1000px;
    background-color: #ddd;
}
</style>
