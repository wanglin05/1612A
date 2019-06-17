<template>
    <div class="wrap">
        <Titlehead/>
        <Tabtitle @changeInd="titChange"/>
        <div class="mian">
            <Tabtype @spanBtn="typeChange"/>
            <Content :options="listData"/>
        </div>
        <div class="btns">+ 发起任务</div>
        <Mark :show="false"></Mark>
    </div>
</template>

<script>
import Titlehead from "./components/Titlehead";
import Tabtitle from "./components/Tabtitle";
import Tabtype from "./components/Tabtype";
import Content from "./components/Content";
import Mark from "../../components/Mark";

import request from "../../utils/request";
export default {
    components:{
        Titlehead,
        Tabtitle,
        Tabtype,
        Content,
        Mark
    },
    data(){
        return{
            listData:null,
            titleOptions:{
                page:1,
                pageSize:10,
                type:"overtime",
                status:0
            }
        }
    },
    created() {
        this.getData();
    },
    methods: {
        titChange(index){
            this.titleOptions.status=index;
            this.getData();
        },
        typeChange(index){
            this.titleOptions.type=index;
            this.getData();
        },
        getData(){
            request.get("/api/task/list",{
                ...this.titleOptions
            }).then(res=>{
                this.listData=res.data.data;
            }).catch(res=>{
                console.log(res)
            })
        }
    }
}
</script>

<style scoped lang="scss">
@import "../../static/scss/common.scss";
@import "../../static/scss/_minix.scss";
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    
    .mian{
        width: 100%;
        flex: 1;
        overflow: hidden;
        
        
    }
    .btns{
        width: 40%;
        height: rem(60px);
        background: green;
        line-height: rem(60px);
        text-align: center;
        font-size: rem(20px);
        color: #eee;
        font-weight: bolder;
        position: fixed;
        right: rem(30px);
        bottom: rem(50px);
        border-radius: rem(30px);
    }
}
</style>
