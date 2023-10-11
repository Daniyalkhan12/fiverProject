/* eslint-disable prettier/prettier */
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React, { useState, useEffect } from 'react';
import Card from "@mui/material/Card";
import MDBox from 'components/MDBox';
import {Button, FormControl, Input, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProjectTable = () => {
    const [formData, setFormData] = useState({
        customer_id: '',
        name: '',
        address: '',
        scope_of_works: '',
        attachContract: '',
        profile_image: null,
        superintendent_id: '',
      });
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([])
    const [superintendents, setSuperintendents] = useState([])    
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
          profile_image: file, // Store the selected file
        }));
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Access the form data in the formData state object
        console.log(formData);
        // You can send this data to your server or perform any other actions here
  
        let formDataObject = new FormData();

        Object.keys(formData).forEach((key) => {
          formDataObject.append(key, formData[key]);
        });
      const response = await fetch(process.env.REACT_APP_API_URL + "/construction/project_add/", {
        method: "POST",
        body: formDataObject,
      });
      console.log(response);
      const json = await response.json();
      console.log(json);
      if (json.code == 400) {
        toast.error("Error, Please try again!", {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      if (json.code == 200) {
        const access = json.data.access;
        localStorage.setItem("accessToken", access);
        const refresh = json.data.refresh;
        localStorage.setItem("refreshToken", refresh);
        const username = json.data.username;
        localStorage.setItem("username", username);
        console.log(localStorage);
        toast.success("Project added Successfully", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate('/projecttable')
        };
      }
      
    const fetchCustomerData = async () => {
      const response = await fetch(''+process.env.REACT_APP_API_URL+'/construction/customer_list/?per_page=5000&page_no=1',{
        // headers: {
        //   'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        // }
      })
      if (!response.ok){
        console.error("Error Fetching customers")
        return;
      }
      const responseData = await response.json()
      if(responseData.code != 200){
        console.error("Error getting customers")
        return;
      }
      // Store the product in the state
      setCustomers(responseData.data.dataset);
    }
    const fetchSuperintedentData = async () => {
      const response = await fetch(''+process.env.REACT_APP_API_URL+'/user/get_users/',{
      // headers: {
      //   'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      // }
      })
      if (!response.ok){
        console.error("Error Fetching superintendents")
        return;
      }
      const responseData = await response.json()
      if(responseData.code != 200){
        console.error("Error getting superintedents")
        return;
      }
      // Store the product in the state
      setSuperintendents(responseData.data);
    }
    useEffect(() => {
      fetchCustomerData();
      fetchSuperintedentData();

    }, []);
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
                id="customer_id"
                label="Customer"
                sx={{ height: '2.7rem' }}
                name="customer_id"
                value={formData.customer_id}
                onChange={handleInputChange}
              >
                
                
                {customers.map((customer) => (
                  <MenuItem key={customer.id} value={`${customer.id}`}>
                    {customer.full_name} - {customer.company_name}
                  </MenuItem>
                ))}
                {/* Add more customer_id options here */}
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
                name="scope_of_works"
                value={formData.scope_of_works}
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
        name="profile_image"
        id="profile_image"
        accept="image/*" 
        type="file"
        onChange={handleImageChange}
        />
        <label htmlFor="profile_image">
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
                id="superintendent_id"
                label="Super-Intendent"
                sx={{ height: '2.7rem' }}
                name="superintendent_id"
                value={formData.superintendent_id}
                onChange={handleInputChange}
              >
              
              {superintendents.map((superintendent) => (
                <MenuItem key={superintendent.id} value={`${superintendent.id}`}>
                  {superintendent.first_name} {superintendent.last_name}
                </MenuItem>
              ))}
                {/* Add more superintendent_id options here */}
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