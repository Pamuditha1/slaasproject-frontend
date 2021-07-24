import React, {useMemo, useState, useEffect} from 'react'
import {useTable, useSortBy, useGlobalFilter, useFilters, usePagination} from 'react-table'
import {COLUMNS, GROUPED_COLUMNS} from './allColumns'
import { Table, Button } from 'reactstrap';
import Pagination from '../projectTables/common/Pagination'
import { GlobalFilter } from '../projectTables/common/GlobalFilter'
import Loader from 'react-loader-spinner'
import { Spinner } from 'reactstrap';
import axios from 'axios'

export const TestingMemberTable = () => {
    const [allMembers, setallMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(async () => {
        setIsLoading(true)
        const fetchData = () => {
            axios('http://localhost:3001/slaas/api/user/view/members/all')
            .then(function (res) {
                console.log(res.data)
                setallMembers(res.data)
            })      
            .then(function () {
                console.log(allMembers)
            })      
            
        };    
        await fetchData();
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
        prepareRow
    } = useTable({
        columns,
        data
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination)

    const {globalFilter, pageIndex, pageSize} = state

    return (
        
        <div>
            
            {
                isLoading ? 
                <Loader style={{marginLeft : "35%"}}
                    type="ThreeDots"
                    color="#8f2032"
                    height={300}
                    width={300}
                /> :

                <div>
                    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
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
                    
                    <Table size="sm" dark hover {...getTableProps()} responsive style={{height: "200px"}} show>
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
                </div>
            }
        
        
        {/* <Pagination /> */}
        </div>
    )
}
