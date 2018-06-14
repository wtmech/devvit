import styled from 'styled-components';

export const NavbarDiv = styled.div`
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex; 
`;

export const NavbarLeft = styled.div`
  flex: 1;
  height: 100%;
`;

export const NavbarCenter = NavbarLeft.extend`
  flex: 5;
  border-bottom: 1px solid rgba(0,0,0,0.15)
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const NavbarRight = NavbarLeft.extend`
  flex: 4;
  border-bottom: 1px solid rgba(0,0,0,0.15)
  @media (max-width: 1000px) {
    flex: 5;
  }
`;

export const NavbarLogo = styled.div`
  width: 60px;
  height: 100%;
  background: #00b0ff;
  color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
`;

export const NavbarForm = styled.form`
  height: 100%;
  color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  @media (max-width: 1000px) {
    justify-content: center
    margin-left: 10px;
  }
`;

export const NavbarItems = styled.div`
  margin-left: 2px;
  @media (max-width: 1000px) {
    margin-left: 10px;
  }
`;