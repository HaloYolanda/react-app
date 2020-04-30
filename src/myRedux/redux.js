/**
 * 原理
 * createStore ：创建redux容器
 * 参数：reducer 函数
 * 返回：store 对象 {getState,dispatch,subscribe}
 */

function createStore(reducer) {
    //创建一个store state用来存储管理的状态信息，listen-ary用来存储事件池的方法
    //state 不用设置初始值，因为第一次dispatch执行reducer，state没有值 
    // 走的是reducer设置的默认值信息 我们会在创建容器时把dispatch执行一次
    let state,
        listenAry = []

    function dispatch(action) {
        // 执行reducer 修改容器中的状态信息
        state = reducer(state, action)
        //   容器中通知状态信息经过reducer修改后，通知事件池中的方法执行
        for (let i = 0; i < listenAry.length; i++) {
            let item = listenAry[i]
            if (typeof item === 'function') {
                item()
            } else {
                listenAry.splice(i, 1)
                i--
            }
        }
    }
    dispatch({
        type: '_INIT_DEFAULT_STATE'
    })

    // -> GETSTATE
    function getState() {
        // 有bug 如果state是一个对象 获取的是一个地址 直接修改堆内存的内容是不被允许的
        // {...state} 是浅克隆

        return JSON.parse(JSON.stringify(state)) // 深度克隆对象


    }
    // -> SUBCRIBE
    function subscribe(fn) {
        // 1 向容器追加方法
        let isExit = listenAry.includes(fn)
        if (isExit) listenAry.push(fn)
        // 2 返回一个方法 ：执行返回的方法会把当前绑定的方法在事件池中移除掉
        return function unsubscribe() {
            let index = listenAry.indexOf(fn)
            // 删除
            // listenAry.splice(index,1) // 可能引发数组塌陷 所以不能这样写
            listenAry[index] = null
        }

    }
    return {
        dispatch,
        getState,
        subscribe
    }

}


function combineReducers(reducers) {
    /**
     * combineReducers: REDUCER合并方法
        @PARAMS 
        对象，对象中包含了每一个版块对象的REDUCER => {xxx:function reducer...}
        @RETURN
        返回的是- - 个新的REDUCER函数(把这个值赋值给CREATE- STORE)
        特殊处理:合并REDUCER之后， REDUX 容器中的STATE也变为以对应对象管理的模式 => {xxx:{}...}
     */
    return function reducer(state = {}, action) {
        //=>DISPATCH派发执行的时候，执行的是返回的REDUCER，这里也要返回一个最终的STATE对象
        // 替换原有的STATE，而且这个STATE中包含每个模块的状态信息-> (vote:...personal:...1
        //-> 我们所谓的REDUCER合并，其实就是DISPATCH派发的时候，把每- - 个模块的REDUCER都单独
        // 执行一遍，把每个模块返回的状态最后汇总在一起，替换 容器中的状态信息
        let newState={}
        for(let key in reducers){
            if(!reducers.hasOwnProperty(key)) break
            newState[key] = reducers[key](state[key],action)
        }
        return newState
    }
}
store = createStore(reducer)
store.dispatch({
    type: 'xxx'
})

let reducer = (state = {}, action) => {
    switch (action.type) {

    }
    return state

}
let store = createStore(reducer)