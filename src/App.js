import React, { Component } from 'react';
import axios from 'axios'
import Main from './components/Main'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
// import Example from './testingComponents/ReactToPrint';
import NewRegisterForm from './components/forms/NewRegisterForm';
import {AutoSuggest} from './testingComponents/AutoSuggest.jsx'
import Example from './testingComponents/AutoSuggest.jsx'
import {TestingMemberTable} from './testingComponents/TestingMemberTable';
import UploadPreview from './testingComponents/imageUpload';
import ProfilePicUpload from './testingComponents/imageUpload2';
import CSVuploader from './components/CSVuploader';
import ViewImage from './testingComponents/ViewImage';

class App extends Component{


  render() {
    return (
      <>
        <Main />    
        {/* <ViewImage /> */}
        {/* <UploadPreview /> */}
        {/* <ProfilePicUpload/> */}
        {/* <CSVuploader /> */}
        {/* <TestingMemberTable /> */}
        {/* <MembersTable /> */}
        {/* <Example /> */}
        {/* <NewRegisterForm /> */}
        {/* <Example /> */}
      </>
    );
  }

}

export default App;
