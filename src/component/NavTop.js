import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {BarsOutlined } from '@ant-design/icons'
import { Transition } from 'react-transition-group'
import action from '../store/action/index';

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
      this.state={
         in:false
      }
      this.props.queryUnpay()
      this.props.queryPay()
   }
   handleClick=ev=>{
    let target = ev.target,
    tarTag= target.tagName
    if(tarTag==='LI'){
       this.props.queryList({
          page:1,
          type:target.getAttribute('type'),
          flag:'replace'
         })
         this.setState({in:false})
    }  
   }
    render(){
   
        return  <header className='headerNavBox'>
              {/* 首页导航 */}
              <div className='homeBox'>
                 <div className='baseBox'>
                    <h1 className='logo'>给搜索引擎看的文字</h1><span>Adobe StudySpace</span>
                    <BarsOutlined className='icon' style={{fontSize:'.6rem'}} onClick={ev=>{
                       this.setState({in:!this.state.in})
                    }}/>
                 </div>
                 <Transition in={this.state.in} timeout={0}>
                 {state => { return <ul className='filterBox' 
                 style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                    display:this.state.in?'block':'none'}}
                     onClick={this.handleClick}>
                     <li type={'all'}>全部课程</li>
							<li type={'Ae'}>Ae Class</li>
							<li type={'Pr'}>Pr Class</li>
							<li type={'Id'}>Id Class</li>
                 </ul> 
               }}
                 </Transition>
              </div>
            </header>
    }
}

export default withRouter(connect(null,action.course)(NavTop));