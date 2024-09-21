import React, { useContext, useState } from "react";
import { Mycontext } from "../../utils/Context";
import { FiFilter } from "react-icons/fi";
import Card from "./Card";
import Filter from "./Filter";
import Favourites from "./Favourites";
import { Link } from "react-router-dom";
import Campaign from "./Campaign";

const Influencers = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const [filterVisible, setFilterVisible] = useState(false);
  const [campaignVisible, setCampaignVisible] = useState(false);
  const [showLikedDiv, setShowLikedDiv] = useState(false);

  return (
    <div
      className={`flex flex-col h-full relative ${
        !expanded
          ? "left-[90px] w-[calc(100%-90px)]"
          : "left-[320px] w-[calc(100%-320px)] "
      }  overflow-y-auto bg-white space-y-4 p-4 pr-[14px]`}
    >
      <div className="max-w-[1440px]  w-full h-full">
        <div className="pt-[18px] px-2 pb-8">
          <h1 className="text-[24px] font-semibold text-[#101828]">
            Discover Influencer
          </h1>
          <span className="text-sm text-[#57595A]">
            Discover the perfect influencer to elevate your brand- Connect &
            Collaborate
          </span>
        </div>
        <div>
          <nav className="mb-[27px]">
            <ul className="flex gap-5">
              <Link to={"/discoverInfluencers"}>
                <li className="font-semibold text-[#191D23] px-[6px] border-b-2 border-[#0066FF]">
                  Influencers
                </li>
              </Link>
              <Link to={"/savedlist"}>
                <li className="text-[#57595A]">Saved Lists</li>
              </Link>
            </ul>
            <hr className="h-[2px] w-full" />
          </nav>
        </div>
        <div
          className={`flex gap-[110px]  mb-[10px] relative ${
            expanded ? "w-[1037px]" : "w-[1237px]"
          }`}
        >
          <input
            className="flex h-11 px-4 py-2 items-center gap-2 flex-[1_0_0] rounded-lg border border-neutral-200 bg-white"
            type="text"
            placeholder="Search Influencers"
          />
          <button
            className="flex h-[45px] py-[var(--space-8px,8px)] px-[16px] justify-center items-center gap-[10px] rounded-[10px] bg-[var(--Neutral-N100,#F6F6F6)]"
            onClick={() => setFilterVisible(!filterVisible)}
          >
            <FiFilter className="inline-block" /> Filters
          </button>
          {filterVisible && <Filter setFilterVisible={setFilterVisible} />}
          {showLikedDiv && <Favourites />}
          {campaignVisible && (
            <Campaign setCampaignVisible={setCampaignVisible} />
          )}
        </div>
        <div className="flex items-center gap-[10px]">
          <button className="px-4 py-2 text-white text-center text-xs rounded-[50px] bg-[#06F]">
            All Influencers
          </button>
          <button className="px-4 py-2 text-center text-xs rounded-[50px] border border-[#797A7B]">
            Top Rated
          </button>
        </div>

        <div
          className={`mt-4   w-[1046px] h-[967px] flex ${
            expanded ? "gap-x-[38px] gap-y-[32px]" : "gap-[18px]"
          } flex-wrap`}
        >
          <Card
            setCampaignVisible={setCampaignVisible}
            setShowLikedDiv={setShowLikedDiv}
          />
        </div>
      </div>
    </div>
  );
};

export default Influencers;
