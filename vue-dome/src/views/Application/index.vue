<template>
  <div class="wrap">
    <div class="top">
      <div class="head">
        <p @click="$router.back()">←</p>
        <p>办公室加班申请表</p>
        <p></p>
      </div>
      <div class="det">
        <div class="left">
          <img :src="this.list.avatar" alt class="left_img">
        </div>
        <div class="middle">
          <ul>
            <li>
              <p>申请人姓名</p>
              <p>{{this.list.nickname}}</p>
            </li>
            <li>
              <p>直接主管</p>
              <p class="p">秦毅超</p>
            </li>
            <li>
              <p>申请单号</p>
              <p class="p">{{this.list.applicationNumber}}</p>
            </li>
            <li>
              <p>发起时间</p>
              <p class="p">{{new Date(this.list.startTime).toLocaleDateString()}}</p>
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
            <p>{{new Date(this.list.startTime).toLocaleDateString()}}</p>
          </li>
          <li>
            <p>加班类型</p>
            <p>{{showType(this.list.type, this.list.list_type)}}</p>
          </li>
          <li>
            <p>加班起始时间</p>
            <p>{{StartTime(this.list.startTime)}}</p>
          </li>
          <li>
            <p>加班截止时间</p>
            <p>{{EndTime(this.list.endTime)}}</p>
          </li>
          <li>
            <p>共计时数</p>
            <p>2.5</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="cont2">
      <h2>加班事由</h2>
      <p>{{this.list.describes}}</p>
    </div>
    <div class="cont3">
      <div class="cont3_top">
        <p class="y"></p>
        <p class="r">附件</p>
        <p class="s">共4件 ></p>
      </div>
      <div class="cont3_cont">
        <img src="http://img4.imgtn.bdimg.com/it/u=2032769818,927819564&fm=15&gp=0.jpg" alt>
        <img src="http://img0.imgtn.bdimg.com/it/u=2081985362,2048887978&fm=15&gp=0.jpg" alt>
        <img src="http://img5.imgtn.bdimg.com/it/u=4206386444,67045743&fm=26&gp=0.jpg" alt>
      </div>
    </div>
    <div class="bottom">
      <ul>
        <li>
          <dl>
            <dd></dd>
            <dt>审批历史</dt>
          </dl>
        </li>
        <li class="li li_l">退回</li>
        <li class="li li_r">同意</li>
      </ul>
    </div>
  </div>
</template>
<script>
// import request from "@/uitls/request";
export default {
  data() {
    return {
      type: "",
      id: "",
      list: []
    };
  },
  created() {
    this.type = this.$route.params.type;
    this.id = this.$route.params.id;
    console.log(this.type, this.id);
    request
      .get("/api/apply/" + this.type + "?applicationNumber=" + this.id)
      .then(res => {
        this.list = res.data;
      });
  },
  methods: {
    showType(type, title) {
      if (title === "overtime") {
        switch (type) {
          case 1:
            return "双休日加班";
          case 2:
            return "节假日加班";
          case 3:
            return "节假日调休";
          default:
            return;
        }
      } else {
        switch (type) {
          case 1:
            return "年假";
          case 2:
            return "调休";
          default:
            return;
        }
      }
    },
    StartTime(start) {
        let start_num = new Date(new Date(start).toGMTString()) * 1
        console.log(start_num)
        let S = start_num;
        let T = new Date(1E3 * S);
        let Format = function(Q) {
            return Q < 10 ? '0' + Q : Q
            };
        
        let Result = Format(T.getHours()) + ':' + Format(T.getMinutes());
        console.log(Result)
        return Result
    },
    EndTime(end) {
        let end_num = new Date(new Date(end).toGMTString()) * 1
        let S = end_num;
        let T = new Date(1E3 * S);
        console.log(T)
        let Format = function(Q){return Q < 10 ? '0' + Q : Q};
        let Result = Format(T.getHours()) + ':' + Format(T.getMinutes());
        return Result
    }
  }
};
</script>
<style lang="scss" scoped>
html,
body,
.wrap {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
}
.top {
  width: 100%;
  height: 400px;
  background: #0b6242;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  .head {
    width: 96%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    color: #fff;
    font-size: 30px;
    padding-top: 10px;
    padding-left: 20px;
  }
  .det {
    width: 100%;
    height: 240px;
    margin-top: 20px;
    display: flex;
    .left {
      flex: 2;
      .left_img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: #fff;
        margin-left: 40px;
      }
    }
    .middle {
      flex: 7;
      ul {
        li {
          display: flex;
          color: #fff;
          padding-left: 20px;
          p {
            text-align: center;
            line-height: 60px;
            font-size: 30px;
            margin-right: 50px;
          }
          .p {
            margin-left: 28px;
          }
        }
      }
    }
    .right {
      flex: 1;
      p {
        color: #fff;
        font-size: 50px;
      }
    }
  }
}
.content {
  width: 90%;
  height: 400px;
  background: #fff;
  margin-left: 5%;
  border-radius: 20px;
  margin-top: -70px;
  h2 {
    width: 94%;
    height: 80px;
    border-bottom: 1px solid#ccc;
    line-height: 80px;
    font-size: 35px;
    padding-left: 40px;
    color: #a7a7a7;
  }
  .cont {
    width: 94%;
    height: 320px;
    padding-left: 40px;
    ul {
      li {
        display: flex;
        justify-content: space-between;
        line-height: 60px;
        font-size: 30px;
        color: #bfbfbf;
      }
    }
  }
}
.cont2 {
  width: 90%;
  height: 200px;
  background: #fff;
  margin-left: 5%;
  border-radius: 20px;
  margin-top: 10px;
  color: #6f6f6f;
  h2 {
    width: 94%;
    height: 80px;
    border-bottom: 1px solid#ccc;
    line-height: 80px;
    font-size: 35px;
    padding-left: 40px;
  }
  p {
    width: 94%;
    padding-left: 40px;
    font-size: 30px;
    line-height: 100px;
  }
}
.cont3 {
  width: 90%;
  height: 260px;
  background: #fff;
  margin-left: 5%;
  border-radius: 20px;
  margin-top: 10px;
  color: #6f6f6f;
  .cont3_top {
    width: 94%;
    height: 80px;
    border-bottom: 1px solid#ccc;
    line-height: 80px;
    font-size: 35px;
    padding-left: 40px;
    display: flex;
    line-height: 80px;

    .y {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #ccc;
      margin-top: 15px;
    }
    .r {
      margin-left: 5%;
      color: #737373;
    }
    .s {
      margin-left: 50%;
      color: #eeeeee;
    }
  }
  .cont3_cont {
    width: 94%;
    padding-left: 40px;
    height: 180px;
    display: flex;
    img {
      width: 32%;
      height: 90%;
      margin-top: 2%;
      margin-left: 1%;
    }
  }
}
.bottom {
  width: 100%;
  height: 100px;
  background: #fff;
  margin-top: 20px;
  ul {
    display: flex;
    text-align: center;
    li {
      flex: 1;
      dl {
        dd {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #ccc;
          margin-left: 100px;
        }
      }
    }
    .li {
      line-height: 100px;
    }
    .li_l {
      background: #404a53;
      color: #fff;
    }
    .li_r {
      background: #0b6242;
      color: #fff;
    }
  }
}
</style>
