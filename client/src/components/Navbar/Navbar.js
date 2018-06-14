import React, { Component } from 'react';

import Input from '../Global/Input';
import Button from '../Global/Button';

import {
  NavbarDiv,
  NavbarLeft,
  NavbarRight,
  NavbarCenter,
  NavbarLogo,
  NavbarForm,
  NavbarItems
} from './NavbarStyles';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const loginUser = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(loginUser);
  }

  render() {
    return (
      <NavbarDiv>
        <NavbarLeft>
          <NavbarLogo>
            D
          </NavbarLogo>
        </NavbarLeft>
        <NavbarCenter />          
        <NavbarRight>
            <NavbarForm onSubmit={this.onSubmit}>
              <NavbarItems>
                <Input 
                  name="email"
                  value={this.state.email}
                  type="email"
                  height="30px"
                  placeholder="Email"
                  onChange={this.onChange}
                  />
              </NavbarItems>
              <NavbarItems>
              <Input 
                name="password"
                value={this.state.password}
                type="password"
                height="30px"
                placeholder="Password"
                onChange={this.onChange}
              />
            </NavbarItems>
            <NavbarItems>
              <Button
                buttonType="submit"
                title="Login" 
                height="30px"
                width="120px"
                margin="0 10px 0 0"
                background="#00b0ff"
                color="#fff"
                onSubmit={this.onSubmit}
              />
            </NavbarItems>
            </NavbarForm>
        </NavbarRight>
      </NavbarDiv>
    )
  }
}

export default Navbar;




