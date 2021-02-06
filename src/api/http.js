import axios from "axios";
// 对http的封装
var instance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: "127.0.0.1:8080"  // 后端地址host:port，现阶段还没有写后端，就先随便写
})

// 拦截请求，在每次发送请求前，下面是发送请求前判断本地是否保存了token，如果保存了就把token放进请求配置信息中
instance.interceptors.request.use(config=>{
    if(localStorage.getItem("token")){  
        config.headers.common['token'] = localStorage.getItem("token");
    }
    return config
})

// 拦截响应，自己定义判断什么情况是响应成功了
instance.interceptors.response.use(res=>{
    if(res.data.resultCode==200){
        return Promise.resolve(res) // Promise可以进行异步操作，这些返回数据会返回到组件中的请求then(res)中，比如Login中的signIn请求
    }else{
        return Promise.reject(res)
    }
})

export default instance;  // 创建完成之后需要导出
