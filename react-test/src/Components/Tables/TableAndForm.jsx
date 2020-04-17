import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Table from './Table'
import Form from '../MyForms/Form.jsx'

export default class TableAndForm extends Component {
	state = {
		arrayOfObject : [],
		objectFields: ['ID', 'Title','Body','Action']
	}
	objectDeleteHandler = (index) => {
		const confirm = window.confirm('Are you sure?')	
		if(confirm){
			const personsFiltered = this.state.arrayOfObject.filter((person, personIndex) => {
				return personIndex !== index
			})
			this.setState({arrayOfObject:personsFiltered})
		}else{
			alert('Delete Failed!!!!')
		}

	}
	formDataHandler = singleObject => {
		this.setState({arrayOfObject : [...this.state.arrayOfObject, singleObject]})
	}

	componentDidMount() {
	    const url = 'https://jsonplaceholder.typicode.com/posts'

    	fetch(url)
      	.then(result => result.json())
     	.then(result => {
	        const filteredData = []
	        result.map((singleObject, index) => {
	        	const {id,title,body} = singleObject
	        	filteredData.push({id,title,body})
	        })
	        this.setState({
	          arrayOfObject: filteredData.slice(0,10),
        	})
      	})
  	}

	render() {
		const {arrayOfObject,objectFields} = this.state
		return (
			<div className="container-fluid">
				<div className="row">
					<a href="./" className="btn btn-info center-block">Home</a>
					<div className="col-sm-4">
						<h1 className="text-center text-primary">Add New</h1>
						<hr/>
						<Form formDataHandler={this.formDataHandler} />

					</div>
					<div className="col-sm-8">
						<h1 className="text-center text-info">Lists</h1>
						<hr/>
						<Table arrayOfObject= {arrayOfObject} objectDeleteHandler={this.objectDeleteHandler} objectFields={objectFields} />

					</div>
				</div>

			</div>
		);
	}
}