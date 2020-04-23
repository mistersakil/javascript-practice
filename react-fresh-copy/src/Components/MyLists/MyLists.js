import React, {useState} from 'react'

function MyLists(props){
	const [title] = useState(props.title)
	const arr = ['sakil','rasel','monir']
	const arrOfObj = [
		{name: 'sakil', age: 30, location: 'dhaka'},
		{name: 'rasel', age: 33, location: 'doha'},
	]
		
	const lists = arr.map(item => { return <button>{item}</button> })
	const lists2 = arrOfObj.map(item => <button> => {item.name}</button>)
	console.log(arrOfObj)
	return (
		<div className="block">
			<h2>{title}</h2>
			{lists} <br/> {lists2}
		</div>
	)
}

export default MyLists