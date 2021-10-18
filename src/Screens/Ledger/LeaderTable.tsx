import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import MaterialTable from "material-table";
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
const LeaderTable = () => {
  const [ledgerDetails, setLedgerDetails] = useState<TUserList>();
  useEffect(() => {
    // console.log(TradeDetails);
    axios
      .post<TUserList>("http://localhost:3001/LedgerDetails")
      .then((response) => {
        console.log(response.data.length);
        if (response.data.length !== undefined) {
          setLedgerDetails(response.data);
          //   console.log(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>LEDGER REPORT</h1>
      <div className="outlined-input-field">
        {/* <i className="material-icons">my_location</i> */}
        <select id="selectLocation" className="outlined-select-field">
          <option value="" disabled selected></option>
          <option value="Asia">Asia</option>
          {/* <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option> */}
          <option value="South America">South America</option>
          <option value="Australia">Australia</option>
          <option value="Antarctica">Antarctica</option>
        </select>
        <label htmlFor="selectLocation">Select your location</label>
        <i className="material-icons dropdown-icon">arrow_drop_down</i>
      </div>
      <br />
      <div className="outlined-input-field">
        {/* <i className="material-icons">account_circle</i> */}
        <input
          type="text"
          id="username"
          autoComplete="off"
          className="outlined-text-field"
        />
        <label htmlFor="username">Username</label>
        <i className="material-icons warning-icon">warning</i>
        <i className="material-icons error-icon">error_outline</i>
        <div className="helper-text"></div>
        <i className="material-icons dropdown-icon">arrow_drop_down</i>
      </div>
      {/* <MaterialTable
        columns={[
          { title: "COCD", field: "COCD" },
          { title: "CONAME", field: "CONAME" },
          { title: "DR_AMT", field: "DR_AMT" },
        ]}
        data={[
          {
            COCD: "cedc",
            surname: "Baran",
            birthYear: 1987,
          },
        ]}
        title="Demo Title"
      /> */}
      <div className="container">
        <div className="row">
          {ledgerDetails && (
            <table
              id="example"
              className="table  table-bordered"
              // cellspacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th>COCD</th>
                  <th>CONAME</th>
                  <th>DR_AMT</th>
                  <th>CR_AMT</th>
                  {/* <th>VOUCHERDATE</th> */}
                  {/* <th>TRANS_TYPE</th> */}
                  <th>VOUCHERNO</th>
                  <th>NARRATION</th>
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
        </div>
      </div>
    </div>
  );
};

export default LeaderTable;
