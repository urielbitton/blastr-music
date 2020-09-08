import React from 'react';
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Player from './components/Player'
import Searchdiv from './components/Searchdiv'
import Jquery from './Jquery'
import './App.css';
  
  

function App() {
  return (
    <div className="App">
        <div className="appcont">
          
          <Sidebar/>  
          <Home/> 
          
          <Searchdiv/>
 
          <Jquery />
        </div>  


    </div>
  ); 
} 

export default App;
