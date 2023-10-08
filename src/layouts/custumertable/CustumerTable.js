/* eslint-disable prettier/prettier */
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React from 'react'
import Card from "@mui/material/Card";
import MDBox from 'components/MDBox';
import {Button, FormControl, Input, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, TextField } from '@mui/material';
const CustumerTable = () => {
  return (
    <DashboardLayout>
        <DashboardNavbar/>
        <Card>
        <MDBox sx={{backgroundColor:'#1A73E8',borderRadius:'15px 15px 0 0'}}>
          <Typography variant='h3' sx={{marginBottom:'1rem',marginTop:'1rem',textAlign:'center',color:'white !important'}}>Customer Table </Typography>
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
            <Typography variant="body1">Company Name:</Typography>
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
            <Typography variant="body1">Tel 1:</Typography>
          </Grid>
          <Grid item xs={10} md={2} lg={4} xl={4}>
            <TextField variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} md={1} lg={1} xl={1}>
            <Typography variant="body1">Tel 2:</Typography>
          </Grid>
          <Grid item xs={10} md={2} lg={3} xl={3}>
            <TextField variant="outlined" fullWidth />
          </Grid>
        </Grid>
        
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'2rem',marginTop:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Email:</Typography>
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

export default CustumerTable