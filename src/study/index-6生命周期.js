import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

/**
 * 非受控组件:不受状态管控（直接操作DOM）
 * React 生命周期
 */
class Clock extends React.Component {
    // 1.处理属性 获取默认值和校验传递属性的类型
    static defaultProps = {
        title: '北京time'
    }
    static propTypes = {
        title: PropTypes.string
    };
    // 2.处理状态 执行constructor获取初始化状态信息
    state = { n: 100 } //-> this.state={} 和constructor一致

    constructor(props) {
        super(props)
        this.state = { n: 100 }
        console.log('------>constructor')
    }
    // 3.componentWillMount 第一次组件渲染之前
    componentWillMount() {
        // 从服务器获取数据 把获取的数据重新赋值给状态/存放到React-redux中
        console.log('------>componentWillMount')

    }
    // 4. render：渲染视图
    render() {
        console.log("----->render")
        return <div onClick={() => {
            //-> 修改状态信息
            this.setState({ n: this.state.n + 1 })
        }}>
            {this.state.n}
        </div>
    }
    // 5.componentDidMount:第一次渲染完成
    componentDidMount() {
        //  此处可以获取DOM元素了
        console.log('---->componentDidMount')
    }
    // 6.更新状态后
    // ->是否应该更新组件
    shouldComponentUpdate(nextProps, nextState) {
        /**
         * 执行setState等操作，首先触发的是当前钩子函数
         *  this.state当前的状态（改之前的状态）
         *  this.props，nextProps和状态一样的意思
         * 钩子函数返回true：允许重新渲染视图；false：不允许继续渲染视图
         */
        console.log('---->shouldComponentUpdate', this.props, this.state, nextProps, nextState)
        return true
    }
    // 
    componentWillUpdate() {
        console.log('====>componentWillUpdate')

    }
    componentDidUpdate() {
        console.log('====>componentDidUpdate')
    }
}

ReactDOM.render(<div>
    <Clock>
    </Clock>
</div>, document.getElementById('root'))

// ------>constructor
// ------>componentWillMount
// ----->render
// ---->componentDidMount