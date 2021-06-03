import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import {api} from '../../services/api'

function MembershipNo(props) {

    const [membershipNo, setMembershipNo] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        setLoading(true)
        const fetchData = () => {
            axios(`${api}/user/membershipNo`)
            .then(function (res) {
                const memNo = `${res.data}/${props.section}`
                setMembershipNo(memNo)
                props.setMembershipNo(memNo)
            })   
            
        };    
        fetchData();
        setLoading(false)
    }, []);

    const onChangeMemNo = (e) => {
        setMembershipNo(e.target.value)
        props.setMembershipNo(e.target.value)

    }

    return (
            <div style={{backgroundColor: 'red'}} >
                <label style={{color: 'white'}} className="col-4" htmlFor="membershipNo"><strong>Membership No</strong></label> 
                <input style={{fontWeight: '50px'}, {fontStyle: 'bold'}} className="col-4 mt-1" type="text" id="membershipNo" name="membershipNo" value={membershipNo} 
                onChange={onChangeMemNo}/>
            </div>
    )
}

export default MembershipNo
