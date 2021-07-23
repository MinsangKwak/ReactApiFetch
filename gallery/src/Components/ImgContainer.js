import React from 'react';
import styled from 'styled-components';

const StyledImgContainer = styled.div`
    padding:0.2rem;
    box-sizing:border-box;
    border:0.25rem solid #fefefe;
    min-height:20rem;
`

const ImgContainer = ({children}) => {
    return <StyledImgContainer>{children}</StyledImgContainer>
}

export default ImgContainer;