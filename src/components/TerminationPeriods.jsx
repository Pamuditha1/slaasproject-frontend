import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {getTerminateSettings} from '../services/terminateSettings'
import {updateTPeriods} from '../services/updateTerminationPeriod'

import TerminationPeriodModal from './modals/TerminationPeriodModal'

function TerminationPeriods() {

    const [periods, setperiods] = useState([])

    const [isModalOpen, setisModalOpen] = useState(false)
    const [modalPeriod, setmodalPeriod] = useState({
        type: '',
        time: ''
    })

    
    useEffect(() => {
        // setIsLoading(true)
        async function fetchGrades() {
            const records = await getTerminateSettings()
            setperiods(records)
        }
        fetchGrades()        
        // setIsLoading(false)

    }, [])

    const viewModal = (p, name) => {
        setmodalPeriod({
            type: name,
            time: p,

        })
        setisModalOpen(true)
    }
    const setPeriodUpdate = (t) => {
        setmodalPeriod({...modalPeriod, time: t})
    }
    const updatePeriod = async () => {
        console.log(modalPeriod)
        // console.log('Updated Grade', modalPeriod)
        await updateTPeriods(modalPeriod)
        setisModalOpen(false)
        const records = await getTerminateSettings()
        setperiods(records)
    }

    // setneedToSave([...needToSave, {grade: grade, membershipFee: value}])
    // }

    return (
        <>
        <div className="row">
            <Link to="/user/settings">
                <button className="btn btn-outline-dark">Back</button>
            </Link>
        </div>
        <div className="mt-5">
            

            <center className="mt-5 mr-5">
                <ul>
                { periods.length>0 && periods.map(p => {
                    return <div className="row" key={p.period}>
                        <div className="col-12">
                            <h4 className="col-7"> Terminate Suggestion Period : <span className="ml-3">{p.period}</span> Days</h4> 
                            <button onClick={(e) => viewModal(p.period, e.target.name)} name="Terminate Suggestion Period" className="col-2 btn btn-warning mb-5">Update</button>
                        </div>
                        <div className="col-12">
                            <h4 className="col-7"> Auto Termination Period : <spam className="ml-3">{p.autoPeriod}</spam> Years</h4> 
                            <button onClick={(e) => viewModal(p.autoPeriod, e.target.name)} name="Auto Termination Period" className="col-2 btn btn-warning mb-5">Update</button>
                        </div>
                    </div>
                })
                }
                </ul>
                {/* <button onClick={openUpdate} className="btn btn-warning mb-5">Update Membership Grades</button> */}
            </center>

            {/* <UpdateGradeModal isModalOpen={isModalOpen} setisModalOpen={setisModalOpen} modalPeriod={modalPeriod} 
            setmodalPeriod={setmodalPeriod} setGradeUpdate={setGradeUpdate} updateGrade={updateGrade}/> */}
            <TerminationPeriodModal isModalOpen={isModalOpen} setisModalOpen={setisModalOpen}
            modalPeriod={modalPeriod} setPeriodUpdate={setPeriodUpdate} updatePeriod={updatePeriod}
            />
            
            
        </div>
        </>
    )
}

export default TerminationPeriods
