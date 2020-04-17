import React, { Component } from 'react';
import Thead from './Thead'
import Tbody from './Tbody'

const Table = props => {
	const {arrayOfObject,objectDeleteHandler,objectFields} = props 
	return (
		<table className="table table-bordered">
			<Thead objectFields={objectFields}/>
			<Tbody arrayOfObject={arrayOfObject} objectDeleteHandler={objectDeleteHandler}/>
		</table>
	)
}

export default Table

