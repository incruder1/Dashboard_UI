import React from 'react'
import './pageOverview.css';
const PageOverview = () => {
  return (
    <div className='page-overview'>
      <div className='overview-top'>
        <div className='overview-name'>
          Overview
        </div>
        <div className='dropdown'>
          <select className='select-drop'>
            <option>Last Month</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>
      <div className='overview-bottom'>
        <div style={{marginRight:'0.5rem'}} className='overview-orders'>
          <div className='online-orders'>
            Online orders
          </div>
          <div className='order-value'>
            231
          </div>
        </div>
        <div style={{marginLeft:'0.5rem'}} className='overview-orders'>
          <div className='online-orders'>
            Amount received
          </div>
          <div className='order-value'>
            ₹23,92,312.19
          </div>
        </div>
      </div>

    </div>
  )
}

export default PageOverview