import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import Table from './Table'

export default class Tables extends Component {
	state = {
		arrayOfObject : [
			{product: 'Table', price: 2000, color: 'Red', brand: 'Partex', warrenty: '5 Years' },
			{product: 'Chair', price: 3000, color: 'Green', brand: 'RFL', warrenty: '5 Years' },
			{product: 'Almira', price: 4000, color: 'Blue', brand: 'Otobi', warrenty: '5 Years' },
			{product: 'Sofa', price: 4000, color: 'White', brand: 'Hatil', warrenty: '5 Years' },
			{product: 'Tea Table', price: 4000, color: 'Pink', brand: 'Otobi', warrenty: '5 Years' },
			{product: 'Freeze', price: 50000, color: 'Purple', brand: 'Singer', warrenty: '5 Years' },
		],
		objectFields: ['Product','Price','Color','Brand','Warrenty','Action'],
		persons : [
			{name: 'sakil', location: 'dhaka', age: 30},
			{name: 'rasel', location: 'doha', age: 33},
			{name: 'jolil', location: 'doha', age: 38},
		],
		personFields: ['Person Name','Location','Age','Action']
	}



	objectDeleteHandler = (index) => {
		const confirm = window.confirm('Are you sure?')	
		if(confirm){
			const personsFiltered = this.state.arrayOfObject.filter((person, personIndex) => {
				return personIndex != index
			})
			this.setState({arrayOfObject:personsFiltered})
		}else{
			alert('Delete Failed!!!!')
		}



	}
	render() {
		const {arrayOfObject,objectFields, persons, personFields} = this.state
		return (
			<div className="container">
				<h1 className="text-center">=========== Products ================</h1>
				<Table arrayOfObject= {arrayOfObject} objectDeleteHandler={this.objectDeleteHandler} objectFields={objectFields} />
				<h1 className="text-center">============ Persons ================ </h1>
				<Table arrayOfObject= {persons} objectDeleteHandler={this.objectDeleteHandler} objectFields={personFields} />
			</div>
		);
	}
}