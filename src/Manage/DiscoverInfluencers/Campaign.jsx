import React from "react";

const Campaign = ({ setCampaignVisible }) => {
  const campaignName = [
    "Campaign name",
    "Campaign name",
    "Campaign name",
    "Save trees and more",
  ];
  return (
    <div className="absolute top-12 right-0 flex flex-col shrink-0 w-[300px] rounded-[10px] bg-white p-4 font-semibold shadow-[2px_4px_14px_2px_rgba(0,0,0,0.25)]">
      <h1 className="mb-5">Select Campaign to invite</h1>
      <div className="flex flex-col gap-y-3 text-sm">
        {campaignName.map((item, index) => {
          return (
            <div key={index} className="flex items-center justify-between">
              <label htmlFor={index} className="text-[#767676] ">
                {item}
              </label>
              <input type="checkbox" name="" id={index} />
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-[14px] self-stretch mt-[40px]">
        <button
          className="h-[26px] w-1/3 px-4 text-xs flex items-center justify-center gap-2 rounded border border-[#06F] text-[#06F]"
          onClick={() => setCampaignVisible(false)}
        >
          Cancel
        </button>
        <button
          className="text-white w-2/3 text-[12px] font-semibold leading-[15.696px] flex h-[26px] px-[12.557px] py-[7.848px] justify-center items-center gap-[6.278px] flex-[1_0_0%] rounded-[4px] border-[0.785px] border-[#0070FF] bg-gradient-to-r from-[#06F] to-[#1D9ED5] shadow-[0px_0.785px_1.57px_rgba(16,24,40,0.05)]"
          onClick={() => setCampaignVisible(false)}
        >
          Send Invite
        </button>
      </div>
    </div>
  );
};

export default Campaign;
