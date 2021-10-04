import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
  RouteProps,
} from "react-router-dom";
import "./App.css";
import Leader from "./Screens/Ledger/Leader";
import TradeHistory from "./Screens/TradeHistory/TradeHistory";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Leader} />
            <Route exact path="/TradeHistory" component={TradeHistory} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
