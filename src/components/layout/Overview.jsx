import React from 'react'

function Overview({name, amount}) {
  return (
    <div style={{marginRight:'0.5rem'}} className='overview-order'>
    <div className='online-order'>
     {name}
    </div>
    <div className='order-value'>
    {amount}
    </div>
  </div>
  )
}

export default Overview