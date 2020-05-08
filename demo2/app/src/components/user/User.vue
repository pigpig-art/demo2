<template>
  <!-- 面包屑 -->
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片区域 -->
    <div style="background-color: #ececec; padding: 20px;">
      <a-row :gutter="16">
        <a-col :span="8">
          <a-card title="Card title" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="Card title" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card title="Card title" :bordered="false">
            <p>card content</p>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <!-- 图表区域 -->
    <div class="chart">
      <ul>
        <li>
          <!-- <h2>折线图</h2> -->
          <div class="chart1" ref="charts"></div>
        </li>
        <li>
          <!-- <h2>折线图</h2> -->
          <div class="chart1" ref="charts1">图表</div>
        </li>
      </ul>
    </div>


    
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let charts = this.$refs.charts;
      let charts1 = this.$refs.charts1;

      let myChart = this.$echarts.init(charts);
      let myChart1 = this.$echarts.init(charts1);
      // console.log(myChart);

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
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
       myChart1.setOption({
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
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>


<style  scoped>
.el-breadcrumb {
  margin-bottom: 15px;
}
.chart {
  height: 440px;
  /* background-color: pink; */
  /* box-sizing: border-box; */
  padding: 20px;
}
.chart ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
}
.chart ul li {
  height: 400px;
  flex: 1;
  background: #fff;
  margin-right: 20px;
  padding: 20px;
  /* position: relative; */
  /* margin: 20px;
  box-sizing: border-box; */
}
.chart ul :last-child {
  margin-right: 0px;
}
.chart1 {
  height: 368px;

  /* background-color: rgb(5, 5, 5); */
}
</style>

