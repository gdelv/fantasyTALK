import React from 'react';
import Header from './Header'
import Footer from './Footer'
// import Main from './Main'
import { Routes } from './routes'
import './App.css';



function App() {
  return (
    <>
      <header>
        <Header />
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
