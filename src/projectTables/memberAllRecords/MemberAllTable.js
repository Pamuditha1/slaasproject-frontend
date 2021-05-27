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

    useEffect(async () => {
        setIsLoading(true)
        const records = await getAllMembers()
        setallMembers(records)
        setIsLoading(false)
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
        // props.history.push({
        //     pathname: '/user/members/send-emails',
        //     state: {
        //         emailsList: selectedMails
        //     }
        // })
        // props.history.push("/user/members/send-emails")
    }
    return (
        <div>
            {
                isLoading ? 
                <>
                    <Loader style={{marginLeft : "35%"}}
                        type="ThreeDots"
                        color="#00BFFF"
                        height={300}
                        width={300}
                    /> 
                    <canter><h2>Loading member records. This may take a while...</h2></canter>
                </>:
                
                <div>
                    
                    <p className="alert alert-info"> {data.length} records.</p>
                    <div className="row">
                        <div className="col-12">
                            <input type="checkbox" {...getToggleHideAllColumnsProps()} />All Columns
                        </div>
                        {
                            allColumns.map(column => (
                                <div key={column.id} className="col-3" style={{float: "left"}}>
                                    <label>
                                        <input type="checkbox" {...column.getToggleHiddenProps()}/>
                                        {column.Header}
                                    </label>
                                </div>
                            ))
                            
                        }
                    </div>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
                    
                    {/* <EmailComponent mails={selectedFlatRows}/> */}
                    {selectedFlatRows != 0 ?

                        <h6 style={{color: 'green'}} className="mt-2">{selectedFlatRows.length} records selected</h6>
                        : <p></p>
                        // <Link to={{
                        //     pathname: '/user/members/emails',
                        //     data: {
                        //         emails: selectedFlatRows
                        //     }
                        // }}>
                        //     <Button color="primary">Send Emails</Button>
                        // </Link> 
                                            
                        
                    
                    }
                    <div className="row">
                        <div className="col-5">
                            <Link to="/user/members/send-emails"> 
                                <Button onClick={saveMails} color="primary">Send Emails</Button>
                            </Link>
                        </div>
                        <div className="col-7 mb-2">
                            <ExportingButtons exportData={exportData}/>
                        </div>
                    </div>
                    
                    
                    <Table size="sm" dark hover {...getTableProps()} responsive style={{height: "200px"}}>
                        <thead> 
                            {headerGroups.map((headerGroups) => (
                                <tr {...headerGroups.getHeaderGroupProps()}>
                                    {
                                        headerGroups.headers.map( (column) => (
                                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
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
                        <tbody {...getTableBodyProps()}>
                            {
                                page.map( row => {
                                    prepareRow(row)
                                    return (
                                        <tr {...row.getRowProps()}>
                                            {row.cells.map((cell) => {
                                                return <td {...cell.getCellProps()} >{cell.render('Cell')}</td>
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
        <Switch>
            {/* <Route path="/user/members/send-emails" render={(props) => 
                <EmailComponent emails={selectedMails} flat={selectedFlatRows} {...props}/>} /> */}
                <Route path="/user/members/send-emails" component={EmailComponent} />
        </Switch>
        
        {/* <Pagination /> */}
        </div>
    )
}
