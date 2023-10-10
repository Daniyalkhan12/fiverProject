/* eslint-disable prettier/prettier */
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState, useEffect } from 'react';
import Card from "@mui/material/Card";
import {  FormControl,
    FormLabel,
    Input,Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    TextField,
    Button, Container, List, ListItem, Grid, Typography, InputLabel, Select, MenuItem, } from '@mui/material';
import MDBox from 'components/MDBox';
import { Label } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Slide, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ArrigmentTable = () => {
    const [box1Value, setBox1Value] = useState('');
  const [box2Value, setBox2Value] = useState('');
  const [projects, setProjects] = useState([])
  const [subContractors, setSubContractors] = useState([])    
  const [formData, setFormData] = useState({
      sub_id: '',
      project_id: '',
      start_date: '',
      end_date: '',
      price: '',
      payments: [],
      superintendent_id: '',
    });

    const navigate = useNavigate();
  const handleBox1Change = (event) => {
    setBox1Value(event.target.value);
  };

  const handleBox2Change = (event) => {
    setBox2Value(event.target.value);
  };
  const [data, setData] = useState([
    { id: 1, check_no: '', date: '', amount: '' },
  ]);
  const [nextId, setNextId] = useState(2);

  const handleAddRow = () => {
    if (data.length < 5) {
      setData([...data, { id: nextId, check_no: '', date: '', amount: '' }]);
      setNextId(nextId + 1);
    }
    console.log('>>',data)
  };

  const handleInputChange = (id, colName, value) => {
    const updatedData = data.map((row) =>
      row.id === id ? { ...row, [colName]: value } : row
    );
    setData(updatedData);
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleUpload = () => {
    // You can add your file upload logic here using the selectedFile.
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
      // Add your file upload logic here, e.g., using FormData and an API.
    }
  };
    
  const onChangeDate = (e) => {
    const {name, value} = e.target
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Access the form data in the formData state object
    formData['payments'] = data
    console.log(formData);

    // You can send this data to your server or perform any other actions here
  const response = await fetch(process.env.REACT_APP_API_URL + "/construction/agreement_add/", {
    method: "POST",
    body: JSON.stringify(formData),
    headers:{
      'Content-Type': 'application/json'
    }
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
    toast.success("Agreement added Successfully", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    // navigate('/dashboard')
    };
  }
  
  const fetchProjectsData = async () => {
    const response = await fetch(''+process.env.REACT_APP_API_URL+'/construction/project_list/?per_page=5000&page_no=1',{
      // headers: {
      //   'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      // }
    })
    if (!response.ok){
      console.error("Error Fetching Projects")
      return;
    }
    const responseData = await response.json()
    if(responseData.code != 200){
      console.error("Error getting Projects")
      return;
    }
    // Store the product in the state
    setProjects(responseData.data.dataset);
  }
  const fetchSubContractorsData = async () => {
    const response = await fetch(''+process.env.REACT_APP_API_URL+'/construction/subcontractor_list/?per_page=5000&page_no=1',{
    // headers: {
    //   'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    // }
    })
    if (!response.ok){
      console.error("Error Fetching subcontractors")
      return;
    }
    const responseData = await response.json()
    if(responseData.code != 200){
      console.error("Error getting subcontractors")
      return;
    }
    // Store the product in the state
    setSubContractors(responseData.data.dataset);
  }
  useEffect(() => {
    fetchProjectsData();
    fetchSubContractorsData();

  }, []);
  return (
    <form onSubmit={handleSubmit}>

    <DashboardLayout>
      <DashboardNavbar />
        <Card >
            <MDBox sx={{backgroundColor:'#1A73E8',borderRadius:'15px 15px 0 0'}}>
            <Typography variant='h2' sx={{textAlign:'center',marginTop:'1rem',marginBottom:'1rem', color:'white !important'}}>Sub-Conteractor Agreement Table</Typography>
            </MDBox>
            <List>
      {/* <ListItem sx={{marginBottom:'1rem',marginTop:'1rem',marginLeft:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Typography variant="body1">Agreement ID#</Typography>
          </Grid>
          <Grid item xs={4}>
          <Typography variant='body1'>xxxxxxx</Typography>
          </Grid>
        </Grid>
      </ListItem> */}
    <ListItem sx={{marginBottom:'1rem',marginTop:'1rem',marginLeft:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Sub Name:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="project">Sub Contractor</InputLabel>
          <Select
            id="sub_id"
            label="sub_id"
            sx={{height:'2.7rem'}}
            name="sub_id"
            value={formData.sub_id}
            onChange={handleFormInputChange}
          >
            {subContractors.map((subContractor) => (
              <MenuItem key={subContractor.id} value={subContractor.id}>
                {subContractor.id} - {subContractor.full_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Project:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor="project">Project</InputLabel>
          <Select
            id="project"
            label="Project"
            sx={{height:'2.7rem'}}
            name="project_id"
            value={formData.project_id}
            onChange={handleFormInputChange}
          >
            {projects.map((project) => (
              <MenuItem key={project.id} value={project.id}>
                {project.id} - {project.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'1rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Start Date:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
          <FormControl fullWidth>
         
          <Input
            id="date"
            type="date"
            name="start_date"
            value={formData.start_date}
            onChange={onChangeDate}
          />
       </FormControl>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'1rem'}}>
      <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">End Date:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
          <FormControl fullWidth>
         
         
          <Input
            id="date"
            type="date"
            name="end_date"
            value={formData.end_date}
            onChange={onChangeDate}
          />
       </FormControl>
          </Grid>
        </Grid>
      
      </ListItem>
      <ListItem sx={{marginBottom:'1rem',marginLeft:'1rem'}}>
      <Grid container spacing={2}>
          <Grid item xs={12} md={2} lg={2} xl={2}>
            <Typography variant="body1">Price:</Typography>
          </Grid>
          <Grid item xs={10} md={4} lg={4} xl={4}>
          <TextField variant="outlined" fullWidth 
          name="price"
          value={formData.price}
          onChange={handleFormInputChange}
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
             // Optional: Limit the maximum number of characters
          }}/>
          </Grid>
        </Grid>
      
      </ListItem>
    </List>
    <TableContainer component={Paper} sx={{width:'60%',margin:'auto'}}>
        <Table aria-label="dynamic table">
          <TableHead sx={{display: "table-header-group", backgroundColor:'#1A73E8'}}>
            <TableRow>
              <TableCell sx={{color:'white !important',textAlign:'center'}}>Check NO</TableCell>
              <TableCell sx={{color:'white !important',textAlign:'center'}}>Date</TableCell>
              <TableCell sx={{color:'white !important',textAlign:'center'}}>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <TextField
                    value={row.check_no}
                    onChange={(e) =>
                      handleInputChange(row.id, 'check_no', e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.date}
                    onChange={(e) =>
                      handleInputChange(row.id, 'date', e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    value={row.amount}
                    onChange={(e) =>
                      handleInputChange(row.id, 'amount', e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <MDBox sx={{marginBottom:'1rem',display:'flex',justifyContent: 'flex-end',marginRight:'1rem'}}>
      <Button
        sx={{color:'white !important'}}
        variant="contained"
        onClick={handleAddRow}
      >
        Add Row
      </Button>
      </MDBox>
      </TableContainer>
      
      <div>
      <FormControl component="fieldset">
        <Input
          accept="application/pdf"
          id="file-input"
          type="file"
          onChange={handleFileChange}
          sx={{display:'none'}}
        />
        <label htmlFor="file-input">
          <Button variant="contained" component="span" sx={{color:'white !important',marginLeft:'1rem',marginTop:'1rem',marginBottom:'1rem'}}>
          Upload PDF File
          </Button>
        </label>
      </FormControl>
      {selectedFile && (
        <div>
          <p style={{marginLeft:'1rem'}}>Selected File: {selectedFile.name}</p>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            sx={{color:'white !important',marginLeft:'1rem',marginTop:'1rem'}}
          >
            Upload
          </Button>
        </div>
      )}
    </div>
    <MDBox sx={{marginBottom:'1rem',display:'flex',justifyContent: 'flex-end',marginRight:'1rem'}}>
        <Button type="submit" variant="contained" sx={{color:'white !important'}}>Submit</Button>
      </MDBox>
      </Card>
    </DashboardLayout>
    </form>
  )
}

export default ArrigmentTable