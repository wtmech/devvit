import React, { Component } from 'react'

import Input from '../Global/Input'

import {
  NavbarDiv,
  NavbarLeft,
  NavbarRight,
  NavbarCenter,
  NavbarLogo,
  NavbarList,
  NavbarLinks
} from './NavbarStyles';

class Navbar extends Component {
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
          <NavbarList>
            <Input />
            <Input />             
          </NavbarList>
        </NavbarRight>
      </NavbarDiv>
    )
  }
}

export default Navbar;




