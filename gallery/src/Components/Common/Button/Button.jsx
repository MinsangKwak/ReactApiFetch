import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const ButtonStyle = styled.button`

  /* 공통 스타일 */
  display: inline-flex;
  text-align:center;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  padding:0 0.85rem;
  box-shadow: -5px -5px 20px #FFF, 5px 5px 20px #BABECC;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /* 색상 */
  ${props => {
    const selected = props.theme.palette[props.color];
    return css`
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}

    & ~ &{
        margin-left:0.5rem;
    }

`;

const Button = ({ children, ...rest }) => {
  return <ButtonStyle {...rest}>{children}</ButtonStyle>;
}

Button.defaultProps = {
  color: 'blue'
};


export default Button;