<template>
    <div class="alertbox" v-show="open">
        {{text}}
    </div>
</template>

<script>
export default {
    props:{
        text:String
    },
    data(){
        return {
            open:true,
            timer:null
        }
    },
    created(){
        console.log('created')
    },
    mounted(){
        console.log('dialog在页面挂载');
        
        this.timer=setTimeout(()=>{
            this.open=false;
        },2000)
    },
    destroyed(){
        clearTimeout(this.timer);
    }
}
</script>

<style scoped>
.alertbox{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background: rgba(0,0,0,.2);
    color:#fff;
    padding: 1rem;
    font-size: .6rem;
    z-index: 100;
}
</style>
