import React from 'react'
import {connect} from 'react-redux'
import action from '../../store/action'
 class Head extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        // 筛选未完成的任务数量
        let {data} = this.props,
        len = data.filter(item=>parseFloat(item['state']===0)).length

        return <div className = 'penel-heading'>
            <h3 className="panel-title">
        任务列表[ 当前未完成的任务数 <span className="count">{len}
        </span>]
            </h3>
            <input onKeyUp={this.keyUP} type="text" className="form-control" placeholder='please enter tasks tobe completed'/>
        </div>
    }
    // 向redux中追加任务
    keyUP = ev =>{
        //按下enter键
        if(ev.keyCode===13){
            let value = ev.target.value.trim()
            if(value.length===0) return
            this.props.add({
                name:value,
                state:0
            })
            ev.target.value = ''

        }
    }
}
export default connect(state=>({...state.todo}),action.todo)(Head)