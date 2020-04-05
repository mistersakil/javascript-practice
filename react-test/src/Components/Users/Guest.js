import React, {useState} from 'react'

function Guest (props){

	const [loginHandler] = useState(props.loginHandler)	

	return (
		<div className="block">
			<h2> Welcome - Guest</h2>
			<button onClick={loginHandler}> Please Login  </button>
		</div>
	)

}

export default Guest