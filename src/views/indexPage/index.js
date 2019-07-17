// import axios from "@/axios.js"
// import bus from "@/bus.js";
import leftMenu from 'components/leftMenu/index.vue';
export default {
	data() {
		return {
           isShowMenu:false,
		};
	},
	props: [], //获取组件外数据

	created() { //实例挂载之前		
	},
	mounted() { //实例挂载之后
		
	},
	methods: { //方法
     showHide(){
     	this.isShowMenu=!this.isShowMenu;
     }
	},
	watch: { //监听
		$route(to, from) { // 对路由变化作出响应...

		},
	},
	computed: {
		
	},
	components:{
		leftMenu
	}
}