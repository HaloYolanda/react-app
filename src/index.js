import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import store from './store/index'
// ANTD
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
//css
import './static/css/reset.min.css'
import './static/css/common.less'

import NavTop from './component/NavTop'
import NavBottom from './component/NavBottom'
import Home from './routes/Home'
import Mycourse from './routes/Mycourse'
import Person from './routes/Person'


let root =document.getElementById('root')

ReactDOM.render( <Provider store={store}>
            <HashRouter>
         <ConfigProvider locale={zhCN}>
           <div>
           <NavTop/>
           <main className='container'>
               <Switch>
                  {/* <Route path='/' exact component={Home}/> */}
                  <Route path='/course'   component={Home}/>
                  <Route path='/mycourse'   component={Mycourse}/>
                  <Route path='/person'   component={Person}/>
                  <Redirect to='/course'/>
               </Switch>
           </main>
           <NavBottom/>
           </div>
         </ConfigProvider>
        </HashRouter>
    </Provider>,root)