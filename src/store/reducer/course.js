import * as TYPES from '../action-types'

let INIT_STATE = {
    bannerData: [],
    courseData: {
        total: 1,
        limit: 10,
        page: 1,
        data: []
    },
    courseType: 'all',
    shopCart: {
        unpay: [],
        pay: []
    },
    selectAll: true //默认列表全选
}

export default function course(state =
    INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state))
    if (action.type === TYPES.COURSE_QUERY_BANNER) {
        let {
            code,
            data
        } = action.bannerData
        if (parseFloat(code) === 0) {
            state.bannerData = data

        }
    }
    if (action.type === TYPES.COURSE_QUERY_LIST) {
        let {
            result,
            flag,
            courseType
        } = action
        state.courseType = courseType
        if (parseFloat(result.code) === 0) {
            state.courseData.total = parseFloat(result.total)
            state.courseData.limit = parseFloat(result.limit)
            state.courseData.page = parseFloat(result.page)
            if (flag === 'push') {
                // state.courseData.data.push(...result.data);
                state.courseData.data = state.courseData.data.concat(result.data);
            } else {
                state.courseData.data = result.data;
            }
        }


    }
    // 获取已支付和未支付的购物车信息
    if (action.type === TYPES.COURSE_UNPAY) {
        if (parseFloat(action.result.code) === 0) {
            state.shopCart.unpay = action.result.data;
            state.shopCart.unpay = state.shopCart.unpay.map(item => {
                return {
                    ...item,
                    check: true
                }
            })

        }
    }
    if (action.type === TYPES.COURSE_PAY) {
        if (parseFloat(action.result.code) === 0) {
            state.shopCart.pay = action.result.data;
        }
    }
    if (action.type === TYPES.COURSE_HANDLE) {
        let mode = action.mode
        if (mode === 'all') {
            state.selectAll = !state.selectAll
            state.shopCart.unpay = state.shopCart.unpay.map(item => {
                return {
                    ...item,
                    check: state.selectAll
                }
            })
        } else {
            let item = state.shopCart.unpay.find(item => {
                return parseFloat(item.id) === mode
            })
            item.check = !item.check
            let f = state.shopCart.unpay.find(item => {
                return item.check === false
            })
            f ? state.selectAll = false : state.selectAll = true
        }
    }
    return state
}

/**
 * 
 *  limit/page/total每一次从服务器获取信息后都要更新
    1.第一次获取数据或者点击加载更多获取其它页的数据，都是把最新获取的这几条数据追加到courseData.data中
    2.点击筛选的时候，应该是把获取的数据信息， 替换courseData.data
        
    =>DISPATCH派发的时候，还需要传递一一个标识: flag-push/replace, 
    代表是追加还是替换?
    根据标识我们完成对应的操件

    3.在REDUX容器中还需要记录- 一个信息， 当前课程类型: all/ae/pr...由此更新标题的2
    信息
 */