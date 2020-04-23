import React, {useState, useEffect} from 'react'
import MyUseEffectItem from './MyUseEffectItem'

function MyUseEffect(props){
	const [title, setTitle] = useState(props.title)
	const [increase, setIn] = useState(0)
	const [decrease, setDe] = useState(100)
	const MyEvent1 = () => {
		console.log('==> Event Fired : MyUseEffect')
		setIn(increase + 1)
	}
	const MyEvent2 = () => {
		console.log('==> Event Fired : MyUseEffect')
		setDe(decrease -1)
	}
	return (
		<div className="block">
			<h2>{title}</h2>
			<button onClick={MyEvent1}>Increase-Me</button>  <MyUseEffectItem count={increase} />
			<button onClick={MyEvent2}>Decrease-Me</button>  <MyUseEffectItem count={decrease} />
		</div>
	)

}

export default MyUseEffect