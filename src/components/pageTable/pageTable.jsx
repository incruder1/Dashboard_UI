import React from 'react'
import './pageTable.css'
import { IoSearchSharp } from "react-icons/io5";
import { BiSortAlt2 } from "react-icons/bi";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const PageTable = () => {
  return (
    <div className='page-table'>
      <div className='table-title'>
        Transactions | This Month
      </div>

      <div className='table-main'>
        <div className='table-top'>
          <div className='table-search'>
            <div className='search-icon search-iconn'>
              <IoSearchSharp />
            </div>
            <div className='search-input search-inputt'>
              <input
                className='input-box input-boxx'
                type='text'
                placeholder='Search by order ID'
              />
            </div>
          </div>
          <div className='table-filter-download'>
            <div className='table-filter'>
              Sort
              <BiSortAlt2 />
            </div>
            <div className='table-download'>
              <PiDownloadSimpleBold />
            </div>

          </div>
        </div>
        <div className='table-content'>
          <div className='content-title'>
            <div style={{ justifyContent: 'flex-start' }} className='title-headers'>Order ID</div>
            <div style={{ justifyContent: 'flex-start' }} className='title-headers'>Order date <IoMdArrowDropdown />
            </div>
            <div style={{ justifyContent: 'flex-end' }} className='title-headers'>Order amount</div>
            <div style={{ justifyContent: 'flex-end' }} className='title-headers'>Transactions fees <CiCircleInfo />
            </div>

          </div>
          <div className='content-data'>
            <div style={{ justifyContent: 'flex-start', color: '#146EB4' }} className='data-value'>#281209</div>
            <div style={{ justifyContent: 'flex-start' }} className='data-value'>7 July, 2023</div>
            <div style={{ justifyContent: 'flex-end' }} className='data-value'>₹1,278.23</div>
            <div style={{ justifyContent: 'flex-end' }} className='data-value'>₹22</div>

          </div>
          <div className='content-data'>
            <div style={{ justifyContent: 'flex-start', color: '#146EB4' }} className='data-value'>#281209</div>
            <div style={{ justifyContent: 'flex-start' }} className='data-value'>7 July, 2023</div>
            <div style={{ justifyContent: 'flex-end' }} className='data-value'>₹1,278.23</div>
            <div style={{ justifyContent: 'flex-end' }} className='data-value'>₹22</div>

          </div>
          <div className='content-data'>
            <div style={{ justifyContent: 'flex-start', color: '#146EB4' }} className='data-value'>#281209</div>
            <div style={{ justifyContent: 'flex-start' }} className='data-value'>7 July, 2023</div>
            <div style={{ justifyContent: 'flex-end' }} className='data-value'>₹1,278.23</div>
            <div style={{ justifyContent: 'flex-end' }} className='data-value'>₹22</div>

          </div>
          <div className='content-data'>
            <div style={{ justifyContent: 'flex-start', color: '#146EB4' }} className='data-value'>#281209</div>
            <div style={{ justifyContent: 'flex-start' }} className='data-value'>7 July, 2023</div>
            <div style={{ justifyContent: 'flex-end' }} className='data-value'>₹1,278.23</div>
            <div style={{ justifyContent: 'flex-end' }} className='data-value'>₹22</div>

          </div>
          <div className='content-data'>
            <div style={{ justifyContent: 'flex-start', color: '#146EB4' }} className='data-value'>#281209</div>
            <div style={{ justifyContent: 'flex-start' }} className='data-value'>7 July, 2023</div>
            <div style={{ justifyContent: 'flex-end' }} className='data-value'>₹1,278.23</div>
            <div style={{ justifyContent: 'flex-end' }} className='data-value'>₹22</div>

          </div>
          <div className='content-data'>
            <div style={{ justifyContent: 'flex-start', color: '#146EB4' }} className='data-value'>#281209</div>
            <div style={{ justifyContent: 'flex-start' }} className='data-value'>7 July, 2023</div>
            <div style={{ justifyContent: 'flex-end' }} className='data-value'>₹1,278.23</div>
            <div style={{ justifyContent: 'flex-end' }} className='data-value'>₹22</div>

          </div>
          <div className='content-data'>
            <div style={{ justifyContent: 'flex-start', color: '#146EB4' }} className='data-value'>#281209</div>
            <div style={{ justifyContent: 'flex-start' }} className='data-value'>7 July, 2023</div>
            <div style={{ justifyContent: 'flex-end' }} className='data-value'>₹1,278.23</div>
            <div style={{ justifyContent: 'flex-end' }} className='data-value'>₹22</div>

          </div>
        </div>
        <div className='table-bottom'>
          <div className='indicators'><FaAngleLeft />
            Previous</div>
          <div className='indicators-numbers'>1</div>
          <div className='indicators-numbers'>...</div>
          <div className='indicators-numbers indicator-active'>10</div>
          <div className='indicators-numbers'>11</div>
          <div className='indicators-numbers'>12</div>
          <div className='indicators-numbers'>13</div>
          <div className='indicators-numbers'>14</div>
          <div className='indicators-numbers'>15</div>
          <div className='indicators-numbers'>16</div>
          <div className='indicators-numbers'>17</div>
          <div className='indicators-numbers'>18</div>
          <div className='indicators'>Next <FaAngleRight /></div>

        </div>

      </div>


    </div>
  )
}

export default PageTable