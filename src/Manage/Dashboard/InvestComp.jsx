import React from 'react';

const InvestComp = ({expanded}) => {
  const data = {
    invested: 200000,
    current: 250000,
    totalReturn: { amount: 50000, percentage: 25 },
    oneDayReturn: { amount: 5000, percentage: 5 },
  };

  return (
    <div  className={`${expanded ? '  w-[721px]': 'w-full' }  `}>
      <div className="container  mx-auto ">
        <div className="flex  justify-between mt-3  h-[123px]  px-[32px] py-[22px] bg-white rounded-[10px]">
          <div className="text-start">
            <div className="text-[14px] font-semibold font-body text-[#797a7b]">INVESTED</div>
            <div className=" mt-4 text-[20px] font-body text-[#1f2223] font-semibold">${data.invested.toLocaleString()}</div>
          </div>
          <div className="text-start">
            <div className="text-[14px] font-semibold font-body text-[#797a7b]">CURRENT</div>
            <div className=" mt-4 text-[20px] font-body text-[#1f2223] font-semibold">${data.current.toLocaleString()}</div>
          </div>
          <div className="text-start">
            <div className="text-[14px] font-semibold font-body text-[#797a7b]">TOTAL RETURN</div>
            <div className=" mt-4 text-[20px] font-body text-[#22c55e] font-semibold">
              +{data.totalReturn.amount.toLocaleString()} ({data.totalReturn.percentage}%)
            </div>
          </div>
          <div className="text-start">
            <div className="text-[14px] font-semibold font-body text-[#797a7b]">ONE DAY RETURN</div>
            <div className=" mt-4 text-[20px] font-body text-[#22c55e] font-semibold">
              +{data.oneDayReturn.amount.toLocaleString()} ({data.oneDayReturn.percentage}%)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestComp;
