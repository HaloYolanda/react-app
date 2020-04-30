import React from 'react'
import PropTypes from 'prop-types'
import {
    thistle
} from 'color-name';
/**
 * Provider 根组件
 * 
 */
class Provider extends React.Component {
    //设置上下文类型
    static childContextTypes = {
        store: PropTypes.object


    }
    // 设置上下文信息值 想给子元素获取哪些属性 就返回哪些
    getChildContext() {
        return {
            store: this.props.store
        }
    }
    constructor(props, context) {
        super(props, context)
    }
    render() {
        return this.props.children;
    }
}

function connect(mapStateToProps, mapDispatchToProps) {
    /**
     * CONNECT:高阶组件(基于高阶函数:柯理化函数)创建的组件就是高阶组件
     * 属性：
     *      mapDispatchToProps:回调函数，把-些需要派发的任务方法也挂载到组件的属性上
     * 
     *   function mapDispatchToProps (dispatch) f
            return (
            init() {
                dispatch({...})
            }
            }
            //=>RETURN啥就把啥挂载到属性上(返回的方法中有执行dispatch派发任务的操作)
     * 返回一个新函数
     */
    return function connectHOT(Component) {
        /**
         * connectHOT 
         * 参数：一个待操作的组件 
         * 返回：一个新的组件
         */
        return class Proxy extends React.Component {

            static contextTypes = {
                store: PropTypes.object
            }
            constructor(props, context) {
                super(props, context)
                this.state = this.queryMountProps()// 获得最新状态信息

            }
            componentDidMount(){
                this.context.store.subscribe(()=>{
                    this.setState(this.queryMountProps())
                })
            }
            render(){
                return <Component {...this.props}/>
            }
            queryMountProps = () => {
                let {
                    store
                } = this.context,
                    state = store.getState()
                let propsState = typeof mapStateToProps === 'function' ? mapStateToProps(state) : {}
                let propsDispatch = typeof mapDispatchToProps === 'function' ? mapDispatchToProps(store.dispatch) : {}
                return {
                    ...propsState,
                    ...propsDispatch
                }
            }

        }
    }
}
export {
    Provider
}