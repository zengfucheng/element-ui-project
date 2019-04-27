/**
 *
 * name: publicAxios
 * date: 2019/2/10
 * author: cengfucheng
 * about:
 *
 */

import axios from 'axios'
// import store from '../store'

// axios.interceptors.request.use(
//   config => {
//     store.state.isShow = true
//     console.log('请求前：', store)
//     return config
//   },
//   error => {
//     console.log('请求错误：')
//   }
// )

export default (url) => {
  axios.get(url)
}
