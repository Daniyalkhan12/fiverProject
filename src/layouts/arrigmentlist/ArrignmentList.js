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
        { field: 'Sub_name', headerName: 'Sub Name', width: 150 },
        { field: 'Project', headerName: 'Project', width: 150 },
        { field: 'Start_Date', headerName: 'Start Date', width: 150 },
        { field: 'End_Date', headerName: 'End Date', width: 200 },
        { field: 'Price', headerName: 'Price', width: 150 },
        { field: 'Check_NO', headerName: 'Check NO', width: 150 },
        { field: 'Date', headerName: 'Date', width: 150 },
        { field: 'Amount', headerName: 'Amount', width: 150 },
      ];
  return (
    <DashboardLayout>
    <DashboardNavbar/>
    <Card>
    <MDBox sx={{backgroundColor:'#1A73E8',borderRadius:'15px 15px 0 0'}}>
          <Typography variant='h3' sx={{marginBottom:'1rem',marginTop:'1rem',textAlign:'center',color:'white !important'}}>Sub-Conteractor Agreement Table </Typography>
        </MDBox>
    <div style={{ height: 400, width: '100%' }}>
    <Link to='/ArrigmentTable'>
    <MDBox sx={{marginBottom:'1rem',display:'flex',justifyContent: 'flex-end',marginRight:'1rem',marginTop:'1rem'}}>
        <Button  variant="contained" sx={{color:'white !important'}}>add</Button>
      </MDBox>
      </Link>
      <DataGrid
          rows=''
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