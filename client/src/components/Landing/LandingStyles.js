import styled from 'styled-components';
import {DefaultButton} from '../Global/GlobalStyles'
import landingImg from '../../img/showcase.jpg'

export const LandingDiv = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  background: url(${landingImg}) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LandingSignupBox = styled.div`
  width: 384px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const LandingBoxMessage = styled.div`
  width: 100%;
  flex: 3;
  min-height: 63.5px; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.15)
`;

export const LandingBoxForm = styled.div`
  background: #edf0f3;
  width: 100%;
  flex: 4;
  display: flex;
  justify-content: center;
  overflow: auto;
`;

/////////////////
//LANDING FORM//
////////////////

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  
`;

export const FormLabel = styled.label`
  font-size: 14px;
  margin-top: ${props => props.marginTop};
`;

export const SignupButton = DefaultButton.extend`
  background: #008dcc;
  margin-bottom: 10px;
  &:hover {
    background: #00b0ff;
  }
`;

export const SignupError = styled.span`
  font-size: 10px;
  color: #d75452;
`;