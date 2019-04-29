/**
 *
 * name: index
 * date: 2019-04-28
 * author: cengfucheng
 * about: loading 组件
 *
 */
// import MyLoading from './MyLoading';
// export default MyLoading;
import { Loading } from 'element-ui';

let loadingCount = 0;
let loading;

const startLoading = () => {
    loading = Loading.service({
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0)'
    });
};

const endLoading = () => {
    loading.close();
};

export const showLoading = () => {
    if (loadingCount === 0) {
        startLoading();
    }
    loadingCount += 1;
};

export const hideLoading = () => {
    if (loadingCount <= 0) {
        return;
    }
    loadingCount -= 1;
    if (loadingCount === 0) {
        endLoading();
    }
};