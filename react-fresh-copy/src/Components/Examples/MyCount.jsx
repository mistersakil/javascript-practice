import React from 'react'

export default class MyCount extends React.Component{
	state = {
		count: 1000
	}
	MyEvent = e => {
		this.setState({count: this.state.count + 1})
	}
	static getDerivedStateFromProps (props, state){
		console.log('event fired: ' + state.count)		
		return false
	}
	render(){
		return (
			<div className="block">
				<h2>{this.props.title}</h2>	
				<h3>Increment: {this.state.count}</h3>	
				<button onClick={this.MyEvent}>ClickMe</button>	
				
			</div>
		)
	}
}