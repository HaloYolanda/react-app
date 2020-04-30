import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {BarsOutlined } from '@ant-design/icons'
import { Transition } from 'react-transition-group'

const duration =300,
      defaultStyle={
         transition:`opacity ${duration}ms`,
         opacity:0,
    
      },
      transitionStyles={
         entering:{opacity:0},
         entered:{opacity:1}
      }
class NavTop extends React.Component{
   constructor(props,context){
      super(props,context)
      this.state={in:false}
   }
   
    render(){
   
        return  <header className='headerNavBox'>
              {/* 首页导航 */}
              <div className='homeBox'>
                 <div className='baseBox'>
                    <h1 className='logo'>给搜索引擎看的文字</h1>
                    <BarsOutlined className='icon' style={{fontSize:'.6rem'}} onClick={ev=>{
                       this.setState({in:!this.state.in})
                    }}/>
                 </div>
                 <Transition in={this.state.in} timeout={0}>
                 {state => { return <ul className='filterBox' 
                 style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                    display:this.state.in?'block':'none'}}>
                    <li>全部课程</li>
                    <li>REACT</li>
                    <li>VUE</li>
                    <li>小程序</li>
                 </ul> 
               }}
                 </Transition>
              </div>
            </header>
    }
}

export default  connect()(NavTop)