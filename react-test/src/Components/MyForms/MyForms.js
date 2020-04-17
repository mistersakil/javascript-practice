import React, {useState, useReducer} from 'react'

function MyForms(props){
	const [title] = useState(props.title)
	
	const [input,setInput] = useReducer(
	    (state, newState) => ({...state, ...newState}),
	    {name: '', age: '', email: ''}
  	)

	function MyEvent(e){
		let {name,value} = e.target;
		setInput({[name] : value})
	}

	return (
		<div className="block">
		<h2>{title}</h2>
		<form>
			<p>
				<label htmlFor="name">Name: </label>
				<input type="text" name="name" id="name" value={input.name} onChange={MyEvent}/>
			</p><br/>
			<p>
				<label htmlFor="email">Email: </label>
				<input type="text" name="email" id="email" value={input.email} onChange={MyEvent}/>
			</p><br/>
			<p>
				<label htmlFor="age">Age: </label>
				<input type="text" name="age" id="age" value={input.age} onChange={MyEvent}/>
			</p><br/>


		</form>
		</div>
	)
}

export default MyForms