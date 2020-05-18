import React from 'react'
import {connect} from 'react-redux'
import action from '../../store/action/index'
import CourseItem from './CourseItem'
import { Alert } from 'antd'
class Unpay extends React.Component{
  
    render(){
        let {unpay} = this.props.shopCart
        if(unpay.length===0){
            return <Alert type='warning' message="购物车空空如也，快去选购吧"/>
        }
        return  <div>
            <div style={{marginTop:'.2rem',height:'.4rem','lineHeight':'.4rem','padding':'0 .1rem'}}>
                <input type="checkbox" 
                checked={this.props.selectAll} 
                onChange={this.props.handleSelect.bind(this,'all')}/> 全选/全不选
            </div>
             <ul className='courseItem'>
                  {unpay.map((item,index) => {
                         return <CourseItem key={index} item={item}/>

             })}
                </ul>
                </div>
    }
}

export default  connect(state=>state.course,action.course)(Unpay)