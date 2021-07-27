import React from 'react';
import styled from 'styled-components';

const StyledButtonWrapper = styled.div`
    text-align:center;
`

const ButtonWrapper = ({children}) => {
    return <StyledButtonWrapper>{children}</StyledButtonWrapper>
}

export default ButtonWrapper;