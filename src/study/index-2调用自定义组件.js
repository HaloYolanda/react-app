import React from 'react'
// import ReactDOM, {render} from 'react-dom'
import ReactDOM from 'react-dom'
// import {createElement,render} from './SELFJSX'
import Vote from '../reactComponent'
// console.dir(render)
/*
    虚拟DOM（JSX）到真实DOM的渲染原理
    1.把JSX基于BABEL-PRESET-REACT-APP语法解析包变成CREATE-ELEMENT格式
    -> 每当遇到一个元素标签都会create-element
    -> React.createElement([标签名],[props[null],...])
    -> 有几个子节点从第三个实参开始分别是每一个子节点的处理
    ->（文本节点直接就是文本内容，元素节点还需要再一次create-element处理）
    2.执行create-element 返回一个对象{$$type:Symbol(react.element),
                                    key:null,
                                    ref:null,
                                    type:标签名/组件,
                                    props:{
                                        xxx:xxx,给元素标签上设置属性(ref/key除外)
                                        没有子节点则没有children选项，有子节点才有children 只有一个子节点它的值是单个值 如果有多个子节点 它的值是一个数组
                                        children：单个值（字符串/对象）或者 数组
                                    }}
    */

// render(<div className='box' id='box' my-index='1'>welcome
//     <h2>xixixi</h2>
// </div>,document.getElementById('root'))
// console.log(React.createElement("span",{className:'text'},'welcome',React.createElement('i',null)))

/**{$$typeof: Symbol(react.element), type: "span", key: null, ref: null, props: {…}, …}
$$typeof: Symbol(react.element)
key: null
props: {className: "text", children: Array(2)}
ref: null
type: "span"
_owner: null
_store: {validated: false}
_self: null
_source: null
__proto__: Object */

// 用自己定义的
// let React = {createElement}
// let ReactDOM = {render}

// 调取组件的时候 支持单闭合和双闭合 双闭合可以再标签内设置子元素 使用props.children
ReactDOM.render(<div>train
{/* <span className='text'>welcome</span> */}
<Vote index = {10} title='react is easy'><span>xxx</span><span>xxx2</span></Vote>
<Vote index = {11} title='react is easy too'/>
</div>,document.getElementById('root'))

// let jsxOBJ = createElement("div",{
//     className:'box',id:'box',index:'1'},'xxx',createElement("span",{className:'text'},'bilibili',createElement('i',null))
    
// )
// // console.log(jsxOBJ)
// render(jsxOBJ,document.getElementById('root'),()=>{
//     console.log('页面渲染完成')
// })