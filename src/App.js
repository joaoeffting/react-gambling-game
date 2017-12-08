import React, { Component } from 'react';
import { Header } from './components/Header/Header';
import { Bet } from './components/Bet/Bet';
import { Footer } from './components/Footer/Footer';
import styled from 'styled-components';
import './app.css';

const Container = styled.div`
  background-image: radial-gradient(#2f8e2c,#2e7423);
  background-color: #2e7423;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Bet />
        <Footer />
      </Container>
    );
  }
}

export default App;
