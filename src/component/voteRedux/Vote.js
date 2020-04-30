import React from 'react'
import VoteHead from './VoteHead'
import VoteBody from './VoteBody'
import VoteFooter from './VoteFooter'
// import PropTypes from 'prop-types'

export default class Vote extends React.Component{
constructor(props){
    super(props)
}
    
    render(){
        let {store} = this.props

        return <div style={{margin:'20px auto',width:'60%',border:'3px solid pink',padding:'12px',borderRadius:'15px'}}>
           <VoteHead title={this.props.title}/>
           {/* <VoteBody count={count}/> */}
           <VoteBody store={store}/>
           <VoteFooter store={store}/>
        </div>
    }
}