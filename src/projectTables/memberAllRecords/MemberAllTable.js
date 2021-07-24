import React, {useMemo, useState, useEffect} from 'react'
import {useTable, useSortBy, useGlobalFilter, useFilters, usePagination, useRowSelect} from 'react-table'
import Loader from 'react-loader-spinner'
import { Table, Button } from 'reactstrap';
import { Link, Redirect, Route, Switch} from 'react-router-dom'
import {useSticky} from 'react-table-sticky'

import {COLUMNS} from './allColumns'
import Pagination from '../common/Pagination'
import { GlobalFilter } from '../common/GlobalFilter';
import {Checkbox} from '../common/Checkbox'

import EmailComponent from '../../components/EmailComponent';

import { useExportData } from "react-table-plugins";
import ExportingButtons from '../common/ExportingButtons';
import getExportFileBlob from '../common/exportFunction'

import {getAllMembers} from '../../services/getAllMemberRecords'

export const MemberAllTable = (props) => {
    const [allMembers, setallMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showFilters, setshowFilters] = useState(false)

    useEffect(() => {
        // async function fetchMembers() {
        //     setIsLoading(true)
        //     const records = await getAllMembers()
        //     setallMembers(records)
        //     setIsLoading(false)
        // }
        // fetchMembers()
        async function fetchMembers() {
            setIsLoading(true)
            const records = await getAllMembers()
            let applicants = records.filter(r => {
                if(r.status == "Member") return true
            })
            setallMembers(applicants)
            setIsLoading(false)
        }
        fetchMembers()
    }, []);

    const columns = useMemo(() => COLUMNS, [])
    const data = allMembers


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        allColumns,
        getToggleHideAllColumnsProps,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setGlobalFilter,
        prepareRow,
        selectedFlatRows,
        exportData
    } = useTable({
            columns,
            data,
            getExportFileBlob
        },
        useSticky,
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination,
        useExportData,
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => {
                return[{
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps}) => (
                        <Checkbox {...getToggleAllRowsSelectedProps()}/>
                    ),
                    Cell: ({row}) => (
                        <Checkbox {...row.getToggleRowSelectedProps()}/>
                    )
                }
                ,...columns]
            })
        }
    )

    const {globalFilter, pageIndex, pageSize} = state
    console.log(selectedFlatRows[0] && selectedFlatRows[0].original)
    
    const [selectedMails, setselectedMails] = useState([])
    const saveMails = () => {
        // setselectedMails(selectedFlatRows)
        // props.setMails(selectedFlatRows)
        // props.history.push({
        //     pathname: ('/user/members/send-emails', selectedFlatRows)
        // });
        setselectedMails(selectedFlatRows)
        let list = []
        selectedFlatRows.forEach(r => {
            list.push(r.original.email)
        });
        console.log(selectedFlatRows[0].original)
        props.setList(list)
        // props.history.push({
        //     pathname: '/user/members/send-emails',
        //     state: {
        //         emailsList: selectedMails
        //     }
        // })
        // props.history.push("/user/members/send-emails")
    }
    const bstyle = {
        borderRadius: '30px',
        boxShadow: "0px 5px 10px grey",
    }
    return (
        <div>
            {
                isLoading ? 
                <>
                    <Loader style={{marginLeft : "35%"}}
                        type="ThreeDots"
                        color="#8f2032"
                        height={300}
                        width={300}
                    /> 
                    <h2>Loading member records. This may take a while...</h2>
                </>:
                
                <div>
                    {/* <p className="alert alert-info" style={{borderRadius: '30px'}}> {data.length} records.
                        <span><Button outline color="dark" className="ml-5">Filter Records</Button></span>
                    </p> */}
                    <p className="ml-5"> {data.length} member records.
                        <span><Button style={bstyle} onClick={() => setshowFilters(!showFilters)} outline color="dark" className="ml-5">Filter Records</Button></span>
                    </p>
                    {showFilters && <div className="row ml-5">
                        <div className="col-12">
                            <input type="checkbox" {...getToggleHideAllColumnsProps()} />All Columns
                        </div>
                        <>{
                            allColumns.map(column => (
                                <div key={column.id} className="col-3" style={{float: "left"}}>
                                    <label key={column.id}>
                                        <input type="checkbox" {...column.getToggleHiddenProps()}/>
                                        <>{column.Header}</>
                                    </label>
                                </div>
                            ))
                            
                        }</>
                    </div>}
                    {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/> */}
                    
                    {/* <EmailComponent mails={selectedFlatRows}/> */}
                    {/* {selectedFlatRows != 0 ?
                    <h6 style={{color: 'black'}} className="mt-2">{selectedFlatRows.length} records selected</h6>
                        : <p></p>                                          
                    } */}
                    {/* <div className="row ml-3">
                        <Link to="/user/members/send-emails"
                        >
                            <Button onClick={saveMails} outline color="primary">Send Emails</Button>
                        </Link> 
                        
                        <div className="col-7 mb-2">
                            <ExportingButtons exportData={exportData}/>
                        </div>
                    </div> */}
                    
                    <div className="row mb-3">
                        <div className="col-6">
                        <Link to="/user/members/send-emails"
                        >
                            <Button style={bstyle} onClick={saveMails} disabled={selectedFlatRows.length == 0} outline color="dark">Send Emails to {selectedFlatRows.length}</Button>
                        </Link> 
                        </div>
                        <div className="col-6">
                            <ExportingButtons exportData={exportData}/>
                        </div>
                    </div>

                    <Table size="sm" dark hover {...getTableProps()} responsive style={{height: "200px"}}>
                        <thead className="text-center"> 
                            {headerGroups.map((headerGroups) => (
                                <tr {...headerGroups.getHeaderGroupProps()}>
                                    {
                                        headerGroups.headers.map( (column) => (
                                            <th {...column.getHeaderProps(column.getSortByToggleProps())} style={column.style} >
                                                {column.render('Header')}
                                                <span>
                                                    {column.isSorted ? (column.isSortedDesc ? '(D)': '(A)') : ''}
                                                </span>
                                                <div placeholder="Search">{column.canFilter ? column.render('Filter') : null}</div>
                                                
                                            </th>       
                                        ))
                                    }
                                </tr>
                            ))}
                            
                        </thead>
                        <tbody {...getTableBodyProps()} className="text-center">
                            {
                                page.map( row => {
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map((cell) => {
                                                return <td {...cell.getCellProps()} {...cell.getCellProps()} style={{color: (cell.value == "Terminated") && 'red'}} >
                                                    {(cell.column.Header == "Date of Birth" || cell.column.Header == "Enrolled Date") ? 
                                                    (cell.value ? new Date(cell.value).toLocaleDateString() : '' )
                                                    : cell.render('Cell')}</td>
                                            })}
                                            
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    <div>
                        <span>
                            Page{' '}
                        <strong> {pageIndex + 1} of {pageOptions.length}</strong> {' '}
                        </span>
                        <span>
                            | Go to Page: {' '}
                            <input type="number" defaultValue={pageIndex+1}
                            onChange={e => {
                                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                                gotoPage(pageNumber)
                            }} style={{width: "50px"}}/>
                        </span>
                        <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
                            {
                                [5,10,25,50,100].map((pageSize) => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))
                            }
                        </select>
                        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                        <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                        <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
                    </div>
                    {/* <pre>
                        <h1>{selectedFlatRows.length}</h1>
                        <code>
                            {JSON.stringify(
                                {
                                    selectedFlatRows: selectedFlatRows.map((row) => row.original.email)
                                },
                                null,
                                2
                            )}
                        </code>
                    </pre> */}
                </div>
                
            }
        {/* <Switch> */}
            {/* <Route path="/user/members/send-emails" render={(props) => 
                <EmailComponent emails={selectedMails} flat={selectedFlatRows} {...props}/>} /> */}
                {/* <Route path="/user/members-table/send-emails" selectedMails={selectedMails} selectedFlatRows={selectedFlatRows} 
                component={EmailComponent} /> */}
        {/* </Switch> */}
        
        {/* <Pagination /> */}
        </div>
    )
}
