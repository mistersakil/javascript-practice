import React from 'react'
import './App.css'
import Users from './Components/Users/Users'

function App(props) {
  return (
    <div className="container">
      <h1 className="title">{props.title}</h1>      
      <Users>My Users</Users>
    </div>
  );
}

export default App
