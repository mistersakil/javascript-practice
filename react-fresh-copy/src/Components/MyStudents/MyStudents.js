import React from 'react'
import MyStudent from './MyStudent'

export default class MyStudents extends React.Component{

	constructor(props){
		console.log('My Students rendered')
		super(props)
		this.state = {
			name: 'Sakil',
			age: 25,
			count: 0,
			title: props.title
		}
	}
	MyEvent4 = (e) => {		
		this.setState({name: 'Rasel', age: 35, count: this.state.count + 1})
	} 
	render(){
		console.log('My Students render rendered')
		return (
			<div className="block">
				<h2>{this.state.title}</h2>
				<MyStudent name={this.state.name} age={this.state.age} count={this.state.count} />
				<button onClick={this.MyEvent4}>Change Student Name</button>
			</div>
		)
	}
}