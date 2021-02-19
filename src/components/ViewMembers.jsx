import React , {useState}from 'react'
import {Button} from 'reactstrap'
import {Redirect, Route, Switch, useLocation} from 'react-router-dom'
import { Link} from 'react-router-dom'
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MemberPersonalTable } from '../projectTables/memberPersonal/MemberPersonalTable'
import { MemberOfficialTable } from '../projectTables/memberOfficial/MemberOfficialTable'
import { searchMember} from '../services/searchMemberService'

function ViewMembers() {

    const [searchWord, setSearchWord] = useState('')
    const [members, setMembers] = useState('')

    const handleSubmit = async () => {
            
        await searchMember(searchWord)
    }

    return (
        <div className="container">
            <div id="search" className="col-12">
                <div class="input-group mb-5">
                    <div class="form-outline">
                        <input type="search" id="searchMember" onChange={e => setSearchWord(e.target.value)} class="form-control" placeholder="Search ..."/>
                    </div>
                    <button type="submit" onClick={handleSubmit} class="btn btn-primary">
                        <FontAwesomeIcon icon={faSearch} size="1x"/>
                    </button>
                </div>
            </div>


            <div className="row ml-5">
                <Link to="/user/members/personal">
                    <Button outline color="primary">Personal</Button>
                </Link>
                <Link to="/user/members/official">
                    <Button outline color="primary">Official</Button>
                </Link>
                <Button className="col-2" outline color="primary">Professional</Button>
                <Button className="col-2" outline color="primary">Membership</Button>
                <Button className="col-2" outline color="primary">Payment</Button>
            </div>
            <div className="mt-5">
                <Switch >                    
                    <Route path="/user/members/personal" component={MemberPersonalTable} />
                    <Route path="/user/members/official" component={MemberOfficialTable} />
                    {/* <Route path="/user/members/personal" component={ViewMembers}/>
                    <Route path="/user/members/personal" exact component={UserLogin} />                    
                    <Route path="/user/members/personal" component={ Dashboard }/>                                       
                    <Route path="/user/members/personal" exact component={Dashboard} />  */}
                </Switch>
            </div>
        </div>
    )
}

export default ViewMembers
