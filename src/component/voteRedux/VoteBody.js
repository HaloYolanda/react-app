import React from 'react'
// import PropTypes from 'prop-types'

export default class VoteBody extends React.Component{

    constructor(props){
        super(props)
        // 初始化状态
        let  {n,m} =this.props.store.getState().vote
        this.state={n,m}
        
    }
    componentDidMount(){
        this.props.store.subscribe(()=>{
            let  {n,m} = this.props.store.getState().vote
            this.setState({ n,m  })
        })
    }
   
    render(){
       let {n,m} = this.state,
       rate = (n/(n+m))*100
       if(isNaN(rate)){
           rate = 0
       }
        return <div>
              {/* 支持人数：<span>{this.props.count.n}</span><br/><br/>
                反对人数：<span>{this.props.count.m}</span> <br/><br/> */}
                支持人数：<span>{n}</span><br/><br/>
                反对人数：<span>{m}</span> <br/><br/>
                支持率：<span>{rate.toFixed(2)+'%'}</span>

        </div>
    }
}