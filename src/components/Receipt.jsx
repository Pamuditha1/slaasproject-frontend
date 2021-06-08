import React, {useState} from 'react'
import { Link, Switch, Route} from 'react-router-dom'

import NewMemberPaymentForm from './forms/NewMemberPaymentForm'
import MemberReceipt from './MemberReceipt'
import NewMemberReceipt from './NewMemberReceipt'
import SendMails from './SendMails'

function Receipt() {

    const [clicked, setclicked] = useState('')

    const onClick = (e) => {
        setclicked(e.target.name)
        console.log(clicked)
    }
    return (
        <div>
            <div className="row ml-4 mb-2">
                <Link to="/user/receipt/member">
                    <button onClick={onClick} name="member" className={`btn btn${clicked == 'member' ? '' : '-outline'}-primary ml-5`}>Existing Member</button>
                </Link>  
                <Link to="/user/receipt/new">
                    <button onClick={onClick} name="new" className={`btn btn${clicked == 'new' ? '' : '-outline'}-primary ml-2`}>New Member</button>
                </Link>              
            </div>
            <Switch>
                <Route default path="/user/receipt/member" component={MemberReceipt} />
                <Route path="/user/receipt/new" component={NewMemberReceipt} />                
            </Switch>
            {/* <NewMemberPaymentForm /> */}
        </div>
    )
}

export default Receipt
