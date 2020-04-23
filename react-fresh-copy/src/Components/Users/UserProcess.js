import React, {useState} from 'react'
import Guest from './Guest'
import Registered from './Registered'


function UserProcess(props){
	const [heading, setHeading] = useState(props.title)
	const [isLoggedIn, setIsLoggedIn] = useState(0)

	const loginHandler = () => {
		console.log('Login - Guest')
		setIsLoggedIn(1)
	}
	const logoutHandler = () => {
		console.log('Logout - Registered')
		setIsLoggedIn(0)
	}

	return (
		<div className="container">
			<h1 className="title">{heading}</h1>
			{ 
				isLoggedIn 
				? <Registered  logoutHandler={() => { return logoutHandler }} /> 
				: <Guest loginHandler={() => { return loginHandler }} />
			}		
		</div>
	)


}

export default UserProcess