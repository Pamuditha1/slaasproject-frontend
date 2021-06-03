import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css'

import Main from './components/Main'
import AutoSuggestNew from './testingComponents/AutoSuggestNew';
import Search from './testingComponents/searchAutoComplete/AutoComplete'
class App extends Component{

  render() {
    const ProgLang = ["Javascript", "Java", "Python", "Nodejs", "Reactjs"];

    return (
      <>
        <Main /> 
        {/* <AutoSuggestNew /> */}
        {/* <Autosuggest
          datalist={[ 'Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Rev.', 'Prof.' ]}
          placeholder="Name prefix"
        /> */}
        {/* <div className="container">
          <Search lang={ProgLang} />
          <h3>aaaa</h3>
          <h3>aaaa</h3>
          <h3>aaaa</h3>
          <h3>aaaa</h3>
        </div> */}
        
      </>
    );
  }
}

export default App;
