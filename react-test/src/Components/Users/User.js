import React from 'react'

const User = (props) => {		
	let age = props.age ? props.age : "NA"	
	return (
		<div>
			<li>My name is: {props.name} and age is : {age}</li>
  		</div>
	)				
}

export default User