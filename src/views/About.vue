<template>
    <div class="about">
        <div class="image-box">
            <img alt="Vue logo" src="../assets/logo.png" @click="handleImgClick">
        </div>
        <div class="image-box">
            <img alt="Vue logo" src="../assets/8RzJdy_AQzE.jpg" @click="handleImgClick">
        </div>
        <div class="image-box">
            <img alt="Vue logo" src="../assets/aaHQcfuaXiQ.jpg" @click="handleImgClick">
        </div>
        <!-- <div class="active" v-if="active" @click="active = false">
            <img class="myImg" ref="img" alt="Vue logo" :src="imgUrl">
        </div> -->
    </div>
</template>

<script>
// import pic1 from '../assets/logo.png'
// import pic2 from '../assets/8RzJdy_AQzE.jpg'
// import pic3 from '../assets/aaHQcfuaXiQ.jpg'
export default {
    name: 'CheckImage',
    data () {
        return {
            // imgUrl: pic1,
            active: false
        }
    },
    methods: {
        handleImgClick (e) {
            // console.log(e)
            // console.log(e.target.parentNode)
            const innerWidth = window.innerWidth // 窗口可见宽度
            const innerHeight = window.innerHeight // 窗口可见高度
            const elWidth = e.target.naturalWidth // 图片真实宽度
            const elHeight = e.target.naturalHeight // 图片真实高度

            let parentNode = e.target.parentNode
            let parentClass = parentNode.getAttribute('class')
            if (parentClass === 'image-box') {
                parentNode.setAttribute('class', 'image-box active')
                if (elWidth < innerWidth && elHeight < innerHeight) {
                    e.target.style.height = elHeight
                    e.target.style.width = elWidth
                } else {
                    if (innerHeight / innerWidth < elHeight / elWidth) {
                        e.target.style.height = '100%'
                        e.target.style.width = 'auto'
                    } else {
                        e.target.style.height = 'auto'
                        e.target.style.width = '100%'
                    }
                }
            } else {
                parentNode.setAttribute('class', 'image-box')
                e.target.style.width = '200px'
            }
            this.active = !this.active

            // console.log('innerWidth', innerWidth)
            // console.log('innerHeight', innerHeight)
            // console.log('naturalHeight', elHeight)
            // console.log('naturalWidth', elWidth)
        }
    }
}
</script>

<style lang="less" scoped>
.image-box {
    display: inline-block;
    // border: 1px solid #ddd;
    img {
        width: 200px;
        // height: 200px;
        object-fit: fill;
        border: 1px solid #000;
    }
}
.active {
    z-index: 100;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: scroll;
    img {
        width: auto;
        height: auto;
        object-fit: fill;
    }
}

</style>
