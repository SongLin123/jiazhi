<template>
  <div class="table-cont">
    <el-row class="table-item hidden-sm-and-down" v-for="(table,index) in tableData" :key="'id'+index">
      <el-col :span="4" class="desCont">
        <div class="word" :style="[{'background':table.describe.color,'font-size':table.describe.fontSize}]"
        v-html="table.describe.word"
        >
        </div>
        <div class="logo" style="margin: 5px 0">
          <img :src="table.describe.logo" @click="jump(table.describe.href)" alt="" style="width: 100%;display: inline-block;cursor: pointer">
        </div>
        <div class="more"> <span @click="jump(table.describe.href)">点击了解详情</span></div>
      </el-col>
      <el-col :span="20">
          <el-col :span="24" class="title">
            {{table.title}}
          </el-col>

        <el-col :span="24">
          <el-table

            :header-cell-class-name="'r-head'"
            highlight-current-row
            @current-change="handleCurrentChange"
            :data="table.data"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="产品名称"
              class-name="column-class"
              >
              <template slot-scope="scope">
                <el-col> {{ scope.row.name }}{{scope.row.miniTitle?' / ':' ' }} <span style="color: #E60012">{{ scope.row.miniTitle }}</span></el-col>

              </template>
            </el-table-column>
            <el-table-column
              prop="apply"
              label="适    用"
              class-name="column-class"
              min-width="125"
              >
              <template slot-scope="scope">

                {{ scope.row.apply}}
                {{ scope.row.apply2?'，'+scope.row.apply2:''}}
              </template>
            </el-table-column>
            <el-table-column
              prop="config"
              class-name="column-class"
              min-width="110"
              label="配     置">
              <template slot-scope="scope">
                {{ scope.row.config}}
                {{ scope.row.config2?'，'+scope.row.config2:''}}
              </template>
            </el-table-column>
            <el-table-column
              prop="price"
              class-name="column-class"
              width="120"
              label="价    格">
              <template slot-scope="scope">
                <span style="color: #E60012">{{ scope.row.price}}</span>
                <span  v-html="scope.row.unit.indexOf('月')>0?'元/<span style=\'color:#E60012\'>月</span>':'元/年'"></span>
              </template>
            </el-table-column>
          </el-table>
          <el-col :span="24" class="phone">
            <span  class="line" style=" height: 2px;top: -1px;background: #010001;"></span>
            <el-col :span="12" class="callCont">
              <div class="calling">
                <i class="el-icon-phone" style="display: inline-block;width: 20px;height: 20px;border-radius: 20px;border: 1px solid rgb(218,218,218);line-height: 20px"></i>
                <span @click="callRing">免费咨询 400-663-1663</span>
              </div>
            </el-col>
            <el-col :span="12" class="callCont">
              <div class="calling" @click="open('http://p.qiao.baidu.com/cps/chat?siteId=10988132&userId=24247806 ')">
                <span >立即免费在线咨询</span>
              </div>
            </el-col>
            <span  class="line" style=" height: 1px;bottom: 0;background: rgba(1,0,1,0.47);"></span>
          </el-col>


        </el-col>
      </el-col>
    </el-row>
    <el-row class="mobile-table-item hidden-sm-and-up" v-for="(table,index) in tableData" :key="'id'+index">

      <el-col :span="24">
          <el-col :span="24" class="mobile-title" @click.native="jump(table.describe.href)">
            <el-col :span="4" style="height: 100%">
              <img :src="table.describe.mlogo" alt="" style="width: 100%;height: 100%">
            </el-col>
            <el-col :span="4" style="height: 100%" v-html="table.describe.word" :style="[{'background':table.describe.color,'padding-top':'0.5vh','font-size':'0.55rem','line-height':index===0?'0.6rem':'1rem','color':'white'}]">

            </el-col>
            <el-col :span="16" style="height: 100%;color: white;font-size: 14px">
              {{table.title}}
            </el-col>
          </el-col>

        <el-col :span="24">
          <el-table

            :header-cell-class-name="'mobile-r-head'"
            highlight-current-row
            @current-change="handleCurrentChange"
            :data="table.data"
            style="width: 100%">
            <el-table-column
              label="产品名称"
              min-width="60"
              class-name="mobile-column-class"
              >
              <template slot-scope="scope">
                <el-col style="font-size: 10px;line-height: 14px"> {{ scope.row.name }}<br><span style="color: #E60012">{{ scope.row.miniTitle }}</span></el-col>

              </template>
            </el-table-column>
            <el-table-column

              label="适    用"
              min-width="105"
              class-name="mobile-column-class"
              >
              <template slot-scope="scope">
                <el-col style="font-size: 10px;line-height: 14px"> {{ scope.row.apply }}<br><span>{{ scope.row.apply2 }}</span></el-col>

              </template>
            </el-table-column>
            <el-table-column
              class-name="mobile-column-class"
              min-width="100"
              label="配     置">
              <template slot-scope="scope">
                <el-col style="font-size: 10px;line-height: 14px"> {{ scope.row.config }}<br><span>{{ scope.row.config2 }}</span></el-col>

              </template>

            </el-table-column>
            <el-table-column
              prop="price"
              min-width="60"
              class-name="mobile-column-class"
              label="价    格">
              <template slot-scope="scope">
                <el-col style="font-size: 10px;line-height: 10px;"> <span style="color: RGB(230,0,18)">{{ scope.row.price }}</span><span v-html="scope.row.unit.indexOf('月')>0?scope.row.unit:'元/年'"></span></el-col>

              </template>


            </el-table-column>
          </el-table>
          <el-col :span="24" class="mobile-phone">
            <span  class="line" style=" height: 2px;top: -1px;background: #010001;"></span>
            <el-col :span="16" class="callCont">
              <div class="mobile-calling">
                <i class="el-icon-phone" style="display: inline-block;width: 20px;height: 20px;border-radius: 20px;border: 1px solid rgb(218,218,218);line-height: 20px"></i>
                <span @click="callRing">免费咨询 400-663-1663</span>
              </div>
            </el-col>
            <el-col :span="8" class="callCont">
              <div class="mobile-calling" @click="open('http://p.qiao.baidu.com/cps/chat?siteId=10988132&userId=24247806 ')">
                <span >在线咨询</span>
              </div>
            </el-col>
            <span  class="line" style=" height: 1px;bottom: 0;background: rgba(1,0,1,0.47);"></span>
          </el-col>


        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "table-body",
    data() {
      return {
        tableData: [
         {
            describe: {
              word: '销量冠军<br>首月免租',
              color: '#d4d221',
              fontSize: '0.8rem',
              logo: 'static/02.png',
              mlogo: 'static/mobile-pic/02.png',
              href:'http://cloud-open.cn/index.php?c=article&a=type&tid=368 '
            },
            title: '中国电信 CHINA TELECOM',
            data: [
              {
                alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=368&id=1042',
                name: '旺铺通',
                apply: '商铺、初创企业类用户',
                config: '下行50M，上行4M',
                config2: '动态IP',
                price: '1900',
                unit:'元/年'
              }, {
                alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=368&id=1041',
                name: '商务专线',
                miniTitle:'限时0元享',
                apply: '网页浏览',
                apply2: '邮件收发等',
                config: '50M上下行对称',
                config2: '动态IP',
                price: '6800',
                unit:'元/年'
              }, {
                alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=368&id=1040',
                name: '精品专线',
                miniTitle:'首月免租',
                apply: 'OA/ERP/SAP',
                apply2: '视频会议等场景',
                config: '50M上下行对称',
                config2: '一个固定IP',
                price: '33880',
                unit:'元/年'
              }, {
                alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=368&id=1039',
                name: 'IPMAN',
                miniTitle:'首月免租',
                apply: '多IP、大型服务器',
                apply2: '集群搭建场景',
                config: '10M上下行对称',
                config2: '一个固定IP',
                price: '3729',
                unit:'元/<span style="color: #E60012">月</span>'
              },
            ]
          },
          {
            describe: {
              word: '首月免租',
              color: 'RGB(230,0,18)',
              fontSize: '0.8rem',
              logo: 'static/03.png',
              mlogo: 'static/mobile-pic/03.png',
              href:'http://cloud-open.cn/index.php?c=article&a=type&tid=370 '
            },
            title: '中国联通 CHINA UNICOM',
            data: [
              {
                alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=370&id=1081',
                name: '沃·SOHO',
                apply: '商铺、初创企业',
                config: '40M上下行对称',
                config2: '动态IP',
                price: '2400',
                unit:'元/年'
              }, {
                alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=370&id=1080',
                name: '沃·极速',
                apply: '网页浏览',
                apply2: '邮件收发等',
                config: '60M上下行对称',
                config2: '动态IP',
                price: '5700',
                unit:'元/年'
              }, {
                alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=370&id=1079',
                name: '沃·动车',
                apply: 'OA/ERP/SAP',
                apply2: '视频会议等场景',
                config: '50M上下行对称',
                config2: '5个固定IP',
                price: '33400',
                unit:'元/年'
              }, {
                alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=370&id=1078',
                name: '沃·专线',
                apply: '多IP、大型服务器',
                apply2: '集群搭建场景',
                config: '10M上下行对称',
                config2: '一个固定IP',
                price: '5940',
                unit:'元/<span style="color: #E60012"">月</span>'
              },
            ]
          },


          {
            describe: {
              word: '首月免租',
              color: 'RGB(230,0,18)',
              fontSize: '0.8rem',
              logo: 'static/04.png',
              mlogo: 'static/mobile-pic/04.png',
              href:'http://cloud-open.cn/index.php?c=article&a=type&tid=370 '
            },
            title: '中国移动 CHINA MOBILE',
            data: [
              {
                alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=369&id=1133',
                name: '光网宽带',
                apply: '商铺、初创企业',
                config: '20M上下行对称',
                config2: '动态IP',
                price: '2980',
                unit:'元/年'
              }, {
                alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=369&id=1133',
                name: '光网宽带',
                apply: '网页浏览',
                apply2: '邮件收发等',
                config: '50M上下行对称',
                config2: '动态IP',
                price: '3980',
                unit:'元/年'
              }, {
                alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=369&id=1133',
                name: '光网宽带',
                apply: 'OA/ERP/SAP',
                apply2: '视频会议等场景',
                config: '100M上下行对称',
                config2: '动态IP',
                price: '4980',
                unit:'元/年'
              }, {
                alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=369&id=1082',
                name: 'CMNET',
                apply: '多IP、大型服务器',
                apply2: '集群搭建场景',
                config: '50M上下行对称',
                config2: '一个固定IP',
                price: '1500',
                unit:'元/<span style="color: #E60012"">月</span>'
              },
            ]
          },
          {
            describe: {
              word: '首月免租',
              color: 'RGB(230,0,18)',
              fontSize: '0.8rem',
              logo: 'static/05.png',
              mlogo: 'static/mobile-pic/05.png',
              href:'http://cloud-open.cn/index.php?c=article&a=type&tid=370 '
            },
            title: '鹏博士宽带 DR.PGROUPENG',
            data: [
              {
                alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=428&id=1126 ',
                name: '云@商城',
                apply: '商铺、初创企业',
                config: '50M上下行对称',
                config2: '动态IP，楼内接入',
                price: '4000',
                unit:'元/年'
              }, {
                alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=428&id=1126 ',
                name: '云@商城',
                apply: '网页浏览',
                apply2: '邮件收发等',
                config: '100M上下行对称',
                config2: '动态IP，楼内接入',
                price: '6000',
                unit:'元/年'
              }, {
                alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=428&id=1125',
                name: '云@快线',
                apply: 'OA/ERP/SAP',
                apply2: '视频会议等场景',
                config: '50M上下行对称',
                config2: '动态IP，楼外拨号',
                price: '6000',
                unit:'元/年'
              }, {
              alink:'http://www.cloud-open.cn/index.php?c=article&a=type&tid=428&id=1124',
                name: '云@动车',
                apply: '多IP、大型服务器',
                apply2: '集群搭建场景',
                config: '100M上下行对称',
                config2: '一个固定IP',
                price: '33800',
                unit:'元/年'
              },
            ]
          },
          {
            describe: {
              word: '首月免租',
              color: 'RGB(230,0,18)',
              fontSize: '0.8rem',
              logo: 'static/06.png',
              mlogo: 'static/mobile-pic/06.png',
              href:'http://cloud-open.cn/index.php?c=article&a=type&tid=370 '
            },
            title: '嘉值云光纤 VAS Technology',
            data: [
              {
                alink:' http://www.cloud-open.cn/index.php?c=article&a=type&tid=429id=1127',
                name: '云光纤',
                apply: 'OA/ERP/SAP',
                apply2: '视频会议等场景',
                config: '500M上下行对称',
                config2: '1个固定IP',
                price: '21000',
                unit:'元/年'
              }, {
                alink:' http://www.cloud-open.cn/index.php?c=article&a=type&tid=429id=1127',
                name: '云光纤B',
                apply: '多IP、大型服务器',
                apply2: '集群搭建场景',
                config: '100M上下行对称',
                config2: '一个固定IP',
                price: '31000',
                unit:'元/年'
              },
            ]
          },

        ]
      }
    },
    methods:{
      handleCurrentChange(row){
        console.log(row.alink)
        this.open(row.alink)
      },
      open(src){
        window.open(src)
      },
      callRing(){

        if (this.agent==='phone'){
          open('tel:400-663-1663');
          return
        }
        open('https://login.skype.com/login');
      }
    },

  }
</script>

<style scoped>
  .table-cont {
    width: 100%;
  }
  .mobile-title{
    height: 4vh;
    background: rgb(0,160,233);
    line-height: 4vh;
    box-sizing: border-box;
    border: 1px solid rgb(34,25,21);
  }

  .table-item {
    height: auto;
    padding: 35px 0 0 15px;
  }
  .mobile-table-item {
    height: auto;
    padding: 2.3333333vh 0 0 0;
  }

  .desCont {
    padding: 0 30px;
    margin-top: 30px;
  }

  .word {
    padding: 5px 0;
    color: white;
  }
  .more{
    font-size: 12px;
    cursor: pointer;
    color:#595757;
  }
  .more:hover{
    color: rgb(158,158,158);
  }
  .title{
    height: 30px;
    text-align: left;
    font-size: 30px;
    line-height: 20px;
    text-indent: 20px;
  }
  .line{
    display: inline-block;
    width: 100%;


    position: absolute;
    left: 0;
    z-index: 10;
  }
  .phone{
    height: 90px;
    padding: 20px 0 30px 0;
    position: relative;
  }
  .mobile-phone{
    height: 7vh;
    padding: 1vh 0 2vh 0;
    position: relative;
  }
  .calling{
    border: 2px solid rgb(122,146,253);
    background: rgb(242,242,242);
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
  }
  .mobile-calling{
    border: 1px solid rgb(89,87,87);
    background: rgb(242,242,242);
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    cursor: pointer;
  }
  .callCont:nth-child(2){
    padding-right: 5px;
  }
  .callCont:nth-child(3){
    padding-left: 5px;
  }
</style>
