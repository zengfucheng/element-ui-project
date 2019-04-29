/**
 *
 * name: index
 * date: 2019-04-28
 * author: cengfucheng
 * about: store
 *
 */

import Vue from 'vue';
import Vuex from 'vuex';
import storeModules from './modules';

let { modules, getters } = storeModules;

Vue.use(Vuex);

export default new Vuex.Store({
    modules,
    state: {
        app: 'thkd'
    },
    getters: {
        app: state => state.app,
        ...getters
    },
    mutations: {},
    actions: {}
});
