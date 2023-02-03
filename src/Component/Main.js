import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./json.css";
import Userdata from "./../userdata.json";
import { Table } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

function Fetchjsondata() {
  const [selectedOptionClass, setSelectedOptionClass] = useState(Userdata);
  const [studentDetails, setStudentDetails] = useState();

  const handleChange = (event) => {
    setStudentDetails({
      ...studentDetails,
      [event.target.name]: event.target.value,
    });
  };

  const filterbtn = () => {
    const filteredData = selectedOptionClass?.filter((elem) => {
      let include = true;
      if (studentDetails?.className) {
        include = include && elem?.className === studentDetails?.className;
      }
      if (studentDetails?.subject) {
        include = include && elem?.subject === studentDetails?.subject;
      }
      if (studentDetails?.section) {
        include = include && elem?.section === studentDetails?.section;
      }
      return include;
    });
    setSelectedOptionClass(filteredData);
    setStudentDetails("");
    console.log("filteredData", filteredData);
  };

  let ArrayForClass = [];
  let ArrayForSection = [];
  let ArrayForSubject = [];

  // eslint-disable-next-line no-lone-blocks
  {
    Userdata?.map((users) => {
      ArrayForClass.push(`${[users.className]}`);
      ArrayForSection.push(`${[users.section]}`);
      ArrayForSubject.push(`${[users.subject]}`);
    });
  }

  let showArrayForClass = [...new Set(ArrayForClass)];
  let showArrayForSection = [...new Set(ArrayForSection)];
  let showArrayForSubject = [...new Set(ArrayForSubject)];

  const handleclick = () => {
    setStudentDetails({
      className:"",
      section:"",
      subject:"",
    });
    setSelectedOptionClass(Userdata);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },

    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <Container>
        <h1>Search students data from record</h1>
        <div className="padding">
          <FormControl className="input">
            <InputLabel>CLASS</InputLabel>
            <Select
              label="CLASS"
              value={studentDetails?.className}
              name="className"
              onChange={handleChange}
            >
              {showArrayForClass.map((users) => (
                <MenuItem value={users}>{users}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl className="input">
            <InputLabel>SECTION</InputLabel>

            <Select
              label="SECTION"
              name="section"
              value={studentDetails?.section}
              onChange={handleChange}
            >
              {showArrayForSection.map((users) => (
                <MenuItem value={users}>{users}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className="input">
            <InputLabel>SUBJECT</InputLabel>
            <Select
              label="SUBJECT"
              name="subject"
              value={studentDetails?.subject}
              onChange={handleChange}
            >
              {showArrayForSubject.map((users) => (
                <MenuItem value={users}>{users}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            style={{
              borderRadius: 35,
              backgroundColor: "black",
              marginLeft: "30px",
              padding: "10px 16px",
              fontSize: "18px",
            }}
            variant="contained"
            onClick={handleclick}
          >
            Clear data
          </Button>
          <Button
            style={{
              borderRadius: 35,
              backgroundColor: "black",
              marginLeft: "30px",
              padding: "10px 16px",
              fontSize: "18px",
            }}
            variant="contained"
            onClick={filterbtn}
          >
            FilterData
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Sr. No.</StyledTableCell>
                <StyledTableCell align="right">User Name</StyledTableCell>
                <StyledTableCell align="right"> className</StyledTableCell>
                <StyledTableCell align="right">Subject</StyledTableCell>
                <StyledTableCell align="right">Section</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedOptionClass.length &&
                selectedOptionClass?.map((users, index) => (
                  <StyledTableRow key={index}>
                    <TableHead>{index + 1}</TableHead>
                    <StyledTableCell align="right">
                      {users.name}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {users.className}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {users.subject}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {users.section}{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
export default Fetchjsondata;
