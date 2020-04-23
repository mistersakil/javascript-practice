import React from 'react';
/* ### Stylesheet ### */
import 'bootstrap/scss/bootstrap.scss'
/* ### Custom Component ### */
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import Portfolio from './Portfolio'
/* ### Router Component ### */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Routing = props => {
		
		return (
			<Router>
				<div className="container">
					<Menu />
					<Switch>
					<Route path="/" exact render={()=><Home title="Home Page" /> } />
					<Route path="/about" render={()=><About title="About Page"></About> } /> 
					<Route path="/contact" render={()=><Contact title="Contact Page"></Contact> } /> 
					<Route path="/blog/:slug?" component={Blog} /> 
					<Route path="/portfolio" render={()=><Portfolio title="Portfolio Page"></Portfolio> } /> 
					</Switch>

				</div>
			</Router>
		)
	
}

export default Routing
