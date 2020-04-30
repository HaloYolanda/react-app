
import React from 'react'
import * as TYPE from '../../store/action-types'
import action from '../../store/action'

export default class VoteBody extends React.Component{

    render(){
      
        return <div>
               <button onClick = {()=>{
                    this.props.store.dispatch(
                       action.vote.support()
                    )
               }}>支持</button>
                <button onClick = {()=>{
                    this.props.store.dispatch(
                        action.vote.against()
                    )
                }}>反对</button>
        </div>
    
}}