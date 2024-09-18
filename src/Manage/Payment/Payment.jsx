import React, { useContext, useState } from "react";
import { Mycontext } from "../../utils/Context";
import { useLocation } from "react-router-dom";
import { LuFilter } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaCircleDot } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { CiWallet } from "react-icons/ci";
import Filter from "./Filter";
import { GoDotFill } from "react-icons/go";


const Payment = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const location = useLocation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState([]); // State to hold the selected filters

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  const campaigns = [
    {
      id: "#12345678",
      name: "Paid to Campaign",
      description: "Save Trees and More",
      status: "Completed",
      billDate: "July 21, 2024",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      time: "13:01",
      amount: "$1200",
      totalAmount: "$10000",
    },
    {
      id: "#12345678",
      name: "Keek balance deposit",
      description: "",
      status: "Completed",
      billDate: "July 21, 2024",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      time: "13:01",
      amount: "$1200",
      totalAmount: "$10000",
    },
    {
      id: "#12345678",
      name: "Paid to Campaign",
      description: "Save Trees and More",
      status: "Failed",
      billDate: "July 21, 2024",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      time: "13:01",
      amount: "$1200",
      totalAmount: "$10000",
    },
    {
      id: "#12345678",
      name: "Paid to Campaign",
      description: "Save Trees and More",
      status: "Pending",
      billDate: "July 21, 2024",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      time: "13:01",
      amount: "$1200",
      totalAmount: "$10000",
    },
    {
      id: "#12345678",
      name: "Keek balance deposit",
      description: "",
      status: "Completed",
      billDate: "July 21, 2024",
      platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
      time: "13:01",
      amount: "$1200",
      totalAmount: "$10000",
    },
    // {
    //   id: "#12345678",
    //   name: "Paid to Campaign",
    //   description: "Save Trees and More",
    //   status: "Pending",
    //   billDate: "July 21, 2024",
    //   platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
    //   time: "13:01",
    //   amount: "$1200",
    //   totalAmount: "$10000",
    // },
    // {
    //   id: "#12345678",
    //   name: "Paid to Campaign",
    //   description: "Save Trees and More",
    //   status: "Failed",
    //   billDate: "July 21, 2024",
    //   platform: ["Facebook", "Twitter", "Instagram", "Facebook", "Twitter"],
    //   time: "13:01",
    //   amount: "$1200",
    //   totalAmount: "$10000",
    // },
    // Add more campaigns here as needed
  ];

  const handleApplyFilters = (filters) => {
    console.log("Filters Applied:", filters);
  
    // If "Paid" is selected, add "Completed" to the selected filters
    if (filters.includes("Paid")) {
      setSelectedFilters([...filters.filter(filter => filter !== "Paid"), "Completed"]);
    } 
    else {
      setSelectedFilters(filters);
    }
  };
  
  const filteredCampaigns = selectedFilters.length
    ? campaigns.filter((campaign) =>
        selectedFilters.includes(campaign.status)
      )
    : campaigns;

  console.log("Filtered Campaigns:", filteredCampaigns);

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
      }  overflow-y-auto  bg-white space-y-4 p-4 `}
    >
      <div className="bg-white w-full">
        <div className="flex w-full justify-between items-center p-4 bg-white border-border">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Payment</h1>
            <p className="text-muted-foreground text-sm">
              Manage your transactions effortlessly—secure, seamless payments
              with ease!
            </p>
          </div>
          <button>
            <div class="w-[126px] h-10 ml-[324px] bg-neutral-100 rounded-lg justify-center items-center gap-3 inline-flex">
              <div class=" relative mt-1 ml-1 text-black ">
                <CiWallet />
              </div>
              <div class="text-black text-base font-semibold font-['Open Sans']">
                $5000
              </div>
            </div>
          </button>

          <button
            class={`bg-[#06F] h-[40px] w-[144px] text-white px-4 py-2.5 text-primary-foreground flex items-center hover:bg-primary/80  rounded-lg 
            ${location.pathname === "/AddCampaign"}`}
          >
            <span class="mr-2 text-3xl">+</span> Add Funds
          </button>
        </div>

        <div class="w-full h-[45px]  justify-between items-center inline-flex ml-4 mt-2">
          <div class="text-[#1f2223] text-base font-semibold font-['Open Sans'] leading-[19px]">
            Transactions :
          </div>
          <div>
            <button
              onClick={toggleModal}
              class="px-10 py-2 bg-[#f6f6f6] w-[106px] h-[45px] mr-8 rounded-[10px] justify-center items-center gap-2.5 flex"
            >
              <div class="w-4 h-4 text-[#797a7b] relative">
                <LuFilter />
              </div>
              <div class="text-[#797a7b] text-base font-semibold font-['Open Sans']">
                Filters
              </div>
            </button>
            {isModalVisible && (
        <div className="absolute top-25 right-10 mt-4 z-50">
          <Filter
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
            onApplyFilters={handleApplyFilters} // Make sure this prop matches
          />
        </div>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-4 text-start items-start md:items-center justify-between ml-2">
          <table className="w-full ">
            <thead>
              <tr className="border-b-2 h-[91px]">
                <th className="border-zinc-300 font-body text-[#797A7B] text-[12px] font-semibold text-start p-2">
                  INVOICE NUMBER
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[12px] font-semibold text-start p-2">
                  TRANSACTION NAME
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[12px] font-semibold text-start p-2">
                  BILLING DATE
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[12px] font-semibold text-start p-2">
                  TIME
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[12px] font-semibold text-start p-2">
                  STATUS
                </th>
                <th className="border-zinc-300 font-body text-[#797A7B] text-[12px] font-semibold text-start p-2">
                  AMOUNT
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
                    <td className=" border-zinc-300 text-[16px] font-normal font-body p-2">
                      <div class="text-[#191d23] text-base font-semibold mt-2">
                        {campaign.name}
                      </div>
                      <div class="h-3 text-[#797a7b] text-xs ">
                        {campaign.description}
                      </div>
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                      {campaign.billDate}
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                      {campaign.time}
                    </td>
                    <td className="border-zinc-300 text-[16px] font-normal p-2">
                      <span
                        className={`font-body   text-[10px] p-1 justify-center items-center flex gap-1 rounded-full text-black ${
                          campaign.status === "Completed"
                            ? "bg-[#B0EDC7] text-green-700 w-[80px] h-[20px]"
                            : campaign.status === "Failed"
                            ? "bg-[#FFBFC3] text-red-700 w-[63px] h-[20px]"
                            : campaign.status === "Pending"
                            ? "bg-[#FFEAB0] text-yellow-700 w-[63px] h-[20px]"
                            : "bg-[#E3EEFF] text-[#0066FF] w-[120px]"
                        }`}
                      >
                        
                        <GoDotFill
                          className={`w-[10px] h-[10px] ${
                            campaign.status === "Completed"
                              ? "text-green-700"
                              : campaign.status === "Failed"
                              ? "text-red-700"
                              : campaign.status === "Pending"
                              ? "text-yellow-700"
                              : "text-[#0066FF]"
                          }`}
                        />
                        {campaign.status}
                      </span>
                    </td>

                    <td className="border-zinc-300 text-[16px] font-normal font-body p-2">
                      <div className="flex text-[#191d23] text-base font-semibold mt-2">
                        {campaign.amount}
                        <GoArrowUpRight className="w-[22px] h-[22px] text-[#797a7b] relative mt-[2px]" />
                      </div>
                      <div class="text-[#797a7b] text-xs ">
                        Balance: {campaign.totalAmount}
                      </div>
                    </td>

                    <td className="border-zinc-300 p-2">
                      <button
                        className="text-[#0062F5] w-[84px] h-[12px] flex items-center font-body text-[14px] font-normal cursor-pointer"
                        onClick={() => toggleDetails(index)}
                      >
                        View Invoice
                      </button>
                    </td>
                  </tr>
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

export default Payment;
