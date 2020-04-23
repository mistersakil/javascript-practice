import React, { Component } from 'react';

export default class Form extends Component {
	initianState = {name: '', country: ''}
	state = this.initianState

	inputHandler = event => {
		const {name, value} = event.target
		this.setState({[name] : value})
	}
	formSubmitHandler = event => {
		event.preventDefault()
		this.props.formDataHandler(this.state)
		this.setState(this.initianState)
	}
	render() {
		const {name,country} = this.state
		return (
		<>
			<form onSubmit={this.formSubmitHandler}>
				<div className="form-group">
				  	<label htmlFor="name">Name:</label>
				  	<input type="text" className="form-control" id="name" name="name" onChange={this.inputHandler} value={name}  />
				</div>

				<div className="form-group">
				  	<label htmlFor="country">Country:</label>
				   	<select className="form-control" name="country" id="country" onChange={this.inputHandler}>
					    <option value="">Select Country</option>
					    <option value="Bangladesh">Bangladesh</option>
					    <option value="India">India</option>
					    <option value="Pakistan">Pakistan</option>
					    <option value="Qatar">Qatar</option>
					    <option value="Saudi Arabia">Saudi Arabia</option>
				  	</select>
				</div>

				<div className="form-group">
				  	<input type="submit" className="form-control btn btn-primary" value="Save" />
				</div>
				

			</form>

		</>
		);
	}
}
