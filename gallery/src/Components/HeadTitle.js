import React from 'react';
import styled from 'styled-components';

const StyledHeadTitle = styled.h2`
    color:#fff;
    font-size:2.25rem;
`

const HeadTitle = ({children}) => {
    return <StyledHeadTitle>{children}</StyledHeadTitle>
}


export default HeadTitle;