import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import BodyInner from './Components/BodyInner';
import Header from './Components/Header';
import HeadTitle from './Components/HeadTitle';
import ButtonWrapper from './Components/ButtonWrapper';
import Button from './Components/Button';
import ImgContainer from './Components/ImgContainer';
import Img from './Components/Img';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    font-size:62.5%;
    font-weight:400;
    margin:0;
    padding:0;
    background-color: #181818;
    color: #eee;
  }

`

const App = () => {
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
          <HeadTitle>Gallery</HeadTitle>
          <ButtonWrapper>
            <Button>추가</Button>
            <Button color="red">삭제</Button>
          </ButtonWrapper>
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