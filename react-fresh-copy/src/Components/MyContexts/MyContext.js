import React, {Fragment} from 'react'
import {ContextApi} from '../../App'
function MyContext(props){
	// console.log(ContextApi)
	return(
		
		<Fragment>
			<h5>2. Child Context</h5>	
			<ContextApi.Consumer>
				{({data,handler}) => {
					return (
						<Fragment>
						<li>Name: {data.name} & Age: {data.age}</li>
						<button onClick={handler}>ClickMe</button>
						</Fragment>
					)
				}}
			</ContextApi.Consumer>
		</Fragment>
	)
}
export default MyContext
