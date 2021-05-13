import React from 'react'
import { Link} from 'react-router-dom'
import { ColumnFilter } from '../common/ColumnFilter'
import {terminateMember} from '../../services/terminateMemberService'



export const COLUMNS = [
    {
        Header: 'Profile',
        Cell : props => {
            const memberID = props.row.original.membershipNo ? props.row.original.membershipNo : props.row.original.nic
            return (
                <Link to={`/user/member/profile/${memberID}`}>            
                <button className="btn btn-outline-primary" onClick={() => {console.log('view button clicked', memberID )}}>View</button>
                </Link>
            )
        }
    },
    {
        Header: 'Termination',
        Cell : props => {
            const memberID = props.row.original.membershipNo
            const status = props.row.original.status

            async function terminateOnClick(memberID){
                console.log(memberID)
                await terminateMember(memberID)
                return
            }

            return (          
                <button className="btn btn-outline-danger" disabled={(status == "Terminated") ? true : false} 
                onClick={() => terminateOnClick(memberID)}>{(status == "Terminated") ? 'Terminated' : 'Terminate'}</button>
            )
        }
    },
    {
        Header: 'Title',
        accessor: 'title',
        Filter: ColumnFilter ,
        sortable : false ,
        filterable : false
    },
    {
        Header: 'Name with Initials',
        accessor: 'nameWinitials',
        Filter: ColumnFilter
    },
    {
        Header: 'Membership No',
        accessor: 'membershipNo',
        Filter: ColumnFilter
    },
    {
        Header: 'Member Status',
        accessor: 'status',
        Filter: ColumnFilter
    },
    {
        Header: 'Last Payment for Year',
        accessor: 'lastPaidForYear',
        Filter: ColumnFilter
    },
    {
        Header: 'Arrears',
        accessor: 'arrearsConti',
        Filter: ColumnFilter
    },
    {
        Header: 'Last Payment Date',
        accessor: 'memPaidLast',
        Filter: ColumnFilter
    },
    {
        Header: 'Section',
        accessor: 'section',
        Filter: ColumnFilter
    },
    {
        Header: 'Grade of Membership',
        accessor: 'gradeOfMembership',
        Filter: ColumnFilter
    },    
    {
        Header: 'Personal Email',
        accessor: 'email',
        Filter: ColumnFilter
    },
    {
        Header: 'NIC',
        accessor: 'nic',
        Filter: ColumnFilter,
    },
    {
        Header: 'Mobile No',
        accessor: 'mobileNo',
        Filter: ColumnFilter
    },
    {
        Header: 'Residence Address',
        accessor: 'resAddrs',
        Filter: ColumnFilter
    }

]