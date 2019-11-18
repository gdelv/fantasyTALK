import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import './App.css';



class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    }
  }

  handleClick = () => {
   //type function for read more button to make
  }

  render() {
  return (
    <div className="App">
      <Header/>
      <Main handleClick={this.handleClick}/>
      <Footer/>
    </div>
  )};
}

export default App;
