import React, { useState } from "react";
import { Button } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MemberAllTable } from "../projectTables/memberAllRecords/MemberAllTable";
import { MemberSearchTable } from "../projectTables/memberSearch/MemberSearchTable";
import EmailComponent from "./EmailComponent";

import { searchMember } from "../services/searchMemberService";
import SendMails from "./SendMails";

function ViewMembers(props) {
  const [searchWord, setSearchWord] = useState("");
  const [members, setMembers] = useState("");
  const [searchedResults, setsearchedResults] = useState([]);
  const [allSelected, setallSelected] = useState(false);
  // const [emailsList, setemailsList] = useState([])

  const [emailList, setemailList] = useState([]);

  const setList = (l) => {
    setemailList(l);
  };

  const handleSubmit = async () => {
    console.log(searchWord);
    const searching = {
      word: searchWord,
    };
    const results = await searchMember(searching);
    setsearchedResults(results ? results : []);
    setMembers(results ? results : []);
    console.log(results);
    props.history.push("/user/members/search");
  };

  const headStyle = {
    textShadow: "0px 0px 1px #111111",
  };

  const buttonStyleC = {
    boxShadow: "0px 5px 10px grey",
    fontWeight: "bold",
    backgroundColor: "#002263",
    borderRadius: "40px",
  };
  const bstyle = {
    borderRadius: "30px",
    boxShadow: "0px 5px 10px grey",
  };

  return (
    <div>
      {props.location.pathname != "/user/members/send-emails" && (
        <>
          <h4 className="mt-5 mb-5 text-center" style={headStyle}>
            Member Records
          </h4>
          <div className="col-12">
            <Link to="/user/members/all">
              <Button
                style={buttonStyleC}
                onClick={() => setallSelected(true)}
                className="mb-3 col-12 btn"
              >
                {allSelected ? "All Member Records" : "Get All Records"}
              </Button>
            </Link>
          </div>

          {!allSelected && (
            <div id="search" className="row mt-3">
              <div className="input-group col-12">
                <div className="form-outline col-11">
                  <input
                    type="search"
                    id="searchMember"
                    onChange={(e) => setSearchWord(e.target.value)}
                    className="form-control"
                    placeholder="Search ..."
                    style={{ borderRadius: "30px" }}
                  />
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-secondary"
                  style={bstyle}
                >
                  <FontAwesomeIcon icon={faSearch} size="1x" />
                </button>
                {searchedResults.length != 0 ? (
                  <h6 className="ml-5 mt-2">
                    {searchedResults.length} members found.
                  </h6>
                ) : (
                  <h6 className="ml-5 mt-2">No member found.</h6>
                )}
              </div>
            </div>
          )}
        </>
      )}

      <div className="mt-5">
        <Switch>
          {/* <Route path="/user/members/all" component={MemberAllTable} /> */}
          <Route
            path="/user/members/all"
            render={(props) => <MemberAllTable {...props} setList={setList} />}
          />
          <Route
            path="/user/members/search"
            render={(props) => (
              <MemberSearchTable
                setList={setList}
                members={members}
                {...props}
              />
            )}
          />
          <Route
            path="/user/members/send-emails"
            render={(props) => (
              // <EmailComponent {...props} emailList={emailList}/>
              <SendMails {...props} emailList={emailList} />
            )}
          />
          {/* <Route path="/user/members/send-emails" component={EmailComponent} /> */}
          {/* <Route exact path="/user/members/send-emails" component={EmailComponent} /> */}
          {/* <Route path="/user/members/send-emails" render={(props) => 
                        <EmailComponent emailsList={emailsList} {...props}/>} /> */}
        </Switch>
      </div>
    </div>
  );
}

export default ViewMembers;
