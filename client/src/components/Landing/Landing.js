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
            Connect with developers - its free
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