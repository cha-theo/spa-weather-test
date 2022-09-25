import React from 'react';
import Header  from './components/Header';
import MainView from './components/MainView';
import { Container } from 'react-bootstrap';


function App() {
  
  return (
    <>
    <Container className="text-center">
    <Header />
    <MainView />
    </Container>
    </>
  );
}

export default App;
