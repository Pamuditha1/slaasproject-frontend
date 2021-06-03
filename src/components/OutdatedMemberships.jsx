import React, {useState} from 'react'
import {OutdatedTable} from '../projectTables/outdatedMembersTable/OutdatedTable'
import {Route, Switch} from 'react-router-dom'
import SendMails from './SendMails'

function OutdatedMemberships() {

    const [emailList, setemailList] = useState([])

    const setList = (l) => {
        setemailList(l)
    }

    return (
        <div>
            <h6 style={{backgroundColor: "#e95045"}} className="pl-5 pt-1 pb-1 mb-5">Members need to be Terminated</h6>
            {/* <OutdatedTable setList={setList} /> */}

            <Switch > 
                <Route exact path="/user/outdated-list" render={(props) => 
                    <OutdatedTable setList={setList} {...props}/>
                } />                   
                <Route path="/user/outdated-list/send-emails" render={(props) => 
                    <SendMails {...props} emailList={emailList}/>
                } />
            </Switch>
        </div>
    )
}

export default OutdatedMemberships
