// import axios from "@/axios.js"
// import bus from "@/bus.js";
export default {
	data() {
		return {
           timeCount:4,//欢迎界面倒计时（s）
		};
	},
	props: [], //获取组件外数据

	created() { //实例挂载之前		
		

	},
	mounted() { //实例挂载之后
		let timer=setInterval(()=>(--this.timeCount,this.timeCount==0 && (clearInterval(timer),this.$router.push('/index'))),1000);
	},
	methods: { //方法

	},
	watch: { //监听
		$route(to, from) { // 对路由变化作出响应...

		},
	},
	computed: {
		
	}
}