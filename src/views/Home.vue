<template>
    <div class="home">
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                <router-link to="/debounce">Debounce</router-link>
            </li>
            <li>
                <router-link to="/throttle">Throttle</router-link>
            </li>
            <li>
                <router-link to="/traversal">深度优先遍历、广度优先遍历</router-link>
            </li>
        </ul>
        <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'home',
    components: {
        // HelloWorld
    }
}
</script>
