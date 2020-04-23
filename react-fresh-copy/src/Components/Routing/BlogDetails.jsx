import React from 'react'
import {Link} from 'react-router-dom'

const BlogDetails = props => {
	const date = new Date()
	return (
		<>
		
		<div className="panel panel-success">
		  	<div className="panel-heading">Blog Title</div>
		  	<div className="panel-body">
		  		You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.
		  		You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.

			</div>
		  	<div className="panel-footer">Posted on: {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}, Posted by: Sakil</div>
		</div>

		</>

	)
	
}

export default BlogDetails
