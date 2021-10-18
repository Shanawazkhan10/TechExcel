import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { SelectChangeEvent } from "@mui/material/Select";
import axios from "axios";
import {
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  Box,
  TextField,
  Button,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { BsFileEarmarkExcel } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import "./style.css";
interface User {
  COCD: string;
  CONAME: string;
  DR_AMT: string;
  CR_AMT: string;
  VOUCHERDATE: string;
  TRANS_TYPE: string;
  VOUCHERNO: string;
  NARRATION: string;
  // company: {
  //   name: string;
  // };
}
export type TUserList = User[];
const LedgerUi = () => {
  const [age, setAge] = React.useState("");
  const [segment, setSegment] = React.useState("");
  const [value, setValue] = React.useState<Date | null>(null);
  const [ledgerDetails, setLedgerDetails] = useState<TUserList>();
  useEffect(() => {
    // console.log(TradeDetails);
    axios
      .post<TUserList>("http://localhost:3001/LedgerDetails")
      .then((response) => {
        console.log(response.data.length);
        if (response.data.length !== undefined) {
          setLedgerDetails(response.data);
          console.log(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  const handleChangeSegment = (event: SelectChangeEvent) => {
    setSegment(event.target.value);
  };

  //   const maxDate = () => {
  //     var date = new Date();
  //     date.setFullYear(date.getUTCFullYear() - 1);
  //     return date;
  //   };
  return (
    <>
      {/* <Container> */}
      <Box
        style={{ marginTop: "2rem", marginLeft: "1rem", marginRight: "1rem" }}
      >
        <div
          style={{
            // border: "1px solid black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h4>
              <MdOutlineAssignment
                //   size="md"
                style={{ color: "blue", fontSize: "35" }}
              />{" "}
              Ledger Report
            </h4>
          </div>
          <div>
            {" "}
            <Button>
              <BsFileEarmarkExcel
                style={{ margin: "0.3rem", color: "green", fontSize: "20" }}
              />
            </Button>
            <Button>
              <BsFileEarmarkPdfFill
                style={{ margin: "0.3rem", color: "red", fontSize: "20" }}
              />
            </Button>
          </div>
        </div>

        <br />
        <Row
          className="outer-style"
          style={{
            // border: "1px solid black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            // marginLeft: "5px",
          }}
        >
          <Col md="2" style={{ marginRight: "1rem" }}>
            <FormControl variant="outlined" sx={{ minWidth: 200 }}>
              <InputLabel variant="outlined" id="demo-simple-select-label">
                Financial year
              </InputLabel>
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="financial year"
                onChange={handleChange}
              >
                <MenuItem value="2020-21">2020-21</MenuItem>
              </Select>
            </FormControl>
          </Col>
          {/* <Col>
            <div className="outlined-input-field">
              <select id="selectLocation" className="outlined-select-field">
                <option value="" disabled selected></option>
                <option value="Asia">2020-21</option>
              </select>
              <label htmlFor="selectLocation">Financial year</label>
              <i className="material-icons dropdown-icon">arrow_drop_down</i>
            </div>
          </Col> */}
          <Col md="2">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="From Date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Col>
          <Col md="2">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="To Date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Col>
          <Col md="2">
            <FormControl variant="outlined" sx={{ minWidth: 200 }}>
              <InputLabel variant="outlined" id="demo-simple-select-label">
                Segments
              </InputLabel>
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={segment}
                label="Segments"
                onChange={handleChangeSegment}
              >
                <MenuItem value="All Segments" disabled>
                  Segments
                </MenuItem>
                <MenuItem value="All Segments">Equity</MenuItem>
                <MenuItem value="All Segments">Commodity</MenuItem>
                <MenuItem value="All Segments">Currency</MenuItem>
              </Select>
            </FormControl>
          </Col>
          {/* <Col sm="3">
            <div className="outlined-input-field">
              <select id="selectLocation" className="outlined-select-field">
                <option value="" disabled selected></option>
                <option value="Equity">Equity</option>
                <option value="Commodity">Commodity</option>
                <option value="Currency">Currency</option>
              </select>
              <label htmlFor="selectLocation">Segments</label>
              <i className="material-icons dropdown-icon">arrow_drop_down</i>
            </div>
          </Col> */}
          <Col>
            <Button
              style={{
                height: "52px",
                width: "50px",
              }}
              variant="contained"
              size="large"
            >
              Go
            </Button>
          </Col>
        </Row>

        {ledgerDetails && (
          <table
            className="table table-borderless"
            style={{ marginTop: "10px", padding: "5px" }}
          >
            <thead
              style={{
                borderTop: "1px solid 	#D3D3D3",
                borderBottom: "1px solid 	#D3D3D3",
              }}
            >
              <tr>
                <td>COCD</td>
                <td>CONAME</td>
                <td>DR_AMONUT</td>
                <td>CR_AMOUNT</td>
                <td>TRANS_TYPE</td>
                <td>NARRATION</td>
              </tr>
            </thead>
            <tbody>
              {ledgerDetails.map((el) => (
                <tr>
                  <td>{el.COCD}</td>
                  <td>{el.CONAME}</td>
                  <td>{el.DR_AMT}</td>
                  <td>{el.CR_AMT}</td>
                  {/* <td>{el.VOUCHERDATE}</td> */}
                  {/* <td>{el.TRANS_TYPE}</td> */}
                  <td>{el.VOUCHERNO}</td>
                  <td>{el.NARRATION}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Box>

      {/* </Container> */}
    </>
  );
};

export default LedgerUi;
