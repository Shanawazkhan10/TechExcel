import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSVLink } from "react-csv";
// import "./style.css";
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
const LeaderTable = () => {
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
  return (
    <div>
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
                  <th>SYMBOL</th>
                  <th>TRADE TIME</th>
                  <th>ORDER ID</th>
                  <th>TRADE ID</th>
                  {/* <th>VOUCHERDATE</th> */}
                  {/* <th>TRANS_TYPE</th> */}
                  <th>TYPE</th>
                  <th>QTY</th>
                  <th>PRICE</th>
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
        </div>
      </div>
    </div>
  );
};

export default LeaderTable;
