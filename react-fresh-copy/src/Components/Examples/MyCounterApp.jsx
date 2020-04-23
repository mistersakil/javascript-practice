import React,{Component} from 'react'

export default class MyCounterApp extends Component{
	state = {
		count: 0,
		plusMinusDisplay: true
	}
	countIntervalId = false
	incrementCount = (e) => {
		this.setState({count: this.state.count + 1})
	}
	decrementCount = (e) => {
		if(this.state.count > 0)
		this.setState({count: this.state.count - 1})
	}
	startCount = (e) => {
		if(this.state.count > 0){
			this.setState({plusMinusDisplay: false})
			this.countIntervalId = setInterval(this.startCountCallback, 1000)
		}
	}
	startCountCallback = () => {
		if(this.state.count > 0){
			this.setState({count: this.state.count - 1})	
			if(this.state.count == 0){
				this.setState({plusMinusDisplay: true})	
				clearInterval(this.countIntervalId)
				this.countIntervalId = false
			}
		}

	}
	pauseCount = (e) => {
		if(this.countIntervalId){
			clearInterval(this.countIntervalId)
			this.countIntervalId = false
		}
	}	
	clearCount = (e) => {
		clearInterval(this.countIntervalId)
		this.countIntervalId = false
		this.setState({count: 0, plusMinusDisplay: true})
		
	}
	render(){
		return (
			<div className="block">
				<h2>{this.props.title}</h2>
				<div className="timerBlock">
					{
						this.state.plusMinusDisplay 
						? <button onClick={this.incrementCount}>+</button>
						: ''
					}
					
					<span>{this.state.count}</span>
					{
						this.state.plusMinusDisplay 
						? <button onClick={this.decrementCount}>-</button>
						: ''
					}
					<div className="timerOperations">
						<button onClick={this.startCount}>Start</button>
						<button onClick={this.pauseCount}>Pause</button>
						<button onClick={this.clearCount}>Clear</button>
					</div>				
				</div>
				

			</div>
		)
	}
}