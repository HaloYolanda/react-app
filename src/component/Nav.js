import React from 'react'
import {connect} from 'react-redux'
import {Link,NavLink,withRouter} from 'react-router-dom'
/**
 * Link 路由切换的组件 基于它可以实现点击的时候路由的切换
 * NAV- LINK:和LINK类似，都是为了实现路由切换跳转的，不同在于，NAV- LINK组件在当前页面HASH和组
件对应地址相吻合的时候，会默认给组件加一-个ACTIVE样式，让其有选中态
        和LINK类似，TO和REPLACE等属性都有，用法-样.

        activeClassName: fB#i ilnactive##E"Éa IEÉS
        activestyle:给匹配的这个NAV- LINK设置行内样式
        exact & strict 控制匹配的吋候是否是平格匹配
        isActive:匹配后执行对应的函数
    <NavLink to='/custom '>最后也会转换为A标签，如果当前页面的HASH地址和此组件中的To地址匹配2
了，则会给渲染后的A标签设置默认的样式类: activl

<ROUTE PATH='/' COMPONENT={NAV}/> 受路由管控的组件
    WITH- ROUTER (CONNECT() (NAV))先把NAv基 FcONNECT高阶一下， 返回的是一- 个代理组件
PROXY， 把返回的代理组件受路由管控
    受路由管控组件的一- 些特点:
    1.只有当前页面的哈希地址(/#/...)和路由指定的地址匹配，才会把对应的组件這染(
VITH- ROUTER是没有地址匹配， 都被模拟成为受路由管控的)
    2. 路由切换的原理，凡是匹配的路由，都会把对应的组件内容，重新添加到页面中，相反，不匹
配的都会在页面中移除掉，下一 次重新匹配上，组件需要重新滨染到页面中;每-次路由 切换的时候(
页面的哈希路由地址改变)，都会从一級路由开始重新校验-遍
    3.所有受路由管控的组件，在组件中的属性props上都默认添加了三个属性：
        HISTORY
            PUSH GO GO-BACK GO-FORWARD。。。
        LOCATION
        MATCH


 */
class Nav extends React.Component{
  
    render(){
        return <nav className = 'navbar navbar-default'>
            <div className="container-fluid col-md-2">
                <Link to={{pathname:'/',search:'?/lx=logo'}} className='navbar-brand' >CRM</Link>
                
            </div>
            <div>
            <ul className="nav navbar-nav">
                    <li><NavLink  replace to='/' exact>首页</NavLink></li>
                    <li><NavLink to='/custom'>客户管理</NavLink></li>
                    <li><NavLink to='/plan'>计划管理</NavLink></li>
                </ul>
            </div>

        </nav>
    }
   
}
// 两种写法

export default  withRouter(connect()(Nav))