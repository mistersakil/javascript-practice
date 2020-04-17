import React from 'react'
import MyContext from './MyContext'
import MyContextType from './MyContextType'

function MyContexts(props){

	return(
		<div className="block">
			<h2>{props.title}</h2>
			<h5>1. Parent Context</h5>
			<MyContext/>
			<MyContextType/>
		</div>
	)
}
export default MyContexts
