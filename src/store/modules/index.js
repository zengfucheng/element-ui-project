/**
 *
 * name: index
 * date: 2019-04-29
 * author: cengfucheng
 * about:
 *
 */

import app from './app';
import user from './user';

let modules = {};
let getters = {};

function setGetters(module) {
    if(!module || !module.state || Object.keys(module.state).length == 0) return;
    if(module.name && module.name == '') {
        console.error(`模块${module}的name属性不存在`);
    };
    let moduleName = module.name;
    modules[moduleName] = module;
    for (let [item,index] of Object.entries(module.state)) {
        getters[item] = state => state[moduleName][item];
    }
}
setGetters(app);
setGetters(user);


export default {
    modules,
    getters
};