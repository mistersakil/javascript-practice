import React from 'react'

class MyStates extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: this.props.name,
			counte: 0
		}
	}

 	MyEvent = (e) => {
 		e.preventDefault()
 		this.setState({name: "State Title Update"})
 		console.log(this.state)
 	}
 	MyCounter = (e) => {
 		this.setState({
 			counte : this.state.counte + 1
 		})
 		console.log(this.state.counte)
 	}
	render(){
		return (
			<div className="block">
				<h2>{this.state.name}</h2>
				<button type="button" onClick={this.MyEvent}>ClickMe</button> <br/>
				<button type="button" onClick={this.MyCounter}>ClickMe-Count</button> 
				<span> =  {this.state.counte}</span>

			</div>
		)
	}
}

export default MyStates