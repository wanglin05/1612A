<template>
  <div>
    <div
      class="list"
      @click="$router.push({
        name:`detail`,
        params:{
          type:val.list_type,
          id:val.applicationNumber
        }
      })"
    >
      <div class="list-item one">
        <p style="flex:8;">{{val.applicationNumber}}</p>
        <p style="flex:2;">
          <i class="icon iconfont list-item-icon icon-xuanzhong-01"></i>
          <span>待审批</span>
        </p>
      </div>
      <div class="list-item">
        <div class="list-title">申请人</div>
        <div class="ipt">{{val.nickname}}</div>
        <div class="list-title">加班类型</div>
        <div class="ipt">{{settype}}</div>
      </div>
      <div class="list-item">
        <div class="list-title">加班日期</div>
        <div class="ipt">{{new Date(val.startTime).toLocaleDateString()}}</div>
        <div class="list-title">加班时数</div>
        <div class="ipt">{{reducetime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {showType} from "../../../utils/computedTime"
export default {
  props: {
    val: Object
  },
  computed: {
    settype() {
        return showType(this.val.type,this.val.list_type)
    },
    reducetime() {
      // console.log(start);
      let start_num = new Date(new Date(this.val.startTime).toGMTString()) * 1;
      let end_num = new Date(new Date(this.val.endTime).toGMTString()) * 1;
      let num = (end_num - start_num) / 1000;
      let day = (num / 60 / 60 / 24).toFixed(1);
      return day;
    }
  },
  methods: {
    
  }
};
</script>

<style>
</style>
