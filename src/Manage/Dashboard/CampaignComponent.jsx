import React, { useState, useEffect } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

const CampaignComponent = () => {
  const [liveCampaignsCount, setliveCampaignsCount] = useState(0);
  const [pastCampaignsCount, setPastCampaignsCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setliveCampaignsCount(12);
      setPastCampaignsCount(20);
    }, 1000);
  }, []);

  return (
    <div>
      <div className=" h-[296px] w-[284px] ">
       <div className="w-[284px] h-[138px] rounded-[10px] bg-[#CFF38D] pt-[20px] px-[30px]  pb-[14px] ">
       <div className="flex flex-col justify-between  ">
        <div className="flex flex-col w-[224px]  justify-center items-start gap-[14px] self-stretch">
          <div>
            <p className="text-[16px] not-italic font-semibold leading-[18px] tracking-[1px] uppercase text-[#363939]">
              LIVE CAMPAIGNS
            </p>
            <p className="text-[26px] not-italic pt-[14px] font-semibold leading-[32px] text-[#18181B]">{liveCampaignsCount}</p>
          </div>
        </div>

        <div className="flex justify-end">
        <Link to="/CampaignManagement"> 
          <button className="bg-[#F6F6F6] h-[40px] p-2 rounded-full">

            <KeyboardArrowRightIcon />
          </button>
        </Link>
        </div>
      </div>
       </div>

       <div className="w-[284px] h-[138px] rounded-[10px] bg-[#EA8389] pt-[20px] px-[30px] mt-5 pb-[14px] ">
       <div className="flex flex-col justify-between  ">
        <div className="flex flex-col w-[224px]  justify-center items-start gap-[14px] self-stretch">
          <div>
            <p className="text-[16px] not-italic font-semibold leading-[18px] tracking-[1px] uppercase text-[#363939]">
              PAST CAMPAIGNS
            </p>
            <p className="text-[26px] not-italic pt-[14px] font-semibold leading-[32px] text-[#18181B]">{pastCampaignsCount}</p>
          </div>
        </div>

        <div className="flex justify-end">
        <Link to="/PastCampaign">

          <button className="bg-[#F6F6F6] h-[40px] p-2 rounded-full">
            <KeyboardArrowRightIcon />
          </button>
          </Link>
        </div>
      </div>
       </div>
    </div>
    </div>
  );
};

export default CampaignComponent;