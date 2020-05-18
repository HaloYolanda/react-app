import React from 'react'
import { Menu } from 'antd';
import {Switch,Route,Redirect} from 'react-router-dom'
import '../static/css/mycourse.less'
import Unpay from './mycourse/Unpay'
import Pay from './mycourse/Pay'
class Mycourse extends React.Component{
   constructor(props,context){
       super(props,context)
       this.state={
           current:this.props.location.pathname==='/mycourse/pay'?'pay':'unpay'
       }
   }
    handleClick=ev=>{
        this.setState({
            current:ev.key
        })
        // 点击跳转到路由地址
        this.props.history.push(ev.key==='pay'?'/mycourse/pay':'/mycourse')
    }
    render(){
   
        return  <div className='MycourseBox'>
              <Menu 
              onClick={this.handleClick} 
              selectedKeys={[this.state.current]} 
              mode="horizontal">
                <Menu.Item key="unpay">未支付</Menu.Item>
                <Menu.Item key="pay">已支付</Menu.Item>
              </Menu>
              <Switch>
                  <Route path={'/mycourse'} exact component={Unpay}></Route>
                  <Route path={'/mycourse/pay'} component={Pay}></Route>
              </Switch>
             
            </div>
    }
}

export default  Mycourse