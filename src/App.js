import React, { Component } from 'react';
import axios from 'axios'
import Main from './components/Main'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import MemberRegisterForm from './components/forms/MemberRegisterForm';

class App extends Component{


  render() {
    return (
      <div>
        <Main />     
      </div>
    );
  }

}

export default App;
