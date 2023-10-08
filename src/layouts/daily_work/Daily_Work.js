/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Card from "@mui/material/Card";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Button, Container, List, ListItem, Grid, Typography, Input, InputLabel, FormControl, Select, MenuItem, TextField } from '@mui/material';
import MDBox from 'components/MDBox';

const Daily_Work = () => {
  const projects = ['Project A', 'Project B', 'Project C'];
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
      <MDBox sx={{backgroundColor:'#1A73E8',borderRadius:'15px 15px 0 0'}}>
      <Typography variant='h3' sx={{marginBottom:'1rem',marginTop:'1rem',textAlign:'center',color:'white !important'}}>Daily Work Table </Typography>
            </MDBox>
        
<Grid container spacing={2} alignItems="center" sx={{marginBottom:'1rem',marginLeft:'1rem',marginRight:'1rem'}}>
      {/* Date Picker */}
      <Grid item xs={10} md={6} lg={6} xl={6}>
        <Typography variant="h6" gutterBottom>
          Date:
        </Typography>
        <FormControl fullWidth>
         
          <Input
            id="date"
            type="date"
          />
        </FormControl>
      </Grid>

      {/* Combo Box */}
      <Grid item xs={10} md={5} lg={5} xl={5}>
        <Typography variant="h6" gutterBottom>
          Project:
        </Typography>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="project">Project</InputLabel>
          <Select
            id="project"
            label="Project"
            sx={{height:'2.7rem'}}
          >
            {projects.map((project) => (
              <MenuItem key={project} value={project}>
                {project}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
    <Grid sx={6} >
    <List>
      <Typography variant='h2' sx={{marginLeft:'1rem'}}>Material:</Typography>
    <ListItem sx={{marginBottom:'1rem',marginTop:'1rem',marginLeft:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Name of worker :</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
          <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="project">Project</InputLabel>
          <Select
            id="project"
            label="Project"
            sx={{height:'2.7rem'}}
          >
            {projects.map((project) => (
              <MenuItem key={project} value={project}>
                {project}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Company Name:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Invoice Number:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
            <TextField variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'1rem'}}>
          <Grid itemxs={12} md={4} lg={4} xl={4}>
          <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="image-input"
      />
      <label htmlFor="image-input">
        <Button variant="contained" color="primary" component="span" sx={{color:'white !important'}}>
          Upload Image of Recipt
        </Button>
      </label>
      <Grid>
        <ul>
          {selectedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </Grid>
          </Grid>
      
      </ListItem>
    </List>
    </Grid>
      <MDBox sx={{marginBottom:'1rem',display:'flex',justifyContent: 'flex-end',marginRight:'1rem'}}>
        <Button variant="contained" sx={{color:'white !important'}}>Submit</Button>
      </MDBox>
    
      </Card>
    </DashboardLayout>
  );
};
export default Daily_Work;
