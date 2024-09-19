import React, { useState } from 'react';
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { IoArrowDownOutline } from "react-icons/io5";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const BarGraph = ({expanded}) => {
  const [timeFrame, setTimeFrame] = useState('Weeks');

  // Example data for weeks
  const weeklyData = [
    { name: 'Mon', value: 1000 },
    { name: 'Tue', value: 1200 },
    { name: 'Wed', value: 500 },
    { name: 'Thu', value: 700 },
    { name: 'Fri', value: 1100 },
    { name: 'Sat', value: 600 },
    { name: 'Sun', value: 300 },
  ];

  // Example data for months
  const monthlyData = [
    { name: 'Jan', value: 5000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 4500 },
    { name: 'Apr', value: 7000 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 8000 },
    { name: 'Jul', value: 7500 },
    { name: 'Aug', value: 5000 },
    { name: 'Sep', value: 4500 },
    { name: 'Oct', value: 7000 },
    { name: 'Nov', value: 6000 },
    { name: 'Dec', value: 8000 },
  ];

  // Determine the data to display based on the selected time frame
  const data = timeFrame === 'Weeks' ? weeklyData : monthlyData;
  // const width =expanded ? '650 ':'850'
  const barSize =  timeFrame === 'Weeks' ? 40 : 25

  return (
   <>
    <div className={` mt-[-1%] ${expanded ? '  w-[724px] h-[301px]': 'w-full h-[301px]' }  `}>
    <div className="   mx-auto p-4 h-[301px]  bg-white rounded-[14px]">
      <div className="flex w-[684.84px]  h-[30px] justify-between items-center mb-4">
        <h2 className="text-[16px] font-semibold font-body">Performance Measure</h2>
        <div className="flex items-center space-x-3">
          <select
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
            className="border-2 border-[#b1b2b2] w-[86px] h-[30px] bg-white rounded-md px-[7px] py-1 text-[12px] font-semibold font-body "
          >
            <option>Weeks</option>
            <option>Months</option>
          </select>
          <button className="border-2 flex w-[104.84px] h-[30px]  items-center  border-[#b1b2b2] rounded-md gap-1 px-[10px] py-1 text-[11px] font-semibold font-body ">
          <HiOutlineDocumentDownload  className="w-[17.12px] h-[14.55px]   "/>
            Export PDF
          </button>
        </div>
      </div>
      
      <div className='flex items-center  space-x-6 '>
       <div  className={`${expanded ? " w-[550px]":" w-full"}`}>
       <div className=' h-[200px] mt-[41px] py-2 '>
      <ResponsiveContainer width="100%" height="100%"   >
        <BarChart data={data}
         >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" 
          tick={{ fontSize: 13,  fontWeight:"400", fill: "#52525B" }}  />
          <YAxis />
          <Tooltip cursor={null} />
          <Bar dataKey="value" fill="#384edde5" barSize={barSize} />
        </BarChart>
      </ResponsiveContainer>
      </div>
       </div>

      <div >
      <div className="  text-start  mt-[-25px]     h-[192px] ">
        <div className=" my-3 text-[#797a7b] text-[12px] font-normal font-body  " >DECREASE 
          <div className='flex mt-1 items-center gap-2 text-[18px] font-semibold font-body text-[#ff424c]'>20% <IoArrowDownOutline/> </div>
             
        </div>
        <div className=" my-3 text-[#797a7b] text-[12px] font-normal font-body  ">CURRENT  {timeFrame.toUpperCase()} 
        <div className=" mt-1  text-[18px] font-semibold font-body text-gray-900">$ 200,000</div>
        </div>
       
        <div className=" my-3 text-[#797a7b] text-[12px] font-normal font-body  ">PREVIOUS {timeFrame.toUpperCase()}
        <div className="  mt-1  text-[18px] font-semibold font-body text-gray-900">$200,000</div>
        </div>
        
      </div>
      </div>

    </div>
    </div>
    </div>
   </>
  );
};

export default BarGraph;
