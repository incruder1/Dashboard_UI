import React from 'react';
import './pageContent.css';
import NavBar from "../navBar/navBar"
import PageOverview from '../pageOverview/pageOverview';
import PageTable from '../pageTable/pageTable';
const PageContent = () => {
  return (
    <div className='page-content'>
      <NavBar />
      <PageOverview />
      <PageTable />
    </div>
  )
}

export default PageContent