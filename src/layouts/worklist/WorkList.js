/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDBox from 'components/MDBox';
import Card from "@mui/material/Card";
import {Button, FormControl, Input, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const WorkList = () => {
    const columns = [
        { field: 'Date:', headerName: 'Date:', width: 150 },
        { field: 'Project', headerName: 'Project', width: 150 },
        { field: 'Name_of_worker', headerName: 'Name of worker', width: 150 },
        { field: 'Company_Name', headerName: 'Company Name', width: 200 },
        { field: 'Invoice_Number', headerName: 'Invoice Number', width: 150 },
        { field: 'Receipt_Image', headerName: 'Receipt Image', width: 150 },
        { field: 'Project_image', headerName: 'Project Image', width: 150 },
      ];
  return (
    <DashboardLayout>
    <DashboardNavbar/>
    <Card>
    <MDBox sx={{backgroundColor:'#1A73E8',borderRadius:'15px 15px 0 0'}}>
          <Typography variant='h3' sx={{marginBottom:'1rem',marginTop:'1rem',textAlign:'center',color:'white !important'}}>Daily Work List </Typography>
        </MDBox>
    <div style={{ height: 400, width: '100%' }}>
    <Link to='/daily_work'>
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

export default WorkList