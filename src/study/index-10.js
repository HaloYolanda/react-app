import React from 'react'
import ReactDOM from 'react-dom'
// facebook提供的 为属性设置类型的插件
import PropTypes from 'prop-types'

function Sum(){
    console.log(this)//underfined
    return <div>声明</div>
}
class Dialog extends React.Component {
    //this.props是只读的 不可修改 但可以设置默认值
    static defaultProps={
        lx:'test'
    }
    static propTypes = {
        con:PropTypes.string.isRequired // 设置必须传递
    }
    constructor(props) {//props context updater
        // super(props) 
        // console.log(this.props)
        // //Dialog {props: {…}, context: undefined, refs: {…}, updater: {…}}

        super() 
        console.log(props)//{lx: 2}
        // es6中的extends继承 一旦使用了construtor 必须在第一行使用super
/** 
 * this.props:属性集合
 * this.refs:REF属性 非受控组件中用到
 * this.context:上下文
*/
    }
    componentWillMount(){
        console.log(this.props)
    }

    render() {
        
        let {lx,con} = this.props
        return <section> 
            <h3>{lx}</h3>
            <div>{con}</div>
            </section>
    }
}

let root = document.getElementById('root')

ReactDOM.render(
    <div>
        <Sum></Sum>
        <Dialog lx= '系统提示' con='haha'></Dialog>
        {/* <Dialog ></Dialog> */}
        {/* index.js:1 Warning: Failed prop type: The prop `con` is marked as required in `Dialog`, but its value is `undefined`.
    in Dialog  */}
    </div>
   ,root)

// let obj ={
//        type:'div',
//        props:{children:[
//            'xxxi',{
//                type:Dialog,
//                props:{
//                    lx:2
//                }
//            }
//        ]
//     }
// }