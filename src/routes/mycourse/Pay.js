import React from 'react'
import {connect} from 'react-redux'
import action from '../../store/action/index'
import CourseItem from './CourseItem'
import {checkLogin} from '../../api/person'
import { Alert } from 'antd'
import {Link} from 'react-router-dom'

class Pay extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state={
            inLogin:false
        }
    }
    async componentDidMount(){
        let result = await checkLogin()
        if(parseFloat(result.code)===0){
            this.setState({
                isLogin:true
            })
        }
    }
   
    render(){
        if(this.state.isLogin!==true){
            return <Link to='/person/login'>
            <Alert message="您还未登录，请先登录(点击登录)" type="warning" style={{marginTop:'.2rem'}} 
        /></Link>
        }
        let {pay} = this.props.shopCart
        if(pay.length===0){
            return <Alert message="您还未购买任何课程，快去购买吧" type="warning" style={{marginTop:'.2rem'}}/>
        }
        return  <ul className='courseItem'>
                     {this.props.shopCart.pay.map((item,index) => {
                        return <CourseItem key={index} item={item}/>
                    
                    })}
                </ul>
    }
}

export default  connect(state=>state.course,action.course)(Pay)