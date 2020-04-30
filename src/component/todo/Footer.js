import React from 'react'
import {connect} from 'react-redux'
import action from '../../store/action'
class Footer extends React.Component{
    constructor(props){
        super(props)
        this.showData=[
            {text:'全部',flag:'all'},
            {text:'已完成',flag:'complete'},
            {text:'未完成',flag:'uncomplete'}]
    }
    render(){
        let {flag} = this.props
        return <div className = 'penel-footer'>
                <ul className="nav nav-pills" onClick={this.updateFilter }>
                {this.showData.map((item,index)=>{
                    let {text,flag:itemFlag} = item
                    return  <li 
                    className={itemFlag===flag?'presentation active':'presentation'}> 
                    <a href='javascript:;' 
                    flag={itemFlag}>{text}</a></li>
                })}
                </ul>
              </div>
    }
    updateFilter=ev=>{
        let target =ev.target,
            tarTag = target.tagName

            if(tarTag === 'LI'){
                target = target.firstElementChild
                tarTag = target.tagName
            }
            if(tarTag ==='A'){
                let text =target.getAttribute('flag')
                if(this.props.flag===text)return
                this.props.filter(text)

            }
    }
}
export default connect(state=>({...state.todo}),action.todo)(Footer)