import React from 'react';
import styled from 'styled-components';

const StyledHeadTitle = styled.h2`
    color:#BABECC;
    font-size:2.25rem;
    margin:1rem 0;
    padding:0;
`

const HeadTitle = ({children}) => {
    return <StyledHeadTitle>{children}</StyledHeadTitle>
}


export default HeadTitle;