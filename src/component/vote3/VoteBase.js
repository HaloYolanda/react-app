import React from 'react'
import action from '../../store/action'
import {connect} from 'react-redux'
import { dispatch } from 'rxjs/internal/observable/range';

 class VoteBase extends React.Component{
//     constructor(props){
//         super(props)
//         let reduxState = this.props.store.getState().vote
//         this.state = {
//             ...reduxState //包含title/n/m所有管理的属性
//         }

//     }
//     componentWillMount(){
//         this.props.store.dispatch(action.vote.init({
//             title:'我美吗',
//             n:0,
//             m:0
//         }))
//         let reduxState = this.props.store.getState().vote
//         this.setState({
//             ...reduxState
//         })
//     }
//    componentDidMount(){
//        this.props.store.subscribe(()=>{
//            let reduxState = this.props.store.getState().vote
//            this.setState({...reduxState})
//        })
//    }
  
// 上面是传统redux写法 下面是react-redux的写法
/**
 * 相对传统的redux 步骤优化
 *  1 导出的不再是我们创建的组件 而是基于connect构造后的高阶组件
 */
    constructor(props){
        super(props)
        // console.log(this.props)
    }
    // 数据初始化
    componentWillMount(){
        this.props.init({
            title:"我帅吗",
            n:0,
            m:0
        })
    }
    render(){
        let {title,n,m}= this.props,
        rate = (n/(n+m)*100).toFixed(2)
        if(isNaN(rate)) rate = 0
        return <div>
          <h3>{title}</h3>
          <div>
          支持人数：<span>{n}</span><br/><br/>
                反对人数：<span>{m}</span> <br/><br/>
                支持率：<span>{rate+'%'}</span>
          </div>
        </div>
    }
}
// 把redux容器中的状态信息遍历，赋值给当前组件的属性
let mapStateToProps = state=>{
    //state :redux容器的状态信息 返回的是啥 就把它挂载到当前组件的属性上（redux存储很多信息 想用啥就返回啥）
    return {
        ...state.vote
    }
}
// 把redux中的dispatch派发给组件属性 actionCreator
// let mapDispatchToPropps = dispatch =>{
// //dispatch ：store中存储的dispatch方法
//     return {
//         init(initData){
//             dispatch(action.vote.init(initData))
//         }
//     }


// }
// export default connect(mapStateToProps,mapDispatchToPropps)(VoteBase)


// 简化写法
export default connect(state=>({...state.vote}),action.vote)(VoteBase)
// => react-redux把action-creator中编写的方法（返回action对象的方法）
// 自动构建成dispatch派发任务的方法 
