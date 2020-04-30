
import React from 'react'
export default class VoteBody extends React.Component{

    render(){
        return <div>
               <button 
               onClick = {()=>{
                this.props.myRedux.updateState(state=>{
                        let {n=0} = state
                        return {
                            n:n+1
                        }
                    })
               }}>支持</button>
                <button onClick = {()=>{
                     this.props.myRedux.updateState(state=>{
                        let {m=0} =state
                        return {
                            m:m+1
                        }
                    })
                }  }>反对</button>
        </div>
    }
}