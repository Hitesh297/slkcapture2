import React from 'react';
import { login } from '../actions/authActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { PropTypes } from 'prop-types';
import { Router } from 'react-router';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputEmail : '',
			inputPassword : '',
			isAuthorized : null,
			errorMessage : ''
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	};

	onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  	}

  	onSubmit(e) {
  		e.preventDefault();
  		this.props.login(this.state);
  	}

  	componentWillReceiveProps(nextProps)
  	{
  		this.setState({isAuthorized : nextProps.isAuthorized});
  		if (nextProps.isAuthorized) 
  			{this.context.router.history.push('/');}
  		else 
  			{this.setState({isAuthorized : nextProps.isAuthorized})}
  	}

 validateForm() {
    return this.state.inputEmail.length > 0 && this.state.inputPassword.length > 0;
  }

		render() {
			 const isLoggedIn = this.state.isAuthorized;
			return (
				<form className="form-signin" onSubmit={this.onSubmit} > 

				<div className ="text-center mb-4">
				<img className="mb-4" src={'https://cdn2.iconfinder.com/data/icons/images-and-video/36/27_camera_photo_video_capture_device_focus_flash_photography-512.png'} alt="" width="150" height="150"/>
				<h1 className="h3 mb-3 font-weight-normal">SLK Capture</h1>
				</div>


				<div className="form-label-group">				
				<input onChange={this.onChange} 
				id="inputEmail" 
				className="form-control" 
				type="email" 
				placeholder="Email address" 
				autoFocus
				required
				/>
				<label htmlFor="inputEmail">Email address</label>
				</div> 


				<div className="form-label-group">
        		<input onChange={this.onChange} 
        		type="password" 
        		id="inputPassword" 
        		className="form-control" 
        		placeholder="Password" />
        		<label htmlFor="inputPassword">Password </label>
      			</div>


      			<div className="checkbox mb-3">
      			<label>
          		<input type="checkbox" value="remember-me"/> Remember me
          		</label>
      			</div>


      			<button className="btn btn-lg btn-primary btn-block" type="submit" disabled={!this.validateForm()}>Sign in</button>
      			  <div className="text-center mt-3">
      			  Dont have an account?
      			  <Link to="/register" className="login-help">  Register Now</Link>
      			  </div>

      			<p className="mt-5 mb-3 text-muted text-center">&copy; 2018-2019</p>

				
				</form>
				

				);
			}
		}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps({isAuthorized}) {
  return {isAuthorized};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({login},dispatch);
}
		

	export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);