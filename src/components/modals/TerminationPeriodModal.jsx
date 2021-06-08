import React, {useState, useEffect} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TerminationPeriodModal = ({isModalOpen, setisModalOpen, modalPeriod, setPeriodUpdate, updatePeriod}) => {

    // const [gr, setgr] = useState({})

    // useEffect(() => {
    //     setgr(modalGrade)
    // }, [modalGrade])
    
    const toggle = () => setisModalOpen(!isModalOpen);

    return (

        <div>
        {/* <Button color="danger" onClick={toggle}>Open</Button> */}
            <Modal isOpen={isModalOpen} toggle={toggle} >
                <ModalHeader toggle={toggle} style={{color: 'black'}}>Update Termination Periods</ModalHeader>
                <ModalBody>
                    <div className="row">  
                        <div className="col-6">
                            <p>{modalPeriod.type}</p> 
                        </div>        
                        <div className="col-3">
                            <input  
                            onChange={(e) => setPeriodUpdate(e.target.value)} 
                            name="key" 
                            value={modalPeriod.time} className="form-control" type="text" />
                            <center>
                            <small >{modalPeriod.type == 'Terminate Suggestion Period' ? "Days" : "Years"}</small>
                            </center>
                            
                        </div>  
                        <div className="col-2">
                            <button onClick={() => updatePeriod()}  className="btn btn-outline-primary">Save</button>
                        </div>            
                        {/* <div className="mr-3"> Grade</div> */}
                        {/* Membership Fee<input  name="grade" value={modalGrade.grade} className="form-control col-4" type="text" readonly="true"/> */}
                        {/* <div className="mr-3 ml-3">Membership Fee</div>  */}
                        {/* <input name="key" value={modalGrade.membershipFee} className="form-control col-3" type="text" /> */}
                        {/* {saveButton &&
                            <div className="input-group-append col-2 mb-3">
                                <button  className="btn btn-outline-primary">Save</button>
                            </div>
                        }                         */}
                    </div>

                </ModalBody>
                {/* <ModalFooter>                   

                    <Button color="danger" onClick={toggle}>Close</Button> 
                </ModalFooter> */}
            </Modal>
        </div>
    )
}

export default TerminationPeriodModal
