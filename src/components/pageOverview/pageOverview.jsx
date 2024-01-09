import { React, useState } from "react";
import "./pageOverview.css";
import Overview from "../layout/Overview";
const PageOverview = () => {
  const [price, setPrice] = useState("23,92,312.19");
  return (
    <div className="page-overview">
      <div className="overview-top">
        <div className="overview-name">Overview</div>
        <div className="dropdown">
          <select className="select-drop">
            <option>Last Month</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>
      <div className="overview-bottom">
        <Overview name=" Online orders" amount="231" />
        <Overview name="Amount received" amount={'₹'+price}  />
      </div>
    </div>
  );
};

export default PageOverview;