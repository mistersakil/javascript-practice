import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Blog from './Blog'
import Portfolio from './Portfolio'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Routing = props => {
		
		return (
			<Router>
				<div className="container">
					<Menu />
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} /> 
					<Route path="/contact" component={Contact} /> 
					<Route path="/blog" component={Blog} /> 
					<Route path="/portfolio" component={Portfolio} /> 
					

				</div>
			</Router>
		)
	
}

export default Routing
