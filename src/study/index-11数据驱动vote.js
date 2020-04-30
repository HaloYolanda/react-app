import React from 'react'
// import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
export default class Vote extends React.Component{
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
        let {n,m} = this.state,
        rate =(n+m)===0?'0%':((n/(n+m)*100).toFixed(2)+'%')
        return <section style={{margin:'20px auto',width:'60%',border:'3px solid pink',padding:'12px',borderRadius:'15px'}}>
            <div>
                <h3>{this.props.title}</h3>
            </div>
            <div>
                支持人数：{n}<br/><br/>
                反对人数：{m}<br/><br/>
                支持率：{rate}

            </div>
            <div>
                <button onClick = {this.support}>支持</button>
                <button onClick = {this.against}>反对</button>
            </div>
        </section>
    }
    support=(ev)=>{
        // console.log(this) //Vote {props: {…}, context: {…}, refs: {…}, updater: {…}, support: ƒ, …}
        // console.log(ev.target)
        this.setState({n:this.state.n+1})

    }
    against=ev=>{
        this.setState({m:this.state.m+1})
    }

}
// ReactDOM.render(<main>
//     <Vote title=' 世界杯 ' n={12} m ={2}></Vote>
//     <Vote title=' 篮球杯 '></Vote>
// </main>,document.getElementById('root'))