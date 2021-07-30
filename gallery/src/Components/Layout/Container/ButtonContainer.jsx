import React from 'react';
import styled from 'styled-components';

const ButtonContainerStyle = styled.div`
    text-align:center;
    margin-top:1.5rem;
`

const ButtonContainer = ({children}) => {
    return(
        <>
            <ButtonContainerStyle>{children}</ButtonContainerStyle>
        </>
    )
}

export default ButtonContainer;