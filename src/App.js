import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css'
import "rsuite/lib/styles/index.less";

import Main from './components/Main'
import AutoSuggestNew from './testingComponents/AutoSuggestNew';
import Search from './testingComponents/searchAutoComplete/AutoComplete'
import{ MemberProfileWUpdate} from './components/MemberProfileWUpdate'
class App extends Component{

  render() {
    const ProgLang = ["Javascript", "Java", "Python", "Nodejs", "Reactjs"];

    return (
      <>
        <Main /> 
        {/* <MemberProfileWUpdate /> */}
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
