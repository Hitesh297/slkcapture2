import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import {Switch} from 'react-router';
import App from '../components/app';
import LoginPage from '../components/loginPage';
import CreateAccount from '../components/createAccount';

export default () => (
<BrowserRouter>
<div>
	<Switch>
		<Route exact path='/' component={App} />
		<Route exact path='/login' component={LoginPage} />
		<Route exact path='/register' component={CreateAccount} />                                                                                                    
	</Switch>
	</div>
</BrowserRouter>
	);