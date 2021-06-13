import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getCommities } from "../services/getCommitties";
import { addCommittee } from "../services/addCommittee";

function Commities() {
  const [committee, setcommittee] = useState("");
  const [key, setkey] = useState("");
  const [committies, setcommitties] = useState([]);

  useEffect(() => {
    // setIsLoading(true)
    async function fetchSections() {
      const records = await getCommities();
      setcommitties(records);
    }
    fetchSections();
    // setIsLoading(false)
  }, []);

  const addChange = (e) => {
    if (e.target.name == "key") {
      setkey(e.target.value);
    } else {
      setcommittee(e.target.value);
    }
  };
  const onAdd = async () => {
    // console.log(key)
    // console.log(committee)
    await addCommittee({
      committe: committee,
    });
    setcommitties([
      ...committies,
      {
        committe: committee,
      },
    ]);
    setkey("");
    setcommittee("");
  };

  return (
    <>
      <div className="row">
        <Link to="/user/settings">
          <button className="btn btn-outline-dark">Back</button>
        </Link>
      </div>
      <div className="mt-5">
        <div className="row ml-3">
          <div className="mr-3">Add New Committee</div>

          {/* <input onChange={addChange} value={key} name="key" className="form-control col-1" type="text" /> */}
          <input
            onChange={addChange}
            value={committee}
            name="section"
            className="form-control col-8"
            type="text"
          />
          <div className="input-group-append col-2 mb-3">
            <button onClick={onAdd} className="btn btn-outline-success">
              +
            </button>
          </div>
        </div>
        <center className="mt-5">
          <ul>
            {committies.length > 0 &&
              committies.map((g) => {
                return (
                  <h4 key={g}>
                    {/* {g.id} -  */}
                    {g.committe}
                  </h4>
                );
              })}
          </ul>
        </center>
      </div>
    </>
  );
}

export default Commities;
