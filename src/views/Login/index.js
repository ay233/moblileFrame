// import axios from "@/axios.js"
// import bus from "@/bus.js";
export default {
	data() {
		return {

		};
	},
	props: [], //获取组件外数据

	created() { //实例挂载之前		
		

	},
	mounted() { //实例挂载之后
		
	},
	methods: { //方法
      login(){
      	console.log(this.$store);
        this.$store.dispatch('Login',{username:'anyao','password':'123456'}).then(()=>{
           console.log('登陆成功');
        }).catch(()=>{
           this.$toast.error('登录失败！');
           // 先写在这
           this.$router.push('/index');
        });
      }
	},
	watch: { //监听
		$route(to, from) { // 对路由变化作出响应...

		},
	},
	computed: {
		
	}
}