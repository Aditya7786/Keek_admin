import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCampaign from "../Manage/CampaignManagement/AddCampaign/AddCampaign";
import LiveCampaign from "../Manage/CampaignManagement/LiveCampaign/LiveCampaign";
import PastCampaign from "../Manage/CampaignManagement/PastCampaign/PastCampaign";
import DraftCampaign from "../Manage/CampaignManagement/DraftCampaign/DraftCampaign";
import ManageCampaign from "../Manage/CampaignManagement/ManageCampaign/ManageCampaign";
import ShortlistedPage from "../Manage/CampaignManagement/ManageCampaign/ManageCampaignPages/ShortlistedPage";
import ApprovedPage from "../Manage/CampaignManagement/ManageCampaign/ManageCampaignPages/ApprovedPage";
import RejectedPage from "../Manage/CampaignManagement/ManageCampaign/ManageCampaignPages/RejectedPage";
import AIRecommendPage from "../Manage/CampaignManagement/ManageCampaign/ManageCampaignPages/AIRecommendPage";
import Dashboard from "../Manage/Dashboard/Dashboard";
import RoiComp from "../Manage/Dashboard/RoiReport";
import PieChartComponent from "../Manage/Dashboard/PieChartComponent";
import InvestComp from "../Manage/Dashboard/InvestComp";
import CampaignComponent from "../Manage/Dashboard/CampaignComponent";
import BarGraph from "../Manage/Dashboard/BarGraph";
import Payment from "../Manage/Payment/Payment";
import Influencers from "../Manage/DiscoverInfluencers/Influencers";
import SavedList from "../Manage/DiscoverInfluencers/SavedList";
import SavedListCards from "../Manage/DiscoverInfluencers/SavedListCards";
import BrandsProfile from "../Manage/BrandsProfile/BrandsProfile";
import Profile from "../Manage/BrandsProfile/Profile";
import Settings from "../Manage/Settings/Settings";

const MainRouter = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Dashboard" element={<Dashboard />} />

      <Route path="/discoverInfluencers" element={<Influencers />} />
      
        <Route path="/CampaignManagement" element={<LiveCampaign />} />

        <Route
          path="/payments"
          element={<Payment />}
        />
        <Route
          path="/Analytics"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Analytics
            </div>
          }
        />
        
        <Route path="/manageCampaign" element={<ManageCampaign />}/>
        
        <Route path="/Shortlisted" element={<ShortlistedPage />} />

        <Route path="/Approved" element={<ApprovedPage />} />
        <Route path="/Rejected" element={<RejectedPage />} />

        <Route path="/AIRecommended" element={<AIRecommendPage />} />

        <Route
          path="/influencersBase"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              influencersBase
            </div>
          }
        />
        <Route
          path="/settings"
        
          element={<Settings />}
        />
        <Route
          path="/Support"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Support
            </div>
          }
        />

<Route path="/AddCampaign" element={<AddCampaign />} />


        <Route path="/PastCampaign" element={<PastCampaign />} />
        <Route path="/DraftCampaign" element={<DraftCampaign />} />

        <Route path="/RoiComp" element={<RoiComp />} />
        <Route path="/InvestComp" element={<InvestComp />} />
        <Route path="/CampaignComponent" element={<CampaignComponent />} />
        <Route path="/BarGraph" element={<BarGraph />} />
        <Route path="/PieChartComponent" element={<PieChartComponent />} />

        <Route path="/savedlist" element={<SavedList/>} />
        <Route path="/savedlist/:name" element={<SavedListCards/>} />
       

{/* Brand */}

<Route
          path="/BrandsProfile"
          element={
            <BrandsProfile />
          }
        /> 


<Route
          path="/Profile"
          element={
            <Profile />
          }
        /> 

      </Routes>
    </>
  );
};

export default MainRouter;