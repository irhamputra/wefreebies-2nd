import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Categories from "../pages/Categories";

const Routes = () => (
		<BrowserRouter>
				<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/c/:slug" component={Categories}/>
						<Route path="/about" component={About}/>
						<Route path="*" component={NotFound}/>
				</Switch>
		</BrowserRouter>
);

export default Routes;
