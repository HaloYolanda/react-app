import React from 'react'
import ReactDOM from 'react-dom'
// import Vote from './component/voteRedux/Vote'
import store from './store'
import VoteBase from './component/vote3/VoteBase'
import VoteHandle from './component/vote3/VoteHandle'
import {Provider,connect} from 'react-redux'

// react-redux 是对redux进一步封装 适配react项目 让redux操作更简洁
// Provider 根组件 当前整个项目都在Provider组件下，作用：把创建的store可以供内部任何后代组件使用（基于上下文）,组件中只允许出现一个子元素
//      把创建的store基于属性传递的provider 这样后代组件都可以使用这个store了
// connect 高阶组件

let root =document.getElementById('root')

ReactDOM.render(<Provider store={store}>
<div  style={{margin:'20px auto',width:'60%',border:'3px solid pink',padding:'12px',borderRadius:'15px'}}>
    {/* <Vote title={'i am title'} store={store}></Vote> */}
<VoteBase ></VoteBase>
<VoteHandle ></VoteHandle>
</div>
</Provider>

,root)