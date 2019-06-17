<template>
    <div class="header">
        <span class="iconfont icon-xiangzuo"></span>
        <b>加班/休假</b>
        <div>
            <span class="iconfont icon-riqixuanze"></span><span class="iconfont icon-fangdajing"></span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '../../../static/scss/common.scss';
.header{
    width: 100%;
    font-size: rem(16px);
    height: rem(50px);
    line-height: rem(50px);
    display: flex;
    justify-content: space-between;
    b{
        font-weight: bolder;
    }
    div{
        span{
            margin: 0 rem(10px);
        }
    }
}
</style>
