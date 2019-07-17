import router from './router';
import store from './store';
import Vue from 'vue';
import NProgress from 'nprogress' ;// Progress 进度条
import 'nprogress/nprogress.css';// Progress 进度条样式
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';
Vue.use(Message);

// import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login']; // 不重定向白名单
router.beforeEach((to, from, next) => {
	// window.document.title = to.meta.title;
    NProgress.start();
    next();
})

router.afterEach((to) => {
	console.log(store);
    if(to.path != '/' && !store.getters.token){ //path不等于欢迎界面
    	router.push({
			path: '/login'
		});
    }else if(to.path=='/login'){router.push({
			path: '/index'
		});}
    NProgress.done(); // 结束Progress
});
