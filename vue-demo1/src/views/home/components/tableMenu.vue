<template>
  <div class="wrap">
    <div class="header-tab">
      <dl :class="{active:value.index===index}" v-for="(value) in menudata" :key="value.index" @click="change(value.index)">
        <dt>
          <i :class="'iconfont '+value.icon"></i>
        </dt>
        <dd>{{value.title}}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import "@/fonts/iconfont.css";
export default {
  data() {
    return {
      index:0,
      menudata: [
        {
          title: "待处理",
          icon: "icon-naozhong",
          index: 0
        },
        {
          title: "已发起",
          icon: "icon-07",
          index: 1
        },
        {
          title: "已处理",
          icon: "icon-xuanzhong-01",
          index: 2
        }
      ]
    };
  },
  methods:{
    change(index){
      this.index=index;
      this.$emit('change',index)
    }
  }
};
</script>

<style>
.icon {
  font-size: 0.5rem;
}
.header-tab {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fff;
  box-shadow: 30px 30px 50px 10px #eee;
  padding: 0.3rem 0 0 0;
}

.header-tab dl{
  flex:3;
  text-align: center;
}
.header-tab dl dt .iconfont{
  font-size: .8rem;
  margin-left: .5rem;
}
.active{
  color:green;
}
</style>
