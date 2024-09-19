import React, { useContext , useState } from "react";
import Instagram from "../../../../Assets/instagram.png";
import Facebook from "../../../../Assets/Facebook.png";
// import X from "../../../../Assets/X.png";
import YT from "../../../../Assets/yt.png";
import { Link, useLocation } from "react-router-dom";
import { Mycontext } from "../../../../utils/Context";
import { MdChevronRight } from "react-icons/md";
import ReadMore from "../../Components/ReadMoreComponent";
import { FiArrowUpRight } from "react-icons/fi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Profile from '../Profile';





const RejectedPage = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();
  const currentPath = location.pathname;

  const [currentPage, setCurrentPage] = useState(1);


    // Added state management for the profile popup
    const [isProfileVisible, setProfileVisible] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState(null);
  


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
    // {
    //   name: "X",
    //   icon: X,
    //   bgColor: "#E3E3E3",
    // },
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


  const influencers = [
    {
      name: 'Gautam Sachdeva',
      niche: ["Travel", "Fashion", "Photography", "Lifestyle"],
      platforms: {
        instagram:  'https://www.instagram.com',
        facebook: 'https://www.facebook.com',
        youtube: 'https://www.youtube.com',
        linkedin: 'https://in.linkedin.com/',
      }
     },
     {
      name: 'Gautam Sachdeva',
      niche: ["Travel", "Fashion", "Photography", "Lifestyle"],
      platforms: {
        instagram:  'https://www.instagram.com',
        facebook: 'https://www.facebook.com',
        youtube: 'https://www.youtube.com',
        linkedin: 'https://in.linkedin.com/',
      }
     },
     {
      name: 'Gautam Sachdeva',
      niche: ["Travel", "Fashion", "Photography", "Lifestyle"],
      platforms: {
        instagram:  'https://www.instagram.com',
        facebook: 'https://www.facebook.com',
        youtube: 'https://www.youtube.com',
        linkedin: 'https://in.linkedin.com/',
      }
     },
     {
      name: 'Gautam Sachdeva',
      niche: ["Travel", "Fashion", "Photography", "Lifestyle"],
      platforms: {
        instagram:  'https://www.instagram.com',
        facebook: 'https://www.facebook.com',
        youtube: 'https://www.youtube.com',
        linkedin: 'https://in.linkedin.com/',
      }
     },
     {
      name: 'Gautam Sachdeva',
      niche: ["Travel", "Fashion", "Photography", "Lifestyle"],
      platforms: {
        instagram:  'https://www.instagram.com',
        facebook: 'https://www.facebook.com',
        youtube: 'https://www.youtube.com',
        linkedin: 'https://in.linkedin.com/',
      }
     },
     
    // Add more influencers here
  ];

  const recordsPerPage = 4;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = influencers.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(influencers.length / recordsPerPage);
  const itemsPerPage = 4; // Number of influencers to display per page
 


  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

// Function to handle the profile click
const handleProfileOpen = (influencer) => {
  setSelectedProfile(influencer);
  setProfileVisible(true);
};

const handleProfileClose = () => {
  setProfileVisible(false);
  setSelectedProfile(null);
};

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedInfluencers = influencers.slice(
    startIndex,
    startIndex + itemsPerPage
  );


  return (
    <div
      class={` flex relative ${!expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
        }  overflow-y-auto space-y-4 p-4 `}
    >
      <div className="flex bg-white flex-col">
        <div className="flex flex-row p-6 items-center  border-b-2 gap-[3.14px]">
          <Link
            to="/CampaignManagement"
            className={`text-[16px] font-normal flex flex-row ${currentPath === "/CampaignManagement"
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
                className={`py-2 px-4 ${location.pathname === "/manageCampaign"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                  }`}
              >
                Interest Received
              </button>
            </Link>
            <Link to="/Shortlisted">
              <button
                className={`py-2 px-4 ${location.pathname === "/Shortlisted"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                  }`}
              >
                Shortlisted
              </button>
            </Link>
            <Link to="/Approved">
              <button
                className={`py-2 px-4 ${location.pathname === "/Approved"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                  }`}
              >
                Approved
              </button>
            </Link>
            <Link to="/Rejected">
              <button
                className={`py-2 px-4 ${location.pathname === "/Rejected"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                  }`}
              >
                Rejected
              </button>
            </Link>
            <Link to="/AIRecommended">
              <button
                className={`py-2 px-4 ${location.pathname === "/AIRecommended"
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

        <div class="">
          <table class="min-w-full  bg-white ">
            <thead>
              <tr class=" border-b  uppercase " style={{ height: "80px" }}>
                <th class="py-3 px-6 text-left text-[#797A7B] text-[12px] font-body font-semibold">Influencer Name</th>
                <th class="py-3 px-6 text-left text-[#797A7B] text-[12px] font-body font-semibold">Niche</th>
                <th class="py-3 px-6 text-left text-[#797A7B] text-[12px] font-body font-semibold">Instagram</th>
                <th class="py-3 px-6 text-left text-[#797A7B] text-[12px] font-body font-semibold">Facebook</th>
                <th class="py-3 px-6 text-left text-[#797A7B] text-[12px] font-body font-semibold">Youtube</th>
                <th class="py-3 px-6 text-left text-[#797A7B] text-[12px] font-body font-semibold">LinkedIn</th>

              </tr>
            </thead>
            <tbody class=" "  >
              {records.map((influencer, index) => (
                <tr className="border-b" key={index} style={{ height: "85px" }}>
                       <td
  className="py-3 px-6 text-[#191D23] text-[16px] font-body font-normal cursor-pointer"
  onClick={() => handleProfileOpen(influencer)} // Pass the current influencer
>
  {influencer.name}
</td>
                  <td className="py-3 px-4 text-[#191D23] text-[16px] font-body font-normal">
                    {influencer.niche.length > 2
                      ? `${influencer.niche.slice(0, 2).join(', ')} +${influencer.niche.length - 2}`
                      : influencer.niche.join(', ')}
                  </td>
                  <td className="py-3 px-6 text-[#191D23] text-[16px] font-body font-normal">
                    <a className="flex items-center" href={influencer.platforms.instagram}>
                    Instagram 
                      <FiArrowUpRight className="ml-1  text-[#0066ff]" />

                    </a>
                  </td>
                  <td className="py-3 px-6 text-[#191D23] text-[16px] font-body font-normal">
                    <a className="flex items-center" href={influencer.platforms.facebook}>
                    facebook
                      <FiArrowUpRight className="ml-1  text-[#0066ff]" />

                    </a>                  </td>
                  <td className="py-3 px-6 text-[#191D23] text-[16px] font-body font-normal">
                    <a className="flex items-center" href={influencer.platforms.youtube}>
                    youtube
                      <FiArrowUpRight className="ml-1  text-[#0066ff]" />

                    </a>                  </td>
                  <td className="py-3 px-6 text-[#191D23] text-[16px] font-body font-normal">
                    <a className="flex items-center" href={influencer.platforms.linkedin}>
                    linkedin
                      <FiArrowUpRight className="ml-1  text-[#0066ff]" />

                    </a>                  </td>
                  <td className="py-3 px-6 text-[14px] font-body font-semibold">
                    <Link>
                    <button className="bg-[#0066FF] text-[#FFFFFF] py-2 px-5 rounded-lg">Shortist</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-auto flex justify-end p-8">
            <div className="flex items-center gap-1 text-sm font-normal">
              <button
                onClick={handlePrevClick}
                disabled={currentPage === 1}
                className={`p-2 ${currentPage === 1 ? 'text-gray-400' : 'text-black'}`}
              >
                <FaAngleLeft />
              </button>
              <span className="text-[#1f2223]">
                Page {currentPage}
              </span>
              <span className="text-[#797a7b] leading-tight">
                of {totalPages}
              </span>
              <button
                onClick={handleNextClick}
                disabled={currentPage === totalPages}
                className={`p-2 ${currentPage === totalPages ? 'text-gray-400' : 'text-black'}`}
              >
                <FaAngleRight />
              </button>
            </div>
          </div>

      </div>

            {/* Added Profile component with props */}
            {isProfileVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-white p-5 rounded-lg shadow-lg w-[90%] md:w-[60%] lg:w-[40%]">
            <button onClick={handleProfileClose} className="absolute top-2 right-2 text-red-500 font-bold">Close</button>
            {selectedProfile && (
              <Profile 
                isOpen={isProfileVisible} 
                setIsOpen={setProfileVisible} 
                selectData={selectedProfile} 
              />
            )}
          </div>
        </div>
      )}

      
    </div>
  );
};

export default RejectedPage;
