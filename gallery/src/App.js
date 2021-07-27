import React,{useState, useEffect} from 'react';
import WebFont from 'webfontloader';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import BodyInner from './Components/BodyInner';
import Header from './Components/Header';
import HeadTitle from './Components/HeadTitle';
import ButtonWrapper from './Components/ButtonWrapper';
// import Button from './Components/Button';
import ImgContainer from './Components/ImgContainer';
import Img from './Components/Img';

const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Montserrat', sans-serif;
    font-size:62.5%;
    font-weight:400;
    margin:0;
    padding:0;
    background-color: #EBECF0;
    color: #eee;
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
      <BodyInner>
        <Header>
          <HeadTitle>Gallery Author</HeadTitle>
        </Header>
        <ImgContainer>
          <Img></Img>
        </ImgContainer>
      </BodyInner>
      <GlobalStyle/>
    </ThemeProvider>
    </>
  );
}

export default App;