<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import request from './utils/request'
import axios from 'axios';
export default {
  created(){
    request.get('/api/user/info').catch(error=>{
      console.log('catch',error)
    })
  } 
  
}
</script>

<style lang="scss" scoped>
// @import './static/scss/_minix.scss';
</style>

