import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'

/**
 * JSX 语法：js xml(html) 虚拟DOM
 * 1.每一个组件的视图都只能有一个根元素节点
 *      ReactDOM.render([JSX],[CONTAINER],[CALLBACK])
 *          => [CONTAINER]不建议是HTML或者BODY 指定一个元素容器#ROOT
 *          => [CALLBACK]把虚拟DOM渲染到浏览器页面中触发的回调函数 第三个参数很少用
 * 2.JSX语法基于{}绑定动态数据值或js表达式 
 *          => null和undefined代表空元素
 *          => 在括号中不能直接使用对象或者函数（引用类型值不是合法JSX元素 除了数组之外，会把数组变成字符串，数组里面有对象也不行）
 * 3.给JSX元素设置样式
 *          => className 
 *          => 行内样式：不能是字符串 必须是对象 style={{color:"pink"}}
 * 4.大括号中如果是JS表达式，可以返回有效的数据值或者返回一个新的JSX元素 */
let name = 100,
    styObj = {backgroundColor:"orange"},
    flag = 0,
    data=[{
        id:1,name:'bilibili'
    }, {
            id:2,name:'keke'}
    ]
ReactDOM.render( < div className = 'box' style={styObj} >
    <h1>{name}</h1>
    <ul>
        {data.map((item,index)=>{
            // JSX要求循环绑定的元素都要设置一个属性KEY 存储的值是当前循环的唯一值
            // (KEY 是 DOM DIFF的重要凭证 KEY不要设置为循环的索引 而是设置为一个某个具体不变的值)
            return <li key={item.id}>
                <span>{item.id}</span>
                <span>{item.name}</span>
            </li>
        })}
    </ul>
    {/* 是否显示 */}
    {flag===1?<p>i am ddd</p>:null}
hello </div>, document.getElementById('root'),_=>{
console.log(document.getElementsByClassName('box')[0])
})