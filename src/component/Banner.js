import React from 'react'
import PropTypes from 'prop-types'
import './static/css/banner.css'
// import '../static/bootstrap/dist/css/bootstrap.css'
export default class Banner extends React.Component{
    // 设置属性默认值和规则
    static defaultProps={
        data:[],
        interval:3000,
        step:1,
        speed:300
    }
    static propTypes = {
        data:PropTypes.array,
        interval:PropTypes.number,
        step:PropTypes.number,
        speed:PropTypes.number,
    }
    constructor(props){
        super(props)
        // let {step,speed} = this.props
        // this.state = {
        //     step,speed
        // }
    }
    // 数据克隆
    // componentWillMount(){
    //     let {data} = this.props
    //     // if (data.length===0) return '';
    //    ,cloneData = data.slice(0)
    //     cloneData.push(data[0])
    //     cloneData.unshift(data[data.length-1])
    //     this.cloneData = cloneData  // 挂载到实例上供其他方法使用
    // } 
    // 自动轮播
    // componentDidMount(){
    //     this.autoTimer = setInterval(this.autoMove,this.props.interval)
    // }
    //向右切换
    render(){
    //  let  { data }= this.props,
    //       {cloneData} =this
    //  if(data.length===0) return ''
     
    //  let {step,speed} =this.state,
    //  wrapperSty = {
    //      width:cloneData.length * 1000 + 'px',
    //      left:-step * 1000 + 'px',
    //      transition:`left ${speed}ms linear 0ms`
    //  }

        return <section className='container'>
          <div className="scroller">
              <div className="inner" style={{width:`${imgs.length*100}`}}>
                  {imgs.map(src=>{
                      return <img key = {src} src = {src}/>
                  })}
              </div>
          </div>
        </section>
    }
    // 向右切换
    // autoMove=()=>{
    //     this.setState({
    //         step:this.state.step+1
    //     })
    // }
}