import React from 'react'

const MyEventsFunction = (props) => {
	let name = props.name

	let MyEvent1 = (e) => {
		e.preventDefault()
		console.log(`Event fired on ${props.name} => `, e.target.title)

	}

	return (
		<div className="block">
			<h2>{name}</h2>
			<button onClick={MyEvent1}>ClickMe 1</button>
			<br/>
			<a title="Welcome to react" href="https://www.react.org" onClick={MyEvent1} >ClickMe 2</a>

		</div>
	)
}

export default MyEventsFunction