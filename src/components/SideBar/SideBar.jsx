import "./SideBar.css";
import logoImg from "../../assets/store_logo.png";
import { GrHomeRounded } from "react-icons/gr";
import {
  PiNotepadBold,
  PiSpeakerSimpleHighBold,
  PiChartBarBold,
  PiNavigationArrowBold,
} from "react-icons/pi";
import { FiGrid, FiTruck } from "react-icons/fi";
import { MdPayments, MdOutlineColorLens } from "react-icons/md";
import { TbDiscount2, TbUsers } from "react-icons/tb";
import { TiFlashOutline } from "react-icons/ti";
import { FaChevronDown } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import PageSection from "../layout/pageSection";

const SideNav = () => {
  return (
    <div className="main-side-div">
      <div className="side-nav">
        <div className="sidenav-storeinfo">
          <div className="storelogo">
            <img className="logoImg" src={logoImg} alt="" />
          </div>
          <div className="storename-section">
            <div className="storename">Nishyan</div>
            <div className="storelink">Visit store</div>
          </div>
          <div className="storedropdown">
            <FaChevronDown />
          </div>
        </div>
        <div className="sidenav-pages">
          <PageSection IconComponent={GrHomeRounded} pageName="Home" />
          <PageSection IconComponent={PiNotepadBold} pageName="Orders" />
          <PageSection IconComponent={FiGrid} pageName="Grid" />
          <PageSection IconComponent={FiTruck} pageName="Delivery" />
          <PageSection
            IconComponent={PiSpeakerSimpleHighBold}
            pageName="Marketing"
          />
          <PageSection IconComponent={PiChartBarBold} pageName="Analytics" />
          <div className="page-section active">
            <PageSection IconComponent={MdPayments} pageName="Payments" />
          </div>

          <PageSection IconComponent={PiNavigationArrowBold} pageName="Tools" />
          <PageSection IconComponent={TbDiscount2} pageName="Discount" />
          <PageSection IconComponent={TbUsers} pageName="Audience" />
          <PageSection
            IconComponent={MdOutlineColorLens}
            pageName="Appearance"
          />
          <PageSection IconComponent={TiFlashOutline} pageName="Plugins" />
        </div>
      </div>
      <div className="side-nav-credits">
        <div className="sidenav-bottom">
          <div className="credits-icon">
            <div className="final-icon">
              <CiWallet />
            </div>
          </div>
          <div className="credits-info">
            <div className="credits-name">Available credits</div>
            <div className="credits-amount">221.10</div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SideNav;
