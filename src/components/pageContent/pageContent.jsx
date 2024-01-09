import React from "react";
import "./pageContent.css";
import Header from "../layout/Header/Header";
import PageOverview from "../pageOverview/pageOverview";
import PageTable from "../pageTable/pageTable";
const PageContent = () => {
  return (
    <div className="page-content">
      <Header />
      <PageOverview />
      <PageTable />
    </div>
  );
};

export default PageContent;
