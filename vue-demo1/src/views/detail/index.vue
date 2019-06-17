<template>
  <div class="wrap">
    <el-header :title="title"></el-header>
    <div class="wrap">
      <div class="top">
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
                <p class="p">秦义超</p>
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
              <p>{{showType}}</p>
            </li>
            <li>
              <p>加班起始时间</p>
              <p>{{startTime}}</p>
            </li>
            <li>
              <p>加班截止时间</p>
              <p>{{endTime}}</p>
            </li>
            <li>
              <p>共计时数</p>
              <p>2.2</p>
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
          ></textarea>
        </p>
      </div>
      <div class="cont3">
        <input type="file" class="shangchuan">
      </div>
      <div class="bottom">
        <ul>
          <li style="flex:6;">取消</li>
          <li style="flex:4;">提交</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../utils/request";
import { showType, showTime } from "../../utils/computedTime";

export default {
  props: {
    type: String,
    id: String
  },
  data() {
    return {
      value: new Date(),
      startvalue:'',
      endvalue:'',
      list: {}
    };
  },
  computed: {
    title() {
      return this.type === "overtime" ? "办公室加班申请表" : "办公室调休申请表";
    },
    showType() {
      return showType(this.list.type, this.list.list_type);
    },
    startTime() {
      return showTime(this.list.startTime);
    },
    endTime() {
      return showTime(this.list.endTime);
    }
  },
  created() {
    request.get("/api/apply/" + this.type, {
        applicationNumber: this.id
      }).then(res => {
        this.list = res.data;
      });
    window.detail = this;
    console.log("/api/apply/" + this.type + "?applicationNumber=" + this.id);
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
    height: 1.2rem;
    border-bottom: 0.01rem solid#ccc;
    line-height: 1.2rem;
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
  height: 4rem;
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
    font-size: 35px;
    padding-left: 40px;
  }
  p {
    width: 94%;
    font-size: 30px;
    line-height: 100px;
  }
}
.cont3 {
  width: 90%;
  height: 2rem;
  background: #fff;
  margin-left: 5%;
  border-radius: 20px;
  margin-top: 0.8rem;
  color: #6f6f6f;
  .shangchuan {
    font-size: 0.4rem;
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
</style>
