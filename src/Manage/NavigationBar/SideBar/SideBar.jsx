import React, { createContext, useContext, useState, useEffect } from 'react';
import { MoreVertical, EllipsisVertical } from 'lucide-react';
import logo from "../../../Assets/Logo.jpg";
import white from "../../../Assets/white.jpg";
import profile from "../../../Assets/intersect.jpg";
import { TbMenuDeep } from "react-icons/tb";
import { Mycontext } from '../../../utils/Context';
import { Link, useLocation } from "react-router-dom";


export const SidebarContext = createContext();

const SideBar = ({ children }) => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const setExpanded = contextState.setExpanded;
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);

  // Set the initial selected item based on the current path
  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedItem("Dashboard");
    }
  }, [location.pathname]);

  const User = {
    name: "XYZ",
    role: "Media Analyst"
  };

  return (
    <div>
      <aside className={`fixed h-screen max-w-[311px] z-10 transition-all duration-150 ease-in-out`}>
        <nav className={`h-full flex flex-col bg-white text-left border-r shadow-sm ${expanded ? "w-[311px]" : "w-20"}`}>
          <div className='p-4 pb-2 mt-2 flex items-center'>
            <div className={`relative flex-shrink-0 overflow-hidden transition-all duration-150 ${expanded ? "w-6" : "w-6"}`}>
              <img src={logo} className='block w-full h-auto' alt="Logo" />
              <img src={white} className='absolute rounded-full inset-0 m-auto' style={{ height: '50%', width: '50%' }} alt="White Logo" />
            </div>
            <p className={`ml-2 font-bold overflow-hidden transition-all duration-150 ${expanded ? "w-10" : "w-0"}`}>Keek</p>
            <button onClick={() => setExpanded(curr => !curr)} className='ml-auto rounded-lg bg-gray-50'>
              {expanded ? <TbMenuDeep className='text-3xl mx-[10px]' /> : <EllipsisVertical />}
            </button>
          </div>
          <SidebarContext.Provider value={{ expanded, selectedItem, setSelectedItem }}>
            <ul className='flex-1 space-y-2 mt-10 pl-3'>{children}</ul>
          </SidebarContext.Provider>

              <Link to={"/BrandsProfile"}>
          <div className='border-t  flex p-3'>
            <img src={profile} alt='' className={`w-10 h-10 rounded-md transition-all duration-150 ${expanded ? "w-10 " : "w-0 ml-2"}`} />
            <div className={`flex justify-between items-center overflow-hidden transition-all duration-150 ${expanded ? "w-52 ml-3" : "w-0"}`}>
              <div className='leading-4'>
                <h4 className='font-semibold'>{User.name}</h4>
                <span className='text-xs font-semibold text-gray-600'>{User.role}</span>
              </div>

              <MoreVertical size={20} />

            </div>
          </div>
              </Link>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;

export function SidebarItem({ icon, text, alert, customClass }) {
  const { expanded, selectedItem, setSelectedItem } = useContext(SidebarContext);

  const isSelected = selectedItem === text;

  const handleClick = () => {
    setSelectedItem(text);
  };

  return (
    <li
      onClick={handleClick}
      className={`relative flex items-center mt-0.5 rounded font-medium cursor-pointer transition-colors duration-150
        ${isSelected ? "border-r-4 border-blue-500 text-blue-500" : ""} ${expanded ? "" : "h-10"} ${customClass}`}
      style={{ padding: expanded ? '0.25rem 0.5rem' : '0.25rem', width: expanded ? 'auto' : 'max-content' }}
    >
      <div className='flex items-center'>
        <div className='flex-shrink-0' style={{ width: '20px' }}>
          {icon}
        </div>
        <span className={`overflow-hidden transition-all duration-150 ${expanded ? "w-52 ml-3" : "w-0 p-0 m-0"}`}>{text}</span>
        {alert && (
          <span className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}></span>
        )}
      </div>
      {!expanded && (
        <div className={`absolute left-full rounded-md px-2 py-1 ml-6 text-black text-sm invisible opacity-20 -translate-x-3 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
          {text}
        </div>
      )}
    </li>
  );
}
