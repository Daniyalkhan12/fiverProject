/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDBox from 'components/MDBox';
import Card from "@mui/material/Card";
import {Button, FormControl, Input, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
const rows = [
    { id: 1, field: 'Full Name', value: 'John Doe' },
    { id: 2, field: 'Business Name', value: 'ABC Inc.' },
    { id: 3, field: 'Address', value: '123 Main St' },
    { id: 4, field: 'Trader Name', value: 'XYZ Traders' },
    { id: 5, field: 'License No', value: '12345' },
    { id: 6, field: 'TEL 1', value: '+1234567890' },
    { id: 7, field: 'TEL 2', value: '+9876543210' },
    { id: 8, field: 'Email 1', value: 'email1@example.com' },
    { id: 9, field: 'Email 2', value: 'email2@example.com' },
  ];
const SubConTable = () => {
    const columns = [
        { field: 'field', headerName: 'Field', width: 150 },
        { field: 'value', headerName: 'Value', width: 300 },
        { field: 'value', headerName: 'Value', width: 300 },
        { field: 'value', headerName: 'Value', width: 300 },
        { field: 'value', headerName: 'Value', width: 300 },
        { field: 'value', headerName: 'Value', width: 300 },
        { field: 'value', headerName: 'Value', width: 300 },
        { field: 'value', headerName: 'Value', width: 300 },
        { field: 'value', headerName: 'Value', width: 300 },
      ];
  return (
    
    <DashboardLayout>
    <DashboardNavbar/>
    <Card>
    <MDBox sx={{backgroundColor:'#1A73E8',borderRadius:'15px 15px 0 0'}}>
          <Typography variant='h3' sx={{marginBottom:'1rem',marginTop:'1rem',textAlign:'center',color:'white !important'}}>Sub-Contractors Table </Typography>
        </MDBox>
    <div style={{ height: 400, width: '100%' }}>
    <Link to='/sub-contractor'>
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

export default SubConTable