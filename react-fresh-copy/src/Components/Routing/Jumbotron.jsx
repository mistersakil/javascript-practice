import React from 'react'

const Jumbotron = props => {
	
	return (
		<>
		<div className="jumbotron text-center">
		  <h2>{props.title}</h2> 
		  <p>{props.body}</p>
		</div>
		</>
	)
	
}

export default Jumbotron
