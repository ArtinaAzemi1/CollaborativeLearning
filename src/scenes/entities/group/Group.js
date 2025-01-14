import React, {useState, useEffect} from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  InputGroup, 
  Input,  
  InputGroupText
} from "reactstrap";
import {Button, Modal, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import theme from '../../../theme'; 
import Header from '../../../components/Header';

const Group =() => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];


    const [groupId, setGroupId] = useState(0);
    const [groupName, setGroupName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [groupsD, setGroupsD]= useState([]);
    const [refreshD, setRefreshD] = useState("");

    useEffect(() => {
      const getGroupsD = async () => {
          try {
              const groupsD = await axios.get(
                  "https://localhost:7110/api/Group"
              );
              setGroupsD(groupsD.data);
          }
          catch (err) {
              console.log(err);
          }
      };
    
      getGroupsD();
    }, [refreshD]);

    /*const tableStyle = {
      overflowX: 'auto',
      display: 'block'
    };

    const minWidthStyle = {
      minWidth: '2000px'
    };*/
  
    return (
        <div className="content">
            <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Group Table</CardTitle>
                <br/>
              </CardHeader>
              <CardBody>
              <Button style={{marginBottom: "20px", marginTop: "20px"}}>Add Group</Button>
              <Container>
                <div >
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Capacity</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            groupsD.map((item, index)=>{
                                return (
                                    <tr key={item.studentId}>
                                        <td>{index + 1}</td>
                                        <td>{item.studentId}</td>
                                        <td>{item.groupName}</td>
                                        <td>{item.year}</td>
                                        <td>{item.capacity}</td>
                                        <td>
                                            <button className="btn btn-primary" ></button> &nbsp;
                                            <button className="btn btn-danger" ></button>
                                        </td>
                                  </tr>
                                )
                            })
                        }
                    </tbody>
                  </Table>
                  </div>
                  </Container>
                  </CardBody>
            </Card>
          </Col>        
        </Row>
        </div>
    )
}

export default Group;