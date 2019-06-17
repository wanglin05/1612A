<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import request from "./utils/request";
export default {
  created(){
    request.get("/api/user/info")
    console.log(this.$store===window.store)
  }
}
</script>

<style scoped lang="scss">
@import "./static/scss/_minix";
@import "./static/scss/common";
#app{
  width: 100%;
  height: 100%;
}
</style>
