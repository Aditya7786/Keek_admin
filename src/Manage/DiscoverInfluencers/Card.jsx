import React, { useState } from "react";
import { MdVerified } from "react-icons/md";
import InfluencerImg from "../../Assets/InfluencerImg.png";
import Instagram from "../../Assets/Instagram.svg";
import FaceBook from "../../Assets/Facebook.svg";
import YouTube from "../../Assets/YouTube.svg";
import { IoMdStar } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import Profile from "../BrandsProfile/Profile";

const Card = ({ setCampaignVisible, setShowLikedDiv }) => {
  const [cardData, setCardData] = useState([
    {
      name: "Gautam Sachdeva",
      verified: true,
      img: InfluencerImg,
      star: [1, 2, 3, 4],
      review: "30 reviews",
      platforms: [
        { name: "Instagram", img: Instagram },
        { name: "Facebook", img: FaceBook },
        { name: "Youtube", img: YouTube },
      ],
      liked: false,
      button: "Invite",
    },
    {
      name: "Gautam Sachdeva",
      verified: true,
      img: InfluencerImg,
      star: [1, 2, 3, 4],
      review: "30 reviews",
      platforms: [
        { name: "Instagram", img: Instagram },
        { name: "Facebook", img: FaceBook },
        { name: "Youtube", img: YouTube },
      ],
      liked: false,
      button: "Invite",
    },
    {
      name: "Gautam Sachdeva",
      verified: true,
      img: InfluencerImg,
      star: [1, 2, 3, 4],
      review: "30 reviews",
      platforms: [
        { name: "Instagram", img: Instagram },
        { name: "Facebook", img: FaceBook },
        { name: "Youtube", img: YouTube },
      ],
      liked: false,
      button: "Invite",
    },
    {
      name: "Gautam Sachdeva",
      verified: true,
      img: InfluencerImg,
      star: [1, 2, 3, 4],
      review: "30 reviews",
      platforms: [
        { name: "Instagram", img: Instagram },
        { name: "Facebook", img: FaceBook },
        { name: "Youtube", img: YouTube },
      ],
      liked: false,
      button: "Invite",
    },
    {
      name: "Gautam Sachdeva",
      verified: true,
      img: InfluencerImg,
      star: [1, 2, 3, 4],
      review: "30 reviews",
      platforms: [
        { name: "Instagram", img: Instagram },
        { name: "Facebook", img: FaceBook },
        { name: "Youtube", img: YouTube },
      ],
      liked: false,
      button: "Invite",
    },
    {
      name: "Gautam Sachdeva",
      verified: true,
      img: InfluencerImg,
      star: [1, 2, 3, 4],
      review: "30 reviews",
      platforms: [
        { name: "Instagram", img: Instagram },
        { name: "Facebook", img: FaceBook },
        { name: "Youtube", img: YouTube },
      ],
      liked: false,
      button: "Invite",
    },
    {
      name: "Gautam Sachdeva",
      verified: true,
      img: InfluencerImg,
      star: [1, 2, 3, 4],
      review: "30 reviews",
      platforms: [
        { name: "Instagram", img: Instagram },
        { name: "Facebook", img: FaceBook },
        { name: "Youtube", img: YouTube },
      ],
      liked: false,
      button: "Invite",
    },
    {
      name: "Gautam Sachdeva",
      verified: true,
      img: InfluencerImg,
      star: [1, 2, 3, 4],
      review: "30 reviews",
      platforms: [
        { name: "Instagram", img: Instagram },
        { name: "Facebook", img: FaceBook },
        { name: "Youtube", img: YouTube },
      ],
      liked: false,
      button: "Invite",
    },
    {
      name: "Gautam Sachdeva",
      verified: true,
      img: InfluencerImg,
      star: [1, 2, 3, 4],
      review: "30 reviews",
      platforms: [
        { name: "Instagram", img: Instagram },
        { name: "Facebook", img: FaceBook },
        { name: "Youtube", img: YouTube },
      ],
      liked: false,
      button: "Invite",
    },
    {
      name: "Gautam Sachdeva",
      verified: true,
      img: InfluencerImg,
      star: [1, 2, 3, 4],
      review: "30 reviews",
      platforms: [
        { name: "Instagram", img: Instagram },
        { name: "Facebook", img: FaceBook },
        { name: "Youtube", img: YouTube },
      ],
      liked: false,
      button: "Invite",
    },
  ]);

  const [isProfileVisible, setProfileVisible] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleLikeToggle = (index) => {
    setCardData((prevCardData) =>
      prevCardData.map((card, i) =>
        i === index ? { ...card, liked: !card.liked } : card
      )
    );
    if (!cardData[index].liked) {
      setShowLikedDiv(true);
      setTimeout(() => {
        setShowLikedDiv(false);
      }, 3000);
    }
  };

  const handleProfileOpen = (profile) => {
    setSelectedProfile(profile);
    setProfileVisible(true);
  };

  const handleProfileClose = () => {
    setProfileVisible(false);
    setSelectedProfile(null);
  };

  return (
    <>
      {cardData?.map((item, cardIndex) => {
        return (
          <div
            key={cardIndex}
            className="flex flex-col w-[233px] h-[301px] p-[14px] px-[20px] gap-1 rounded-[10px] bg-white shadow-[2px_4px_14px_2px_rgba(0,0,0,0.25)]"
          >
            <h3 
              className="font-semibold cursor-pointer"
              onClick={() => handleProfileOpen(item)}
            >
              {item.name}
              {item.verified && (
                <MdVerified className="inline-block text-[#4DC4FF] ml-1" />
              )}
            </h3>
            <img
              className="h-[135px] rounded-[4px] overflow-hidden self-stretch cursor-pointer"
              src={item.img}
              alt="InfluencerImg"
              onClick={() => handleProfileOpen(item)}
            />
            <div className="flex mt-1 items-center gap-1 h-5">
              <span className="flex items-center text-[#2563EB]">
                {item.star?.map((item) => (
                  <IoMdStar key={item} />
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
                    <img className="w-3 h-3" src={social.img} alt="" /> 
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
        );
      })}

      {/* Profile Popup */}
      {isProfileVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative bg-white p-5 rounded-lg shadow-lg w-[90%] md:w-[60%] lg:w-[40%]">
            <button
              onClick={handleProfileClose}
              className="absolute top-2 right-2 text-red-500 font-bold"
            >
              Close
            </button>
            {isProfileVisible && (
  <Profile 
    isOpen={isProfileVisible} 
    setIsOpen={setProfileVisible} 
    selectData={selectedProfile} 
  />
)}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
