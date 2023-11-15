/* eslint-disable prettier/prettier */
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import MDBox from 'components/MDBox';
import Card from "@mui/material/Card";
import {Button, FormControl, Input, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
const ProjectList = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'customer_name', headerName: 'Customer ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'address', headerName: 'Address', width: 300 },
        { field: 'scope_of_works', headerName: 'Scope of Work', width: 200 },
        { field: 'attachContract', headerName: 'Attach Contract', width: 200 },
        { field: 'superintendent_name', headerName: 'Superintendent ID', width: 150 },
      ];
      // const rows = [
      //   { id: 1, customer_id: 1, name: 'Project 1', address: '123 Main St', scope_of_works: 'Scope 1', attachContract: 'Contract 1', superintendent_id: 1 },
      //   { id: 2, customer_id: 2, name: 'Project 2', address: '456 Elm St', scope_of_works: 'Scope 2', attachContract: 'Contract 2', superintendent_id: 2 },
      //   // Add more rows as needed
      // ];
      
  const [rows, setRows] = useState([])
  const fetchProjectData = async () => {
    const response = await fetch(''+process.env.REACT_APP_API_URL+'/construction/project_list/?per_page=5000&page_no=1',{
    // headers: {
    //   'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    // }
    })
    if (!response.ok){
      console.error("Error Fetching project")
      return;
    }
    const responseData = await response.json()
    if(responseData.code != 200){
      console.error("Error getting project")
      return;
    }
    console.log(responseData.data.dataset)
    // Store the product in the state
    setRows(responseData.data.dataset);
  }
  useEffect(() => {
    fetchProjectData();
  }, []);
  return (
    
    <DashboardLayout>
        <DashboardNavbar/>
            <Card>
 <MDBox sx={{ backgroundColor: '#1A73E8', borderRadius: '15px 15px 0 0' }}>
    <Typography variant='h3' sx={{ marginBottom: '1rem', marginTop: '1rem', textAlign: 'center', color: 'white !important' }}>Project Table</Typography>
  </MDBox>

  {/* Render your DataGrid */}
  <div style={{ height: 400, width: '100%' }}>
  <Link to='/tableproject'>
    <MDBox sx={{marginBottom:'1rem',display:'flex',justifyContent: 'flex-end',marginRight:'1rem',marginTop:'1rem'}}>
        <Button  variant="contained" sx={{color:'white !important'}}>add</Button>
      </MDBox>
      </Link>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5} // You can adjust the number of rows per page
    />
  </div>
             </Card>
    </DashboardLayout>
  )
}

export default ProjectList