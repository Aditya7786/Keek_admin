import React, { useContext, useState } from "react";
import { Mycontext } from "../../../utils/Context";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { LuFilter } from "react-icons/lu";
import CampaignFilterOptions from "../Filter/CampaignFilterOptions";
import Instagram from "../../../Assets/instagram.png";
import Facebook from "../../../Assets/Facebook.png";
import X from "../../../Assets/X.png";
import YT from "../../../Assets/yt.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaCircleDot } from "react-icons/fa6";

const LiveCampaign = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const campaigns = [
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },
    {
      id: "C123456",
      name: "Save Trees and More",
      status: "Live",
      platform: ["Instagram", "Facebook", "Twitter"],
      startDate: "1 July 24",
      endDate: "10 July 24",
    },

    // Add more campaigns here as needed
  ];

  const campaignDetails = {
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.",
    compensation: ["Product", "Money"], // Array of compensation types
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

  const recordsPerPage = 5;

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = campaigns.slice(firstIndex, lastIndex);
  const npage = Math.ceil(campaigns.length / recordsPerPage);
  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changePage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div
      class={` flex relative ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      }  overflow-y-auto  bg space-y-4 p-4 `}
    >
      <div className={`bg-white   ${expanded ? "w-[1120px]" : "w-full"}`}>
        <div
          className={` ${
            expanded ? "w-[1062px] " : "w-full pr-4"
          } mt-5 flex px-4  justify-between items-center  bg-white border-border`}
        >
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Manage Campaign
            </h1>
            <p className="text-muted-foreground text-sm">
              Easily create new campaign, keep track of live & past campaigns.
            </p>
          </div>
          <Link to="/AddCampaign">
            <button
              class={`bg-[#06F] h-[40px] w-[175px] text-white px-4 py-2.5 text-primary-foreground flex items-center hover:bg-primary/80  rounded-lg 
            ${location.pathname === "/AddCampaign"}`}
            >
              <span class="mr-2 text-3xl">+</span> Add Campaign
            </button>
          </Link>
        </div>
        <div
          class={`flex border-b border-border ${
            expanded ? "w-[1061px] ml-4 " : "w-full "
          }  mt-7`}
        >
          <div className="flex space-x-4">
            <Link to="/CampaignManagement">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/CampaignManagement"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
                Live campaigns
              </button>
            </Link>
            <Link to="/PastCampaign">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/PastCampaign"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
                Past campaigns
              </button>
            </Link>
            <Link to="/DraftCampaign">
              <button
                className={`py-2 px-4 ${
                  location.pathname === "/DraftCampaign"
                    ? "text-primary border-b-2 border-blue-500 font-semibold"
                    : "text-muted hover:text-muted-foreground"
                }`}
              >
                Drafts
              </button>
            </Link>
          </div>
          <div className="relative">
            <span className="absolute top-0 left-0 transform translate-x-1/2 -translate-y-1/2 bg-destructive rounded-full w-2.5 h-2.5"></span>
          </div>
        </div>

        {/* Searchbar */}
        <div
          className={`${
            expanded ? "w-[1061px]" : "w-full pr-8"
          }   h-[60px] mr-4 ml-4 mt-[28px] `}
        >
          <div
            className={` bg-[#F5F5F5]  h-[60px] flex items-center rounded-lg justify-between bg-background `}
          >
            <div className="relative flex items-center    ml-[18px] p-2 ">
              <CiSearch className="absolute left-4 text-gray-500 top-1/2 transform -translate-y-1/2 size-4" />
              <input
                type="text"
                placeholder="Search Campaigns"
                className={`${
                  expanded ? "w-[425px]" : "w-[600px]"
                } h-[35px] bg-white py-[8px] px-[8px] rounded bg-input text-[14px] font-body font-normal border border-border focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-left pl-8`}
              />
            </div>

            <div className="flex items-center mr-[18px] w-[98px] h-[40px] text-gray-500 cursor-pointer justify-between space-x-2">
              <button
                onClick={toggleModal}
                className="flex items-center text-[16px] font-body font-semibold space-x-2 bg-white  text-[#797A7B] px-4 py-2 rounded-md"
              >
                <LuFilter className="mr-2 text-base text-[#797A7B]" /> Filter
              </button>

              {isModalVisible && (
                // <div className="absolute top-52 right-10 mt-4 z-50">
                  <div className="absolute top-56 right-[10%] mt-4 z-50">
                  <CampaignFilterOptions
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Table */}

        <div className="flex flex-col md:flex-row mt-4 text-start items-start md:items-center justify-between">
          <table
            className={`${
              expanded ? "w-[1051px] mr-3" : "w-full mr-3"
            } h-[470px] ml-4`}
          >
            <thead>
              <tr className="border-b-2 h-[94px]">
                <th className=" font-body text-[#797A7B] text-[12px] font-semibold text-start p-2">
                  CAMPAIGN ID
                </th>
                <th className=" font-body text-[#797A7B] text-[12px] font-semibold text-start p-2">
                  CAMPAIGN NAME
                </th>
                <th className=" font-body text-[#797A7B] text-[12px] font-semibold text-start p-2">
                  STATUS
                </th>
                <th className=" font-body text-[#797A7B] text-[12px] font-semibold text-start p-2">
                  PLATFORM
                </th>
                <th className=" font-body text-[#797A7B] text-[12px] font-semibold text-start p-2">
                  START DATE
                </th>
                <th className=" font-body text-[#797A7B] text-[12px] font-semibold text-start p-2">
                  END DATE
                </th>
              </tr>
            </thead>
            <tbody
              className={`${
                expanded ? "w-[1051px] mr-3" : "w-full mr-3"
              } h-[470px] `}
            >
              {records.map((campaign, index) => (
                <React.Fragment key={index}>
                  <tr className="border-b-2 w-[1051px] h-[94px]">
                    <td className=" text-[16px] font-normal font-body p-2">
                      {campaign.id}
                    </td>
                    <td className=" text-[16px] font-normal font-body p-2">
                      {campaign.name}
                    </td>
                    <td className=" text-[14px] font-normal px-1 py-2.5 ">
                      <span
                        className={`font-body bg-[#E3EEFF] w-[60px] h-[27px]  text-[14px]  items-center flex gap-1 rounded-full text-black `}
                      >
                        <FaCircleDot className="  text-[#0066FF] w-[10px] h-[10px] ml-2" />{" "}
                        {campaign.status}
                      </span>
                    </td>
                    <td className=" text-[16px] h-[22px] font-normal font-body p-2">
                      {campaign.platform.length > 1
                        ? `${campaign.platform[0]} +${
                            campaign.platform.length - 1
                          }`
                        : campaign.platform[0]}
                    </td>
                    <td className=" text-[16px] font-normal font-body p-2">
                      {campaign.startDate}
                    </td>
                    <td className=" text-[16px] font-normal font-body p-2">
                      {campaign.endDate}
                    </td>
                    <td className=" text-[16px] font-normal font-body p-2">
                      <button className="text-[#000000] flex items-center px-6 py-2  font-body text-[14px] font-normal border border-[#B6B6B6] rounded-lg cursor-pointer">
                        Edit{" "}
                      </button>
                    </td>
                    <td className=" p-2">
                      <button
                        className="text-[#0066FF] w-[86px] h-[14px] flex items-center  font-body text-[14px] font-normal cursor-pointer"
                        onClick={() => toggleDetails(index)}
                      >
                        View more{" "}
                        {openIndex === index ? (
                          <IoIosArrowUp className="mt-[1px]" />
                        ) : (
                          <IoIosArrowDown className="mt-[1px]" />
                        )}
                      </button>
                    </td>
                  </tr>
                  {openIndex === index && (
                    <tr className="border-b-2 w-full bg-[#F6F6F6]">
                      <td colSpan="8">
                        <div className="flex flex-col md:flex-row rounded-lg p-2 ">
                          <div className="p-2 mb-4 space-y-4 w-full md:w-1/2">
                            <div className="w-[425px] h-[67px]">
                              <h2 className="font-body text-[#797A7B] text-[12px] font-normal">
                                ABOUT CAMPAIGN
                              </h2>
                              <p className="font-body text-[16px] font-normal">
                                {campaignDetails.about}
                              </p>
                            </div>

                            <div className="gap-2 w-[409px] h-[55px]">
                              <h3 className="font-body text-[#797A7B]  text-[12px] font-normal">
                                PLATFORMS:
                              </h3>
                              <div className="flex gap-3 mt-[2px] flex-wrap">
                                {platforms.map((platform, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center rounded-md px-1"
                                    style={{
                                      backgroundColor: platform.bgColor,
                                    }}
                                  >
                                    <img
                                      src={platform.icon}
                                      alt={platform.name}
                                    />
                                    <span className="p-1 rounded-full font-body text-[16px] font-normal">
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
                                <p className="font-body text-[20px] font-semibold">
                                  <span className="text-[#0062F5]">
                                    {campaignDetails.participants}/
                                  </span>
                                  100
                                </p>
                              </div>

                              <div>
                                <span className="font-body text-[#797A7B] text-[12px] font-normal">
                                  COMPENSATION:
                                </span>
                                <p className="font-body text-[16px] font-normal">
                                  <p className="font-body text-[16px] font-normal">
                                    {campaignDetails.compensation.join(", ")}
                                  </p>
                                </p>
                              </div>
                            </div>
                            <div className="space-y-10 ml-16">
                              <div>
                                <span className="font-body text-[#797A7B] text-[12px] font-normal">
                                  LOCATION:
                                </span>
                                {campaignDetails.location.map((loc, index) => (
                                  <p
                                    key={index}
                                    className="font-body text-[16px] font-normal"
                                  >
                                    {loc}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mt-6 p-3 space-y-2 border-l-2 border-[#D2D3D3]">
                            <Link to={"/manageCampaign"}>
                              <div>
                                <button className="text-[#0066FF] font-body text-[16px] font-normal">
                                  Manage campaign
                                </button>
                              </div>
                            </Link>
                            <div>
                              <button className="text-[#363939] font-body text-[16px] font-normal">
                                Edit campaign
                              </button>
                            </div>
                            <div>
                              <button className="text-[#FA6A5E] font-body text-[16px] font-normal">
                                Stop campaign
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <nav className=" flex mt-6 items-center justify-end space-x-4 p-4">
          <ul className="pagination flex space-x-2">
            <li className="page-item">
              <button
                onClick={prePage}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg"
              >
                <span>
                  {" "}
                  <IoIosArrowBack className="text-[#797A7B]" />
                </span>
              </button>
            </li>
            <span className="mt-1">
              {currentPage} of {npage}
            </span>

            <li className="page-item">
              <button
                onClick={nextPage}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg"
              >
                <span>
                  <IoIosArrowForward />
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default LiveCampaign;
