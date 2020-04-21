<template>
  <div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
    <button @click="$store.dispatch('increment')">重置</button>
  </div>
</template>

<script>
import {mapState}from 'vuex'
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      hook: this.$store.state.data
    };
  },

  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));

      // 绘制图表
      myChart.setOption({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.hook
          }
        ]
      });
    }
  },
  computed:{
    ...mapState(['messArray_get'])
  },
  watch: {
    "messArray_get"(val,old) {
      
      this.hook = val; // 按照规范在这里应该去使用getters来获取数据
      
    }
  }
};
</script>

<style scoped >
</style>
