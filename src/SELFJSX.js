// 独立封装createElement() 和 render() 实现DOM渲染
//创建一个虚拟DOM对象
export function createElement(type, props, ...childs) {
    // [].slice.call(arguments,2)
    let jsxOBJ = {
        type,
        props: {},
        key: null,
        ref: null,
        
    }
    if (props) {
        // -> 处理key和ref
        if (props.hasOwnProperty('key')) {
            jsxOBJ.key = props.key
            delete props.key
        }
        if (props.hasOwnProperty('ref')) {
            jsxOBJ.key = props.ref
            delete props.ref
        }
        jsxOBJ.props = Object.assign(jsxOBJ.props, props)
// assign合并
    }
    //处理children
    if (childs.length > 0) {
        childs = childs.length === 1 ? childs[0] : childs
        jsxOBJ.props.children = childs
        // if (childs.length === 1) {
        //     jsxOBJ.props.children = childs[0]
        // } else {
        //     jsxOBJ.props.children = childs
        // }
    }
    return jsxOBJ

}
// 把虚拟DOM变成真实DOM
export function render(jsxOBJ, container, callback) {
    let {
        type,
        props
    } = jsxOBJ
    //1.根据type创建一个DOM元素对象（真实DOM）
    let element = document.createElement(type)
    // 1.1根据props中属性,依次给创建的元素进行设置
    for (let key in props) {
        if (!props.hasOwnProperty(key)) break
        // 1.2关于某些属性的特殊处理：className/style/children
        if (key === 'className') {
            element.className = props['className']
            continue
        }
        if (key === 'style') {
            let styOBJ = props['style']
            for (let styKey in styOBJ) {
                if (!styOBJ.hasOwnProperty(styKey)) break
                element['style'][styKey] = styOBJ[styKey]
            }
            continue

        }
        if (key === 'children') {
            let val = props['children'],
                childrenArr = Array.isArray(val) ? val : [val]
            // 1.3  迭代所有子元素 如果书字符串直接作为文本插入到先创建的元素中，如果是一个新的虚拟DOM对象，递归调用Render 再次创建元素插入到新创建的元素中

            childrenArr.forEach(item => {
                if (typeof item === 'string') {
                    element.appendChild(document.createTextNode(item))
                    return
                }
                render(item, element)
            })

            continue
        }
        element.setAttribute(key, props[key])

    }
    //2.把创建的元素对象添加到指定的容器中国中
    container.appendChild(element)
    callback && callback()
}