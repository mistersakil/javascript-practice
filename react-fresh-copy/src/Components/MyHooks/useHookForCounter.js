import {useState} from 'react'

function useHookForCounter(){
 const [count, setCount] = useState(0)

 const setCountHandler = () => {
 	setCount(count + 1)
 }
 return [count, setCountHandler] // can reaturn array or object
}

export default useHookForCounter
