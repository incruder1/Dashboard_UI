import React, { Fragment } from 'react'
import './sideNav.css'
import logoImg from '../../assets/store_logo.png'
import { GrHomeRounded } from "react-icons/gr";
import { PiNotepadBold, PiSpeakerSimpleHighBold, PiChartBarBold, PiNavigationArrowBold } from "react-icons/pi";
import { FiGrid, FiTruck } from "react-icons/fi";
import { MdPayments, MdOutlineColorLens } from "react-icons/md";
import { TbDiscount2, TbUsers } from "react-icons/tb";
import { TiFlashOutline } from "react-icons/ti";
import { FaChevronDown } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";



const SideNav = () => {
    return (
        <div className='main-side-div'>
            <div className='side-nav'>
                <div className='sidenav-storeinfo'>
                    <div className='storelogo'>
                        {/* <div className='imagSquare'> */}
                        <img className='logoImg' src={logoImg} alt="" />
                        {/* </div> */}
                    </div>
                    <div className='storename-section'>
                        <div className='storename'>
                            Nishyan
                        </div>
                        <div className='storelink'>
                            Visit store
                        </div>
                    </div>
                    <div className='storedropdown'>
                        <FaChevronDown />
                    </div>
                </div>
                <div className='sidenav-pages'>
                    <div className='page-section'>
                        <div className='page-icon'>
                            <GrHomeRounded />
                        </div>
                        <div className='page-name'>
                            Home
                        </div>
                    </div>
                    <div className='page-section'>
                        <div className='page-icon'>
                            <PiNotepadBold />
                        </div>
                        <div className='page-name'>
                            Orders
                        </div>
                    </div>
                    <div className='page-section'>
                        <div className='page-icon'>
                            <FiGrid />
                        </div>
                        <div className='page-name'>
                            Products
                        </div>
                    </div>
                    <div className='page-section'>
                        <div className='page-icon'>
                            <FiTruck />
                        </div>
                        <div className='page-name'>
                            Delivery
                        </div>
                    </div>
                    <div className='page-section'>
                        <div className='page-icon'>
                            <PiSpeakerSimpleHighBold />
                        </div>
                        <div className='page-name'>
                            Marketing
                        </div>
                    </div>
                    <div className='page-section'>
                        <div className='page-icon'>
                            <PiChartBarBold />
                        </div>
                        <div className='page-name'>
                            Analytics
                        </div>
                    </div>
                    <div className='page-section active'>
                        <div className='page-icon'>
                            <MdPayments />
                        </div>
                        <div className='page-name'>
                            Payments
                        </div>
                    </div>
                    <div className='page-section'>
                        <div className='page-icon'>
                            <PiNavigationArrowBold />
                        </div>
                        <div className='page-name'>
                            Tools
                        </div>
                    </div>
                    <div className='page-section'>
                        <div className='page-icon'>
                            <TbDiscount2 />
                        </div>
                        <div className='page-name'>
                            Discount
                        </div>
                    </div>
                    <div className='page-section'>
                        <div className='page-icon'>
                            <TbUsers />
                        </div>
                        <div className='page-name'>
                            Audience
                        </div>
                    </div>
                    <div className='page-section'>
                        <div className='page-icon'>
                            <MdOutlineColorLens />
                        </div>
                        <div className='page-name'>
                            Appearance
                        </div>
                    </div>
                    <div className='page-section'>
                        <div className='page-icon'>
                            <TiFlashOutline />
                        </div>
                        <div className='page-name'>
                            Plugins
                        </div>
                    </div>
                </div>
            </div>
            <div className='side-nav-credits'>
                <div className='sidenav-bottom'>
                    <div className='credits-icon'>
                        <div className='final-icon'>
                            <CiWallet />
                        </div>
                    </div>
                    <div className='credits-info'>
                        <div className='credits-name'>
                            Available credits
                        </div>
                        <div className='credits-amount'>
                            221.10
                        </div>
                    </div>
                </div>
                {/* <div className='sidenav-credits'>
                    <div className='credits-icon'>

                    </div>
                    <div className='credits-info'>
                        <div className='credits-name'>
                            Available credits
                        </div>
                        <div className='credits-amount'>
                            221.10
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default SideNav;