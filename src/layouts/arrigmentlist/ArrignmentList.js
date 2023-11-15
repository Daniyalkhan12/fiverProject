/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDBox from 'components/MDBox';
import Card from "@mui/material/Card";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Button, FormControl, Input, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
const ArrignmentList = () => {
  const handleButtonClick = (row) => {
    const records_with_id = row.payment_records.map((object) => {
      const { check_no, ...rest } = object; // Destructure check_no and collect the rest of the object
      return { id: check_no, ...rest }; // Create a new object with id key and the rest of the properties
    });
    setPayments(records_with_id); // Set the image URL for the selected row
    setOpenDialog(true); // Open the dialog
  };  
    const columns = [
      { field: 'id', headerName: 'ID', width: 150 },
        { field: 'subcontractor_name', headerName: 'Subcontractor', width: 150 },
        { field: 'project_name', headerName: 'Project ID', width: 150 },
        { field: 'start_date', headerName: 'Start Date', width: 150 },
        { field: 'end_date', headerName: 'End Date', width: 200 },
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'payment_records', headerName: 'Payments', width: 0},
        {
          field: 'actions',
          headerName: 'Payments',
          width: 150,
          renderCell: (params) => (
            <Button onClick={() => handleButtonClick(params.row)}>View</Button>
          ),}
      ];
       
      const [openDialog, setOpenDialog] = useState(false);
      const [rows, setRows] = useState([])
      const [payments, setPayments] = useState([])
      const columnVisibilityModel = React.useMemo(() => {
       return{
        payment_records: false
       }
      }, []);
      const handleCloseDialog = () => {
        setOpenDialog(false); // Close the dialog
      };
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
          columnVisibilityModel={columnVisibilityModel}
          disableSelectionOnClick // Disables row selection on row click
        />
    </div>
    </Card>
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <h2 style={{margin: '1rem', textAlign: 'center', color: 'rgba(45, 119, 247, 10)'}}>Payment Records</h2>
      {
        payments.length > 0 ? <DataGrid
        rows={payments}
        columns={[
          { field: 'id', headerName: 'Check No.', width: 150 },
          { field: 'amount', headerName: 'Amount', width: 150 },
          { field: 'date', headerName: 'Date', width: 150 },]}
        pageSize={10} // Number of rows per page
        checkboxSelection
        disableSelectionOnClick // Disables row selection on row click
      />
      : 
      <h3 style={{textAlign: 'center', marginBottom: '2rem'}}>No Payment Records.</h3>
      }
      
    </Dialog>
    </DashboardLayout>
  )
}

export default ArrignmentList