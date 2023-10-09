/* eslint-disable prettier/prettier */
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState } from 'react';
import Card from "@mui/material/Card";
import MDBox from 'components/MDBox';
import {Button, FormControl, Input, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, TextField } from '@mui/material';
const ProjectTable = () => {
    const [formData, setFormData] = useState({
        customer: '',
        name: '',
        address: '',
        scopeOfWork: '',
        attachContract: '',
        projectProfile: null,
        superintendent: '',
      });
    
      // Function to handle form field changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      // Function to handle image file selection
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({
          ...prevData,
          projectProfile: file, // Store the selected file
        }));
      };
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
          <Typography variant='h3' sx={{marginBottom:'1rem',marginTop:'1rem',textAlign:'center',color:'white !important'}}>Project Table</Typography>
    </MDBox>
    <List>
        <ListItem sx={{ marginBottom: '1rem', marginLeft: '2rem', marginTop: '1rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2} lg={2} xl={2}>
              <Typography variant="body1">Customer:</Typography>
            </Grid>
            <Grid item xs={10} md={4} lg={4} xl={4}>
              <Select
              fullWidth
                id="customer"
                label="Customer"
                sx={{ height: '2.7rem' }}
                name="customer"
                value={formData.customer}
                onChange={handleInputChange}
              >
                <MenuItem value="customer1">Customer 1</MenuItem>
                <MenuItem value="customer2">Customer 2</MenuItem>
                {/* Add more customer options here */}
              </Select>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem sx={{ marginBottom: '1rem', marginLeft: '2rem', marginTop: '1rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2} lg={2} xl={2}>
              <Typography variant="body1">Name:</Typography>
            </Grid>
            <Grid item xs={10} md={4} lg={4} xl={4}>
              <TextField
                variant="outlined"
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </ListItem>
        <ListItem sx={{ marginBottom: '1rem', marginLeft: '2rem', marginTop: '1rem' }}>
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
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </ListItem>
        <ListItem sx={{ marginBottom: '1rem', marginLeft: '2rem', marginTop: '1rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2} lg={2} xl={2}>
              <Typography variant="body1">Scope of Work:</Typography>
            </Grid>
            <Grid item xs={10} md={4} lg={4} xl={4}>
              <TextField
                variant="outlined"
                fullWidth
                name="scopeOfWork"
                value={formData.scopeOfWork}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </ListItem>
        <ListItem sx={{ marginBottom: '1rem', marginLeft: '2rem', marginTop: '1rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2} lg={2} xl={2}>
              <Typography variant="body1">Attach Contract:</Typography>
            </Grid>
            <Grid item xs={10} md={4} lg={4} xl={4}>
              <TextField
                variant="outlined"
                fullWidth
                name="attachContract"
                value={formData.attachContract}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </ListItem>
        <ListItem sx={{ marginBottom: '1rem', marginLeft: '2rem', marginTop: '1rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2} lg={2} xl={2}>
              <Typography variant="body1">Project Profile</Typography>
            </Grid>
            <Grid item xs={10} md={4} lg={4} xl={4}>
                
            <Input
        sx={{display:'none'}}
        name="projectProfile"
        id="projectProfile"
        accept="image/*" 
        type="file"
        onChange={handleImageChange}
        />
        <label htmlFor="projectProfile">
          <Button variant="contained" component="span" sx={{color:'white !important'}}>
            Upload Image 
          </Button>
        </label>
            </Grid>
          </Grid>
        </ListItem>
        <ListItem sx={{ marginBottom: '1rem', marginLeft: '2rem', marginTop: '1rem' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2} lg={2} xl={2}>
              <Typography variant="body1">Super-Intendent:</Typography>
            </Grid>
            <Grid item xs={10} md={4} lg={4} xl={4}>
              <Select
                fullWidth
                id="superintendent"
                label="Super-Intendent"
                sx={{ height: '2.7rem' }}
                name="superintendent"
                value={formData.superintendent}
                onChange={handleInputChange}
              >
                <MenuItem value="superintendent1">Superintendent 1</MenuItem>
                <MenuItem value="superintendent2">Superintendent 2</MenuItem>
                {/* Add more superintendent options here */}
              </Select>
            </Grid>
          </Grid>
        </ListItem>
        <MDBox sx={{ marginBottom: '1rem', display: 'flex', justifyContent: 'flex-end', marginRight: '1rem' }}>
          <Button type="submit" variant="contained" sx={{ color: 'white !important' }}>
            Submit
          </Button>
        </MDBox>
      </List>
    </Card>
    </DashboardLayout>
    </form>
  )
}

export default ProjectTable