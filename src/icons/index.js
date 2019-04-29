/**
 *
 * name: index
 * date: 2019/4/17
 * author: cengfucheng
 * about: 处理svg图标
 *
 */

import Vue from 'vue';
import SvgIcon from '@/components/SvgIcon';     // svg组件

// register globally
Vue.component('svg-icon', SvgIcon);

const req = require.context('./svg', false, /\.svg$/);
const requireAll = requireContext => requireContext.keys().map(requireContext);
requireAll(req);
