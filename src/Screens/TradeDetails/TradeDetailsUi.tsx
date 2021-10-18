import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { SelectChangeEvent } from "@mui/material/Select";
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
  SCRIP_NAME: string;
  TRADE_TIME: string;
  ORDER_NUMBER: string;
  TRADE_NUMBER: string;
  TRADE_TYPE: string;
  // data need to populated for QTY
  QTY: string;
  BUY_PRICE: string;
  // company: {
  //   name: string;
  // };
}
export type TUserList = User[];
const TradeDetailsUi = () => {
  const [age, setAge] = React.useState("");
  const [segment, setSegment] = React.useState("");
  const [value, setValue] = React.useState<Date | null>(null);
  const [ledgerDetails, setLedgerDetails] = useState<TUserList>();
  useEffect(() => {
    // console.log(TradeDetails);
    axios
      .post<TUserList>("http://localhost:3001/createData")
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
              Trade Book/Trade History Report
            </h4>
          </div>
          <div>
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
          <Col sm="2">
            <FormControl variant="outlined" sx={{ minWidth: 200 }}>
              <InputLabel variant="outlined" id="demo-simple-select-label">
                Segment
              </InputLabel>
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Segment"
                onChange={handleChange}
              >
                <MenuItem value="Equity">Equity</MenuItem>
                <MenuItem value="Futures & Options">Futures & Options</MenuItem>
                <MenuItem value="Currency">Currency</MenuItem>
                <MenuItem value="Commodity">Commodity</MenuItem>
              </Select>
            </FormControl>
          </Col>
          {/* <Col sm="2">
            <div className="outlined-input-field">
              <select id="selectLocation" className="outlined-select-field">
                <option value="" disabled selected></option>
                <option value="Equity">Equity</option>
                <option value="Futures & Options">Futures & Options</option>
                <option value="Currency">Currency</option>
                <option value="Commodity">Commodity</option>
              </select>
              <label htmlFor="selectLocation">Segment</label>
              <i className="material-icons dropdown-icon">arrow_drop_down</i>
            </div>
          </Col> */}
          <Col sm="2">
            <FormControl variant="outlined" sx={{ minWidth: 200 }}>
              <InputLabel variant="outlined" id="demo-simple-select-label">
                Symbol
              </InputLabel>
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={segment}
                label="Symbol"
                onChange={handleChangeSegment}
              >
                <MenuItem value="IDEA">IDEA</MenuItem>
              </Select>
            </FormControl>
          </Col>
          {/* <Col>
            <div className="outlined-input-field">
              <select id="selectSymbol" className="outlined-select-field">
                <option value="" disabled selected></option>
                <option value="IDEA">IDEA</option>
              </select>
              <label htmlFor="selectSymbol">Symbol</label>
              <i className="material-icons dropdown-icon">arrow_drop_down</i>
            </div>
          </Col> */}
          <Col sm="2">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="From Date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                // maxDate={maxDate}
              />
            </LocalizationProvider>
          </Col>
          <Col sm="2">
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
          <Col>
            <Button
              style={{
                height: "52px",
                width: "50px",
                // paddingBottom: "15px",
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
                <td>SYMBOL</td>
                <td>TRADE TIME</td>
                <td>ORDER ID</td>
                <td>TRADE ID</td>
                <td>TYPE</td>
                <td>QTY</td>
                <td>PRICE</td>
              </tr>
            </thead>
            <tbody>
              {ledgerDetails.map((el) => (
                <tr>
                  <td>{el.SCRIP_NAME}</td>
                  <td>{el.TRADE_TIME}</td>
                  <td>{el.ORDER_NUMBER}</td>
                  <td>{el.TRADE_NUMBER}</td>
                  {/* <td>{el.VOUCHERDATE}</td> */}
                  {/* <td>{el.TRANS_TYPE}</td> */}
                  <td>{el.QTY}</td>
                  <td>{el.BUY_PRICE}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Box>
    </>
  );
};

export default TradeDetailsUi;
