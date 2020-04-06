import React from 'react'
import './App.css'
import Users from './Components/Users/Users'
import MyEventsClass from './Components/MyEvents/MyEventsClass'
import MyEventsFunction from './Components/MyEvents/MyEventsFunction'
import MyStates from './Components/MyStates/MyStates'
import MyStudents from './Components/MyStudents/MyStudents'
import MyHooks from './Components/MyHooks/MyHooks'
import MyUseEffect from './Components/MyHooks/MyUseEffect'
import MyCustomHooks from './Components/MyHooks/MyCustomHooks'
import MyLists from './Components/MyLists/MyLists'

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
        <MyLists title="Lists"/>
        <MyCustomHooks title="Hooks - useHookForCounter()"/>
        <MyUseEffect title="Hooks - useEffect()"/>
        <MyHooks title="Hooks - useState()"/>
        <MyStudents title="Students"/>
        <Users>Users</Users>
        <MyStates name="States Title" />
        <MyEventsFunction name="Funtional Event" />
        <MyEventsClass name="Events 1" age="31" />
      </div>
    );
  }
}

