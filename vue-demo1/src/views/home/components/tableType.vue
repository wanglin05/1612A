<template>
  <div class="wrap">
    <div class="tab">
      <div class="tab-tabTwo">
        <div :class="{action:val.type===type}" 
        v-for="(val,i) in navdata" 
        :key="i" @click="$emit('change',val.type)">{{val.title}}</div>
      </div>
      <div class="tab-right">
        <div>
          <i class="icon iconfont icon-zixun"></i>
        </div>
        <div>
          <i class="icon iconfont icon-gengduo-2"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/fonts/iconfont.css";
export default {
  props:{
    type:String
  },
  data() {
    return {
      navdata: [
        {
          title: "加班",
          type: "overtime"
        },
        {
          title: "休假",
          type: "vacation"
        }
      ]
    };
  },
  methods:{
    // change(type){
    //   this.$emit('change',type)
    // }
  }
};
</script>

<style>
.tab {
  width: 100%;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tab-tabTwo {
  width:100%;
  flex: 7;
  height: 0.8rem;
  line-height: 0.8rem;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(22, 78, 31);
  border-radius: 0.8rem;
}
.tab-tabTwo div{
  flex:5;
  height: 100%;
  text-align: center;
}
/* .tab-tabTwo div {
  width: 50%;
  height: 100%;
  color: rgb(22, 78, 31);
  display: flex;
  
  align-items: center;
} */
.action {
  background: green;
  color: #fff;
}
.tab-right {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  flex: 3;
}
.tab-right div .iconfont {
  margin-left: 20px;
}
</style>
