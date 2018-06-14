import React, { Component } from 'react';
import LandingForm from './LandingForm';
import {
  LandingDiv,
  LandingSignupBox,
  LandingBoxMessage,
  LandingBoxForm
} from './LandingStyles'

class Landing extends Component {
  render() {
    return (
      <LandingDiv>
        <LandingSignupBox>
          <LandingBoxMessage>
            {this.props.history.location.pathname === '/login' ? 'Login to devvit' : 'Connect with developers - its free'}
          </LandingBoxMessage>
          <LandingBoxForm>
            <LandingForm />
          </LandingBoxForm>
        </LandingSignupBox>
      </LandingDiv>
    )
  }
}

export default Landing;