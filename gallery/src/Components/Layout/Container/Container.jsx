import React from 'react';
import styled from 'styled-components';

const ContainerStyle = styled.div`
    /* padding:1rem; */

`

const Container = ({children}) => {
    return <ContainerStyle>{children}</ContainerStyle>
}

export default Container;