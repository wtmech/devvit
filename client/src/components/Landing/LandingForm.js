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
    const {errors} = this.state;

    return (
      <FormSection noValidate onSubmit={this.onSubmit}>
        <FormLabel marginTop="20px">First name</FormLabel>
        <Input
          name="firstName"
          type="text"
          border={errors.firstName ? '1px #d75452 solid' : '1px solid #dedede'}       
          width="100%"
          height="32px"
          margin="8px 0 4px" 
          value={this.state.firstName}
          onChange={this.onChange}
        />
        {errors.firstName && <SignupError>{errors.firstName}</SignupError>}
        <FormLabel marginTop="10px">Last name</FormLabel>
        <Input
          name="lastName"
          type="text"
          border={errors.lastName ? '1px #d75452 solid' : '1px solid #dedede'}                    
          width="100%"
          height="32px"
          margin="8px 0 4px"
          value={this.state.lastName}
          onChange={this.onChange}          
        />
        {errors.lastName && <SignupError>{errors.lastName}</SignupError>}
        <FormLabel marginTop="10px">Email</FormLabel>
        <Input
          name="email"
          type="email"
          border={errors.email ? '1px #d75452 solid' : '1px solid #dedede'}                    
          width="100%" 
          height="32px"
          margin="8px 0 4px"
          value={this.state.email}
          onChange={this.onChange}          
        />
        {errors.email && <SignupError>{errors.email}</SignupError>}        
        <span style={{fontSize: '10px'}}>This site uses gravatar for your profile image, so use a gravatar email</span>
        <FormLabel marginTop="10px">Password</FormLabel>
        <Input
          border={errors.password ? '1px #d75452 solid' : '1px solid #dedede'}
          name="password"
          type="password"
          width="100%"
          height="32px"
          margin="8px 0 4px"
          value={this.state.password}
          onChange={this.onChange}          
        />
        {errors.password && <SignupError>{errors.password}</SignupError>}
        <FormLabel marginTop="10px">Confirm password</FormLabel>
        <Input
          name="password2"
          type="password"
          border={errors.password2 ? '1px #d75452 solid' : '1px solid #dedede'}                    
          width="100%"
          height="32px"
          margin="8px 0 4px"
          value={this.state.password2}
          onChange={this.onChange}          
        />
        {errors.password2 && <SignupError>{errors.password2}</SignupError>}        
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
