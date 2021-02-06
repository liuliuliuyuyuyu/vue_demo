<template>
    <div class="login">
        <h1>登录</h1>
        <v-text-field v-model="username" label="账号"></v-text-field>
        <v-text-field v-model="password" label="密码" type="password"></v-text-field>
        <v-btn color="primary">登录</v-btn>
        <v-btn color="primary" @click="signUpweb()" text>注册</v-btn>
    </div>
</template>

<script>
export default {
  // 获取数据
    data() {
        return {
            username: "",
            password: "",
        }
    },
  // api的封装
    methods: {
        signIn() {
            let params = {
                username: this.username,
                password: this.password,
            }
            this.$api.user.signIn(params).then((res) => {
                localStorage.setItem('token',res.data.token)  // 保存登录成功响应中token到本地
                this.$router.push('/index')         // 登录成功跳转到主页，这里直接使用router中主页的path的路径
            });
        },
        signUpweb() {
            this.$router.push({
                name: "SignUp",                     // 这里跳转使用的是router中的路径名字
            })
        },
    }
}
</script>
<style scoped>
.login{
        width: 400px;
        text-align: center;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
}
</style>