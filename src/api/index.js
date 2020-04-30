import axios from 'axios'
import Qs from 'qs'

axios.defaults.baseURL='http://localhost:8000'
// 允许跨域 且允许携带cookie
axios.defaults.withCredentials=true
axios.defaults.bastransformRequest=(data={})=>Qs.stringify(data)
// 吧post/put请求主体传递给服务器的内容统一处理为x-www-url-encoded格式
axios.interceptors.response.use(result=>result.data)//  响应拦截器 把服务返回的额信息中响应主体内容拦截返回 以后在then中获取的结果就是主体内容

export default axios;
