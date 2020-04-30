import React from 'react'
import PropTypes from 'prop-types'

export default class VoteBody extends React.Component{
    static contextTypes= {
        // 注意和父组件中指定的类型保持一致
        n:PropTypes.number,
        m:PropTypes.number
    }
    constructor(props,context){
        super(props,context)
        console.log('bodycontext')
    }
    
    render(){
        console.log('bodyrender')
        let {n,m}=this.context,
        rate=(n/(m+n))*100;
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