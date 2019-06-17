import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    num:0
  },
  getters:{

  },
  mutations:{ //只能通过mutations来修改state状态
     'CHANGE'(){

     }
  },
  actions:{
      
  }
})
window.store=store
export default store