import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
class Vote extends React.Component{
    static defaultProps={}
    static propTyypes = {
        title:PropTypes.string.isRequired
    }

    constructor(props){
        super(props)
        this.state = {
            n:0,
            m:0
        }
     
    }
    render(){
        return <section style={{margin:'20px auto',width:'60%'}}>
            <div>
                <h3>{this.props.title}</h3>
            </div>
            <div>
                支持人数：<span ref={x=>this.spanLeft=x}>0</span>  <br/><br/>
                反对人数：<span ref={x=>this.spanRight=x}>0</span> <br/><br/>
                支持率：<span ref={x=>this.spanRate=x}>0</span> 

            </div>
            <div>
                <button onClick = {this.support}>支持</button>
                <button onClick = {this.against}>反对</button>
            </div>
        </section>
    }
    support=ev=>{
    //   console.log(this.refs)//{spanLeft: span, spanRight: span, spanRate: span}
    let {spanLeft} =  this
    spanLeft.innerHTML++
    this.computed()

    }
    against=ev=>{
        let {spanRight} =  this
        spanRight.innerHTML++
        this.computed()
    }
    computed=()=>{
        let {spanLeft,spanRight,spanRate} = this,
        n = parseFloat(spanLeft.innerHTML),
        m = parseFloat(spanRight.innerHTML),
        rate = (n+m)===0?'0%':((n/(n+m)*100).toFixed(2)+'%') 
        spanRate.innerHTML = rate
    }

}
ReactDOM.render(<main>
    <Vote title=' 世界杯 ' n={12} m ={2}></Vote>
    <Vote title=' 篮球杯 '></Vote>
</main>,document.getElementById('root'))