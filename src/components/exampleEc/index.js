// import axios from "@/axios.js"
// import bus from "@/bus.js";
export default {
	data() {
		return {
time: undefined,
      landscape: false,
      display: true,
      type: 'ampm',
      viewType: 'clock'
		};
	},
	props: [], //获取组件外数据

	created() { //实例挂载之前		
		

	},
	mounted() { //实例挂载之后
		console.log(this.$refs.exampleEc);
		var myChart = this.$echarts.init(this.$refs.exampleEc);

		// 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
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