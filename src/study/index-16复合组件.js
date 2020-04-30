import React from 'react'
import ReactDOM from 'react-dom'


class Head extends React.Component{
    render(){
        return (
            <div>
              <h3>点击次数:{this.props.count}</h3>
            </div>
        )
    }
}
class Body extends React.Component{

    render(){
        return (
            <div>
             <button onClick= {this.props.callBack}>点我啊</button>
            </div>
        )
    }
   
}

class Panel extends React.Component{
    constructor(){
        super()
        this.state ={ n:0 }
    }
    fn=()=>{
        this.setState({
            n:this.state.n+1
        })
    }
    render(){
        return (
            <section style={{width:'50%',margin:"20px auto",border:'1px solid pink'}}>
                {/* 调取子组件的时候 把信息通过属性传递给子组件 */}
                <Head count = {this.state.n}></Head>
                <Body callBack = {this.fn}></Body>
            </section>
        )
           
    }
}

ReactDOM.render(<div><Panel/></div> ,document.getElementById('root')
    )