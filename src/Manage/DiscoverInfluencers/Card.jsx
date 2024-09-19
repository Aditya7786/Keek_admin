/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { MdVerified } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Mycontext } from "../../utils/Context";

const Card = ({
  setCampaignVisible,
  setShowLikedDiv,
  handleToggleFavorite,
}) => {
  const [cardData, setCardData] = useState([]);
  const contextState = useContext(Mycontext);
  const listData = contextState.listItemData;
  const influencersData = contextState.influencersItemData;
  // Initialize card data with liked status based on the Favorites list
  useEffect(() => {
    const favoritesList = listData.find((list) => list.name === "Favorites");

    // Map through influencersData to set liked status
    const updatedData = influencersData.map((influencer) => ({
      ...influencer,
      liked: favoritesList.influencers.includes(influencer.id),
    }));

    setCardData(updatedData);
  }, []);

  // Function to handle like/unlike and add/remove influencer to/from Favorites
  const handleLikeToggle = (index) => {
    const influencer = cardData[index];
    const wasLiked = influencer.liked;

    // Toggle the liked state
    setCardData((prevCardData) =>
      prevCardData.map((card, i) =>
        i === index ? { ...card, liked: !card.liked } : card
      )
    );

    const favoritesList = listData.find((list) => list.name === "Favorites");

    if (!wasLiked) {
      // Add influencer ID to Favorites, ensuring no duplicates
      if (!favoritesList.influencers.includes(influencer.id)) {
        favoritesList.influencers.push(influencer.id);
      }

      // Show the liked notification only when adding to favorites
      setShowLikedDiv(true);
    } else {
      // Remove influencer ID from Favorites and all lists
      favoritesList.influencers = favoritesList.influencers.filter(
        (id) => id !== influencer.id
      );

      // Remove influencer ID from all other lists in listData
      listData.forEach((list) => {
        if (list.name !== "Favorites") {
          list.influencers = list.influencers.filter(
            (id) => id !== influencer.id
          );
        }
      });
    }

    // Call the handleToggleFavorite to update the favorites list
    handleToggleFavorite(influencer.id);

    // Reset the liked notification when unliking
    if (wasLiked) {
      setShowLikedDiv(false); // Ensure Favorites doesn't show when unliking
    }
  };

  return (
    <>
      {cardData.map((item, cardIndex) => (
        <div
          key={cardIndex}
          className="flex flex-col w-[233px] h-[301px] p-[14px] px-[20px] gap-1 rounded-[10px] bg-white shadow-[2px_4px_14px_2px_rgba(0,0,0,0.25)]"
        >
          <h3 className="font-semibold">
            {item.name}
            {item.verified && (
              <MdVerified className="inline-block text-[#4DC4FF] ml-1" />
            )}
          </h3>
          <img
            className="h-[135px] rounded-[4px] overflow-hidden self-stretch"
            src={item.img}
            alt="InfluencerImg"
          />
          <div className="flex mt-1 items-center gap-1 h-5">
            <span className="flex items-center text-[#2563EB]">
              {item.star?.map((star, i) => (
                <IoMdStar key={i} />
              ))}
            </span>
            <span className="text-[10px] mt-0.5 font-semibold flex items-center">
              {item.star.length}.0
            </span>
            <span className="text-[8px] flex items-center leading-5 text-black">
              ({item.review})
            </span>
          </div>
          <h4 className="text-[10px] font-semibold">
            {item.platforms && "Platforms"}
          </h4>
          <div className="flex gap-1 mb-[18px]">
            {item.platforms.map((social, index) => (
              <div key={index} className="rounded bg-[#F6F6F6]">
                <span className="flex shrink-0 w-[61px] h-[18px] text-[8px] text-[#1F2223] p-1 justify-center items-center gap-1">
                  <img className="w-3 h-3" src={social.img} alt="" />{" "}
                  {social.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-[10px] items-center">
            <button
              className="flex w-7 h-6 px-1 py-0.5 flex-col justify-center items-center gap-2 rounded border border-neutral-400 bg-white"
              onClick={() => handleLikeToggle(cardIndex)}
            >
              {item.liked ? (
                <FaHeart className="inline-block text-[#D30B0B]" />
              ) : (
                <FaRegHeart className="inline-block " />
              )}
            </button>
            <button
              onClick={() => setCampaignVisible(true)}
              className="text-white text-[12px] font-semibold leading-[15.696px] flex h-[26px] px-[12.557px] py-[7.848px] justify-center items-center gap-[6.278px] flex-[1_0_0%] rounded-[4px] border-[0.785px] border-[#0070FF] bg-gradient-to-r from-[#06F] to-[#1D9ED5] shadow-[0px_0.785px_1.57px_rgba(16,24,40,0.05)]"
            >
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
