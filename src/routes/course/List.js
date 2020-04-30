import React from 'react'
import {connect} from 'react-redux'

class List extends React.Component{
    constructor(props,context){
        super(props,context)
      
    }
    render(){ 
    return <div>
            轮播图和列表
        </div>
       
    }
}

export default  connect()(List)