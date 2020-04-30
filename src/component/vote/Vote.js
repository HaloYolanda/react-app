import React from 'react'
import VoteHead from './VoteHead'
import VoteBody from './VoteBody'
import VoteFooter from './VoteFooter'
import PropTypes from 'prop-types'
export default class Vote extends React.Component{
    static defaultProps={
        title:'i don\'t know'
        // n:0,
        // m:0
        
    }
    static childContextTypes={
        n:PropTypes.number,
        m:PropTypes.number,
        callBack:PropTypes.func
    }
    getChildContext(){
        console.log('context')
        let {n,m} = this.state
        return {
            n,
            m,
            callBack:this.updateContext
        }
    }
    updateContext= type => {
      if(type==='support'){
         this.setState({n:this.state.n+1})
    return
       } this.setState({m:this.state.m+1})
    }
    constructor(props){
        super(props)
        console.log('constructor')
        let {count:{n=0,m=0}} = this.props
        // 状态能改 属性不能改
        this.state ={n,m}
    }
  
    render(){
        console.log('render')
        // let {title,count} = this.props
        let {title} = this.props
        return <div style={{margin:'20px auto',width:'60%',border:'3px solid pink',padding:'12px',borderRadius:'15px'}}>
           <VoteHead title={title}/>
           {/* <VoteBody count={count}/> */}
           <VoteBody/>
           <VoteFooter/>
        </div>
    }
}