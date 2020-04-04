import React from 'react'
import './App.css'
import Users from './Components/Users/Users'
import MyEventsClass from './Components/MyEvents/MyEventsClass'
import MyEventsFunction from './Components/MyEvents/MyEventsFunction'
import MyStates from './Components/MyStates/MyStates'
import MyStudents from './Components/MyStudents/MyStudents'
import MyHooks from './Components/MyHooks/MyHooks'

export default class App extends React.Component {
  constructor(props){
    console.log('App constructor Rendered')
    super(props)
    this.state = {
      heading: props.title
    }
  }

  componentDidMount(){
    console.log("Last lifecycle method of mounting => App")
  }

  render(){
    console.log('App render Rendered')
    return (
      <div className="container">
        <h1 className="title">{this.state.heading}</h1>      
        <MyHooks title="MY Hooks - useState()"/>
        <MyStudents title="MY Students"/>
        <Users>My Users</Users>
        <MyStates name="MyStates Title" />
        <MyEventsFunction name="Funtional Event" />
        <MyEventsClass name="MyEvents 1" age="31" />
      </div>
    );
  }
}

