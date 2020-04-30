import React from 'react'
import {connect} from 'react-redux'
import action from '../../store/action'
 class VoteHandle extends React.Component{
    render(){
        let {support,against} = this.props
        return <div>
         <button onClick = {support}>支持</button>
         <button onClick = {against}>反对</button>
        </div>
    }
}
export default connect(state=>({...state.vote}),action.vote)(VoteHandle)