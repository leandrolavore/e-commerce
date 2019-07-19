import React, {Component} from 'react';

import './App.css';
import Router from './Router.js'
import Nav from './Nav'



class  App extends Component {

  render (){
  return (
    <div className="app">
     
      <Nav />
      <Router />
      
 <div className="apph1">
   <h1>E-commerce</h1>
   </div>
  
    </div>
  )
  }
}

export default App;
