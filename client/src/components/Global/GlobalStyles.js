import styled from 'styled-components';

export const DefaultInput = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => (props.margin ? props.margin : '0')} 
  border: ${props => props.border};
  border-radius: 2px;
  padding-left: 5px;
  font-size: 14px;
  line-height: 20px;
  box-sizing: border-box;
`;

export const DefaultButton = styled.button`
  width: ${props => (props.width ? props.width : '100%')}
  height: ${props => (props.height ? props.height : '30px')}
  margin: ${props => (props.margin ? props.margin : '0')}
  background: ${props => (props.background ? props.background : 'lightgrey')}
  color: ${props => (props.color ? props.color : '#000')}
  border-radius: 2px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background: ${props => props.hoverBackground};
  }
`;