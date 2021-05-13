import React, {useState} from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import {api} from '../../services/api'

function Proposer(props) {
    const [loading, setLoading] = useState(false)
    const [viewData, setViewData] = useState({
        name: "", memNo: "", address: "", contactNo: ""
    })

    const onChangeMemNo = async (e) => {
        setLoading(true)
        console.log('On Change Called')
        const fetchData = () => {
            axios(`${api}/user/refrees/proposer/${e.target.value}`)
            .then(function (res) {
                console.log("Proposer Data", res.data)
                console.log(typeof res.data)
                const receivedData = {
                    name: res.data.nameWinitials,
                    address: res.data.sendingAddrs,
                    contactNo: res.data.mobileNo,
                    memNo: res.data.membershipNo
                }
                setViewData(receivedData)
                props.setProposer(receivedData)
            })      
            .then(function () {
                console.log("Added Proposer Data", props.proposer)
            })      
            
        };    
        await fetchData();
        console.log("Added Proposer Data", props.proposer)
        setLoading(false)
    }


    return (
        
        <div>
            <label className="ml-5">Proposer</label>

            <div className="row form-group">
                <label className="col-4">Membership No</label>                
                <input onChange={onChangeMemNo} className="col-6 form-control" value={viewData.memNo} name="memNo"/>
                <span className="col-2">
                    { loading && 
                        <Loader
                        type="TailSpin"
                        color="blue"
                        height={30}
                        width={30}/>
                    }    
                </span>
                
            </div>
            <div className="row form-group">
                <label className="col-4">Name</label>
                <input className="col-8 form-control" value={viewData.name} name="name" />
            </div>
            <div className="row form-group">
                <label className="col-4">Address</label>
                <input className="col-8 form-control" value={viewData.address} name="address" />
            </div>
            <div className="row form-group">
                <label className="col-4">Contact No</label>
                <input className="col-8 form-control" value={viewData.contactNo} name="contactNo"/>
            </div>
        </div>
        
    )
}

export default Proposer
