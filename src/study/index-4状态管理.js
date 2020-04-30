import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

/*
 * 对于每一个类组件来说 只需要学会 
 * 1.数据管控（MODEL） 2.属性 props 3.状态 state（私有状态 redux公共状态管理）
 * 
 * 基于第三方插件prop-types设置属性的规则 默认值和其他规则  yarn add prop-types
 * 设置默认值
 *  static defaultProps = {
        xxx: 'XXX'
    }
    设置其他规则
  static propTypes=  {
         title: PropTypes.string.isRequired
    }
     Proptypes.isRequired 必须传递
      PropTypes.string/bool/number.func/object/symbol/node元素节点/element（JSX元素）/instanceOf(xxx)必须是某个类的实例/...

 */


class Clock extends React.Component {
    static defaultProps = {
        title: '北京time'
    }
    static propTypes = {
        title: PropTypes.string
    }

    constructor(props) {
        super(props);
        // => 初始化状态 和Vue中的data一样 要求后期需要在组件中使用的状态都要在这里初始化一下
        this.state = {
            time: new Date().toLocaleTimeString(),
            m: 100
        }
    }

    render() {
        console.log('b')
        // let time = new Date().toLocaleString()
        return <div>
            <h2>{this.props.title}</h2>
            <p>{this.state.time}</p>
        </div>
    }
    componentDidMount() {
        // this.state.time = 'zzzzz'
        // this.forceUpdate() // zzzzz
        
        // =>第一次加载组件渲染完毕 等价于 Vue中的Mounted
        // this.state.time = 'hahaha' 可以修改状态信息 但不会通知组件重新渲染
        // 每一次修改状态应该基于：setState方法
        // partialState：部分状态（对象） 我们初始化的状态有很多，想修改哪个这块只写哪块就可以，
        //  callback:setState 在某些情况下是异步操作
        // setTimeout(_ => {
        //     this.setState({
        //         time: 'oooö'
        //     })
        // }, 1000)
        this.setState({
            time: 'oooö'
        },()=>{
            console.log('c') // 通知视图已经重新渲染完成
        })
        console.log('a')
// b a b c 
    }
}

ReactDOM.render(<div>

    <Clock title='lalala'>
    </Clock>
</div>, document.getElementById('root'))

