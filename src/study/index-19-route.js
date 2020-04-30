import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'
import A from './component/rt/A'
import B from './component/rt/B'
import C from './component/rt/C'
/**
 * 使用react路由实现spa
 * 
 *  http://reacttraining.cn/web/api
 * 
 * BrowserRouter 浏览器路由  基于H5的 history API
 * VS  
 * HashRouter 哈希路由 （前后端分离：客户端渲染）经常使用HashRouter
 * 
 * ROUTE 
        PATH:匹配哈希后面的值(地址)
        COMPONENT:一旦哈希值和当前ROUTE的PATH相同了，则渲染COMPONENT指定的組件
 exact  比较严格匹配
 strict 严格匹配
        */

let root =document.getElementById('root')

ReactDOM.render(
    <HashRouter>
        <Switch>
        <Route path='/'  component={A} exact ></Route>
        <Route path='/user' component={B}></Route>
        <Route path='/c' component={C}></Route>
        <Route path='/pay' render={()=>{
            // 一般这里处理权限校验
            let flag = localStorage.getItem('FLAG')
            if(flag&&flag==='SAFE'){
                return <C/>
            }
            return '当前环境不安全 不利于支付' }}></Route>
        {/* 如果都不匹配 则返回404 */}
        <Route render={()=>{
            return <div>404  </div>
        }}></Route>
        {/* 基于redirect 进行重定向 */}
        <Redirect to={{pathname:'/',search:'?lx=404'}}></Redirect>
        {/* <Redirect to='/?lx=404'></Redirect> */} 
        {/* 上面两句效果一样 */}
        </Switch>
      
    </HashRouter>
,root)