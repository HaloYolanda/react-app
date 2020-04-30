import React from 'react'
import {connect} from 'react-redux'
import {withRouter,NavLink} from 'react-router-dom'
import {HomeOutlined,ReadOutlined,UserOutlined } from '@ant-design/icons'

class NavBottom extends React.Component{
   
    render(){
        return  <footer className='footerNavBox'>
              <NavLink to='/course' className='a'> 
              <HomeOutlined style={{fontSize:'.4rem' ,marginTop:'.1rem'}}/>
                <span>首页</span>
              </NavLink>
              <NavLink to='/mycourse' className='a'>
                  <ReadOutlined style={{fontSize:'.4rem' ,marginTop:'.1rem'}}/>
                <span>我的课程</span>
              </NavLink>
              <NavLink to='/person' className='a'> 
              <UserOutlined style={{fontSize:'.4rem' ,marginTop:'.1rem'}}/>
                <span>个人中心</span>
              </NavLink>
            </footer>
    }
}

export default  connect()(NavBottom)