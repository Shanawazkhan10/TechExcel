import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom";
import "./App.css";
import Table from "./Screens/demoTable.tsx/table";
import Leader from "./Screens/Ledger/Leader";
// import Tradede from "./Screens/TradeHistory/TradeHistory";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import TradeDetails from "./Screens/TradeDetails/TradeDetails";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Leader} />
            <Route exact path="/Table" component={Table} />
            <Route exact path="/TradeDetails" component={TradeDetails} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
