import React from 'react'

const Jumbotron = props => {
	
		return (

			<div className="jumbotron text-center">
			  <h1>{props.title}</h1>
			  <p>{props.content}</p>
			</div>
		)
	
}

export default Jumbotron
