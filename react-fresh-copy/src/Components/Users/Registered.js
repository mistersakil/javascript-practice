import React, {useState} from 'react'

function Registered (props){

	const [logoutHandler] = useState(props.logoutHandler)	

	return (
		<div className="block">
			<h2> Welcome - Sakil</h2>
			<button onClick={logoutHandler}> Logout </button>
		</div>
	)

}

export default Registered