import React, { useState, useEffect } from "react";
import ArrearsCalculateModal from "./modals/ArrearsCalculateModal";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { getLastArrearsUpdate } from "../services/getLastArrearsUpdate";

function Arrears({ setArr }) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [lastDate, setlastDate] = useState("");

  const toggle = () => setisModalOpen(!isModalOpen);

  useEffect(() => {
    let date;
    let time;
    async function fetchDates() {
      let Ldate = await getLastArrearsUpdate();
      date = new Date(Ldate).toLocaleDateString();
      time = new Date(Ldate).toLocaleTimeString();
      setlastDate(`${date} - ${time}`);
    }
    fetchDates();
  }, []);

  return (
    <div className="row">
      <div className="col-12 mb-3">
        Last Arrears Calculate And Updated : <strong>{lastDate}</strong>
      </div>
      <div className="col-3 ">This may take some time ...</div>
      <div className="col-2">
        <Button onClick={toggle} color="primary">
          Proceed
        </Button>
      </div>

      <ArrearsCalculateModal
        isModalOpen={isModalOpen}
        setisModalOpen={setisModalOpen}
        setArr={setArr}
      />
    </div>
  );
}

export default Arrears;
