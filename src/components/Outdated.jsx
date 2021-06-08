import React, {useState} from 'react'
import { Link, Switch, Route} from 'react-router-dom'
import OutdatedMemberships from './OutdatedMemberships'

function Outdated() {
    
    const [clicked, setclicked] = useState('')

    const onClick = (e) => {
        setclicked(e.target.name)
        console.log(clicked)
    }
    return (
        <div>
            <div className="row ml-4 mb-2">
                <Link to="/user/outdated/outdated-list">
                    <button onClick={onClick} name="outdated" className={`btn btn${clicked == 'outdated' ? '' : '-outline'}-primary ml-5`}>Outdated Members</button>
                </Link>  
                <Link to="/user/outdated/terminated">
                    <button onClick={onClick} name="terminated" className={`btn btn${clicked == 'terminated' ? '' : '-outline'}-primary ml-2`}>Terminated Members</button>
                </Link>              
            </div>
            <Switch>
                <Route default path="/user/outdated/outdated-list" component={OutdatedMemberships} />
                {/* <Route path="/user/outdated/terminated-list" component={NewMemberReceipt} />                 */}
            </Switch>
            {/* <NewMemberPaymentForm /> */}
        </div>
    )
    
}

export default Outdated
