<template>
  <div class="wrap">
   <el-header>
     <span class="header-item">
      <div class="xiu">
        <i class="icon iconfont icon-user" style="font-size:.5rem"></i>
      </div>
      <div class="sear">
        <i class="icon iconfont icon-fangdajing" style="font-size:.5rem"></i>
      </div>
    </span>
   </el-header>
    <TableMenu @change="menuchange"/>
    <TableType :type="tableOptions.type" @change="typeChange"/>
    <Todolist :todolist="todolist"/>
    <div class="add_list" @click="show=true">
      <p style>发起任务</p>
    </div>
    <PopUp :show="show" @close="show=false"/>
  </div>
</template>

<script>
import "@/fonts/iconfont.css";
import TableMenu from "./components/tableMenu";
import TableType from "./components/tableType";
import Todolist from "./components/todolist";
import PopUp from "../../components/popUp";
import request from "../../utils/request";
export default {
  data() {
    return {
      tableOptions: {
        status: 0,
        type: "overtime",
        create_at: 0,
        pageSize: 10,
        page: 1
      },
      todolist: [],
      show: false
    };
  },
  computed: {},
  components: {
    TableMenu,
    TableType,
    Todolist,
    PopUp
  },
  created() {
    this.getTaskList();
  },
  methods: {
    menuchange(index) {
      this.tableOptions.status = index;
      this.tableOptions.type = "overtime";
      this.getTaskList();
    },
    getTaskList() {
      request
        .get("/api/task/list", {
          ...this.tableOptions
        })
        .then(res => {
          this.todolist = res.data;
        });
    },
    typeChange(type) {
      this.tableOptions.type = type;
      console.log(this.tableOptions);
      this.getTaskList();
    }
  }
};
</script>

<style lang="scss" scoped>
.icon {
  font-size: 0.5rem;
}
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
.add_list {
  width: pxTorem(150px);
  height: pxTorem(30px);
  line-height: pxTorem(30px);
  background: green;
  position: fixed;
  bottom: 3%;
  right: 5%;
  border-radius: 0.3rem;
  overflow: hidden;
  display: flex;
  padding: 0 0.2rem;
  box-sizing: border-box;
  font-size: 0.4rem;
  color: #fff;
}
.iconfont {
  font-size: 0.2rem;
  margin-right: 0.1rem;
  line-height: 0.2rem;
}

.v-enter,.v-leave-to{
  .add_list_type{
    transform: translateY(100%)
  }
}
.v-enter-active,.v-leave-active{
  .add_list_type{
    transition: transform 2s;
  }
}
.v-enter-to,.v-leave{
  .add_list_type{
    transform: translateY(0)
  }
}
</style>

