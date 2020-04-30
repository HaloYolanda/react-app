import React from 'react'
import {connect} from 'react-redux'
import { Alert,Button } from 'antd'
import {withRouter} from 'react-router-dom'
class Tip extends React.Component{
   
    render(){
   
        return  <div>
              <Alert message="未登录提示" type="warning"  description="您当前还未登录 登录后才可以查看个人信息"/>
              <Button type="primary" onClick={ev=>{
                this.props.history.push('/person/login')
              }}>立即登录</Button>
              <Button type="primary" onClick={ev=>{
                  this.props.history.push('/person/register')
              }}>立即注册</Button>
            </div>
    }
}

export default  withRouter(connect()(Tip))