import React from "react";
import TextField from "@material-ui/core/TextField";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
// import demoFromHTML from "../../public/js/sort";
export default function App() {
  return (
    <div className="App">
      {/* <button
        onClick={() => {
          demoFromHTML();
        }}
      >
        HELLO CLICK PDF
      </button> */}
      <div className="container">
        <table id="table" data-toggle="table">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col" data-sortable="true">
                Last
              </th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
