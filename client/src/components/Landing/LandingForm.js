import React, { Component } from 'react';
import Input from '../Global/Input';
import Button from '../Global/Button';
import {
  FormSection,
  FormLabel
} from './LandingStyles';

export default class LandingForm extends Component {
  render() {
    return (
      <FormSection>
        <FormLabel marginTop="20px">First name</FormLabel>
        <Input type="text" width="100%" height="32px" />
        <FormLabel marginTop="10px">Last name</FormLabel>
        <Input type="text" width="100%" height="32px" />
        <FormLabel marginTop="10px">Email</FormLabel>
        <Input type="text" width="100%" height="32px" />
        <FormLabel marginTop="10px">Password</FormLabel>
        <Input type="text" width="100%" height="32px" />
        <Button 
          buttonType="submit"
          title="Join now" 
          height="32px"
          margin="10px 0 0 0"
          background="#00b0ff"
          color="#fff"/>
      </FormSection>
    )
  }
}
