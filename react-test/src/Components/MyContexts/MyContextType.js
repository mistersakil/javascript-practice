import React, {Fragment} from 'react'
import {ContextApi} from './Context'
export default class MyContextType extends React.Component{

	static contextType = ContextApi
	render(){
		return(
			<Fragment>
				<h5>3. Child ContextType</h5>	
				<li>{this.context}</li>
			</Fragment>
		)
	}
}
