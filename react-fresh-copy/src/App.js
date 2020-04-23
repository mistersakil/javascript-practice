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
import MyForms from './Components/MyForms/MyForms'
import MyForm from './Components/MyForms/MyForm'
import MyRefs from './Components/MyForms/MyRefs'
import MyContexts from './Components/MyContexts/MyContexts'
import MyCount from './Components/Examples/MyCount'
import MyCounterApp from './Components/Examples/MyCounterApp'

export const ContextApi = React.createContext('Default value')
export default class App extends React.Component {
  constructor(props){
    console.log('App constructor Rendered')
    super(props)
    this.state = {
      heading: props.title,
      context: 'Context  Data passed',
      name : 'Sakil',
      age : 30
    }
  }

  componentDidMount(){
    console.log("Last lifecycle method of mounting => App")
  }

  countHandler = (e) => {
    this.setState({age: this.state.age + 1})
  }

  render(){
    console.log('App render Rendered')
    return (
      <div className="container">
        <h1 className="title">{this.state.heading}</h1>  
        <MyForm title="Controlled Component - Forms 2"/>
        <MyCounterApp title="Timer APP Example"/>
        <MyCount title="Count Example - State"/>
        <ContextApi.Provider value={{data: this.state, handler: this.countHandler}}>   
          <MyContexts title="Context API"/>
        </ContextApi.Provider>
        <MyRefs title="Uncontrolled Component - Refs"/>
        <MyForms title="Controlled Component - Forms"/>
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

