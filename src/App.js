import React, { Component } from 'react';
import axios from 'axios'
import Main from './components/Main'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import MyProvider from './components/StateManager';
import TestingLogin from './components/TestingLogin'
import PersonalDetailsForm from './components/personalDetails';
import RegisterMember from './components/registerMember';
import MemPersonalForm from './components/forms/MemPersonalForm';
import MemberProfileForm from './components/forms/MemberProfessionalForm'
import MemberOfficeForm from './components/forms/MemberOfficeForm';
import RegisterUserForm from './components/forms/RegisterUserForm';
import OfficeForm from './components/forms/OfficeForm';
import TestingMain from './components/forms/TestingMain';
import { BrowserRouter } from 'react-router-dom';
import TestingForm3 from './components/forms/stepsMethod/TestingForm3'
import MemberRegisterForm from './components/forms/MemberRegisterForm';
import MemberProfessionalForm from './components/forms/MemberProfessionalForm';

class App extends Component{


  render() {
    return (
      <div className="container">
        <MemberProfessionalForm />     
      </div>
    );
  }

}

export default App;
