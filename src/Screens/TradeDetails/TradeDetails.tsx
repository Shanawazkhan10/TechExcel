import React from "react";
import DetailsTable from "./DetailsTable";
import DateRangePicker, { DateRange } from "@mui/lab/DateRangePicker";

const TradeDetails = () => {
  const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
  return (
    <div>
      <h1>TRADE DETAILS</h1>
      <div className="mt-5">
        <DetailsTable />
      </div>
    </div>
  );
};

export default TradeDetails;
