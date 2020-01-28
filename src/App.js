import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import NavBar from "./components/Navbar";
import JumboTron from "./components/Jumbotron";
import ProfilePage from "./components/Pages/Profile";
import WorkPage from "./components/Pages/Work";
// import Scrollspy from 'react-scrollspy';


class App extends Component {
render() {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
    <br/>  

      {/* Router */}
      <Route exact path="/" component={JumboTron}/> 
      <Route exact path="/profile" component={ProfilePage}/> 
      <Route exact path="/work" component={WorkPage}/> 
      
   
    </div>
    </BrowserRouter>

  );
}
}

export default App;
