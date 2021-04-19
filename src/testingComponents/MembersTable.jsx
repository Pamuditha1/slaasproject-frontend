import React, { Component, useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import {COLUMNS} from './memberColumns.js'
import Loader from 'react-loader-spinner'
import { Spinner } from 'reactstrap';
import axios from 'axios'

import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const MembersTable = () => {

  

  const [allMembers, setallMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const columns = COLUMNS

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

const rowEvents = {
    onClick: (e, row, rowIndex) => {
      console.log('Row Clicked')
    }
  };

  const headerStyle = (colum, colIndex) => {
    return { width: '200px', textAlign: 'center' };
  }
    
    return(
      <>
      
      <BootstrapTable keyField='id'
      wrapperClasses="table-responsive" 
      rowClasses="custom-row-class" 
      headerStyle={headerStyle}
      bootstrap4 data={ allMembers } 
      columns={ columns } 
      rowEvents={ rowEvents }
      />
      </>
    )    
  
}

export default MembersTable
