<template>
    <div ref="isDiv" class="container">
        <div class="he">
            节流
        </div>
    </div>
</template>

<script>
import { throttle } from '../util/utils'
export default {
    name: 'Throttle',
    data () {
        return {
            timeout: null
        }
    },
    mounted () {
        const isDiv = this.$refs.isDiv
        isDiv.addEventListener('scroll', this.isScroll)
    },
    methods: {
        isScroll: throttle(function () {
            console.log(this)
            console.log(111)
        }, 500)
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
