import React, { useContext, useState, useRef } from "react";
import { Mycontext } from "../../utils/Context";
import { FiFilter } from "react-icons/fi";
import Card from "./Card";
import Filter from "./Filter";
import Favorites from "./Favorites";
import { Link } from "react-router-dom";
import Campaign from "./Campaign";

const Influencers = () => {
  
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const listItem = contextState.listItemData;
  const [filterVisible, setFilterVisible] = useState(false);
  const [campaignVisible, setCampaignVisible] = useState(false);
  const [showLikedDiv, setShowLikedDiv] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const timeoutRef = useRef(null);
  const influencersRef = useRef(null);

  // Function to handle adding/removing IDs in favorites
  const handleToggleFavorite = (id) => {
    setFavorites(
      (prevFavorites) =>
        prevFavorites.includes(id)
          ? prevFavorites.filter((favId) => favId !== id) // Remove if exists
          : [...prevFavorites, id] // Add if doesn't exist
    );
    handleToggleFavoritesVisibility();
  };

  // Function to add influencer ID to a specific list
  const handleAddToList = (listName, id) => {
    const list = listItem.find((item) => item.name === listName);
    if (list && !list.influencers.includes(id)) {
      list.influencers.push(id);
    }
  };

  // Function to toggle the visibility of the Favorites component
  const handleToggleFavoritesVisibility = () => {
    setShowLikedDiv(true);
    startHideTimer();
  };

  // Function to start the timer to hide the Favorites component
  const startHideTimer = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setShowLikedDiv(false);
    }, 3000); // 3 seconds timer
  };

  // Function to stop the timer when mouse enters Favorites
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  // Function to restart the timer when mouse leaves Favorites
  const handleMouseLeave = () => {
    startHideTimer();
  };

  return (
    <div
      className={`flex flex-col h-full relative ${
        !expanded
          ? "left-[90px] w-[calc(100%-90px)]"
          : "left-[320px] w-[calc(100%-320px)] "
      }  overflow-y-auto  space-y-4 p-4 pr-[14px]`}
      ref={influencersRef}
    >
      <div className={` ${expanded ? "w-[1120px] h-[1253px] " : "w-full h-full "}  bg-white  `}>
        <div className="pt-[18px] ml-4 px-2 pb-8">
          <h1 className="text-[24px] font-semibold text-[#101828]">
            Discover Influencer
          </h1>
          <span className="text-sm text-[#57595A]">
            Discover the perfect influencer to elevate your brand - Connect &
            Collaborate
          </span>
        </div>
        <div className={` ${expanded ? "  w-[1037px]" : " "} ml-4 `}>
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
          className={`flex gap-[110px]  ml-4 mb-[10px] relative ${
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
          {showLikedDiv && (
            <Favorites
              favorites={favorites}
              handleAddToList={handleAddToList}
              onMouseEnter={handleMouseEnter} // Handle mouse enter
              onMouseLeave={handleMouseLeave} // Handle mouse leave
              influencersRef={influencersRef}
            />
          )}
          {campaignVisible && (
            <Campaign setCampaignVisible={setCampaignVisible} />
          )}
        </div>
        <div className="flex ml-4 items-center gap-[10px]">
          <button className="px-4 py-2 text-white text-center text-xs rounded-[50px] bg-[#06F]">
            All Influencers
          </button>
          <button className="px-4 py-2 text-center text-xs rounded-[50px] border border-[#797A7B]">
            Top Rated
          </button>
        </div>

        <div
          className={`mt-4 ml-4 flex ${
            expanded ? "gap-x-[38px] gap-y-[32px]" : "gap-[18px]"
          } flex-wrap`}
        >
          <Card
            handleToggleFavorite={handleToggleFavorite}
            setCampaignVisible={setCampaignVisible}
            setShowLikedDiv={setShowLikedDiv}
          />
        </div>
      </div>
    </div>
  );
};

export default Influencers;
