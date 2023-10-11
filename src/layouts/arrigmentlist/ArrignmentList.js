/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDBox from 'components/MDBox';
import Card from "@mui/material/Card";
import {Button, FormControl, Input, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
const ArrignmentList = () => {
    const columns = [
      { field: 'id', headerName: 'ID', width: 150 },
        { field: 'sub_name', headerName: 'Subcontractor ID', width: 150 },
        { field: 'project', headerName: 'Project ID', width: 150 },
        { field: 'start_date', headerName: 'Start Date', width: 150 },
        { field: 'end_date', headerName: 'End Date', width: 200 },
        { field: 'price', headerName: 'Price', width: 150 },
      ];
       
      const [rows, setRows] = useState([])
      const fetchAgreementData = async () => {
        const response = await fetch(''+process.env.REACT_APP_API_URL+'/construction/agreement_list/?per_page=5000&page_no=1',{
        // headers: {
        //   'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        // }
        })
        if (!response.ok){
          console.error("Error Fetching agreement data")
          return;
        }
        const responseData = await response.json()
        if(responseData.code != 200){
          console.error("Error getting agreement data")
          return;
        }
        console.log(responseData.data.dataset)
        // Store the product in the state
        setRows(responseData.data.dataset);
      }
      useEffect(() => {
        fetchAgreementData();
      }, []);
  return (
    <DashboardLayout>
    <DashboardNavbar/>
    <Card>
    <MDBox sx={{backgroundColor:'#1A73E8',borderRadius:'15px 15px 0 0'}}>
          <Typography variant='h3' sx={{marginBottom:'1rem',marginTop:'1rem',textAlign:'center',color:'white !important'}}>Sub-Contractor Agreement Table </Typography>
        </MDBox>
    <div style={{ height: 400, width: '100%' }}>
    <Link to='/ArrigmentTable'>
    <MDBox sx={{marginBottom:'1rem',display:'flex',justifyContent: 'flex-end',marginRight:'1rem',marginTop:'1rem'}}>
        <Button  variant="contained" sx={{color:'white !important'}}>add</Button>
      </MDBox>
      </Link>
      <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5} // Number of rows per page
          checkboxSelection
          disableSelectionOnClick // Disables row selection on row click
        />
    </div>
    </Card>
    </DashboardLayout>
  )
}

export default ArrignmentList