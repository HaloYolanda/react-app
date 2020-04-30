import React from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
class Temp  extends React.Component{
    constructor(){
        super()
        this.state={
            text:'your name'
        }
        
    }
    render (){
        let {text} = this.state
        return <section>
            <div > 
                <input type="text" value ={text} onChange={(ev)=>{
                    this.setState({
                        text:ev.target.value
                    })
                }}/>
            </div>
            <div>
                {text}
            </div>
        </section>
    }
}

ReactDOM.render(
    <section>  <Temp>
        </Temp> </section>,document.getElementById('root')
)