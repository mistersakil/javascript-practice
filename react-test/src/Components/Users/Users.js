import React, {Component} from 'react'
import User from './User.js'

class Users extends Component{
	render(){
		return (
			<section className="user_list">
				<h2>{this.props.children}</h2>
				<User name="Sakil" age="30+" />
				<User name="Rasel" age="33+" />
				<User name="Monir" />
      		</section>
		)			
	}
}

export default Users