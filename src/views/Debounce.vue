<template>
    <div>
        <input class="input" v-model="value" @input="inputValueChange" type="text" placeholder="请输入">
        <!-- 不引入工具函数，本地实现 -->
        <!-- <input class="input" v-model="value" @input="thisDebounce(inputChange, 500)" type="text" placeholder="请输入"> -->
        <div>{{value}}</div>
        <button @click="handleClick">按钮</button>
    </div>
</template>

<script>
import { debounces } from '../util/utils'
export default {
    name: 'Debounce',
    data () {
        return {
            value: '',
            timeout: null
        }
    },
    methods: {
        inputChange () {
            console.log(1111)
        },
        inputValueChange: debounces(function () {
            console.log(this)
            console.log(1112)
        }, 500),
        thisDebounce (fn, time) {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                fn()
            }, time)
        },
        handleClick () {
            console.log(1232)
        }
    }
}
</script>

<style lang="less" scoped>
.input {
    border: 1px solid #eee;
}
</style>
