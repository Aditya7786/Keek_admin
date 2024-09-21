import React, { useContext, useState, useEffect } from "react";
import { Mycontext } from "../../utils/Context";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import Profile from "../../Assets/Profile.jpg";
import AddNiche from "./AddNiche";
import Filter from "./Filter";
import {BrandsData} from "./BrandsData";

const BrandsProfile = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;

  const [profileData, setProfileData] = useState(BrandsData); // Original data state
  const [editableData, setEditableData] = useState(BrandsData); // Temporary editable state as a deep copy
  const [editable, setEditable] = useState(false);
  const [isNicheVisible, setIsNicheVisible] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    setEditableData(profileData);
  }, [profileData]);

  // Handle changes to text areas and input fields
  const handleInputChange = (index, value) => {
    const newEditableData = JSON.parse(JSON.stringify(editableData));
    newEditableData[index].data = value;
    setEditableData(newEditableData);
  };

  // Handle Save button
  const handleSaveClick = () => {
    setProfileData(JSON.parse(JSON.stringify(editableData))); // Save changes to the original data
    setEditable(false);
  };

  // Handle Cancel button
  const handleCancelClick = () => {
    setEditableData(JSON.parse(JSON.stringify(profileData))); // Revert changes to the original data
    setEditable(false);
  };

  // Function to update the Niche section in BrandsData
  const handleAddNiches = (selectedNiches) => {
    const newNiches = selectedNiches.map((niche) => ({ name: niche }));

    setEditableData((prevData) =>
      prevData.map((item) =>
        item.name === "Niche"
          ? {
              ...item,
              data: [
                ...item.data, // Keep existing niches
                ...newNiches, // Add new niches
              ].reduce((unique, niche) => {
                if (!unique.some((existing) => existing.name === niche.name)) {
                  unique.push(niche);
                }
                return unique;
              }, []),
            }
          : item
      )
    );
  };

  // Function to update the Filter component data
  const handleUpdateFilter = (updatedProfileData) => {
    // Update editableData with the new filter data
    setEditableData(updatedProfileData);
  };

  // Function to remove a niche when the close icon is clicked
  const handleRemoveNiche = (nicheToRemove) => {
    setEditableData((prevData) =>
      prevData.map((item) =>
        item.name === "Niche"
          ? {
              ...item,
              data: item.data.filter((niche) => niche.name !== nicheToRemove),
            }
          : item
      )
    );
  };

  return (
    <div
      className={`flex flex-col relative ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      } overflow-y-auto bg-white pb-[115px]`}
    >
      <div className="mr-[74px] mt-[45px] ml-[21px]">
        <div className="flex items-center justify-between mb-[42px]">
          <div className="flex items-center gap-[11px]">
            <img
              src={Profile}
              alt="Profile"
              className="w-[120px] h-[120px] rounded-full overflow-hidden object-fill"
            />
            <div>
              <div className="flex flex-col gap-[18px]">
                <h2 className="text-[22px] font-semibold">Gautam Sachdeva</h2>
                <div className="flex items-center">
                  <IoMdStar size={"1.4em"} className="text-[#06F]" />
                  <IoMdStar size={"1.4em"} className="text-[#06F]" />
                  <IoMdStar size={"1.4em"} className="text-[#06F]" />
                  <IoMdStar size={"1.4em"} className="text-[#06F]" />
                  <IoMdStarOutline size={"1.4em"} className="text-[#06F]" />
                  <span className="text-xs font-semibold mt-1">4.0</span>&nbsp;
                  <span className="text-xs mt-1">(30 Reviews)</span>
                </div>
                <h3 className="flex items-center gap-2 text-sm font-semibold">
                  <CiLocationOn size={"1.4em"} />
                  New Delhi, India
                </h3>
              </div>
            </div>
          </div>
          {editable ? (
            <div className="flex w-[320px] items-center gap-[14px] text-white text-sm">
              <button
                onClick={handleCancelClick}
                className="flex h-[35px] px-4 text-[#06F] items-center justify-center gap-2 flex-[1_0_0] rounded border border-[#06F]"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveClick}
                className="flex w-[190px] h-[35px] items-center justify-center gap-3 flex-shrink-0 rounded bg-[#06F]"
              >
                Save Changes
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditable(true)}
              className="px-4 w-[170px] h-[35px] flex items-center justify-center gap-3 border rounded border-[#06F] text-[#06F] text-sm"
            >
              Edit Profile
            </button>
          )}
        </div>
        <hr className="w-full" />
        {editableData.map((item, index) => (
          <div key={index}>
            <div
              className={`flex py-8 gap-x-[62px] ${
                editable &&
                (item.name === "Niche" || item.name === "Social profiles") &&
                "justify-between"
              } `}
            >
              <div className="w-[256px]">
                <h3 className="text-lg font-semibold text-[#06F]">
                  {item.name}
                </h3>
                <span className="text-[#797A7B] text-sm">
                  {item.description}
                </span>
              </div>
              <div
                className={`flex ${
                  item.name === "Niche"
                    ? "flex-row gap-1.5 items-center"
                    : "flex-col gap-3"
                } text-start gap text-[#1F2223]`}
              >
                {Array.isArray(item.data) ? (
                  item.data.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className={`flex font-semibold ${
                        subItem.platform &&
                        "h-10 px-4 py-3 gap-3 items-center self-stretch rounded-md border border-[#B1B2B2]"
                      }`}
                    >
                      {subItem.platform && (
                        <div className="border-r pr-3 text-[#B1B2B2]">
                          {subItem.platform}
                        </div>
                      )}
                      <div
                        className={`${
                          !subItem.platform &&
                          "text-center px-[10px] py-1 border rounded-[14px] flex items-center justify-center gap-1.5 border-[#000]"
                        }`}
                      >
                        {subItem.name}
                        {editable && item.name === "Niche" && (
                          <button
                            onClick={() => handleRemoveNiche(subItem.name)}
                            className="ml-1"
                          >
                            <IoClose />
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                ) : editable ? (
                  <div className="text-[#1F2223] text-justify">
                    <textarea
                      className=" resize-none px-[17px] py-[22px] bg-[#EAEAEA] w-[692px] h-[120px] rounded-lg overflow-hidden"
                      name=""
                      id=""
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      value={item.data}
                    />
                  </div>
                ) : (
                  <p className="text-[#1F2223] max-w-[671px] text-justify">
                    {item.data}
                  </p>
                )}
              </div>
              {editable && item.name === "Niche" && (
                <div className="flex items-center justify-center relative">
                  <button
                    onClick={() => setIsNicheVisible(!isNicheVisible)}
                    className="text-sm text-[#06F]"
                  >
                    Add more
                  </button>
                  <AddNiche
                    isNicheVisible={isNicheVisible}
                    setIsNicheVisible={setIsNicheVisible}
                    onAddNiches={handleAddNiches}
                  />
                </div>
              )}
              {editable && item.name === "Social profiles" && (
                <div className="flex items-center justify-center relative">
                  <button
                    onClick={() => setIsFilterVisible(!isFilterVisible)}
                    className="text-sm text-[#06F]"
                  >
                    Connect more accounts
                  </button>
                  <Filter
                    isFilterVisible={isFilterVisible}
                    setIsFilterVisible={setIsFilterVisible}
                    profileData={editableData} // Pass editableData instead of profileData
                    updateProfileData={handleUpdateFilter}
                  />
                </div>
              )}
            </div>
            <hr className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsProfile;
