import React, {useState, useEffect} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const UpdateGradeModal = ({isModalOpen, setisModalOpen, modalGrade, setmodalGrade, setGradeUpdate, updateGrade}) => {

    // const [gr, setgr] = useState({})

    // useEffect(() => {
    //     setgr(modalGrade)
    // }, [modalGrade])
    
    const toggle = () => setisModalOpen(!isModalOpen);

    return (

        <div>
        {/* <Button color="danger" onClick={toggle}>Open</Button> */}
            <Modal isOpen={isModalOpen} toggle={toggle} >
                <ModalHeader toggle={toggle} style={{color: 'black'}}>Update Membership Fee</ModalHeader>
                <ModalBody>
                    <div className="row">  
                        <div className="col-4">
                            Grade<input  name="grade" value={modalGrade.grade} className="form-control" type="text" readonly="true"/>
                        </div>        
                        <div className="col-4">
                            Membership Fee<input  onChange={(e) => setGradeUpdate(e.target.value)} name="key" value={modalGrade.membershipFee} className="form-control" type="text" />
                        </div>  
                        <div className="col-2">
                            <button onClick={() => updateGrade()}  className="btn btn-outline-primary">Save</button>
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

export default UpdateGradeModal
