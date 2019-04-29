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
<!--        <HelloWorld msg="eslint config" />-->
        <!--<svg-icon icon-class="bug"></svg-icon>-->
        <!--<svg-icon icon-class="404"></svg-icon>-->
        <!--<svg-icon icon-class="bug"></svg-icon>-->
        <!--<svg-icon icon-class="bug"></svg-icon>-->
        <!--<svg-icon icon-class="bug"></svg-icon>-->
<!--        <svg-icon icon-class="bug"></svg-icon>-->
<!--        <img src="static/images/404.svg"/>-->
    </div>
</template>

<script>
    import HelloWorld from '@/views/HelloWorld.vue';
    import axios from 'axios';
    import axiosApi from '@/common/api/axiosApi';
    import { mapGetters, mapState } from 'vuex';
    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        computed: {
            ...mapGetters({
                getToken:  'token',
                getName: 'names'
            }),
            ...mapState({
                getApp: 'app'
            })
        },
        created() {
            let obj = 123;
            let names = 'zfc';
            console.log(names);

            console.log('数据库',this.$store);
            this.mesgPush();
        },
        methods: {
            mesgPush() {
                let jsonObj = {
                    msgType: 'msg0011',
                    msg: '召唤邓光辉经理'
                };
                // axios.post(
                //     'http://agree.acaas-gateway:31080/abside/mo-ownservices-msg/webSocket',
                //     {
                //         Scope:'0',
                //         BranchNo:'2039',
                //         AppNum:'LMHTS234',
                //         UserNum:'931102',
                //         MsgNotn:JSON.stringify(jsonObj)
                //     }
                // );
                axios.post('http://127.0.0.1:3000/home',{name:'zfc'})
                    .then( data => {
                        console.log('返回数据',data)
                    })
            }
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
