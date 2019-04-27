<template>
    <div id="app">
        <!--<img src="./assets/logo.png" />-->
        <!--<div>-->
        <!--<p>-->
        <!--<code v-text="'<el-button>'"></code>-->
        <!--belows-->
        <!--</p>-->
        <!--<el-button>el-button</el-button>-->
        <!--</div>-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
        <HelloWorld msg="eslint config" />
        <!--<svg-icon icon-class="bug"></svg-icon>-->
        <!--<svg-icon icon-class="404"></svg-icon>-->
        <!--<svg-icon icon-class="bug"></svg-icon>-->
        <!--<svg-icon icon-class="bug"></svg-icon>-->
        <!--<svg-icon icon-class="bug"></svg-icon>-->
        <!--<svg-icon icon-class="bug"></svg-icon>-->
        <img src="static/images/404.svg"/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue';

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        created() {
            let names = 'zfc1';
            console.log(names);
        }
    };
</script>

<style lang="less">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        img{
            width: 20px;
        }
    }
</style>
