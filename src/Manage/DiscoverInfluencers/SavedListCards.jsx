import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SavedCard from "./SavedCard";
import { FaAngleRight } from "react-icons/fa";
import Campaign from "./Campaign";
import { Mycontext } from "../../utils/Context";
// import { listItem, influencersData } from "./InfluencerData";

const SavedListCards = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
    const listData = contextState.listItemData;
    const setListData = contextState.setListItemData;
    const influencersData = contextState.influencersItemData;
  const [campaignVisible, setCampaignVisible] = useState(false);
  // const [influencerDetails, setInfluencerDetails] = useState(listItem);
  const { name } = useParams();

  // Find the selected list item based on the `name` from the URL params
  const selectedList = listData.find((listData) => listData.name === name);

  // Get influencers data based on the IDs in the selected list
  const influencers =
    selectedList &&
    influencersData.filter((item) =>
      selectedList.influencers.includes(item.id)
    );
  // Function to remove an influencer from the selected list
  const removeInfluencer = (id) => {
    setListData((prevDetails) =>
      prevDetails.map((list) =>
        list.name === name
          ? {
              ...list,
              influencers: list.influencers.filter(
                (influencerId) => influencerId !== id
              ),
            }
          : list
      )
    );
  };

  return (
    <div
      className={`flex flex-wrap relative 
        w-[1091px]
        ${
          !expanded
            ? "left-[100px] w-[calc(100%-120px)]"
            : "left-[320px] w-[calc(100%-340px)]"
        }  overflow-hidden   space-y-4 p-4 ml-[20px]`}
    >
<div className=" bg-white">
      <div>
        <div className={` ${expanded ? "w-[1069px] " : "w-full "} top-[39px] relative h-[47px] flex-col justify-start items-start gap-7 inline-flex`}>
          <div className="px-[18px] justify-start items-center gap-2 inline-flex">
            <Link to={"/discoverInfluencers"}>
              <div className="justify-center items-center gap-0.5 flex">
                <button className="text-[#202024] text-base font-normal leading-[18.83px]">
                  Discover Influencer
                </button>
                <div className="w-[18px] h-[18px] relative">
                  <FaAngleRight />
                </div>
              </div>
            </Link>
            <Link to={"/savedlist"}>
              <div className="justify-center items-center gap-0.5 flex">
                <button className="text-[#202024] text-base font-normal leading-[18.83px]">
                  Saved List
                </button>
                <div className="w-[18px] h-[18px] relative">
                  <FaAngleRight />
                </div>
              </div>
            </Link>
            <Link>
              <div className="justify-start items-center gap-2 flex">
                <button className="flex-col justify-start items-start inline-flex">
                  <div className="text-[#2362ea] text-base font-semibold leading-[18.83px]">
                    {name}
                  </div>
                </button>
              </div>
            </Link>
          </div>
          {campaignVisible && (
            <Campaign setCampaignVisible={setCampaignVisible} />
          )}
          <div
            className={`${
              expanded ? "w-[1049px]" : "w-[1320px]"
            } ml-2 h-[0px] border-[1px] border-[#d2d3d3]`}
          ></div>
        </div>
        <div
          className={` grid gap-[38px] mt-[31px] ${
            expanded ? "grid-cols-4" : "grid-cols-5"
          }`}
        ></div>
        
      </div>
      <div className="flex ml-4 mt-10 min-h-screen flex-wrap gap-x-[38px] gap-y-[32px]">
        {influencers && influencers.length > 0 ? (
          influencers.map((item) => (
            <div key={item.id}>
              <SavedCard
                influencer={item}
                removeInfluencer={removeInfluencer}
                setCampaignVisible={setCampaignVisible}
              />
            </div>
          ))
        ) : (
          <div className="flex h-screen items-center justify-center text-2xl font-semibold">
            No influencers found for this category.
          </div>
        )}
      </div>

      </div>
    </div>
  );
};

export default SavedListCards;
