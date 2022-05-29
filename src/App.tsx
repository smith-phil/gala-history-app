import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {
  return (
<BrowserRouter>

      <Header />
      <Container pageWidth={1100} flexDirection={'row'} justifyContent={'center'}>

      </Container>
      <Footer />

</BrowserRouter>
  );
}

export default App;
