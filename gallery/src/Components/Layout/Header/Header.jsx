import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
    /* border:1px solid red; */
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:0 1.5rem;
`
const Header = ({children}) =>{
    return <HeaderStyle>{children}</HeaderStyle>
}

export default Header;