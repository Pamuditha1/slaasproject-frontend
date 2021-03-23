import React , {useState}from 'react'
import {Button} from 'reactstrap'
import {Redirect, Route, Switch, useLocation} from 'react-router-dom'
import { Link} from 'react-router-dom'
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MemberPersonalTable } from '../projectTables/memberPersonal/MemberPersonalTable'
import { MemberOfficialTable } from '../projectTables/memberOfficial/MemberOfficialTable'
import {MemberAllTable} from '../projectTables/memberAllRecords/MemberAllTable'
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
            {/* <div id="search" className="col-12">
                <div class="input-group mb-5">
                    <div class="form-outline">
                        <input type="search" id="searchMember" onChange={e => setSearchWord(e.target.value)} class="form-control" placeholder="Search ..."/>
                    </div>
                    <button type="submit" onClick={handleSubmit} class="btn btn-primary">
                        <FontAwesomeIcon icon={faSearch} size="1x"/>
                    </button>
                </div>
            </div>
            <div className="col-12">
                
            </div> */}
                        
            <div className="mt-5">
                <PaymentsTable />
            </div>
        </div>
    )
}

export default ViewMembers
