import React,{useState, useEffect} from 'react';
import WebFont from 'webfontloader';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Components/Layout/Header/Header';
import HeaderTitle from './Components/Layout/Header/HeaderTitle';
import Body from './Components/Layout/Body/Body';
import Container from './Components/Layout/Container/Container';
import Lists from './Components/Common/Lists/Lists';

const GlobalStyle = createGlobalStyle`

  html,body{
    height:100vh;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    font-size:62.5%;
    font-weight:400;
    margin:0;
    padding:0;
    background-color: #EBECF0;
    color: #eee;
    display:flex;
    align-items: center;
    justify-content: center;
  }

`

const App = () => {
  
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Montserrat']
      }
    });
  }, []);

  return (
    <>
      <ThemeProvider
        theme={{
          palette: {
            blue: '#228be6',
            gray: '#495057',
            red: '#ff3300'
          }
        }}
      >
        <Body>
          <Container>
            <Header>
              <HeaderTitle>Gallery Author</HeaderTitle>
            </Header>
            <Lists/>
          </Container>
        </Body>
      <GlobalStyle/>
  </ThemeProvider>
    </>
  );
}

export default App;