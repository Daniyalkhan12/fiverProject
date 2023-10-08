/* eslint-disable prettier/prettier */
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState } from 'react';

import Card from "@mui/material/Card";
import {Button, FormControl, Input, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import MDBox from 'components/MDBox';
const WorkTables = () => {
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);

  const handleImageChange1 = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage1(imageFile);
  };

  const handleImageChange2 = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage2(imageFile);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar/>
       <Card>
       <MDBox sx={{backgroundColor:'#1A73E8',borderRadius:'15px 15px 0 0'}}>
          <Typography variant='h3' sx={{marginBottom:'1rem',marginTop:'1rem',textAlign:'center',color:'white !important'}}>Work Table </Typography>
        </MDBox>
        <List>
        <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Full Name:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">TEL:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Address:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Skills:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Reffered By:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">SSN:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">DL Image Front:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
          <div>
          <FormControl component="fieldset">
        <Input
        sx={{display:'none'}}
          accept="image/*"
          id="image-input-1"
          type="file"
          onChange={handleImageChange1}
        />
        <label htmlFor="image-input-1">
          <Button variant="contained" component="span" sx={{color:'white !important'}}>
            Upload Image 
          </Button>
        </label>
      </FormControl>
      {selectedImage1 && (
        <div>
          <p>Selected Image: {selectedImage1.name}</p>
        </div>
      )}
    </div>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">DL Image Back:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
          <div>
          <FormControl component="fieldset" >
        <Input
        sx={{display:'none'}}
          accept="image/*"
          id="image-input-2"
          type="file"
          onChange={handleImageChange2}
        />
        <label htmlFor="image-input-2">
          <Button variant="contained" component="span" sx={{color:'white !important'}}>
            Upload Image 
          </Button>
        </label>
      </FormControl>
      {selectedImage2 && (
        <div>
          <p>Selected Image: {selectedImage2.name}</p>
        </div>
      )}
    </div>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Per-Day Price:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </ListItem>
        </List>
        <MDBox sx={{marginBottom:'1rem',display:'flex',justifyContent: 'flex-end',marginRight:'1rem'}}>
        <Button variant="contained" sx={{color:'white !important'}}>Submit</Button>
      </MDBox>
      </Card>
    </DashboardLayout>
  )
}

export default WorkTables