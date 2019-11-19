import React from 'react';
import Nav from './components/Nav'
import Widget from './components/Widget'
import Footer from './components/Footer'
import { Routes } from './routes'
import './App.css';



function App() {
  return (
    <>
      <header>
        <Nav />
        <Widget/>
      </header>

      <main>
        <Routes />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
