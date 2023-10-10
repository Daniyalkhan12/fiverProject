/* eslint-disable prettier/prettier */
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import { Card } from '@mui/material';
import MDBox from 'components/MDBox';
import {Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'full_name', headerName: 'Full Name', width: 200 },
    { field: 'company_name', headerName: 'Company Name', width: 200 },
    { field: 'address', headerName: 'Address', width: 300 },
    { field: 'telephone_one', headerName: 'Tel 1', width: 150 },
    { field: 'telephone_two', headerName: 'Tel 2', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
  ];
  const rows = [
    { id: 1, full_name: 'John Doe', company_name: 'ABC Inc.', address: '123 Main St', telephone_one: '555-1234', telephone_two: '555-5678', email: 'john@example.com' },
    { id: 2, full_name: 'Jane Smith', company_name: 'XYZ Corp.', address: '456 Elm St', telephone_one: '555-9876', telephone_two: '555-5432', email: 'jane@example.com' },
    { id: 3, full_name: 'Bob Johnson', company_name: '123 Company', address: '789 Oak St', telephone_one: '555-1111', telephone_two: '555-2222', email: 'bob@example.com' },
    // Add more rows as needed
  ];
const Customerlist = () => {
  return (
    <DashboardLayout>
        <DashboardNavbar/>
        <Card>
        <MDBox sx={{ backgroundColor: '#1A73E8', borderRadius: '15px 15px 0 0' }}>
    <Typography variant='h3' sx={{ marginBottom: '1rem', marginTop: '1rem', textAlign: 'center', color: 'white !important' }}>Customer Table</Typography>
  </MDBox>
  <div style={{ height: 400, width: '100%' }}>
  <Link to='/tableCustomer'>
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

export default Customerlist