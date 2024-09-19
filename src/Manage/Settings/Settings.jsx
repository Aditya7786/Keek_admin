import React, { useContext } from "react";
import { Mycontext } from "../../utils/Context";

export const Settings = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;

  const settingsItems = [
    { id: 1, label: "Change Password" },
    { id: 2, label: "Website Theme" },
    { id: 3, label: "Report a Bug" },
    { id: 4, label: "Updates" },
    { id: 5, label: "Support" },
    { id: 6, label: "Terms and condition" },
    { id: 7, label: "Privacy Policy" },
    { id: 8, label: "Disclaimer" },
    { id: 9, label: "Delete Account", danger: true },
  ];

  return (
    <div
      className={`flex-col relative ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      } overflow-y-auto  space-y-4 p-4`}
    >
       <div className={`bg-white h-[918px] -top-[5px] relative  ${expanded ? "w-[1120px]" : "w-full"} `}>

      <div className="head ml-4 w-[1062px] h-[52px] top-[48px] relative  ">
        <div className="text-[#0f1728] w-[550px] h-[28px] gap-[8px] text-2xl font-semibold font-['Open Sans'] leading-7">
          Settings
        </div>
        <div className="text-[#57595a] w-[550px] h-[20px] text-sm font-normal font-['Open Sans'] leading-tight">
          Your settings will appear here. You can change your settings according to your need.
        </div>
      </div>


        <div className={`${expanded ? "w-[1072px] ml-4 " : "w-full px-2 "} h-[612px] mt-[7%]  flex-col justify-start items-start inline-flex`}>
          {settingsItems.map((item, index) => (
            <button
              key={item.id}
              className={`gap-[10px] w-full text-left  px-2.5 py-5 border-b border-[#d2d3d3] justify-start items-center gap-2.5 inline-flex 
                hover:bg-[#CFE2FF] hover:rounded-md transition-colors duration-200 ${
                  item.danger ? "hover:bg-[#fddede]" : ""
                } focus:outline-none ${
                index === 0 ? "border-t border-[#d2d3d3] w-full" : ""
              }`} // Adds full width to the first button ("Change Password")
              onClick={() => console.log(`${item.label} clicked`)}
            >
              <span
                className={`text-lg font-normal font-['Open Sans'] leading-7 ${
                  item.danger ? "text-[#f44336]" : "text-[#0f1728]"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>

      <div className="footer flex justify-end">
        <button
          className="w-[170px] h-[35px] px-4 bg-[#0062f5] rounded justify-center items-center gap-3 inline-flex 
          text-center text-white text-base font-normal font-['Open Sans'] leading-none
          mt-[67px] mr-[40px] mb-[62px]"
          onClick={() => console.log("Logout clicked")}
        >
            <div className="w-[52px] h-[16px] text-[16px] ">

          Logout
            </div>
        </button>
      </div>

      </div>

    </div>
  );
};
export default Settings;