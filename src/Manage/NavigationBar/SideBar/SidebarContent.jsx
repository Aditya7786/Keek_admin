import React from 'react';
import SideBar, { SidebarItem, SidebarContext } from './SideBar';
import { Settings, Headphones } from 'lucide-react';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgUserList } from "react-icons/cg"
import { CgCrown } from "react-icons/cg";
import { MdAttachMoney } from "react-icons/md";

import { Link } from 'react-router-dom';
import { LuPieChart } from "react-icons/lu";


const SidebarContent = () => {
  return (
    <div className="max-w-[311px]  ">
      <SideBar>
      <Link to={"/Dashboard"}>
          <SidebarItem icon={<MdOutlineDashboardCustomize size={20} />} text="Dashboard" />
        </Link>

        <Link to={"/CampaignManagement"}>
          <SidebarItem icon={<CgCrown size={20} />} text="Campaign Management" />
        </Link>


        <Link to={"/discoverInfluencers"}>
          <SidebarItem
            icon={<CgUserList size={20} />}
            text="Discover Influencers"
          />
        </Link>
  
        <Link to={"/payments"}>
          <SidebarItem icon={<MdAttachMoney size={20} />} text="Payments" />
        </Link>
        <Link to={"/Analytics"}>
          <SidebarItem icon={<LuPieChart size={20} />} text="Analytics" />
        </Link>
      
        <SidebarContext.Consumer>
          {({ expanded }) =>
            expanded ? (
              <p className="ml-0 text-gray-500 mt-4 mb-4">Account</p>
            ) : (
              <hr className="my-4 border-gray-200" />
            )
          }
        </SidebarContext.Consumer>
        <Link to={"/settings"}>
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
        </Link>
        <Link to={"/Support"}>
          <SidebarItem icon={<Headphones size={20} />} text="Help & Support" />
        </Link>
       
      </SideBar>
    </div>
  );
};

export default SidebarContent;
