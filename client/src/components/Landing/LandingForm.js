import React, { Component } from 'react';
import axios from 'axios';
import Input from '../Global/Input';
// import SignupButton from '../Global/Button';
import {
  FormSection,
  FormLabel,
  SignupButton,
  SignupError
} from './LandingStyles';

class LandingForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password:'',
      password2: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios.post('/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({errors: err.response.data}))
  }

  render() {
    return (
      <FormSection onSubmit={this.onSubmit}>
        <FormLabel marginTop="20px">First name</FormLabel>
        <Input
          name="firstName"
          type="text"
          border={this.state.errors.firstName ? '1px red solid' : null}          
          width="100%"
          height="32px"
          margin="8px 0 4px" 
          value={this.state.firstName}
          onChange={this.onChange}
        />
        {this.state.errors.firstName ? <SignupError>{this.state.errors.firstName}</SignupError> : null}
        <FormLabel marginTop="10px">Last name</FormLabel>
        <Input
          name="lastName"
          type="text"
          border={this.state.errors.lastName ? '1px red solid' : null}                    
          width="100%"
          height="32px"
          margin="8px 0 4px"
          value={this.state.lastName}
          onChange={this.onChange}          
        />
        {this.state.errors.lastName ? <SignupError>{this.state.errors.lastName}</SignupError> : null}
        <FormLabel marginTop="10px">Email</FormLabel>
        <Input
          name="email"
          type="email"
          border={this.state.errors.email ? '1px red solid' : null}                    
          width="100%" 
          height="32px"
          margin="8px 0 4px"
          value={this.state.email}
          onChange={this.onChange}          
        />
        {this.state.errors.email ? <SignupError>{this.state.errors.email}</SignupError> : null}        
        <span style={{fontSize: '10px'}}>This site uses gravatar for your profile image, so use a gravatar email</span>
        <FormLabel marginTop="10px">Password</FormLabel>
        <Input
          border={this.state.errors.password ? '1px red solid' : null}
          name="password"
          type="password"
          width="100%"
          height="32px"
          margin="8px 0 4px"
          value={this.state.password}
          onChange={this.onChange}          
        />
        {this.state.errors.password ? <SignupError>{this.state.errors.password}</SignupError> : null}
        <FormLabel marginTop="10px">Confirm password</FormLabel>
        <Input
          name="password2"
          type="password"
          border={this.state.errors.password2 ? '1px red solid' : null}                    
          width="100%"
          height="32px"
          margin="8px 0 4px"
          value={this.state.password2}
          onChange={this.onChange}          
        />
        {this.state.errors.password2 ? <SignupError>{this.state.errors.password2}</SignupError> : null}        
        <SignupButton 
          buttonType="submit" 
          margin="10px 0 0 0"
          color="#fff">
          Join now
        </SignupButton>
      </FormSection>
    )
  }
}

export default LandingForm;
