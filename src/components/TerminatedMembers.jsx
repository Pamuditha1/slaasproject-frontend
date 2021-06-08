import React, {useState} from 'react'
import {TerminatedTable} from '../projectTables/terminatedMembers/TerminatedTable'
import {Route, Switch} from 'react-router-dom'
import SendMails from './SendMails'

function TerminatedMemberships() {

    const [emailList, setemailList] = useState([])

    const setList = (l) => {
        setemailList(l)
    }

    return (
        <div>
            <h6 style={{backgroundColor: "#e95045"}} className="pl-5 pt-1 pb-1 mb-5">Terminated Members</h6>
            {/* <OutdatedTable setList={setList} /> */}

            <Switch > 
                <Route exact path="/user/terminated-list" render={(props) => 
                    <TerminatedTable setList={setList} {...props}/>
                } />                   
                <Route path="/user/terminated-list/send-emails" render={(props) => 
                    <SendMails {...props} emailList={emailList}/>
                } />
            </Switch>
        </div>
    )
}

export default TerminatedMemberships