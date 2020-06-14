import React from 'react';
import './App.css';
import NavBar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/dashboard/Home'
import Profile from './components/dashboard/Profile'
import Login from './components/auth/Login'
import Register from './components/auth/Register'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
