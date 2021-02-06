// 对user模块vue组件中使用到的接口进行封装
import axios from './http'

const user = {
  signIn(params){
    return axios.post('/', params) // 通过axios.post发送请求传给后端交互，返回结果
  },
  signUp(params){
    return axios.post('/signUp', params) // 路径要写对应后端的路径，这里没有后端先随便写一下
  }
}

export default user;  // 导出user
