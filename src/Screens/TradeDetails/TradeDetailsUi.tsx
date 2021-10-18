import React from "react";
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

const TradeDetailsUi = () => {
  const [age, setAge] = React.useState("");
  const [segment, setSegment] = React.useState("");
  const [value, setValue] = React.useState<Date | null>(null);

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
          {/* <Col sm="2">
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
          </Col> */}
          <Col sm="2">
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
          </Col>
          {/* <Col sm="2">
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
          </Col> */}
          <Col sm="2">
            <div className="outlined-input-field">
              <select id="selectSymbol" className="outlined-select-field">
                <option value="" disabled selected></option>
                <option value="IDEA">IDEA</option>
              </select>
              <label htmlFor="selectSymbol">Symbol</label>
              <i className="material-icons dropdown-icon">arrow_drop_down</i>
            </div>
          </Col>
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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@fat</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <td>15</td>
              <td>@twitter</td>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </>
  );
};

export default TradeDetailsUi;
