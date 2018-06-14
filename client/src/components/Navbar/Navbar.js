import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';

import Button from '../Global/Button';

import {
  NavbarDiv,
  NavbarLeft,
  NavbarRight,
  NavbarCenter,
  NavbarLogo,
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
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const location = window.location.pathname === '/login';
    return (
      <NavbarDiv>
        <NavbarLeft>
          <NavbarLogo>
            d
          </NavbarLogo>
        </NavbarLeft>
        <NavbarCenter />          
        <NavbarRight>
          <NavbarItems>
          <Link to={location ? '/' : '/login'}>
            <Button
              hoverBackground="#008dcc"
              color="white"
              margin="0 10px 0 0"
              background="#00b0ff"
              width="100px"
              height="40px" 
              title={window.location.pathname === '/login' ? 'Signup' : 'Login'} 
              onChange={this.onChange} /> 
              </Link>
          </NavbarItems>
        </NavbarRight>
      </NavbarDiv>
    )
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

export default connect(mapStateToProps)(Navbar);




