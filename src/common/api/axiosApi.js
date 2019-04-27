/**
 *
 * name: axios
 * date: 2019/1/29
 * author: cengfucheng
 * about: 封装的axios
 *
 */
import axios from 'axios';
import store from '../store/';
// const CancelToken = axios.CancelToken;
// import qs from 'qs';

axios.interceptors.request.use(
  config => {

      console.log(store, '数据库');
      // qs.stringify(config.data);
      if(config.data && typeof config.data != 'string') {
          config.data = JSON.stringify(config.data);
      }

      // console.log(config.data);
      // console.log(typeof config.data, '123122');

    let method = config.method.toLowerCase();
    if (method === 'get' || method === 'head') {
      if (config.data) {
            config.params = config.data;
          config.maxContentLength = 147483648;
        delete config.data
      }
    } else {
      if (config.data) {
        // config.data = config.data;
        config.maxContentLength = 2147483648;
      }
    }
    config.headers = {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json'
    }
      // console.log('请求前：', config);
    return config
  },
  error => {
    console.log('请求错误：', error)
  }
);
axios.interceptors.response.use(
  config => {
    console.log('请求结果：',config)
    return config
  },
  error => {
    console.log('请求结果错误：', error)
  }
);

function handlePromis (options) {
  return new Promise((resolve, reject) => {
    let data = axios(options);
    if (data) {
        return resolve(data);
    }
    return reject(data);
  })
}

async function axiosHandle (options, fn, errFn) {
  let data = await handlePromis(options,fn, errFn)
  if (data) fn(data);
}

export default ({ api, method = 'get', data = {}, timeout = 10000, handleEvs = () => {}, errorEvs = () => {}, abort = () => {} }) => {
  let options = {
    url: api,
    method: method.toUpperCase(),
    data: data,
    timeout: timeout,
    // cancelToken: new CancelToken( (cancelToken) => abort= cancelToken)
  }
  axiosHandle(options, handleEvs, errorEvs, abort)
}
