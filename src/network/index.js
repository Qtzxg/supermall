import {request} from './request'
//本js文件负责主页的后端数据请求
export function getHomeMultidata() {
    return request({
      url:'/home/multidata'
    })
}

