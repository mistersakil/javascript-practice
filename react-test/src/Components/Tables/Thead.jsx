import React from 'react';

const Thead = props => {
	const objectFields = props.objectFields.map((field,index) =>{
		return <th key={index}>{field}</th>
	})
	return (
		<thead>
			<tr>
				{objectFields}
			</tr>
		</thead>
	)
}
export default Thead