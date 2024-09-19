import React, { useState } from "react";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RoiComp = ({expanded}) => {
  const [view, setView] = useState("monthly");
  

  const monthlyData = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 35 },
    { name: "Mar", value: 30 },
    { name: "Apr", value: 45 },
    { name: "May", value: 42 },
    { name: "Jun", value: 52 },
    { name: "Jul", value: 56 },
    { name: "Aug", value: 50 },
    { name: "Sep", value: 70 },
    { name: "Oct", value: 72 },
    { name: "Nov", value: 70 },
    { name: "Dec", value: 91.51 },
  ];

  const yearlyData = [
    { name: "2015", value: 200 },
    { name: "2016", value: 350 },
    { name: "2017", value: 400 },
    { name: "2018", value: 700 },
    { name: "2019", value: 500 },
    { name: "2020", value: 800 },
    { name: "2021", value: 500 },
    { name: "2022", value: 850 },
    { name: "2023", value: 950 },
  ];

  const data = view === "monthly" ? monthlyData : yearlyData;

  return (
    <>
    <div className={`   ${expanded ? '  w-[724px]': 'w-full' } `}>
    <div className={` ${expanded ? '  w-[724px]': 'w-full' } mt-5 p-4 h-[328px] rounded-[14px] bg-[#ffffff] border-2 border-[#e4e4e7]`}    >
      <div className="flex justify-between items-center p-2 w-[678.13px] h-[30px] ">
        <h2 className="text-[16px] font-semibold font-body ">ROI Report</h2>
        <div className="flex justify-end space-x-2 ">
          <select
            value={view}
            onChange={(e) => setView(e.target.value)}
            className=" px-2  py-1 rounded-[5px] w-[90px]  h-[30px] text-[12px] font-semibold font-body  bg-white border-2 border-[#b1b2b2]"
          >
            <option value="monthly">Months</option>
            <option value="yearly">Year</option>
          </select>
          <button className="border-2 flex w-[104.84px] h-[30px]  items-center  border-[#b1b2b2] rounded-md gap-1 px-[10px] py-1 text-[11px] font-semibold font-body ">
          <HiOutlineDocumentDownload  className="w-[17.12px] h-[14.55px]   "/>
            Export PDF
          </button>
        </div>
      </div>
      <div className="relative h-[224px]   mt-[41px]  ">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart 
           
            data={data}
            margin={{ top: 10, left:10,  bottom: 20 }}
           
          >
            <XAxis  className="font-bold "
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 13,  fontWeight:"400", fill: "#52525B" }} // Ensure labels are visible
              padding={{ left: 0, right: 0}}  // Prevent clipping of the first and last labels
              
            />
            <Tooltip formatter={(value) => `$${value}`} />
            <Area  width="200px"
              
              type="monotone"
              dataKey="value"
              stroke="#4f46e5"
              strokeWidth={2}
              fill="#eef2ff"
            
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
    </div>
    </>
  );
};

export default RoiComp;
