import React, { useContext, useState, useEffect } from "react";
import { Mycontext } from "../../../utils/Context";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import axios from 'axios';

const LiveCampaign = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();
  const [campaignsData, setCampaignsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchId, setSearchId] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const navigate = useNavigate()
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleStopCampaign = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/campaigns/${id}`, {
        status: "Draft"
      });
      fetchCampaigns(); // Refetch campaigns data after updating
    } catch (err) {
      console.error(err);
    }
  };
  const fetchCampaigns = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/campaigns');
      const filteredCampaigns = response.data.filter(campaign => 
        campaign.status === "Active" || campaign.status === "Pending"
      );
      setCampaignsData(filteredCampaigns);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCampaigns();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredCampaigns = campaignsData.filter(campaign =>
    (campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === "") &&
    (campaign.id.toLowerCase().includes(searchId.toLowerCase()) || searchId === "") &&
    (campaign.status.toLowerCase().includes(searchStatus.toLowerCase()) || searchStatus === "")
  );

  const platforms = [
    { name: "Instagram", icon: Instagram, bgColor: "#FFEDED" },
    { name: "X", icon: X, bgColor: "#E3E3E3" },
    { name: "Facebook", icon: Facebook, bgColor: "#E4EFFF" },
    { name: "YouTube", icon: YT, bgColor: "#FFE4E1" },
  ];

  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredCampaigns.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredCampaigns.length / recordsPerPage);

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
      className={`flex relative ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      }  overflow-y-auto  bg-white space-y-4 p-4 `}
    >
      <div className="bg-white w-full">
        <div className="flex w-full justify-between items-center p-4 bg-white border-border">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Manage Campaign
            </h1>
            <p className="text-muted-foreground text-sm">
              Easily create new campaign, keep track of live & past campaigns.
            </p>
          </div>
          <Link to="/AddCampaign">
            <button className={`bg-[#06F] h-[40px] w-[175px] text-white px-4 py-2.5 text-primary-foreground flex items-center hover:bg-primary/80  rounded-lg ${
              location.pathname === '/AddCampaign' ? 'bg-primary/80' : ''
            }`}>
              <span className="mr-2 text-3xl">+</span> Add Campaign
            </button>
          </Link>
        </div>
        <div className="flex border-b border-border">
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
        <div className="mr-4 ml-4 mt-[28px]">
          <div className="bg-[#F5F5F5] h-[60px] flex items-center rounded-lg justify-between bg-background">
            <div className="relative flex items-center h-[35px] ml-[18px] w-8/12">
              <CiSearch className="absolute left-4 text-gray-500 top-1/2 transform -translate-y-1/2 size-4" />
              <input
                type="text"
                placeholder="Search by Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white py-1 px-10 rounded bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex space-x-4 ml-4">
              <input
                type="text"
                placeholder="Search by ID"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full bg-white py-1 px-4 rounded border border-border"
              />
              <input
                type="text"
                placeholder="Search by Status"
                value={searchStatus}
                onChange={(e) => setSearchStatus(e.target.value)}
                className="w-full bg-white py-1 px-4 rounded border border-border"
              />
            </div>

            <div className="flex items-center mr-[18px] h-[40px] text-gray-500 cursor-pointer justify-between space-x-2">
              <button
                onClick={toggleModal}
                className="flex items-center text-sm space-x-2 bg-white text-gray-500 px-4 py-2 rounded-md"
              >
                <LuFilter className="mr-2 text-base text-gray-500" /> Filter
              </button>

              {isModalVisible && (
                <div className="absolute top-52 right-10 mt-4 z-50">
                  <CampaignFilterOptions
                    isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-4 text-start items-start md:items-center justify-between">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 h-[91px]">
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">
                  CAMPAIGN ID
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">
                  CAMPAIGN NAME
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">
                  STATUS
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">
                  PLATFORM
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">
                  START DATE
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[14px] font-semibold text-start p-2">
                  END DATE
                </th>
              </tr>
            </thead>
            <tbody>
              {records.map((campaign, index) => (
                <React.Fragment key={index}>
                  <tr className="border-b-2 h-[91px]">
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                      {campaign.id}
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2 w-1/6">
                      {campaign.name}
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal p-2">
                    <span
  className={`font-body text-[16px] p-1 items-center flex gap-1 rounded text-black 
  ${campaign.status === "Active" ? "bg-[#DFFFD6]" : campaign.status === "Pending" ? "bg-[#FFE5E5]" : "bg-[#E3EEFF]"}`}
>
  <FaCircleDot
    className={`w-[10px] ml-1 h-[10px] 
    ${campaign.status === "Active" ? "text-[#28A745]" : campaign.status === "Pending" ? "text-[#FF4D4D]" : "text-[#0066FF]"}`}
  />
  {campaign.status}
</span>

                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                      {campaign.platform.length > 1
                        ? `${campaign.platform[0]} +${
                            campaign.platform.length - 1
                          }`
                        : campaign.platform[0]}
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                      {campaign.startDate}
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                      {campaign.endDate}
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                      <Link to={`/EditCampaign/${campaign._id}`}>
                        <button className="text-[#000000] flex items-center px-6 py-2  font-body text-[14px] font-normal border border-[#B6B6B6] rounded-lg cursor-pointer">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td className="border-zinc-300 p-2">
                      <button
                        className="text-[#0066FF] flex items-center font-body text-[14px] font-normal cursor-pointer"
                        onClick={() => toggleDetails(index)}
                      >
                        View more{" "}
                        {openIndex === index ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </button>
                    </td>
                  </tr>
                  {openIndex === index && (
                    <tr className="border-b-2 w-full bg-[#F6F6F6]">
                      <td colSpan="8">
                        <div className="flex flex-col md:flex-row rounded-lg p-2 overflow-hidden">
                          <div className="p-2 mb-4 space-y-4 w-full md:w-1/2">
                            <div>
                              <h2 className="font-body text-[#797A7B] text-[12px] font-normal">
                                ABOUT CAMPAIGN
                              </h2>
                              <p className="font-body text-[16px] font-normal">
                                {campaign.about}
                              </p>
                            </div>
                            <div className="mt-2">
                              <h3 className="font-body text-[#797A7B] text-[12px] font-normal">
                                PLATFORMS:
                              </h3>
                              <div className="flex gap-2 flex-wrap">
                                {platforms.filter(platform =>
                                  campaign.platform?.includes(platform.name)
                                ).map((platform, idx) => (
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
                                  COMPENSATION:
                                </span>
                                <p className="font-body text-[16px] font-normal">
                                  {campaign.compensation.join(', ')}
                                </p>
                              </div>
                              <div>
                                <span className="font-body text-[#797A7B] text-[12px] font-normal">
                                  TARGET AUDIENCE:
                                </span>
                                <p className="font-body text-[16px] font-normal">
                                  {campaign.targetAudience.join(', ')}
                                </p>
                              </div>
                            </div>
                            <div className="space-y-10 ml-16">
                              <div>
                                <span className="font-body text-[#797A7B] text-[12px] font-normal">
                                  PARTICIPANTS:
                                </span>
                                <p className="font-body text-[16px] font-normal">
                                  <span className="text-[#0062F5]">
                                    {campaign.participants}/
                                  </span>
                                  100
                                </p>
                              </div>
                              <div>
                                <span className="font-body text-[#797A7B] text-[12px] font-normal">
                                  LOCATION:
                                </span>
                                {campaign.location.map((loc, index) => (
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
                            <Link to={`/manageCampaign/${campaign.id}`}>
                              <div>
                                <button className="text-[#0066FF] font-body text-[16px] font-normal">
                                  Manage campaign
                                </button>
                              </div>
                            </Link>
                            <div>
                              <button onClick={()=>navigate(`/EditCampaign/${campaign.id}`)} className="text-[#363939] font-body text-[16px] font-normal">
                                Edit campaign
                              </button>
                            </div>
                            <div>
                              <button onClick={() => handleStopCampaign(campaign._id)} className="text-[#FA6A5E] font-body text-[16px] font-normal">
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

        <nav className="flex mt-6 items-center justify-end space-x-4 p-4">
          <ul className="pagination flex space-x-2">
            <li className="page-item">
              <button
                onClick={prePage}
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg"
              >
                <span>
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
