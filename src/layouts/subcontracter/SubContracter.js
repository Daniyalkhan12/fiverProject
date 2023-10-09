/* eslint-disable prettier/prettier */
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState } from 'react';
import Card from "@mui/material/Card";
import MDBox from 'components/MDBox';
import {Button, FormControl, Input, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, TextField } from '@mui/material';
const SubContracter = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        businessName: '',
        address: '',
        traderName: '',
        lic: '',
        tel1: '',
        tel2: '',
        email1: '',
        email2: '',
      });
    
      // Function to handle form field changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      // Function to handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // Access the form data in the formData state object
        console.log(formData);
        // You can send this data to your server or perform any other actions here
      };
  return (
    <form onSubmit={handleSubmit}>
   <DashboardLayout>
    <DashboardNavbar/>
    <Card>
    <MDBox sx={{backgroundColor:'#1A73E8',borderRadius:'15px 15px 0 0'}}>
          <Typography variant='h3' sx={{marginBottom:'1rem',marginTop:'1rem',textAlign:'center',color:'white !important'}}>Sub-Contractors</Typography>
    </MDBox> 
    <List>
        <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Full Name:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField 
                variant="outlined"
                fullWidth
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange} />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Bussiness Name:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField 
            variant="outlined"
            fullWidth
            name="businessName"
            value={formData.businessName}
            onChange={handleInputChange}/>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Address:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField 
            variant="outlined"
            fullWidth
            name="address"
            value={formData.address}
            onChange={handleInputChange} />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Trader Name:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField variant="outlined"
            fullWidth
            name="traderName"
            value={formData.traderName}
            onChange={handleInputChange} />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">LIC:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField variant="outlined"
            fullWidth
            name="lic"
            value={formData.lic}
            onChange={handleInputChange} />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">TEL 1:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField variant="outlined"
            fullWidth
            name="tel1"
            value={formData.tel1}
            onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12} md={1} lg={1} xl={1}>
            <Typography variant="body1">TEL 2:</Typography>
          </Grid>
          <Grid item xs={10} md={3} lg={3} xl={3}>
            <TextField variant="outlined"
            fullWidth
            name="tel2"
            value={formData.tel2}
            onChange={handleInputChange} />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Email 1:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField variant="outlined"
            fullWidth
            name="email1"
            value={formData.email1}
            onChange={handleInputChange} />
          </Grid>
          <Grid item xs={12} md={1} lg={1} xl={1}>
            <Typography variant="body1">Email 2:</Typography>
          </Grid>
          <Grid item xs={10} md={3} lg={3} xl={3}>
            <TextField variant="outlined"
            fullWidth
            name="email2"
            value={formData.email2}
            onChange={handleInputChange} />
          </Grid>
        </Grid>
      </ListItem>
      <MDBox sx={{marginBottom:'1rem',display:'flex',justifyContent: 'flex-end',marginRight:'1rem'}}>
        <Button variant="contained" sx={{color:'white !important'}}>Submit</Button>
      </MDBox>
      </List>
    </Card>
    
   </DashboardLayout>
    </form>
  )
}

export default SubContracter