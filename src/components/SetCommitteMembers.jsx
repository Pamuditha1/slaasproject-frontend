import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getCommities } from "../services/getCommitties";
import OneCommittee from "./OneCommittee";

function SetCommitteMembers() {
  const [committies, setcommitties] = useState([]);
  const [selectedCommity, setselectedCommity] = useState("");

  useEffect(() => {
    // setIsLoading(true)
    async function fetchSections() {
      const records = await getCommities();
      setcommitties(records);
    }
    fetchSections();
    // setIsLoading(false)
  }, []);

  const setCommity = (c) => {
    setselectedCommity(c);
  };

  return (
    <div>
      <div className="row">
        {committies.length > 0 &&
          committies.map((g) => {
            return (
              <div key={g.id} className="col-6 mt-2 text-center">
                <button
                  className="btn btn-primary"
                  onClick={() => setCommity(g.committe)}
                >
                  {g.committe}
                </button>
                {/* {g.id} -  */}
              </div>
            );
          })}
      </div>
      <div className="container">
        {selectedCommity && <OneCommittee comm={selectedCommity} />}
      </div>
    </div>
  );
}

export default SetCommitteMembers;
