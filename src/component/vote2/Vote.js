import React from 'react'
import VoteHead from './VoteHead'
import VoteBody from './VoteBody'
import VoteFooter from './VoteFooter'
// import PropTypes from 'prop-types'

export default class Vote extends React.Component{
    static defaultProps ={'title':'notitle'}
    // redux 状态修改
   
  
    render(){
        return <div style={{margin:'20px auto',width:'60%',border:'3px solid pink',padding:'12px',borderRadius:'15px'}}>
           <VoteHead title={this.props.title}/>
           {/* <VoteBody count={count}/> */}
           <VoteBody myRedux = {this.props.myRedux}/>
           <VoteFooter myRedux = {this.props.myRedux}/>
        </div>
    }
}