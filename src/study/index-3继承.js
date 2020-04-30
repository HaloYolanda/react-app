import React from 'react'
import ReactDOM from 'react-dom'

// 函数式（静态）组件 特点：干净简单（渲染速度快）只要把组件调取渲染完成后，组件中的内容将不再修改（函数式组件没有组件的状态管控、生命周期等）
/*组件特点：给组件传递进来的属性是只读的（只能获取不能修改）
  1.不能直接的赋值默认值
  2.函数式组件不能想类组件一样基于prop-types给属性设置默认规则
*/
// function Clock(props){
//     let time = new Date().toLocaleString()
//     return <div>
//         <h2>{props.title}</h2>
//         <p>{time}
//         {/* {props.children[0]}</p>
//         <p>
//         {props.children[1]} */}
//         </p>
//     </div>
// }

/** 类组件
 * 继承：1.原型继承 2.Call继承 3.寄生组合继承 Object.create 4.ES6中基于Class实现继承
    当react-dom.render渲染的时候 如果发现虚拟dom中type是一个
    类组件，创建这个类的一个实例并且把解析出来的props传递给这个类 new Clock（props）
    =》 执行constructor 此时props并未挂载在实例上，基于this.props不能直接获取到值，但可以直接使用在形参中的props
 */

// class Parent {

// }
class Clock extends React.Component {
    constructor(props) {
        super(props)
        // props:调取组件传递进来的属性
        console.log(props,this.props)//{title: "北京时间"} {title: "北京时间"}
    }
    // y = 200 //新增语法： 给实例添加私有属性 和 constractor效果相同
    // AAA() {
    //     // Clock.prototype.AAA
    // }
    // static ccc = 300 // -> ES7新增语法 直接再类上设置静态属性（React脚手架中给我们设置了关于这种语法的处理：@babel/plugin-proposal-class-properties）
    // static BBB() {

    // }
    render(){
        console.log(this.props)//{title: "北京时间"}
        return <div>
            {/* <h2>{this.props.title}</h2> */}
        </div>
    }
}
// let c = new Clock()
// console.dir(c)
// console.dir(Clock)

ReactDOM.render(<div>
    <Clock title='北京时间'>
    </Clock>
</div>, document.getElementById('root'))

