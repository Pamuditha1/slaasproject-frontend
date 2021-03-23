import React, { Component } from 'react';
import axios from 'axios'
import Main from './components/Main'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
// import Example from './testingComponents/ReactToPrint';
import NewRegisterForm from './components/forms/NewRegisterForm';
import {AutoSuggest} from './testingComponents/AutoSuggest.jsx'
import Example from './testingComponents/AutoSuggest.jsx'

class App extends Component{


  render() {
    return (
      <div>
        <Main />    
        {/* <Example /> */}
        {/* <NewRegisterForm /> */}
        {/* <Example /> */}
      </div>
    );
  }

}

export default App;
