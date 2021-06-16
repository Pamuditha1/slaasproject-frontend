import React, { useState, useEffect } from "react";

import OneCommityHistory from "./OneCommityHistory";
import { getCommities } from "../services/getCommitties";

function FomerCommittees() {
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
        <div className="col-12 mt-5">
          <h5>Former Committees</h5>
        </div>
        {committies.length > 0 &&
          committies.map((g) => {
            return (
              <div key={g.id} className="mr-3 ml-3 mt-3 text-center">
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
        {selectedCommity && <OneCommityHistory comm={selectedCommity} />}
      </div>
    </div>
  );
}

export default FomerCommittees;
