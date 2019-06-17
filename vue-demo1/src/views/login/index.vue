<template>
    <div class="wrap">
        <section class="login">
            <p>
                <input class="ipt" type="text" placeholder="请输入手机号码" v-model="phone_value" value="13683599380">
            </p>
            <p>
                <input class="ipt" type="password" placeholder="请输入密码" v-model="pwd_value" value="123456">
            </p>
            <button class="loginbtn" @click="handleLogin">登录</button>
        </section>
    </div>
</template>

<script>
import request from '@/utils/request';
const phonereg = /^1[35789]\d{9}$/;
export default {
    data(){
        return {
            phone_value:'',
            pwd_value:'' 
        }
    },
    methods:{
        handleLogin(){
            if(phonereg.test(this.phone_value) && this.pwd_value.trim() != ''){
                request.post('/api/login', {
                    phone: this.phone_value,
                    password:this.pwd_value
                }).then(res=>{
                    window.localStorage.setItem('token',res.token);
                    this.$router.back();
                }).catch(error=>{
                    console.log(error.response.data.message)
                })
            }else{
                alert('请输入正确的用户名或密码')
            }
        }
    }
}
</script>

<style>
.login{
    width: 100%;
    height: auto;
}
.ipt{
    padding: .1rem;
    width: 95%;
    height: 1rem;
    font-size: .4rem;
    border:.1px solid #ccc;
    margin: .5rem .1rem;
}
.loginbtn{
    margin: 2rem auto;
    width: 100%;
    height: 1rem;
    font-size: .4rem;
    border:.1px solid #ccc;
}
</style>
