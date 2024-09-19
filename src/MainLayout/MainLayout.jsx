import React from 'react';
import SidebarContent from '../Manage/NavigationBar/SideBar/SidebarContent';
import MainRouter from '../MainRouter/MainRouter';

const MainLayout = () => {
  return (
    
    <div className="flex max-h-full bg-[#F5F5F5] font-body flex-col ">
      <div >
       <SidebarContent/>     
      </div>
      <div className="flex-row ">
         <MainRouter/>     
      </div>
    </div>
  )
}

export default MainLayout