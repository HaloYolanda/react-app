/**
 * REACT 组件：每一个组件都是一个单独个体 数据私有 有自己完整的生命周期 有自己的视图
 * 1.函数式组件 让函数返回一个JSX元素即可
 * 2.基于React.Component 类创建组件
 * 3.React Hook
 */
// => 只要再js中使用JSX 则必须饮用React 因为需要用到create-element

import React from 'react'
// 如果ReactDOM.render进行处理的时候 如果发现type不是标签字符串 而是一个函数（一个类）则会把函数执行（创建类的一个实例）于此同时会把调用组件时候设置的属性传递给这个函数或者这个类
export default function Vote(props) {
    console.log(props)//{index: 10, title: "react is easy"}
    return <div>
        {React.Children.map(props.children, (item, index) => {
            if (index === 0) {
                return <strong>{item}==={index}</strong>
            }
        })}
        {props.title}
        {/* 方法1 */}
        {/* {React.Children.map(props.children,(item,index)=>{
        return <strong>{item}==={index}</strong>
    })} */}
        {/* 方法2 子元素分开*/}
        {React.Children.map(props.children, (item, index) => {
            if (index === 1) {
                return <strong>{item}==={index}</strong>
            }
        })

        }


    </div>
}