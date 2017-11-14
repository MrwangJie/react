import React,{Component} from 'react';
//import {ReactDom,Link} from 'react-dom';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom';

import "./css/header.css";

class Header extends Component{
	constructor(){
		super();
	}

	render(){
		
		return(
				<div className="header">
					<ul>
						<li><NavLink to={"/"}>待处理</NavLink></li>
						<li><NavLink to={"/Underway"}>正在处理</NavLink></li>
						<li><NavLink to={"/Finished"}>已处理</NavLink></li>
					</ul>
				</div>
		)
	}
}

export default Header
