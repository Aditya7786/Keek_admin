import React, { useState, useRef, useEffect } from "react";
import { nicheItems } from "./BrandsData";

const AddNiche = ({ isNicheVisible, setIsNicheVisible, onAddNiches }) => {
  const [selectedNiches, setSelectedNiches] = useState([]);
  const [containerHeight, setContainerHeight] = useState("h-[450px]");
  const containerRef = useRef(null);

  const handleNicheClick = (niche) => {
    setSelectedNiches((prevSelected) =>
      prevSelected.includes(niche) ? prevSelected : [...prevSelected, niche]
    );
  };

  const handleRemoveNiche = (niche) => {
    setSelectedNiches((prevSelected) =>
      prevSelected.filter((item) => item !== niche)
    );
  };

  useEffect(() => {
    if (containerRef.current) {
      const { scrollHeight, clientHeight } = containerRef.current;
      setContainerHeight(
        scrollHeight > clientHeight ? "h-[550px]" : "h-[450px]"
      );
    }
  }, [selectedNiches]);

  const handleCancelClick = () => {
    setIsNicheVisible(false);
  };

  const handleAddClick = () => {
    if (typeof onAddNiches === "function") {
      onAddNiches(selectedNiches);
    }
    setIsNicheVisible(false);
  };

  return (
    <>
      {isNicheVisible && (
        <div
          className={`w-[350px] absolute top-14 -translate-x-[30%] z-10 shadow-[2px_4px_14px_2px_rgba(0,0,0,0.25)] ${containerHeight} px-[20px] py-[17px] bg-white rounded-[10px] flex-col justify-start items-start inline-flex`}
          ref={containerRef}
        >
          <div className="w-[309px] flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="self-stretch text-black text-base font-semibold">
              Add Niche
            </div>
            <div className="self-stretch text-[#797a7b] text-xs font-normal">
              Niche refers to the category you are specialized in.
            </div>
          </div>
          <div className="py-[15px]">
            <div className="w-[310px] h-[30px] px-[20px] py-[15px] rounded-lg border border-[#b1b2b2] justify-between items-center inline-flex">
              <div className="text-[#7c7c7c] text-xs">Select Niche</div>
            </div>
            <div className="py-1">
              <div className="flex flex-wrap gap-2 items-center mb-2">
                {selectedNiches.map((niche, index) => (
                  <div
                    key={index}
                    className="px-2.5 py-1.5 bg-[#0066ff] rounded-[50px] flex items-center"
                  >
                    <div className="text-white text-[10px]">{niche}</div>
                    <button
                      onClick={() => handleRemoveNiche(niche)}
                      className="ml-2 text-white"
                      aria-label="Remove"
                    >
                      x
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[10px] flex-col justify-start items-start inline-flex">
            <hr
              className={`w-[309px] border-t border-[#d2d3d3] ${
                selectedNiches.length > 0 ? "-mt-3" : "mt-0"
              }`}
            />
            {nicheItems.map((niche, index) => (
              <div
                key={index}
                className="w-[309px] px-2.5 py-3 border-b border-[#d2d3d3] justify-center items-center inline-flex cursor-pointer"
                onClick={() => handleNicheClick(niche)}
              >
                <div className="text-[#363939] text-xs">{niche}</div>
              </div>
            ))}
          </div>
          <div className="buttons mt-[35px]">
            <div className="w-[309px] h-[30px] justify-start items-center gap-3.5 inline-flex">
              <button
                onClick={handleCancelClick}
                className="grow h-[30px] px-4 rounded border border-[#0066ff] text-[#0066ff] text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleAddClick}
                className="w-[170px] h-[30px] px-4 bg-[#0066ff] rounded text-white text-sm"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNiche;
