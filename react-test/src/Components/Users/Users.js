import React, {Component} from 'react'
import User from './User.js'

export default class Users extends Component{

	constructor(props){
		console.log('User constructor rendered => child of App')
		super(props)
		this.state = {
			title : props.children,
		}

	}

	componentDidMount(){
		console.log("Last lifecycle method of mounting => User")
	}


	render(){
		console.log('User render rendered => child of App')
		return (
			<section className="block">
				<h2>{this.state.title}</h2>
				<User name="Sakil" age="30" />
				<User name="Rasel" age="33" />
				<User name="Monir" />
      		</section>
		)			
	}
}

