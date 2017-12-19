<template>
  <el-container>
    <el-header style="padding: 0;height:auto ">

    <el-row style="width: 100vw">
      <el-col :span="24">
        <img :src="agent==='pc'?'static/Website_Banner_Preview.png':'static/Mobile_Banner_Preview.png'" @click="agent==='pc'?jump('http://cloud-open.cn/yunzhuji/qytx.html'):jump('http://cloud-open.cn/yunzhuji/new_page_1.html')" style="width: 100%;cursor: pointer" alt="">
      </el-col>
    </el-row>
    </el-header>

    <el-main v-if="agent==='pc'" style="padding:0;position: relative;top: -1px">
      <el-row style="width: 75%;margin: 0 auto">
        <main-head></main-head>


        <table-body></table-body>
      </el-row>
    </el-main>
    <el-main v-if="agent!=='pc'" style="padding:0 4.3%;position: relative;top: -1px">
      <el-row style="width: 100%;margin: 0 auto;">
        <main-head></main-head>


        <table-body></table-body>
      </el-row>
    </el-main>

  </el-container>
</template>

<script>
  import Header from "./headEr";
  import TableBody from "./tableBody";

  export default {
    components: {
      TableBody,
      mainHead:Header},
    data () {
      return {
      }
    },
    name: 'HelloWorld',

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
