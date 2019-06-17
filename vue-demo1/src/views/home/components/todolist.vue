<template>
  <div class="wrap">
    <div class="main">
      <todoitem v-for="val in todolist"
        :key="val.applicationNumber"
        :val="val"/>
    </div>
  </div>
</template>

<script>
import "@/fonts/iconfont.css";
import { showType } from "../../../utils/computedTime";
import todoitem from "./todoitem"
export default {
  props: {
    todolist: Array
  },
  components:{
    todoitem
  },
  methods: {
  }
};
</script>

<style>
.main {
  width: 100%;
  height: auto;
}
.list {
  width: 100%;
  height: auto;
  background: #fff;
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
}
.list-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list-item-icon {
  color: rgb(235, 194, 12);
}
.one {
  justify-content: space-around;
  display: flex;
  /* color: #ccc; */
}
.list-item div {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list-title {
  /* color: #ccc; */
  height: 1rem;
  font-size: 0.4rem;
  background: #fff;
}
.ipt {
  font-size: 0.3rem;
  color: rgb(58, 57, 57);
}
</style>
