import { IoMdStar } from "react-icons/io";
import { MdVerified } from "react-icons/md";

const SavedCard = ({ influencer, removeInfluencer, setCampaignVisible }) => {
  // Check if influencer data is valid
  if (!influencer) return null;

  return (
    <div className="flex max-w-[1046px] flex-wrap gap-x-[38px] gap-y-[32px]">
      <div className="flex flex-col w-[233px] h-[301px] p-[14px] px-[20px] gap-[10px] rounded-[10px] bg-white shadow-[2px_4px_14px_2px_rgba(0,0,0,0.25)]">
        <h3 className="font-semibold">
          {influencer.name}
          {influencer.verified && (
            <MdVerified className="inline-block text-[#4DC4FF] ml-1" />
          )}
        </h3>
        <img
          className="h-[135px] rounded-[4px] overflow-hidden self-stretch"
          src={influencer.img} // Access the correct image source property
          alt="Influencer"
        />
        <div className="flex mt-1 items-center gap-1 h-5">
          <span className="flex items-center text-[#2563EB]">
            {Array.from({ length: 5 }, (_, i) => (
              <IoMdStar
                key={i}
                className={
                  i < influencer.star.length
                    ? "text-yellow-500"
                    : "text-gray-300"
                }
              />
            ))}
          </span>
          <span className="text-[10px] mt-0.5 font-semibold flex items-center">
            {influencer.star.length}.0
          </span>
          <span className="text-[8px] flex items-center leading-5 text-black">
            ({influencer.review})
          </span>
        </div>
        <div className="flex gap-1 mb-[18px]">
          {influencer.platforms.map((platform, i) => (
            <button
              key={i}
              className="flex items-center gap-1 rounded bg-[#F6F6F6] p-1"
            >
              <img src={platform.img} alt={platform.name} className="h-4 w-4" />
              <span className="text-[8px] text-[#1F2223]">{platform.name}</span>
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
    </div>
  );
};

export default SavedCard;
