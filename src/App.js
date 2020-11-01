import React, { Component } from 'react';
import axios from 'axios'
import Main from './components/Main'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import MyProvider from './components/StateManager';
import TestingLogin from './components/TestingLogin'
import PersonalDetailsForm from './components/personalDetails';
import RegisterMember from './components/registerMember';

class App extends Component{


  render() {
    return (
      <div className="container">
         
          <Main />
        
        
      </div>
    );
  }

}

export default App;
