import Vue from 'vue'
import {
    Button,
    Select,
    Loading
} from 'element-ui'

Vue.use(Button);
Vue.use(Select);


Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
