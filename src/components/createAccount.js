import React from 'react';
import { PropTypes } from 'prop-types';
import {connect} from 'react-redux';

class CreateAccount extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			isAuthorized : false,
			Email : null,
			Password : null,
			FullName : null,
			CBUName : null,
			MobileNumber : null,
			CBUType : null,
			Designation : null,
			WorkStation : null
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		};

	onChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  	}

	onSubmit(e) {
  	e.preventDefault();
  	console.log("State :",this.state);
  	this.context.router.history.push('/');
  	}

	componentWillMount(){
	console.log("control entered componentWillMount");
	if ( ! this.props.isAuthorized) {
		this.context.router.history.push('/');
	}
}

render() {
		return (
			<div>
			<div>
				<h4>Create an account</h4>

			</div>
	<form onSubmit={this.onSubmit}>
		<div className="form-row">
    	<div className="form-group col-md-6">
      	<label htmlFor="Email">Email</label>
      	<input onChange={this.onChange} type="email" className="form-control" id="Email" placeholder="example : hites_297@yahoo.co.in"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="Password">Password</label>
      	<input onChange={this.onChange} type="password" className="form-control" id="Password" placeholder="Password"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="FullName">Full Name</label>
      	<input onChange={this.onChange} type="text" className="form-control" id="FullName" placeholder="Hitesh Patel"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="CBUName">CBU Name</label>
      	<input onChange={this.onChange} type="text" className="form-control" id="CBUName" placeholder="5/3"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="MobileNumber">Mobile Number</label>
      	<input onChange={this.onChange} type="number" className="form-control" id="MobileNumber" placeholder="8105729963"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="CBUType">CBU Type</label>
      	<input onChange={this.onChange} type="text" className="form-control" id="CBUType" placeholder=""/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="Designation">Designation</label>
      	<input onChange={this.onChange} type="text" className="form-control" id="Designation" placeholder="Engineer Software"/>
    	</div>

    	<div className="form-group col-md-6">
      	<label htmlFor="WorkStation">Workstation</label>
      	<input onChange={this.onChange} type="password" className="form-control" id="WorkStation" placeholder="SLK1-ODC-4-099"/>
    	</div>

		<div className="form-group">
    		<div className="form-check">
      			<input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      				<label className="form-check-label" htmlFor="invalidCheck2">
        				Agree to terms and conditions
      				</label>
    		</div>
  		</div>

	</div>
  <button className="btn btn-primary" type="submit">Submit</button>
	</form>
	</div>
			);
	}
}

CreateAccount.contextTypes = {
  router: PropTypes.object.isRequired
}

function mapStateToProps({isAuthorized}) {
  return {isAuthorized};
}

export default connect(mapStateToProps)(CreateAccount);