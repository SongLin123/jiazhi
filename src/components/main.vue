<template>
  <el-container>
    <el-header style="padding: 0">

    <el-row style="width: 100vw">
      <el-col :span="24">
        <img src="../assets/Website_Banner_Preview.png" style="width: 100%" alt="">
      </el-col>
    </el-row>
    </el-header>

    <el-main>

    </el-main>

  </el-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .main-container{
    flex: 1200px 0 1;
  }
</style>
