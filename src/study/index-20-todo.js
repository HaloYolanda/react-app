import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './todo.less'
import Head from './component/todo/Head'
import Body from './component/todo/Body'
import Footer from './component/todo/Footer'
import {Provider} from 'react-redux'
import store from './store'

let root =document.getElementById('root')

ReactDOM.render( <Provider store={store}>
        <main className='panel panel-default' style={{margin:'20px auto',width:'60%',border:'3px solid pink',padding:'12px',borderRadius:'15px'}}>
            <Head></Head>
            <Body/>
            <Footer/>
        </main>
    </Provider>
,root)