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
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';



function App() {
  return (
    <div className="App">
      
      <AuthProvider>\
      <Router>
         <Switch>
         <PrivateRoute path="/appointment">
            <Appointment/>
           </PrivateRoute>
         <PrivateRoute path="/dashboard">
            <Dashboard/>
           </PrivateRoute>
           <Route path="/home">
             <Home></Home>
           </Route>
           <Route path="/login">
             <Login/>
           </Route>
           <Route path="/register">
             <Register/>
           </Route>
           <Route path="/">
             <Home></Home>
           </Route>
         </Switch>
       </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
