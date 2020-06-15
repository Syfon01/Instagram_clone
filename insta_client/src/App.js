import React from 'react';
import './App.css';
import NavBar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/dashboard/Home'
import Profile from './components/dashboard/Profile'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import CreatePost from './components/dashboard/Post/createPost'


function App() {
  return (
    <div className="app">
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
        <Route path="/create/post">
          <CreatePost />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
