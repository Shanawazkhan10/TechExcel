import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Table from "./Screens/demoTable.tsx/table";
import Leader from "./Screens/Ledger/Leader";
// import Tradede from "./Screens/TradeHistory/TradeHistory";

import TradeDetails from "./Screens/TradeDetails/TradeDetails";
import LedgerUi from "./Screens/Ledger/LedgerUi";
import TradeDetailsUi from "./Screens/TradeDetails/TradeDetailsUi";
import DemoText from "./Component/DemoText";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Leader} />
            <Route exact path="/Table" component={Table} />
            <Route exact path="/TradeDetails" component={TradeDetails} />
            <Route exact path="/LedgerUi" component={LedgerUi} />
            <Route exact path="/TradeDetailsUi" component={TradeDetailsUi} />
            <Route exact path="/Demo" component={DemoText} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
