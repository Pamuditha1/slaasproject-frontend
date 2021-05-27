import React from 'react'
import {OutdatedTable} from '../projectTables/outdatedMembersTable/OutdatedTable'

function OutdatedMemberships() {
    return (
        <div>
            <h6 style={{backgroundColor: "#e95045"}} className="pl-5 pt-1 pb-1 mb-5">Members need to be Terminated</h6>
            <OutdatedTable />
        </div>
    )
}

export default OutdatedMemberships
