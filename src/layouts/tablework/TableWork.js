/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import MDBox from 'components/MDBox';
import Card from "@mui/material/Card";
import {Button, FormControl, Input, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
const TableWork = () => {
  const handleButtonClick = (row, field) => {
    if(field == "frontImage")
      setSelectedImage(row.dl_image_front); // Set the image URL for the selected row
    else
      setSelectedImage(row.dl_image_back); // Set the image URL for the selected row

    setOpenDialog(true); // Open the dialog
  };
  const handleCloseDialog = () => {
    setOpenDialog(false); // Close the dialog
  };
    const columns = [
        { field: 'id', headerName: 'ID',width:20,width: 120 },
        { field: 'reference', headerName: 'Reference',width:120  },
        { field: 'full_name', headerName: 'Full Name',width: 120  },
        {
          field: 'telephone',
          headerName: 'Telephone',
          type: 'number',
          width: 130 
        },
        {
          field: 'address',
          headerName: 'Address',
          width: 140 
        },
        {
            field: 'skills',
            headerName: 'Skills',
            width: 120 
          },
          {
            field: 'dl_image_front',
            headerName: 'DL Image Front',
            width: 160 
          },
          {
            field: 'dl_image_back',
            headerName: 'DL Image Back',
            width: 160 
          },
          {
            field: 'frontImage',
            headerName: 'DL Image Front',
            width: 150,
            renderCell: (params) => (
              <Button onClick={() => handleButtonClick(params.row)}>View Image</Button>
            ),},
            {
              field: 'backImage',
              headerName: 'DL Image Back',
              width: 150,
              renderCell: (params) => (
                <Button onClick={() => handleButtonClick(params.row, params.field)}>View Image</Button>
              ),},
      ];
      
      // const rows = [
      //   { id: 1, reference: 'xxxxx', full_name: 'Jon', telephone: 352222,address:'xxxxx',skills:'xxxxx',dl_image_front:'xxxx',dl_image_back:'xxxxx' },
      // ];
      
    
      const [rows, setRows] = useState([])
      const [openDialog, setOpenDialog] = useState(false);
      const [selectedImage, setSelectedImage] = useState('');
      const columnVisibilityModel = React.useMemo(() => {
       return{
        dl_image_front: false,
        dl_image_back: false,
       }
      }, []);
      const fetchWorkerData = async () => {
        const response = await fetch(''+process.env.REACT_APP_API_URL+'/construction/worker_list/?per_page=5000&page_no=1',{
        // headers: {
        //   'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        // }
        })
        if (!response.ok){
          console.error("Error Fetching workers")
          return;
        }
        const responseData = await response.json()
        if(responseData.code != 200){
          console.error("Error getting workers")
          return;
        }
        console.log(responseData.data.dataset)
        // Store the product in the state
        setRows(responseData.data.dataset);
      }
    useEffect(() => {
      fetchWorkerData();
    }, []);
  return (
   <DashboardLayout>
    <DashboardNavbar/>
    <Card>
    <MDBox sx={{backgroundColor:'#1A73E8',borderRadius:'15px 15px 0 0'}}>
          <Typography variant='h3' sx={{marginBottom:'1rem',marginTop:'1rem',textAlign:'center',color:'white !important'}}>Work Table </Typography>
        </MDBox>
    <div style={{ height: 400, width: '100%' }}>
    <Link to='/work_table'>
    <MDBox sx={{marginBottom:'1rem',display:'flex',justifyContent: 'flex-end',marginRight:'1rem',marginTop:'1rem'}}>
        <Button  variant="contained" sx={{color:'white !important'}}>add</Button>
      </MDBox>
      </Link>
      <DataGrid
        rows={rows}
        columns={columns}
        columnVisibilityModel={columnVisibilityModel}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
    </Card>
    
    <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Image</DialogTitle>
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

export default TableWork