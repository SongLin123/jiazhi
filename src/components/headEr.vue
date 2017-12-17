<template>
  <div class="head-container">

    <!--pc-->
    <div class="main-head hidden-sm-and-down">
      <div v-for="(item,index) in banner" class="item">
        <img style="cursor: pointer;"
             @mousemove="hovering(index+1,$event)" @mouseleave="leaveing(index+1,$event)"
             @click="index===0?0:jump(item.src)"
             :src="'static/button/0'+(index+1)+'.png'"
             alt="">
        <span v-if="index+1!==5" class="line"></span>
      </div>
    </div>


    <!--mobile-->
    <div class="mobile-main-head hidden-sm-and-up">
      <div v-for="(item,index) in banner" class="mobile-item">
        <img style="cursor: pointer;width: 100%;height: 100%"
             @mousemove="hovering(index+1,$event)" @mouseleave="leaveing(index+1,$event)"
             @click="index===0?0:jump(item.src)"
             :src="'static/button/0'+(index+1)+'.png'"
             alt="">
      </div>
    </div>



    <!--pc-->
    <div class="head-aside hidden-sm-and-down">
      <span class="hon-line first"></span>

      <div class="title-container">
        <div class="title" v-for="(it,index) in title">
          <span @click="jump(it.src)" :class="['word',{'active':index===0}]">{{it.name}}</span>
          <span v-if="index!==3" class="line"></span>
        </div>
      </div>
      <span class="hon-line sec"></span>
    </div>


    <!--mobile-->

    <div class="mobile-head-aside hidden-sm-and-up">
      <span class="hon-line first"></span>

      <div class="mobile-title-container">
        <div class="mobile-title" v-for="(it,index) in title">
          <span @click="jump(it.src)" :class="['word',{'active':index===0}]">{{it.name}}</span>
          <span v-if="index!==3" class="line"></span>
        </div>
      </div>
      <span class="hon-line sec"></span>
    </div>


  </div>

</template>

<script>
  export default {
    name: "main-head",
    data() {
      return {
        banner: [
          {
            name: '热卖专区',
            src: ''
          },
          {
            name: '系统集成',
            src: 'http://cloud-open.cn/index.php?c=article&a=type&tid=409'
          },
          {
            name: '企业通信',
            src: 'http://cloud-open.cn/yunzhuji/index.html'
          },
          {
            name: '电脑维护',
            src: 'http://cloud-open.cn/index.php?c=article&a=type&tid=433 '
          },
          {
            name: '云主机',
            src: 'http://cloud-open.cn/yunzhuji/yzjpc.html '
          },

        ],
        title: [
          {
            name: '企业宽带',
            src: ''
          }, {
            name: '数据专线',
            src: ''
          }, {
            name: '展会宽带',
            src: ''
          }, {
            name: '海外优化',
            src: ''
          },
        ]
      }
    },
    methods: {
      hovering(item, e) {
        if (item === 5) {
          e.target.src = `static/button/${item + 5}.png`
          return
        }
        e.target.src = `static/button/0${item + 5}.png`
      },
      leaveing(item, e) {

        e.target.src = `static/button/0${item}.png`
      },

    },

  }
</script>

<style scoped>




  .head-container {
    /*height: 240px;*/
    width: 100%;
  }

  .main-head {
    height: 175px;
    width: 100%;
    box-sizing: border-box;
    padding: 30px;
    display: flex;
  }
  .mobile-main-head {
    height: 18.3vw;
    width: 100%;
    box-sizing: border-box;
    /*padding: 30px;*/
    display: flex;
  }

  .item {
    flex: 1;
    position: relative;

  }
  .mobile-item {
    flex: 1;
    box-sizing: border-box;
    position: relative;
    padding: 1.5%;
  }

  .line {
       display: inline-block;
       height: 56px;
       width: 1px;
       background: #010001;
       position: absolute;
       right: 0;
       top: 50%;
       margin-top: -28px;
       transform: scaleX(0.5);
     }

  .head-aside {
    height: 65px;
    width: 100%;
    background: aliceblue;
    position: relative;
  }

  .mobile-head-aside {
    height: 5vh;
    width: 100%;
    background: aliceblue;
    position: relative;
  }

  .hon-line {
    display: inline-block;
    width: 100%;
    background: #010001;
    position: absolute;
    left: 0;
  }

  .first {
    height: 5px;
    transform: scaleY(0.5);
    top: 0;
  }

  .sec {
    height: 2px;
    transform: scaleY(0.5);
    bottom: 0;
  }

  .title-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 20%;
    display: flex;
  }
  .mobile-title-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
  }

  .mobile-title {
    flex: 1;
    font-size: 13px;
    line-height: 21px;
    padding: 1vh 3vw;
    overflow: hidden;
    position: relative;

  }

  .mobile-title >.line {
    display: inline-block;
    height: 2vh;
    width: 1px;
    background: #010001;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -1vh;
    transform: scaleX(0.5);
  }

  .title {
    flex: 1;
    font-size: 20px;
    line-height: 36px;
    padding: 15px 40px;
    overflow: hidden;
    position: relative;

  }

  .title > .line {
    height: 30px;
    margin-top: -15px;
  }

  .word {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .word:hover {
    background: #010001;
    color: white;
    cursor: pointer;
  }

  .word.active {
    background: #010001;
    color: white;
  }
</style>
