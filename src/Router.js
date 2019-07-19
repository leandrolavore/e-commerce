import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import Cart from './pages/Cart.js'


const Router = () =>(
    <Switch>
    
    <Route exact path = '/' component = {Home}/>
    <Route exact path = '/cart' component = {Cart}/>
    
    </Switch>
)
   


export default Router