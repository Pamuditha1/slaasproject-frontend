import React , {useState}from 'react'
import {Button} from 'reactstrap'
import {Redirect, Route, Switch, useLocation} from 'react-router-dom'
import { Link} from 'react-router-dom'
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { searchMember} from '../services/searchMemberService'
import { PaymentsTable } from '../projectTables/payments/PaymentsTable';

function ViewMembers() {

    const [searchWord, setSearchWord] = useState('')
    const [members, setMembers] = useState('')

    const handleSubmit = async () => {
            
        console.log(searchWord)
        const searching = {
            word: searchWord
        }
        await searchMember(searching)
    }

    return (
        <div className="container">  
        <h6 style={{backgroundColor: "#e95045"}} className="pl-5 pt-1 pb-1 mb-5">Payment Records</h6>       
            <div className="mt-5">
                <PaymentsTable />
            </div>
        </div>
    )
}

export default ViewMembers
