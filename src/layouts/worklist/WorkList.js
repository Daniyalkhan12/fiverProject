/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

import MDBox from 'components/MDBox';
import Card from "@mui/material/Card";
import {Button, FormControl, Input, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const WorkList = () => {
    const handleButtonClick = (row) => {
      setSelectedImage(row.receipt_image); // Set the image URL for the selected row
      setOpenDialog(true); // Open the dialog
    };
    const columns = [
        { field: 'date', headerName: 'Date:', width: 150 },
        { field: 'project', headerName: 'Project', width: 150 },
        { field: 'workers', headerName: 'Name of workers', width: 150 },
        { field: 'company_name', headerName: 'Company Name', width: 200 },
        { field: 'invoice_number', headerName: 'Invoice Number', width: 150 },
        { field: 'receipt_image', headerName: 'Receipt Image', width: 150, hide:true },
        {
          field: 'actions',
          headerName: 'Receipt Image',
          width: 150,
          renderCell: (params) => (
            <Button onClick={() => handleButtonClick(params.row)}>View Image</Button>
          ),}
        // { field: 'project_images', headerName: 'Project Image', width: 150 },
      ];
       
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const columnVisibilityModel = React.useMemo(() => {
   return{
    receipt_image: false,
   }
  }, []);
  const handleCloseDialog = () => {
    setOpenDialog(false); // Close the dialog
  };
      const [rows, setRows] = useState([])
      const fetchDailyWorkData = async () => {
        const response = await fetch(''+process.env.REACT_APP_API_URL+'/construction/dailywork_list/?per_page=5000&page_no=1',{
        // const response = await fetch(''+process.env.REACT_APP_API_URL+'/construction/dailywork_list/?per_page=5000&page_no=1',{
        // headers: {
        //   'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        // }
        })
        if (!response.ok){
          console.error("Error Fetching daily work data")
          return;
        }
        const responseData = await response.json()
        if(responseData.code != 200){
          console.log(responseData)
          console.error("Error getting daily work data")
          return;
        }
        console.log(responseData.data.dataset)
        // Store the product in the state
        setRows(responseData.data.dataset);
      }
      useEffect(() => {
        fetchDailyWorkData();
      }, []);
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
        <DialogTitle>Receipt Image</DialogTitle>
        <DialogContent>
          <img style={{width: '30rem', height: '20rem'}} src={""+process.env.REACT_APP_API_URL+"/" + selectedImage} alt="Receipt" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  )
}

export default WorkList