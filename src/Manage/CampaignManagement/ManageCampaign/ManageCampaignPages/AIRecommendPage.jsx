import React, { useContext } from "react";
import Instagram from "../../../../Assets/instagram.png";
import Facebook from "../../../../Assets/Facebook.png";
import X from "../../../../Assets/X.png";
import YT from "../../../../Assets/yt.png";
import { Link, useLocation } from "react-router-dom";
import { Mycontext } from "../../../../utils/Context";
import { MdChevronRight } from "react-icons/md";
import ReadMore from "../../Components/ReadMoreComponent";

const AIRecommendPage = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();
  const currentPath = location.pathname;

  const campaignDetails = {
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.",
    compensation: ["Product", "Money"], // Array of compensation types
    targetAudience: ["Men", "Women"], // Array of target audiences
    participants: 10, // Number of participants
    location: ["New Delhi, India", "New Delhi, India", "New Delhi, India"],
  };
  const platforms = [
    {
      name: "Instagram",
      icon: Instagram,
      bgColor: "#FFEDED",
    },
    {
      name: "X",
      icon: X,
      bgColor: "#E3E3E3",
    },
    {
      name: "Facebook",
      icon: Facebook,
      bgColor: "#E4EFFF",
    },
    {
      name: "Youtube",
      icon: YT,
      bgColor: "#FFE4E1",
    },
  ];
  


  return (
    <div
      class={` flex relative ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      }  overflow-y-auto  bg-white space-y-4 p-4 `}
    >
      <div className="flex flex-col">
        <div className="flex flex-row p-6 items-center  border-b-2 gap-[3.14px]">
          <Link
            to="/CampaignManagement"
            className={`text-[16px] font-normal flex flex-row ${
              currentPath === "/CampaignManagement"
                ? "text-blue-700"
                : "text-black"
            }`}
          >
            Campaign Management
            <MdChevronRight className="m-1 items-center" size={"15.7px"} />
          </Link>
          <Link
           
            className={`text-[16px] font-semibold text-[#2463eb] gap-x-2`}
          >
            Manage Campaign
          </Link>
        </div>

        <div className="flex flex-col md:flex-row rounded-lg p-2 overflow-hidden">
          <div className="p-2 space-y-4 h-auto w-full md:w-1/2">
            <div>
              <h2 className="font-body text-[#797A7B] text-[12px] font-normal">
                ABOUT CAMPAIGN
              </h2>
              <p className="font-body text-[16px] font-normal">
                <ReadMore text={campaignDetails.about} maxLength={100} />
              </p>
            </div>
            <div className="mt-2">
              <h3 className="font-body text-[#797A7B] text-[12px] font-normal">
                PLATFORMS:
              </h3>
              <div className="flex gap-2 flex-wrap">
                {platforms.map((platform, idx) => (
                  <div
                    key={idx}
                    className="flex items-center rounded-md px-1"
                    style={{ backgroundColor: platform.bgColor }}
                  >
                    <img src={platform.icon} alt={platform.name} />
                    <span className="px-2 py-1 rounded-full font-body text-[16px] font-normal">
                      {platform.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:w-1/3">
            <div className="space-y-10 ml-4">
              <div>
                <span className="font-body text-[#797A7B] text-[12px] font-normal">
                  PARTICIPANTS:
                </span>
                <p className="font-body text-xl font-normal">
                                  <span className="text-[#0062F5]">
                                    {campaignDetails.participants} {""}/
                                  </span>{" "}
                                  100
                                </p>
              </div>

              <div>
                <span className="font-body text-[#797A7B] text-[12px] font-normal">
                  COMPENSATION:
                </span>
                <p className="font-body text-[16px] font-normal">
  {campaignDetails.compensation.join(', ')}
</p>
              </div>
            </div>
            <div className="space-y-10">
              <div className="ml-16">
                <span className="font-body text-[#797A7B] text-xs font-normal">
                  LOCATION:
                </span>
                {campaignDetails.location.map((loc, index) => (
                  <p key={index} className="font-body text-[16px] font-normal">
                    {loc}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div
            className="mt-6 pl-6 flex items-center justify-center border-l-2 border-[#D2D3D3]"
            style={{ height: "100%" }}
          >
            <div>
              <button className="text-[#FA6A5E] font-body text-[16px] font-normal">
                Stop campaign
              </button>
            </div>
          </div>
        </div>

        <div className="flex border-b border-border">
          <div className="flex space-x-4">
            <Link to="/manageCampaign">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/manageCampaign"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
               Interest Received
              </button>
            </Link>
            <Link to="/Shortlisted">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/Shortlisted"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
                Shortlisted
              </button>
            </Link>
            <Link to="/Approved">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/manageCampaign/Approved"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
               Approved
              </button>
            </Link>
            <Link to="/Rejected">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/manageCampaign/Rejected"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
               Rejected
              </button>
            </Link>
            <Link to="/AIRecommended">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/AIRecommended"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
              AI Recommended
              </button>
            </Link>
          
          </div>
          <div className="relative">
            <span className="absolute top-0 left-0 transform translate-x-1/2 -translate-y-1/2 bg-destructive rounded-full w-2.5 h-2.5"></span>
          </div>
        </div>
        screen is in progress
      

      </div>
    </div>
  );
};

export default AIRecommendPage;
