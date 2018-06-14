import styled from 'styled-components';
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
  height: 460px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const LandingBoxMessage = styled.div`
  width: 100%;
  flex: 1;
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
`;

/////////////////
//LANDING FORM//
////////////////

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  
`;

export const FormLabel = styled.label`
  font-size: 14px;
  margin-top: ${props => props.marginTop};
`;