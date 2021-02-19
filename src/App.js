import React, { Component } from 'react';
import axios from 'axios'
import Main from './components/Main'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import Example from './testingComponents/ReactToPrint';

class App extends Component{


  render() {
    return (
      <div>
        <Main />    
        {/* <Example /> */}
      </div>
    );
  }

}

export default App;
