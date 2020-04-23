import React from 'react'

export default class MyStudent extends React.Component{

	constructor(props){
		console.log('My Student rendered')
		super(props)
		this.state = {
			name: props.name,
			age: props.age,
			count: props.count
		}
	}

	static getDerivedStateFromProps(props,state){
		console.log('My Student StateFromProps rendered')
		console.log(props, state)
		return {name:props.name, age: props.age, count: props.count}
	}

	render(){
		console.log('My Student render rendered')
		return <li>My Name is: {this.state.name} and Age: {this.state.age} ({this.state.count})</li>
	}
}