import React, {useState} from 'react'
import useHookForCounter from './useHookForCounter'
function MyCustomHooks(props){
	const [title,setTitle] = useState(props.title)
	const [count, setCountHandler] = useHookForCounter()
	return (
		<div className="block">
			<h2>{title}</h2>
			<button onClick={setCountHandler}>ClickMe <span> : {count} </span> </button>
		</div>
	)

}

export default MyCustomHooks
