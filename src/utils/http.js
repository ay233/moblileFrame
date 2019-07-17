import Vue from 'vue';
import axios from 'axios';
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';
Vue.use(Message);
import Toast from 'muse-ui-toast';
Vue.use(Toast, {
    position: 'top', // 弹出的位置
    time: 2000, // 显示的时长
    closeIcon: 'close', // 关闭的图标
    close: true, // 是否显示关闭按钮
    successIcon: 'check_circle', // 成功信息图标
    infoIcon: 'info', // 信息信息图标
    warningIcon: 'priority_high', // 提醒信息图标
    errorIcon: 'warning' // 错误信息图标
});
import store from '../store';
import { getToken } from '@/utils/auth';
const env = process.env;
// 创建axios实例


// var BASE_API = '';
// if (process.env.NODE_ENV == 'production') {
//     BASE_API = '"http://193.112.153.155:3001"';
// }else{
//     BASE_API = '"http://193.112.153.155:3001"';
// }
const service = axios.create({
    baseURL: env.VUE_APP_server, // api的base_url
    timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
    //   if (store.getters.token) {
    //     config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    //   };
    if (store.getters.token) {
        config.headers.Authorization = `Bearer ${getToken()}`;
    }
    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
        const res = response.data;
        if (res.code !== 1) {
            // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                Message.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
                    okLabel: '重新登录',
                    cancelLabel: '取消',
                    type: 'warning'
                }).then(({ result }) => {
                    if (result) {
                        store.dispatch('FedLogOut').then(() => {
                            location.reload(); // 为了重新实例化vue-router对象 避免bug
                        });
                    } else {
                        Toast.message('点击了取消');
                    }
                });
            }
            return Promise.reject('error');
        } else {
            return response.data;
        }
    },
    error => {
        Toast.message(error.message);
        return Promise.reject(error.message);
    }
);

export default service;