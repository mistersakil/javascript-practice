import React from 'react';

const Tbody = props => {

	const rows = props.arrayOfObject.map((singleObject, index) => {
		return (
			<tr key={index}>
				{ Object.keys(singleObject).map((key, index) => (<td key={index}>{singleObject[key]}</td>)) }
				<td width="10%"><button onClick={() => props.objectDeleteHandler(index)} className="btn btn-danger">Delete</button></td>
			</tr>
		)
	})

	return (
		<tbody>{rows}</tbody>
	)
}
export default Tbody