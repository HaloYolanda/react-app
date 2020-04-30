import React from 'react'
import {connect} from 'react-redux'
import {Switch,Route,Redirect} from 'react-router-dom'
import List from './course/List'
import Info from './course/Info'

class Home extends React.Component{
   
    render(){
         return  <section calssName='courseBox'>
              <Switch>
                  <Route path='/course' exact component={List}/>
                  <Route path='/course/info' component={Info}/>
              </Switch>
            </section>

    }
}

export default  connect()(Home)