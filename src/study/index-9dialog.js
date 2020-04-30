import React from 'react'
import ReactDOM from 'react-dom'
// import qs from 'qs'
import './static/less/index.less'
import Dialog from '../component/9-dialog'

// import { data } from 'browserslist';
// console.log(qs.parse('name=holy&qq=11717')) // {name: "holy", qq: "11717"}

//Promise
let p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(111)
    }, Math.random() * 1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve(222)
    }, Math.random() * 1000)
})
Promise.all([p1, p2]).then(data => {
    console.log(data) //  [111, 222]
}, err => {
    console.log(err)
})

Promise.race([p1, p2]).then(data => {
    console.log(data) // 111 或者 222 看哪个先执行完
}, err => {
    console.log(err)
})
// yield
function* fn() {
    console.log('aaa')
    yield console.log('bbb')
    yield console.log('ccc')
    yield getData()
}
function getData() {
    setTimeout(() => {
        console.log('xxx')
        f.next()
    }, 1000)
}
let f = fn()
// f.next() // aaa bbb 
// f.next()  //ccc

// ----------------------------------
class Clock extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return <div>
            {this.props.flag}
        </div>
    }



}
class Test extends React.Component {
    state = { x: 0 }
    render() {
        return <div>
            <Clock flag={this.state.x} />
            <button onClick={_ => {
                let x = this.state.x
                
                
                this.setState({ x: x + 1 })
            }}>click me</button>
        </div>
    }
}
let root = document.getElementById('root')
let str1 = 'xxx'
let list = [{ 'name': 'lili', 'age': '22' }, { 'name': 'kiki', 'age': '33' }]

ReactDOM.render(<div>
    <Test />
    <div id="box">{str1}</div>
    <ul>
        {list.map((item, index) => {
            return <li key={index}>
                <span>{item.name}</span>
                <span>{item.age}</span>
            </li>
        })}
    </ul>
    <Dialog  content='你真帅'/>
    <Dialog  type={2} content='你真帅' />
</div>, root, () => {
    let oBox = document.querySelector('#box')
    console.log(oBox.innerHTML)
})