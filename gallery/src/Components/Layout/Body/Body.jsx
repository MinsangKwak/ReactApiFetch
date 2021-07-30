import React from 'react';
import styled from 'styled-components';

const BodyStyle = styled.div`
    /* font-family: 'Montserrat', sans-serif;
    font-size:62.5%;
    font-weight:400;
    margin:0;
    padding:0;
    background-color: #EBECF0;
    color: #eee; */
`

const Body = ({children}) => {
    return <BodyStyle>{children}</BodyStyle>
}

export default Body;