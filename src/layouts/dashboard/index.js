/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import Card from "@mui/material/Card";
// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import { DataGrid } from "@mui/x-data-grid";
// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { Button } from "@mui/material";
import { Slide, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
/* eslint-disable prettier/prettier */
function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  const handleButtonClick = async (row) => {
    const report = row.report;
    let link = ""
    if(report == 'Worker per project'){
      link = "worker_per_project_report"
    }else if(report == 'Worker Report'){
      link = "worker_report"
    }else if(report == 'Project Report'){
      link = "project_report"
    }else if(report == 'Daily work Report'){
      link = "dailywork_report"
    }
    const response = await fetch(''+process.env.REACT_APP_API_URL+'/construction/'+ link +'/',{
      // headers: {
      //   'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
      // }
      })
      if (!response.ok){
        console.error("Error Fetching")
        return;
      }
      const responseData = await response.json()
      if(responseData.code != 200){
        console.error("Error getting agreement data")
        return;
      }
      
      toast.success("Report created Successfully", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      window.open(process.env.REACT_APP_API_URL +"/"+ responseData.data, '_blank')
    }
    const [dashboardData , setDashboardData] = useState({})
    const columns = [
    { field: "date", headerName: "Date:", width: 250 },
    { field: "report", headerName: "Report", width: 450 },
    {
      field: 'link',
      headerName: 'Link',
      width: 150,
      renderCell: (params) => (
        <Button onClick={() => handleButtonClick(params.row)}>Download</Button>
      ),}
  ];
  
  const rows = [
    { id: 1, date: new Date().toLocaleDateString('en-CA'), report: 'Worker per project', link: '123 Main St'},
    { id: 2, date: new Date().toLocaleDateString('en-CA'), report: 'Worker Report', link: '456 Elm St'},
    { id: 3, date: new Date().toLocaleDateString('en-CA'), report: 'Project Report', link: '789 Oak St'},
    { id: 4, date: new Date().toLocaleDateString('en-CA'), report: 'Daily work Report', link: '789 Oak St'},
    // Add more rows as needed
  ];
  const fetchDashboardData = async () => {
    const response = await fetch(''+process.env.REACT_APP_API_URL+'/construction/dashboard',{
    // headers: {
    //   'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    // }
    })
    if (!response.ok){
      console.error("Error Fetching dashboard data")
      return;
    }
    const responseData = await response.json()
    if(responseData.code != 200){
      console.error("Error getting dashboard data")
      return;
    }
    // Store the product in the state
    setDashboardData(responseData.data);
  }
  useEffect(()=>{
    fetchDashboardData();
  }, [])
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="store"
                title="Workers"
                count={dashboardData.workers}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="person_add"
                title="Customers"
                count={dashboardData.customers}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="leaderboard"
                title="Projects"
                count={dashboardData.projects}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="weekend"
                title="Sub Contractors"
                count={dashboardData.sub_contractors}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        
      </MDBox>

      
      <Card>
      <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5} // Number of rows per page
          checkboxSelection
          disableSelectionOnClick // Disables row selection on row click
        />
      </Card>
    </DashboardLayout>
  );
}

export default Dashboard;
