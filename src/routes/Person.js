import React from 'react'
import {connect} from 'react-redux'
import {Switch,Route,Redirect} from 'react-router-dom'
import Login from './person/Login'
import Register from './person/Register'
import Tip from './person/Tip'
import Info from './person/Info'
//IMPORT API
import {checkLogin} from '../api/person'
//IMPORT LESS
import '../static/css/person.less'

class Person extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            isLogin:false
        }
    }
//    验证是否登录
async componentWillMount(){
    let result  = await checkLogin(),
    isLogin = parseFloat(result.code)===0?true:false
    this.setState({isLogin})
}
async componentWillReceiveProps(){
    let result  = await checkLogin(),
    isLogin = parseFloat(result.code)===0?true:false
    this.setState({isLogin})
}
    render(){
        return  <section>
            <Switch>
                <Route path='/person/info' render={()=>{
                    // 权限校验 路由的验证和渲染必须是同步的 不允许在校验中出现异步
                    if(this.state.isLogin){
                        return <Info/>
                    }return <Tip/>
                }}/>
                <Route path='/person/login' component={Login}></Route>
                <Route path='/person/register' component={Register}></Route>
                <Redirect from={'person'}  to={'/person/info'} />
            </Switch>
            </section>
    }
}

export default  connect()(Person)