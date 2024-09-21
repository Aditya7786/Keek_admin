import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 
import { TbCheckbox } from "react-icons/tb";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Filter = ({ isModalVisible, setIsModalVisible, onApplyFilters }) => {
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);
  // const [isStartDatePickerOpen, setIsStartDatePickerOpen] = useState(false);
  // const [isEndDatePickerOpen, setIsEndDatePickerOpen] = useState(false);
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

  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [isTransactionTypeVisible, setIsTransactionTypeVisible] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

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
    const selectedFilters = Object.keys(checkedItems).filter(
      (item) => checkedItems[item]
    );
    onApplyFilters(selectedFilters);
    setIsFilterVisible(false);
    setIsModalVisible(false);
  };

  return (
    <>
      {isFilterVisible && (
        <div className="w-[291px] h-[354px] px-4 pt-[17px] pb-[18px] bg-white flex flex-col items-center">
          <div className="w-full flex flex-col gap-5">
            <div className="flex justify-between items-center relative">
              <div className="text-center text-[#344053] text-xs font-normal font-['Open Sans']">
                Filters
              </div>
              <button
                className="absolute right-0 top-0 hover:text-[#0066ff]"
                onClick={handleCancel}
              >
                <RxCross2 />
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <div className="text-[#57595a] text-xs font-semibold font-['Open Sans']">
                  Date
                </div>
                <div className="flex justify-between w-full">
                  <div className="mb-2">
                    <label className="text-[10px]">Start Date</label>
                    <input
                      className="w-[124px] h-[30px] mt-2 border-[0.7px] text-sm text-[#B1B2B2] border-[#B1B2B2] uppercase p-1 rounded-lg"
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
                      className="w-[124px] h-[30px] mt-2 border-[0.7px] text-sm text-[#B1B2B2] border-[#B1B2B2] uppercase p-1 rounded-lg"
                      placeholder="DD/MM/YYYY"
                      type="date"
                      name="endDate"
                      value={filterData.endDate}
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setIsTransactionTypeVisible(!isTransactionTypeVisible)}
                >
                  <div className="text-[#57595a] text-xs font-semibold font-['Open Sans']">
                    Transaction Type
                  </div>
                  <div className="text-[#57595a]">
                    {isTransactionTypeVisible ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>
                {isTransactionTypeVisible && (
                  <div className="flex flex-col gap-2">
                    {["Deposit", "Paid", "Failed", "Pending"].map((item) => (
                      <div
                        key={item}
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleCheckbox(item)}
                      >
                        <div
                          className={`text-xs font-normal font-['Open Sans'] ${
                            checkedItems[item] ? "text-[#0066ff]" : "text-[#767676]"
                          }`}
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
                )}
              </div>
            </div>
            <div className="flex justify-start items-center gap-3.5">
              <button
                className="grow h-[30px] px-4 rounded border border-[#0066ff] flex justify-center items-center gap-2"
                onClick={handleCancel}
              >
                <div className="text-[#0066ff] text-sm font-normal font-['Open Sans']">
                  Cancel
                </div>
              </button>
              <button
                className="w-[170px] h-[30px] px-4 bg-[#0066ff] rounded flex justify-center items-center gap-3"
                onClick={handleApply}
              >
                <div className="text-white text-sm font-normal font-['Open Sans']">
                  Apply
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
