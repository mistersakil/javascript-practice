import React, {Component}  from 'react'

export default class MyRefs extends Component{
	constructor(props){
		super(props)
		this.nameRef = React.createRef()
	}
	state = {
		result: ''
	}

	formHandle = e => {
		e.preventDefault()
		this.setState({result : this.nameRef.current.value})
	}

	componentDidMount(){
		// this.nameRef.current.focus()
	}


	render(){
		return(
			<div className="block">
				<h2>{this.props.title}</h2>
				<h4>Result : {this.state.result} </h4>
				<form onSubmit={this.formHandle}>
					<input type="text" name="name" ref={this.nameRef} />
					<input type="submit" value="Submit" readOnly />

				</form>				
			</div>
		)
	}
}