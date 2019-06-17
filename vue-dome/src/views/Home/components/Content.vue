<template>
    <div class="content">
        <div class="cons" v-for="(item,index) in options" :key="index">
            <div>
                <span>OT2019021222</span>
                <p>
                    <i class="iconfont icon-pingguo"></i>
                    <span>待审批</span>
                </p>
            </div>
            <div class="detals">
                <dl>
                    <dd>申请人</dd>
                    <dt>{{item.nickname}}</dt>
                </dl>
                <dl>
                    <dd>加班类型</dd>
                    <dt>工作日加班</dt>
                </dl>
                <dl>
                    <dd>加班日期</dd>
                    <dt>{{item.startTime}}</dt>
                </dl>
                <dl>
                    <dd>加班诗书</dd>
                    <dt>2.5</dt>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["options"],
  created() {},

  methods: {}
};
</script>

<style scoped lang="scss">
@import "../../../static/scss/common.scss";
.content {
  width: 100%;
  flex: 1;
  .cons {
    margin-top: rem(10px);
    width: 100%;
    height: rem(100px);
    div {
      padding: 0 rem(10px);
      height: rem(40px);
      line-height: rem(40px);
      display: flex;
      justify-content: space-between;
      font-size: rem(16px);
      i {
        color: yellow;
      }
    }
    .detals {
      width: 100%;
      height: rem(60px);
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      dl {
        width: 50%;
        height: rem(30px);
        line-height: rem(30px);
        display: flex;
        dd {
          width: 45%;
        }
        dt {
          width: 45%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
