import React, {useState} from 'react'

const MyHooks = (props) => {
	const [title,setTitle] = useState(props.title);
	const [name,setName] = useState('Sakil');
	const [count,setCount] = useState(0);
	const MyEvent = (e) => {
		setName('Rasel')
		setCount(count + 1)
	}
	return (
		<div className="block">
			<h2>{title}</h2>
			<li>{name}</li>
			<button onClick={MyEvent}>ClickMe</button> <span> : {count}</span>
		</div>
	)

}
export default MyHooks