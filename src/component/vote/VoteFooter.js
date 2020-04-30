
import React from 'react'
import PropTypes from 'prop-types'
export default class VoteBody extends React.Component{
    static contextTypes={
        callBack:PropTypes.func
    }
    constructor(props,context){
        super(props,context)
        console.log(context)
    }
    render(){
        let {callBack} = this.context
        return <div>
               <button 
               onClick = {()=>{callBack('support')
               }}>支持</button>
                <button onClick = {()=>{callBack('against')
               }}>反对</button>
        </div>
    }
}