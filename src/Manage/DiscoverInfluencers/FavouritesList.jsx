import React, { useContext, useState } from "react";
import { Mycontext } from "../../utils/Context";
import { MdVerified } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { FaAngleRight, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiYoutube } from "react-icons/si";
import Image from "../../Assets/InfluencerImg.png";
import { Link } from "react-router-dom";
import Campaign from "./Campaign";

const FavouritesList = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;

  const platformIcons = {
    Instagram: <AiFillInstagram className="text-pink-500" />,
    Facebook: <FaFacebook className="text-blue-600" />,
    YouTube: <SiYoutube className="text-red-500" />,
  };
  const [campaignVisible, setCampaignVisible] = useState(false);
  // State to manage the list of influencer details
  const [influencerDetails, setInfluencerDetails] = useState([
    {
      id: 1,
      name: "Gautam Sachdeva",
      rating: 4.0,
      reviews: 30,
      platforms: ["Instagram", "Facebook", "YouTube"],
      imageSrc: Image,
    },
    {
      id: 2,
      name: "Gautam Sachdeva",
      rating: 4.0,
      reviews: 30,
      platforms: ["Instagram", "Facebook", "YouTube"],
      imageSrc: Image,
    },
    {
      id: 3,
      name: "Gautam Sachdeva",
      rating: 4.0,
      reviews: 30,
      platforms: ["Instagram", "Facebook", "YouTube"],
      imageSrc: Image,
    },
    {
      id: 4,
      name: "Gautam Sachdeva",
      rating: 4.0,
      reviews: 30,
      platforms: ["Instagram", "Facebook", "YouTube"],
      imageSrc: Image,
    },
    {
      id: 5,
      name: "Gautam Sachdeva",
      rating: 4.0,
      reviews: 30,
      platforms: ["Instagram", "Facebook", "YouTube"],
      imageSrc: Image,
    },
    {
      id: 6,
      name: "Gautam Sachdeva",
      rating: 4.0,
      reviews: 30,
      platforms: ["Instagram", "Facebook", "YouTube"],
      imageSrc: Image,
    },
    {
      id: 7,
      name: "Gautam Sachdeva",
      rating: 4.0,
      reviews: 30,
      platforms: ["Instagram", "Facebook", "YouTube"],
      imageSrc: Image,
    },
    {
      id: 8,
      name: "Gautam Sachdeva",
      rating: 4.0,
      reviews: 30,
      platforms: ["Instagram", "Facebook", "YouTube"],
      imageSrc: Image,
    },
  ]);

  // Function to remove an influencer card
  const removeInfluencer = (id) => {
    setInfluencerDetails((prevDetails) =>
      prevDetails.filter((influencer) => influencer.id !== id)
    );
  };

  return (
    <div
      className={`flex flex-wrap relative 
        w-{1069px}
        ${
          !expanded
            ? "left-[100px] w-[calc(100%-120px)]"
            : "left-[320px] w-[calc(100%-340px)]"
        }  overflow-hidden  bg-white space-y-4 p-4 ml-[20px]`}
    >
      <div>
        <div className="w-[1091px] relative h-[47px] flex-col justify-start items-start gap-7 inline-flex">
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
                    Favourites
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
              expanded ? "w-[calc(100%-10px)]" : "w-[1320px]"
            } h-[0px] border border-[#d2d3d3]`}
          ></div>
        </div>
        <div
          className={`grid gap-[38px] mt-[31px] ${
            expanded ? "grid-cols-4" : "grid-cols-5"
          }`}
        >
          {influencerDetails.map((influencer) => (
            <div
              key={influencer.id}
              className="flex flex-col w-[233px] h-[301px] p-[14px] px-[20px] gap-[10px] rounded-[10px] bg-white shadow-[2px_4px_14px_2px_rgba(0,0,0,0.25)]"
            >
              <h3 className="font-semibold">
                {influencer.name}
                <MdVerified className="inline-block text-[#4DC4FF] ml-1" />
              </h3>
              <img
                className="h-[135px] rounded-[4px] overflow-hidden self-stretch"
                src={influencer.imageSrc}
                alt="InfluencerImg"
              />
              <div className="flex mt-1 items-center gap-1 h-5">
                <span className="flex items-center text-[#2563EB]">
                  {Array.from({ length: 5 }, (_, i) => (
                    <IoMdStar
                      key={i}
                      className={
                        i < Math.round(influencer.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </span>
                <span className="text-[10px] mt-0.5 font-semibold flex items-center">
                  {influencer.rating.toFixed(1)}
                </span>
                <span className="text-[8px] flex items-center leading-5 text-black">
                  ({influencer.reviews} Reviews)
                </span>
              </div>
              <div className="flex gap-1 mb-[18px]">
                {influencer.platforms.map((platform, i) => (
                  <button
                    key={i}
                    className="flex items-center gap-1 rounded bg-[#F6F6F6] p-1"
                  >
                    {platformIcons[platform]}
                    <span className="text-[8px] text-[#1F2223]">
                      {platform}
                    </span>
                  </button>
                ))}
              </div>
              <div className="flex gap-[10px] items-center">
                <button
                  className="w-[70px] h-[26px] px-4 py-1.5 bg-white rounded border border-[#b1b2b2] justify-center items-center gap-2 inline-flex"
                  onClick={() => removeInfluencer(influencer.id)}
                >
                  <div className="text-[#1f2223] text-[10px] font-normal font-['Open Sans']">
                    Remove
                  </div>
                </button>

                <button
                  className="text-white text-[12px] font-semibold leading-[15.696px] flex h-[26px] px-[12.557px] py-[7.848px] justify-center items-center gap-[6.278px] flex-[1_0_0%] rounded-[4px] border-[0.785px] border-[#0070FF] bg-gradient-to-r from-[#06F] to-[#1D9ED5] shadow-[0px_0.785px_1.57px_rgba(16,24,40,0.05)]"
                  onClick={() => setCampaignVisible(true)}
                >
                  Invite
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouritesList;
