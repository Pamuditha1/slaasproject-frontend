import React, { useEffect } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {calculateArrears} from '../../services/calculateArrears'

function TerminateModal({isModalOpen, setisModalOpen, setArr}) {

    const toggle = () => setisModalOpen(!isModalOpen);

    // const onCalculate = async () => {
    //     setArr(true)
    //     await calculateArrears()
    //     setArr(false)
    // }

    return (

        <div>
        {/* <Button color="danger" onClick={toggle}>Open</Button> */}
            <Modal isOpen={isModalOpen} toggle={toggle} >
                {/* <ModalHeader toggle={toggle} style={{color: 'black'}}>Update Membership Fee</ModalHeader> */}
                <ModalBody>
                    <div className="row ml-5">  
                        Are you sure want to calculate arrears now?
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="warning" >Calculate</Button>            
                    <Button color="dark" onClick={toggle}>Close</Button> 
                </ModalFooter>
            </Modal>
            
        </div>
    )
}

export default TerminateModal
