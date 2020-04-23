import React from 'react'
import Jumbotron from './Jumbotron'
import BlogList from './BlogList'
import BlogDetails from './BlogDetails'
import {Link} from 'react-router-dom'
const Blog = props => {

	const {slug} = props.match.params	
	const date = new Date()
	return (
		<>
			<Jumbotron title={'Blog Page'} body={slug} />
			{ 
				!slug ? <BlogList /> : <BlogDetails />
				 
			}
		</>

	)
	
}

export default Blog
