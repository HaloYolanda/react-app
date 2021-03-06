import React from 'react'
// import PropTypes from 'prop-types'

export default class VoteBody extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            refresh:0
        }
    }
    componentDidMount(){
        this.props.myRedux.subscribe(()=>{
            // console.log('reflesh')
            this.setState({
               refresh:this.state.refresh + 1
            })
        })
    }
    render(){
        let state = this.props.myRedux.getState(),
        {n=0,m=0} = state,
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