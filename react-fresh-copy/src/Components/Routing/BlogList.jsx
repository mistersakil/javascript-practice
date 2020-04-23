import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = props => {

    return ( 
    	<>
        <div className="card-deck">
		  <div className="card bg-warning">
		    <div className="card-body text-center">
		    	<h4 className="card-title">Card title</h4>
		      	<p className="card-text">Some text inside the first card</p>
		      	<a href="#" className="card-link btn btn-light">Read More</a>
		    </div>
		  </div>
		  <div className="card bg-warning">
		    <div className="card-body text-center">
		    	<h4 className="card-title">Card title</h4>
		      	<p className="card-text">Some text inside the first card</p>
		      	<a href="#" className="card-link btn btn-light">Read More</a>
		    </div>
		  </div>
		  <div className="card bg-warning">
		    <div className="card-body text-center">
		    	<h4 className="card-title">Card title</h4>
		      	<p className="card-text">Some text inside the first card</p>
		      	<a href="#" className="card-link btn btn-light">Read More</a>
		    </div>
		  </div>
		</div> 
		</>

    )

}

export default BlogList