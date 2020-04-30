import React from 'react'
import ReactDOM from 'react-dom'
import ReactSwipe from 'react-swipe'
import './static/css/banner.css'
import Vote from './study/index-11数据驱动vote'
// import NewVote from './component/vote/Vote'
import ReduxVote from './component/vote2/Vote'

// import Banner from './component/Banner'

// const imgs =[
//     './static/'
// ]
// ReactDOM.render(<main>
//     {/* 
//     data:默认[]
//     interval：自动轮播间隔时间
//     step 默认展示图片的索引
//     speed：每张切换的运动时间
//     */}
//        <Banner/>
// </main>,document.getElementById('root'))

let myRedux = (function anonymous(){
    let stateObj={},
    listenAry =[]

    function updateState(callBack){
        // console.log('updatestate')
        // callBack回调函数修改并返回最新的状态信息     
        let newObj  = callBack(stateObj)
        // console.log(stateObj)
        stateObj = {...stateObj,...newObj}
        // 状态修改
        listenAry.forEach(item=>{
            if(typeof item==='function'){
                item()
            }
        })
    }
    function getState(){
        return stateObj
    }
    function subscribe(fn){
        for(let i = 0;i<listenAry.length;i++){
            let item=listenAry[i]
            if(item===fn){
                return
            }
        }
        listenAry.push(fn)
    }
  return {
        updateState,
        getState,
        subscribe
    }
})()

let IMG_DATA=[{pic:'require("../static/img/11.png")',title:'xixi'},{pic:2,title:'haha'},{pic:3,title:'lala'}]
let name = '我是名字',list=[{id:1,title:'xixi'},{id:2,title:'lili'},]
ReactDOM.render(<div>
    <h2 onClick = {ev=>{
        alert(ev)
    }}>{name}</h2>
    <h2>{[1,2,3]}</h2> 
    <ul id={"box"} className={'box clearfix'} style={{color:'pink'}}>
       { list.map((item,index)=>{
           return <li  key = {index}>{item.id} {item.title}</li>
       })}
    </ul>
    <h2>{(()=>{
        return '啦啦啦'
    })()}
    </h2>
    <h4>{'haha'}</h4>
    {/* 轮播图 */}
    <ReactSwipe className={'container'} swipeOptions={{auto:2000}}>
        {IMG_DATA.map((item,index)=>{
            let {title}=item
            return <div key={index}><img src={require('./static/img/11.png')} alt={title}/> </div>
        })}
    </ReactSwipe>
    <Vote title=' 世界杯 ' n={12} m ={2}></Vote>
    <Vote title=' 篮球杯 '></Vote>
    {/* <NewVote title={'superMan is me'} count={{n:100,m:70}}></NewVote> */}
    <ReduxVote title={'我是标题'} myRedux ={myRedux} count={{n:100,m:78}}></ReduxVote>
    </div>,document.getElementById('root'))