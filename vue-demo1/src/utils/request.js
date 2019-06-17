import axios from 'axios';
import router from '../router/'
const request = axios.create();

// 添加请求拦截器
request.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            ...config.headers,
            token: window.localStorage.getItem('token')
        }
    };
}, (error) => {
    return Promise.reject(error);
})

// 响应之前拦截
request.interceptors.response.use((response) => {
    console.log(response)
    return response.data
}, (error) => {
    const response = error.response;
    const status = response.status;
    if (status) {
        switch (status) {
            case 401: //未登录
                router.push('/login');
                break;
            case 404:
                console.log('页面丢失');
                break;
            case 405:
                console.log('没有权限');
                break;
            default:
                console.log('网络出现问题');
        }
    }
    return Promise.reject(error);
})

export default {
    get(url, data) {
        return request.get(url, {
            params: data
        });
    },
    post(url, data) {
        return request.post(url, data)
    }
}