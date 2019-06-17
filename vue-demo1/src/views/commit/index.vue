<template>
  <div class="wrap">
    <el-header :title="type==='overtime'?'办公室加班申请表':'办公室调休申请表'"></el-header>
    <div class="top">
      <div class="det">
        <div class="left">
          <img :src="this.list.avatar" alt class="left_img">
        </div>
        <div class="middle">
          <ul>
            <li>
              <p>申请人姓名</p>
              <span>
                <input
                  type="text"
                  style="width:100px;height:40px;margin-top:37px;border:1px solid #ccc;background:#0b6242;color:#fff;font-size:25px;"
                >
              </span>
            </li>
            <li>
              <p>直接主管</p>
              <p class="p">秦毅超</p>
            </li>
          </ul>
        </div>
        <div class="right">
          <p>></p>
        </div>
      </div>
    </div>
    <div class="content">
      <h2>申请信息</h2>
      <div class="cont">
        <ul>
          <li>
            <p>加班日期</p>
            <el-date-picker v-model="value" type="date" placeholder="选择日期"></el-date-picker>
          </li>
          <li>
            <p>加班类型</p>
            <p>
              <select v-model="usertype">
                <option value="-1">默认</option>
                <option v-for="val in this[type+'Type']" :key="val.id" :value="val.id">{{val.title}}</option>
              </select>
            </p>
          </li>
          <li>
            <p>加班起始时间</p>
            <el-time-picker
              v-model="starttime"
              :selectableRange="[
                '21:00:00-24:00:00',
                '07:00:00-09:00:00'
              ]"
              placeholder="起始时间"
            ></el-time-picker>
          </li>
          <li>
            <p>加班截止时间</p>
            <el-time-picker
              v-model="endtime"
              @change="endtimeSelected"
              :selectableRange="[
                '21:00:00-24:00:00',
                '07:00:00-09:00:00'
              ]"
              placeholder="结束时间"
            ></el-time-picker>
          </li>
          <li>
            <p>共计时数</p>
            <p>{{num}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="cont2">
      <h2>加班事由</h2>
      <p>
        <textarea
          name
          id
          cols="43"
          rows="6"
          class="textarea"
          placeholder="最多输入200个字符"
          style="font-size:.4rem"
          v-model="describe"
        ></textarea>
      </p>
    </div>
    <div class="cont3">
      <img src="../../assets/jia.png" alt class="jia" @click="submitFile">上传附录
      <input type="file" class="shangchuan" @change="submitFile">
    </div>
    <div>
      <ul style="width:84%;height:200px;background:#ccc;margin:20px 30px;overflow: hidden;">
        <li v-for="(val,i) in images" :key="i" style="float:left;margin-left:10px;  ">
          <span class="guanbi" @click="images.splice(i,1)">X</span>
          <img :src="'http://localhost:3000'+val" alt class="img">
        </li>
      </ul>
    </div>
    <div class="bottom">
      <ul>
        <li style="flex:6;" @click="$router.back()">取消</li>
        <li style="flex:4;" @click="submitTask">提交</li>
      </ul>
    </div>
    <alertMessage text="报错信息"/>
  </div>
</template>

<script>
import alertMessage from "../../views/home/components/alertMessage/index"
import api from "../../api/index";
export default {
  components:{
    alertMessage
  },
  data() {
    return {
      value: new Date(),
      starttime: "",
      describe:"",
      endtime: "",
      num: "",
      usertype:"",
      images: [],
      guide: {
        type: ["png", "gif", "svg", "jpg", "jpeg"],
        size: 3
      },
      list: {},
      overtimeType: [
        {
          id: 1,
          title: "双休日"
        },
        {
          id: 2,
          title: "节假日"
        },
        {
          id: 3,
          title: "工作日"
        }
      ],
      vacationType: [
        {
          id: 1,
          title: "年假"
        },
        {
          id: 2,
          title: "调休"
        }
      ]
    };
  },
  props: {
    type: String
  },
  methods: {
    submitFile(e) {
      console.log(e);
      let userfile = e.target.files[0];
      let { type, size } = userfile;
      let filetype = type.match(/\/(\w+)$/i)[1];
      let error = "";
      if (!this.guide.type.includes(filetype)) {
        error = `请上传${this.guide.type.join()}类型的文件`;
      }
      if (this.guide.size * 1024 * 1024 < size) {
        error = `请上传${this.guide.size}类型的文件`;
      }
      if (error) {
        alert(error);
        return;
      }
      console.log(userfile);
      const fromdata = new FormData();
      fromdata.append("file", userfile);
      console.log(fromdata);
      api.submitFile(fromdata).then(res => {
        this.images.push(res.url);
      });
    },
    submitTask() {
      let options = {
        annex:this.images,
        describe:this.describe,
        endtime:this.endtime,
        starttime:this.starttime,
        type:this.usertype
      };
      api['submit'+this.type](options).then(res=>{
        let {msg}=res;
        if(msg==='提交成功'){
          this.$router.back()
        }else{
          alert(msg)
        }
      })
    },
    endtimeSelected() {
      let starttime = new Date(this.starttime) * 1;
      let endtime = new Date(this.endtime) * 1;
      let num = endtime - starttime;
      if (num < 0) {
        alert("时间选择错误");
        return;
      }
      this.num = num;
      console.log(num);
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
html,
body,
.wrap {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
}
.img {
  width: 80px;
  height: 110px;
}
.top {
  width: 100%;
  height: 5rem;
  background: #0b6242;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  .det {
    width: 100%;
    height: 3rem;
    margin-top: 0.1rem;
    display: flex;
    .left {
      flex: 2;
      .left_img {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background: #fff;
        margin-left: 0.5rem;
        margin-top: 0.5rem;
      }
    }
    .middle {
      flex: 7;
      ul {
        li {
          display: flex;
          color: #fff;
          height: 1rem;
          padding-left: 0.2rem;
          p {
            text-align: center;
            line-height: 1rem;
            font-size: 0.4rem;
            margin-right: 0.8rem;
          }
          .p {
            margin-left: 0.4rem;
          }
        }
      }
    }
    .right {
      flex: 1;
      p {
        color: #fff;
        font-size: 1rem;
      }
    }
  }
}
.content {
  width: 90%;
  height: 7rem;
  background: #fff;
  margin-left: 5%;
  border-radius: 0.5rem;
  margin-top: -2rem;
  h2 {
    width: 94%;
    height: 1.5rem;
    border-bottom: 0.01rem solid#ccc;
    line-height: 1.5rem;
    font-size: 0.5rem;
    padding-left: 0.4rem;
    color: #a7a7a7;
  }
  .cont {
    width: 94%;
    height: 3rem;
    padding-left: 0.05rem;
    ul {
      li {
        display: flex;
        justify-content: space-between;
        line-height: 0.1rem;
        font-size: 0.42rem;
        color: #bfbfbf;
      }
    }
  }
}
.cont2 {
  width: 90%;
  height: 4.3rem;
  background: #fff;
  margin-left: 5%;
  border-radius: 0.5rem;
  margin-top: 0.1rem;
  color: #6f6f6f;
  h2 {
    width: 94%;
    height: 70px;
    // border-bottom: 1px solid#ccc;
    line-height: 100px;
    font-size: 30px;
    padding-left: 40px;
  }
  p {
    width: 94%;
    height:2rem;
    font-size: 20px;
    line-height: 100px;
    textarea{
      width: 100%;
    height:2.5rem;
    }
  }
}
.cont3 {
  width: 90%;
  height: 1rem;
  background: #fff;
  margin-left: 5%;
  border-radius: 20px;
  margin-top: 0.8rem;
  color: #6f6f6f;
  .shangchuan {
    opacity: 0;
    position: absolute;
    left: 0;
    width: 100%;
    font-size: 0.4rem;
  }
  .nr {
    line-height: 40px;
  }
}
.bottom {
  width: 100%;
  height: 60px;
  background: #0b6242;
  font-size: 25px;
  color: #fff;
}
.bottom ul {
  width: 100%;
  height: 80px;
  line-height: 60px;
  text-align: center;

  display: flex;
}
.bottom ul li {
  border-right: 1px solid #ccc;
}
.jia {
  width: 40px;
  height: 40px;
  position: relative;
}
.guanbi {
  width: 30px;
  height: 30px;
  display: block;
  background: rgb(73, 73, 73);
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
  color: #fff;
  float: right;
}
</style>

