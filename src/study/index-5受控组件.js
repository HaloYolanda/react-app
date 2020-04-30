import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

// 受控组件：基于状态/属性的更新来驱动视图渲染
// 属性修改：设置默认值；让父组件重新调取自组件传递不同的熟悉；把获取的属性赋值给组件的状态，后期修改状态
class Clock extends React.Component {
    static defaultProps = {
        title: '北京time'
    }
    static propTypes = {
        title: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
            m: 100
        }
    }

    render() {
        console.log('b')
        return <div>
            <h2>{this.props.title}</h2>
            <p>{this.state.time}</p>
        </div>
    }
    componentDidMount() {
        // 挂载后
       setInterval(() => {
           this.setState({
               time:new Date().toLocaleString()
           })
       }, 1000);
       
    }
}

ReactDOM.render(<div>

    <Clock title='lalala'>
    </Clock>
</div>, document.getElementById('root'))

