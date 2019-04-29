/**
 *
 * name: user
 * date: 2019-04-29
 * author: cengfucheng
 * about:  用户模块
 *
 */

export default {
    name: 'user',
    state: {
        names: 'zf1c',
        token: 'abecds-123s',
        userName: 'zfc12',
        userPsw: '123456'
    },
    mutations: {
        SET_TOKEN: (state, payload) => {
            state.token = payload;
        }
    }
}