<template>
    <div class="sign-up">
        <h1>注册页面</h1>
         <v-text-field v-model="username" label="账号"></v-text-field>   <!-- 使用v-model会获取输入框中输入的参数 -->
        <v-text-field v-model="password" label="密码" type="password"></v-text-field>
         <v-btn color="primary" @click="signUp()">注册</v-btn>           <!-- 使用@click赋予触发事件和事件名 -->
        <v-btn color="primary" @click="rebackLogin()" text>返回登录</v-btn>  <!-- text为普通按钮 触发click事件返回登录页面-->
    </div>
</template>

<script>
export default {
    // 获取上面输入框输入的数据
    data(){
        return {
            username: "",
            password: "",
        }
    },
    // api封装，方法对应到上面@click="singUp()"，触发他就会执行这个方法进行前后端交互
    methods:{
        signUp(){
            // console.log(this.username) // 测试获取数据是否成功
            // 封装传入后端的参数，这里注意参数要和后端接收参数要一致
            let params = {
                username: this.username,
                password: this.password,
            }
            // 封装好之后发送请求，this.$api会去main中寻找api，找到后找api.js中的user，然后找user.js中的si
            this.$api.user.signUp(params).then(res=>{    // res就是response
                console.log(res)    // 打印测试看看
                this.$router.push({ // 这里就是注册的请求成功后跳转到登录页面，push就是跳转，注意请求失败是不会跳转的
                    name: 'Login',  // 跳转到router路由中指定名字的路径
                })
            })
        },
        rebackLogin(){
            this.$router.push({ // 这里就是注册的请求成功后跳转到登录页面，push就是跳转，注意请求失败是不会跳转的
                    name: 'Login',  // 跳转到router路由中指定名字的路径
                })
        }
    }
}
</script>

<style scoped>
/* 设置样式 这里的sign-up是上面的class，子组件的东西只在子组件中生效*/
.sign-up{
    width: 400px;
    text-align: center;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
}
</style>