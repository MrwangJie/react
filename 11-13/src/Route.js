import React ,{ Component }from 'react';
//import {Router,Route} from 'react-dom';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import "./css/common.css";

//import ComponentHeader from './Header';
import ComponentNoHandled from './NotHandled';
import ComponentUnderway from './Underway';
import ComponentFinished from './Finished';
import ComponentDetails from './Details';

class MyRoute extends Component{
	render(){
		return(
			<Router>
			<div className="contain">
					<Route path="/" exact component={ComponentNoHandled}></Route>
					<Route path="/Underway" component={ComponentUnderway}></Route>
					<Route path="/Finished" component={ComponentFinished}></Route>
					<Route path="/Details/:uniquekey" component={ComponentDetails}></Route>
					
			</div>
			</Router>
		)
	}
}
export default MyRoute
