import React from 'react';
import styled from 'styled-components';

const StyledBodyInner = styled.div`
    /* height:100vh; */
    /* display:flex;
    align-items: center;
    justify-content: center; */
    /* width:54rem;
    margin:0 auto; */
`

function BodyInner ({children}){
    return(
        <div>
            <StyledBodyInner>
                {children}
            </StyledBodyInner>
        </div>
    )
}

export default BodyInner;