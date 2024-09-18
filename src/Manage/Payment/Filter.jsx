import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
import { TbCheckbox } from "react-icons/tb";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Filter = ({ isModalVisible, setIsModalVisible, onApplyFilters }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isStartDatePickerOpen, setIsStartDatePickerOpen] = useState(false);
  const [isEndDatePickerOpen, setIsEndDatePickerOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    Deposit: false,
    Paid: false,
    Failed: false,
    Pending: false,
  });

  const [filterData, setFilterData] = useState({
    startDate: "",
    endDate: "",

  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };


  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const toggleCheckbox = (item) => {
    setCheckedItems({
      ...checkedItems,
      [item]: !checkedItems[item],
    });
  };

  const handleCancel = () => {
    setIsFilterVisible(false);
    setIsModalVisible(false);
  };

  const handleApply = () => {
    const selectedFilters = Object.keys(checkedItems).filter(item => checkedItems[item]);
    onApplyFilters(selectedFilters);
    setIsFilterVisible(false);
    setIsModalVisible(false);
  };

  return (
    <>
      {isFilterVisible && (
        <div>
          <div className="w-[323px] h-[372px] px-4 pt-[17px] pb-[18px] bg-white flex-col justify-center items-center inline-flex">
            <div className="self-stretch h-[337px] flex-col justify-start items-center gap-10 inline-flex">
              <div className="self-stretch h-[267px] flex-col justify-start items-center gap-5 flex">
                <div className="self-stretch h-6 flex-col justify-start items-end gap-2 flex relative">
                  <div className="w-[289px] text-center text-[#344053] text-xs font-normal font-['Open Sans'] leading-none">
                    Filters
                  </div>
                  <button
                    className="absolute right-0 top-0 mt-0 mr-2 hover:text-[#0066ff]"
                    onClick={handleCancel}
                  >
                    <RxCross2 />
                  </button>
                </div>
                <div className="self-stretch h-[223px] flex-col justify-start items-start gap-5 flex">
                  <div className="self-stretch h-[72px] flex-col justify-start items-start gap-1.5 flex">
                    <div className="self-stretch text-[#57595a] text-xs font-semibold font-['Open Sans'] leading-none">
                      Date
                    </div>


<div className="flex flex-row justify-between w-full">
              <div className="mb-2 ">
                <label className="text-[10px]">Start Date</label>
                <input
                  className="w-[124px] h-[30px] mt-2 border-[0.7px] text-sm text-[#B1B2B2] border-[#B1B2B2] uppercase  p-1 rounded-lg"
                  placeholder="DD/MM/YYYY"
                  type="date"
                  name="startDate"
                  value={filterData.startDate}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-2">
                <label className="text-[10px]">End Date</label>
                <input
                  className="w-[124px] h-[30px] mt-2 border-[0.7px] text-sm text-[#B1B2B2]  border-[#B1B2B2]  uppercase p-1 rounded-lg"
                  placeholder="DD/MM/YYYY"
                  type="date"
                  name="endDate"
                  value={filterData.endDate}
                  onChange={handleInput}
                />
              </div>
            </div>

                  </div>
                  <div className="self-stretch h-[131px] flex-col justify-start items-start gap-3 flex">
                    <div className="self-stretch justify-between items-center inline-flex">
                      <div className="text-[#57595a] text-xs font-semibold font-['Open Sans'] leading-[18.83px]">
                        Transaction Type
                      </div>
                    </div>
                    <div className="self-stretch h-[100px] flex-col justify-start items-start gap-2 flex">
                      {["Deposit", "Paid", "Failed", "Pending"].map((item) => (
                        <div
                          key={item}
                          className="self-stretch justify-between items-center inline-flex cursor-pointer"
                          onClick={() => toggleCheckbox(item)}
                        >
                          <div
                            className={`text-xs font-normal font-['Open Sans'] leading-[18.83px] ${checkedItems[item] ? "text-[#0066ff]" : "text-[#767676]"}`}
                          >
                            {item}
                          </div>
                          <div className="w-4 h-4">
                            {checkedItems[item] ? (
                              <TbCheckbox className="text-[#0066ff]" />
                            ) : (
                              <MdOutlineCheckBoxOutlineBlank className="text-[#c1c1c1]" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-center gap-3.5 inline-flex">
                <button
                  className="grow shrink basis-0 h-[30px] px-4 rounded border border-[#0066ff] justify-center items-center gap-2 flex"
                  onClick={handleCancel}
                >
                  <div className="text-center text-[#0066ff] text-sm font-normal font-['Open Sans'] leading-[14px]">
                    Cancel
                  </div>
                </button>
                <button
                  className="w-[170px] h-[30px] px-4 bg-[#0066ff] rounded justify-center items-center gap-3 flex"
                  onClick={handleApply}
                >
                  <div className="text-center text-white text-sm font-normal font-['Open Sans'] leading-[14px]">
                    Apply
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
