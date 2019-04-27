/**
 *
 * name: Fetch
 * date: 2019/1/10
 * author: cengfucheng
 * about: 封装请求
 *
 */

let openFetch = async (api, options, sucess) => {
    try {
        let response = await fetch(api, options);
        // for(let k of response.headers.keys()) {
        //     console.log(k,111111)
        // }
        console.log(response.headers.get('access-control-allow-origin'),111)
        let data = await response.json();
        if(typeof sucess === 'function') {
            sucess(data);
        }else {
            await Promise.reject('没有数据成功的处理方法。');
        }
    }catch (e) {
        console.error(e);
    }

}

const fetchHandle = ({ method, api, sucess, mode = 'same-origin' }) => {
    method = method.toUpperCase();
    let headers = new Headers();
    headers.set( 'zfc', 'application/json');
    headers.set( 'Accept', 'application/json');
    headers.set('Content-Type','application/json');

    let options = {
        method: method,
        // headers: headers,
        mode: mode,
        credentials: 'include'
    };
    if(method === 'GET' || method==='HEAD') {

    }else {
        options['body'] = {'name': 'zfc'}
    }
    openFetch(api, options, sucess);

}
export default fetchHandle;
