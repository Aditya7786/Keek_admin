import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { platforms } from "./BrandsData";

const Filter = ({
  isFilterVisible,
  setIsFilterVisible,
  profileData,
  updateProfileData,
}) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  // Initialize selected platforms based on profileData
  useEffect(() => {
    const platformIdsInProfileData =
      profileData
        .find((item) => item.name === "Social profiles")
        ?.data.map(
          (profile) =>
            platforms.find((plat) => plat.platform === profile.platform)?.id
        ) || [];

    setSelectedPlatforms(platformIdsInProfileData);
  }, [profileData]);

  const handleSelectPlatform = (platformId) => {
    setSelectedPlatforms((prevSelected) =>
      prevSelected.includes(platformId)
        ? prevSelected.filter((id) => id !== platformId)
        : [...prevSelected, platformId]
    );
  };

  const handleCloseFilter = () => {
    setIsFilterVisible(false);
  };

  const handleAddClick = () => {
    const updatedPlatforms = platforms.filter((platform) =>
      selectedPlatforms.includes(platform.id)
    );

    const updatedProfileData = profileData.map((item) =>
      item.name === "Social profiles"
        ? {
            ...item,
            data: updatedPlatforms.map((platform) => ({
              platform: platform.platform,
              name: platform.name,
            })),
          }
        : item
    );

    updateProfileData(updatedProfileData);
    setIsFilterVisible(false);
  };

  return (
    <>
      {isFilterVisible && (
        <div className="w-[350px] h-[450px] px-[20px] py-[17px] absolute top-28 left-2/3 -translate-x-[70%] shadow-[2px_4px_14px_2px_rgba(0,0,0,0.25)] bg-white rounded-[10px]">
          <div className="w-[309px] h-10 flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="self-stretch text-black text-base font-semibold leading-[19px]">
              Social profiles
            </div>
            <div className="self-stretch text-[#797a7b] text-xs font-normal leading-[19px]">
              Connect with your social accounts here
            </div>
          </div>
          <div className="platforms">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className={`w-[310px] h-[30px] px-3.5 py-2.5 bg-[#e1edff] rounded-md justify-center items-center gap-3 inline-flex mt-[14px] cursor-pointer ${
                  selectedPlatforms.includes(platform.id) ? "bg-[#d0eaff]" : ""
                }`}
                onClick={() => handleSelectPlatform(platform.id)}
              >
                <div className="w-3.5 h-3.5 relative">
                  {platform.name === "LinkedIn" ? (
                    <platform.icon className="w-full h-full" />
                  ) : (
                    <img
                      src={platform.icon}
                      alt={platform.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="grow shrink basis-0 text-[#363939] text-xs font-semibold leading-[15px]">
                  {platform.label}
                </div>
                <div className="w-3.5 h-3.5 relative">
                  {selectedPlatforms.includes(platform.id) && (
                    <FaCheck className="text-[#22C55E]" />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="buttons mt-[60px]">
            <div className="w-[309px] h-[30px] justify-start items-center gap-3.5 inline-flex">
              <button
                className="grow shrink basis-0 h-[30px] px-4 rounded border border-[#0066ff] justify-center items-center gap-2 flex"
                onClick={handleCloseFilter}
              >
                <div className="text-center text-[#0066ff] text-sm font-normal leading-[14px]">
                  Cancel
                </div>
              </button>
              <button
                className="w-[170px] h-[30px] px-4 bg-[#0066ff] rounded justify-center items-center gap-3 flex"
                onClick={handleAddClick}
              >
                <div className="text-center text-white text-sm font-normal leading-[14px]">
                  Add
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
