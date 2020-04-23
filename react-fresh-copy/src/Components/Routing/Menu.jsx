import React from 'react';
import {Link, NavLink} from 'react-router-dom'
const Menu = props => {

	const style = {
		color: '#fff',
	}
	
	return (

		<nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
		  <ul className="navbar-nav ">
		    <li className="nav-item"><NavLink className="nav-link" activeStyle={style} exact to="/">Home</NavLink></li>
		    <li className="nav-item"><NavLink className="nav-link" activeStyle={style} to="/about">About</NavLink></li>
		    <li className="nav-item"><NavLink className="nav-link" activeStyle={style} to="/contact">Contact</NavLink></li>
		    <li className="nav-item"><NavLink className="nav-link" activeStyle={style} to="/blog">Blog</NavLink></li>
		    <li className="nav-item"><NavLink className="nav-link" activeStyle={style} to="/portfolio">Portfolio</NavLink></li>
		  </ul>
		</nav>
	)
	
}

export default Menu
