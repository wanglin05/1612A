<template>
  <div class="header">
    <p v-if="back" @click="$router.back()">
      <i class="icon iconfont icon-arrow-left" style="font-size:.5rem"></i>
    </p>
    <div class="title">{{titletext}}</div>
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    back: {
      default: true,
      type: Boolean
    },
    title: {
      default: "",
      type: String
    }
  },
  computed:{
      titletext(){
          return this.title ? this.title : this.$route.meta.title
      }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 1.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  text-align: center;
}
.header p {
  flex: 1;
}
.header div {
  flex: 7;
  margin-left: 10px;
}
.header span {
  flex: 2;
}
.title {
  font-size: 0.5rem;
  font-weight: 800;
}
.xiu {
  /* border: 1px solid #333;
  font-size: 0.3rem; */
  padding: 0.1rem 0.2rem;
}
.sear {
  padding-left: 0.1rem;
}
.header-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
