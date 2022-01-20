import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
   Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      
       <Router>
         <Switch>
         <Route path="/appointment">
            <Appointment/>
           </Route>
           <Route path="/home">
             <Home></Home>
           </Route>
           <Route path="/login">
             <Login/>
           </Route>
           <Route path="/">
             <Home></Home>
           </Route>
         </Switch>
       </Router>


    </div>
  );
}

export default App;
