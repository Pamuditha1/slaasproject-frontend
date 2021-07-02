import React, { useState } from "react";
import { Button } from "reactstrap";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { searchMember } from "../services/searchMemberService";
import { PaymentsTable } from "../projectTables/payments/PaymentsTable";

function ViewMembers() {
  const [searchWord, setSearchWord] = useState("");
  const [members, setMembers] = useState("");

  const handleSubmit = async () => {
    console.log(searchWord);
    const searching = {
      word: searchWord,
    };
    await searchMember(searching);
  };

  const headStyle = {
    textShadow: "0px 0px 1px #111111",
  };

  return (
    <div>
      <h4 className="mt-5 mb-5 text-center" style={headStyle}>
        Membership Payments
      </h4>
      <div className="mt-5">
        <PaymentsTable />
      </div>
    </div>
  );
}

export default ViewMembers;
