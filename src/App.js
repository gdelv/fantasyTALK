import React from 'react';
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Routes } from './routes'
import './App.css';



function App() {
  return (
    <>
      <header>
        <Nav />
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
