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
  
`;

export const NavbarRight = NavbarLeft.extend`
  flex: 3;
  border-bottom: 1px solid rgba(0,0,0,0.15)
  
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

export const NavbarList = styled.ul`
  color: #000;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavbarLinks = styled.li`
  list-style: none;
  padding-left: 25px;
`;