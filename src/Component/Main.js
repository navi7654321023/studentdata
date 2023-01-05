import React, { useEffect, useState } from "react";
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
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

function Fetchjsondata() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedOptionClass, setSelectedOptionClass] = useState([]);
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

  useEffect(() => {
    setSelectedOptionClass(Userdata);
  }, []);

  const handleChangeClass = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleChangeSubject = (event) => {
    setSelectedSubject(event.target.value);
  };

  const handleChangeSection = (event) => {
    setSelectedSection(event.target.value);
  };

  useEffect(() => {
    const selectedOptionClass = Userdata.filter(
      (users) =>
        (selectedClass === "" || users.className === selectedClass) &&
        (selectedSubject === "" || users.subject === selectedSubject) &&
        (selectedSection === "" || users.section === selectedSection)
    );
    setSelectedOptionClass(selectedOptionClass);
  }, [selectedClass, selectedSubject, selectedSection]);

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

  return (
    <>
      <Container>
        <h1>Search students data from record</h1>
        <div className="padding">
          <FormControl className="input">
            <InputLabel>CLASS</InputLabel>
            <Select
              label="CLASS"
              value={selectedClass}
              onChange={handleChangeClass}
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
              value={selectedSection}
              onChange={handleChangeSection}
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
              value={selectedSubject}
              onChange={handleChangeSubject}
            >
              {showArrayForSubject.map((users) => (
                <MenuItem value={users}>{users}</MenuItem>
              ))}
            </Select>
          </FormControl>
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
