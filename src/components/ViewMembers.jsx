import React , {useState}from 'react'
import {Button} from 'reactstrap'
import {Route, Switch} from 'react-router-dom'
import { Link} from 'react-router-dom'
import { faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {MemberAllTable} from '../projectTables/memberAllRecords/MemberAllTable'
import { MemberSearchTable } from '../projectTables/memberSearch/MemberSearchTable';
import EmailComponent from './EmailComponent'

import { searchMember} from '../services/searchMemberService'
import SendMails from './SendMails';

function ViewMembers(props) {

    const [searchWord, setSearchWord] = useState('')
    const [members, setMembers] = useState('')
    const [searchedResults, setsearchedResults] = useState([])
    const [allSelected, setallSelected] = useState(false)
    // const [emailsList, setemailsList] = useState([])

    const [emailList, setemailList] = useState([])

    const setList = (l) => {
        setemailList(l)
    }

    const handleSubmit = async () => {
            
        console.log(searchWord)
        const searching = {
            word: searchWord
        }
        const results = await searchMember(searching)
        setsearchedResults(results ? results : [])
        setMembers(results ? results : [])
        console.log(results)
        props.history.push("/user/members/search")
    }

    return (
        <div className="container">
            { props.location.pathname != "/user/members/send-emails" && <>
            <h6 style={{backgroundColor: "#e95045"}} className="pl-5 pt-1 pb-1 mb-5">Member Records</h6>
            <div className="col-12">
                <Link to="/user/members/all">
                    <Button onClick={() => setallSelected(true)} color="success mb-3 col-12">{allSelected ? "All Member Records" : "Get All Records"}</Button>
                </Link>
            </div>

            {!allSelected &&
            <div id="search" className="row">
                <div className="input-group col-12">
                    <div className="form-outline col-10">
                        <input type="search" id="searchMember" 
                        onChange={e => setSearchWord(e.target.value)} className="form-control" placeholder="Search ..."/>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary col-2">
                        <FontAwesomeIcon icon={faSearch} size="1x"/>
                    </button>
                    {searchedResults.length != 0 ?
                        <h6 className="ml-5 mt-2">{searchedResults.length} members found.</h6>
                        : <h6 className="ml-5 mt-2">No member found.</h6>
                    }                
                </div>
            </div>
            }
            </>}

            
            <div className="mt-5">
                <Switch >                    
                    {/* <Route path="/user/members/all" component={MemberAllTable} /> */}
                    <Route path="/user/members/all" render={(props) => 
                        <MemberAllTable {...props} setList={setList}/>} />
                    <Route path="/user/members/search" render={(props) => 
                        <MemberSearchTable setList={setList} members={members} {...props}/> } />
                    <Route path="/user/members/send-emails" render={(props) => 
                        // <EmailComponent {...props} emailList={emailList}/>
                        <SendMails {...props} emailList={emailList}/>
                    } />
                    {/* <Route path="/user/members/send-emails" component={EmailComponent} /> */}
                    {/* <Route exact path="/user/members/send-emails" component={EmailComponent} /> */}
                    {/* <Route path="/user/members/send-emails" render={(props) => 
                        <EmailComponent emailsList={emailsList} {...props}/>} /> */}
                </Switch>
            </div>
        </div>
    )
}

export default ViewMembers
