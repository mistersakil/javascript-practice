import React from 'react'

class MyEventsClass extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			name : this.props.name
		}
		this.myEvent2 = this.myEvent2.bind(this)
	}

	myEvent  = (e) => {
		console.log('event fired 1 =>', this, e.target)
	}

	myEvent2(e) {
		console.log('event fired 2 => ', this, e.target)
	}

	myEvent3(e){
	console.log('event fired 3 => ', this, e.target)
	}

	render(){
		return (
			<div className="block">
				<h2>{this.props.name}</h2>
				<input type="button" value="ClickMe" onClick={this.myEvent} />
				<input type="button" value="ClickMe-2" onClick={this.myEvent2} />
				<input type="button" value="ClickMe-3" onClick={(e) => this.myEvent3(e)} />
			</div>
		)
	}

}

export default MyEventsClass