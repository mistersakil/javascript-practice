import React, {useState, useEffect} from 'react'

function MyUseEffectItem({count}){	
	useEffect(() => {
		console.log('==> useEffect fired : MyUseEffectItem')
	},[count])

	return(
		<span> : {count}<br/> </span>
	 )
}
export default MyUseEffectItem