import React from 'react'
import ReactDOM from 'react-dom'

class A extends React.Component{
    constructor(){
        super()
        console.log('1=constructor')
        this.state={n:1}
    }
    componentWillMount(){
        console.log('2=componentWillMount',this.refs.HH)
    }
    componentDidMount(){
        console.log('4=ComponentDidMount',this.refs.HH)
        setInterval(()=>{
            this.setState({n:this.state.n+1})
        },3000)
    }
    shouldComponentUpdate(){
        console.log('5=shouldComponentUpdate',this.state.n)
        if(this.state.n>3){
            return false
        }
        return true
    }
    componentWillUpdate(){
        console.log('6-componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('8-componentDidUpdate')
    }
    render(){
        console.log('Render')
        return <div ref='HH'>{this.state.n}</div>
    }

}
ReactDOM.render(<div><A/></div> ,document.getElementById('root')
    )