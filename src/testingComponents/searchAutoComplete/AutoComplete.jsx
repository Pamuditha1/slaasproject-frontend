import React, { useState } from "react";
import "./AutoComplete.css";
const Autocomplete = ({ lang }) => {

  const [searchtext, setSearchtext] = useState("");
  const [suggest, setSuggest] = useState([]);
  const [resfound, setResfound] = useState(true);

  ////

  // axios(`${api}/user/refrees/${searchWord}`)
  //           .then(function (res) {

  //               console.log("Proposer Data", res.data)
  //               console.log(typeof res.data)
  //               const receivedData = {
  //                   name: res.data.nameWinitials,
  //                   address: res.data.resAddrs,
  //                   contactNo: res.data.mobileNo,
  //                   memNo: res.data.membershipNo
  //               }
  //               setViewData(receivedData)
  //               setsearchedResults(res.data ? res.data : [])
  //               props.setProposer(receivedData)                
  //           }) 

  ////////

  const handleChange = (e) => {
    let searchval = e.target.value;
    let suggestion = [];
    if (searchval.length > 0) {
      suggestion = lang
        .sort()
        .filter((e) => e.toLowerCase().includes(searchval.toLowerCase()));
      setResfound(suggestion.length !== 0 ? true : false);
    }
    setSuggest(suggestion);
    setSearchtext(searchval);
  };

  const suggestedText = (value) => {
    console.log(value);
    setSearchtext(value);
    setSuggest([]);
  };

  const getSuggestions = () => {
    if (suggest.length === 0 && searchtext !== "" && !resfound) {
      return <p>Search Content Not Found</p>;
    }

    return (
      <ul>
        {suggest.map((item, index) => {
          return (
            <div key={index}>
              <li onClick={() => suggestedText(item)}>{item}</li>
              {index !== suggest.length - 1 && <hr />}
            </div>
          );
        })}
      </ul>
    );
  };
  return (
    <div className="searchcontainer">
      <input
        type="text"
        placeholder="Search.."
        className="search"
        value={searchtext}
        onChange={handleChange}
      />
      {getSuggestions()}
    </div>
  );
};
export default Autocomplete;
