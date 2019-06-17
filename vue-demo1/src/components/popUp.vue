<template>
<transition>
<div class="type_box" v-show="show">
    <div class="type_box_top" @click.self="$emit('close')"></div>
    <div class="add_list_type">
      <dl @click="$router.push('/commit/overtime')">
        <dt>
          <i class="icon iconfont icon-tongzhi"></i>
        </dt>
        <dd>加班</dd>
      </dl>
      <dl @click="$router.push('/commit/vacation')">
        <dt>
          <i class="icon iconfont icon-xiaoxi2"></i>
        </dt>
        <dd>休假</dd>
      </dl>
    </div>
  </div>
</transition>
  
</template>

<script>
export default {
    props:{
        show:Boolean
    },
  methods: {
 
  }
};
</script>

<style>

.type_box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;

  left: 0;
}

.type_box_top {
  flex: 1;
  background: rgba(0, 0, 0, 0.5);
}
.add_list_type {
  width: 100%;
  height: 3rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0.3rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.add_list_type dl {
  flex: 5;
  text-align: center;
}
.add_list_type dl dt .iconfont {
  font-size: 0.6rem;
  margin-left: 0.7rem;
}
</style>

