import React from 'react'
import { Link} from 'react-router-dom'
import { ColumnFilter } from '../common/ColumnFilter'

import {updateMemberRequest} from '../../services/updateMemberRequest'

export const COLUMNS = [
    {
        Header: 'Action',
        Cell : props => {
            const memNo = props.row.original.memNo
            const timestamp = props.row.original.timestamp

            const data = {
                memNo,
                timestamp
            }
            return (  
                <>
                {props.row.original.status == "Requested" ? 
                <button className="btn btn-outline-success" onClick={() => {updateMemberRequest(data)}}>Responded</button>
                :" Done"} 
                </>      
                
            )
        }
    },
    
    {
        Header: 'Date',
        accessor: 'timestamp',
        Filter: ColumnFilter,
    },
    {
        Header: 'Membership No',
        accessor: 'memNo',
        Filter: ColumnFilter
    },
    {
        Header: 'Name',
        accessor: 'name',
        Filter: ColumnFilter
    },
    {
        Header: 'Status',
        accessor: 'status',
        Filter: ColumnFilter
    },
    {
        Header: 'Request',
        accessor: 'request',
        Filter: ColumnFilter,
        sortable : false ,
        filterable : false,
        style: {
            width: '50%'
        }
    },
    

]
