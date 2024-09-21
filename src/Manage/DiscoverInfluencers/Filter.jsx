import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoMdStar } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Filter = ({ setFilterVisible }) => {
  const [filterData, setFilterData] = useState([
    {
      name: "Location",
      filter: ["Nagpur", "New Delhi", "Mumbai"],
      isOpen: true,
    },
    {
      name: "Platform",
      filter: ["Instagram", "Facebook", "Youtube"],
      isOpen: false,
    },
    {
      name: "Followers Range",
      filter: ["1k-10k", "11k-20k", "21k-50k", "Pending"],
      isOpen: false,
    },
    {
      name: "Niche",
      filter: [
        "Fashion",
        "Gaming",
        "Health",
        "Marketing",
        "Travel",
        "Technology",
      ],
      isOpen: false,
    },
    {
      name: "Rating",
      filter: [
        [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />],
        [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />],
        [<IoMdStar />, <IoMdStar />, <IoMdStar />],
        [<IoMdStar />, <IoMdStar />],
        [<IoMdStar />],
      ],
      isOpen: false,
    },
  ]);

  const [selectedFilters, setSelectedFilters] = useState({});
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleFilterClick = (index) => {
    const newFilterData = [...filterData];
    newFilterData.forEach((filter, i) => {
      if (i === index) {
        filter.isOpen = !filter.isOpen;
      } else {
        filter.isOpen = false;
      }
    });
    setFilterData(newFilterData);
  };

  const handleCheckboxChange = (filterName, filterValue) => {
    const updatedFilters = selectedFilters[filterName]
      ? selectedFilters[filterName].includes(filterValue)
        ? selectedFilters[filterName].filter((item) => item !== filterValue)
        : [...selectedFilters[filterName], filterValue]
      : [filterValue];

    setSelectedFilters({
      ...selectedFilters,
      [filterName]: updatedFilters,
    });
  };

  const handleLocationChange = (e) => {
    const location = e.target.value;
    if (location && !selectedFilters["Location"]?.includes(location)) {
      setSelectedLocation(location);
      setSelectedFilters({
        ...selectedFilters,
        Location: selectedFilters.Location
          ? [...selectedFilters.Location, location]
          : [location],
      });

      setFilterData((prevFilterData) =>
        prevFilterData.map((item) =>
          item.name === "Location"
            ? { ...item, filter: item.filter.filter((loc) => loc !== location) }
            : item
        )
      );
    }
  };

  const handleRemoveLocation = (location) => {
    setSelectedFilters({
      ...selectedFilters,
      Location: selectedFilters.Location.filter((loc) => loc !== location),
    });

    setFilterData((prevFilterData) =>
      prevFilterData.map((item) =>
        item.name === "Location"
          ? { ...item, filter: [...item.filter, location] }
          : item
      )
    );

    // Reset selectedLocation if all locations are removed
    if (
      selectedFilters.Location.filter((loc) => loc !== location).length === 0
    ) {
      setSelectedLocation("");
    }
  };

  return (
    <div className="absolute right-0 top-12 flex flex-col w-[323px] px-4 pb-6 bg-white shadow-[2px_4px_14px_2px_rgba(0,0,0,0.25)] rounded-[10px]">
      <div className="flex justify-between pt-4">
        <h3 className="flex justify-center items-center w-2/3">Filter</h3>
        <span className="flex items-center cursor-pointer">
          <IoClose onClick={() => setFilterVisible(false)} />
        </span>
      </div>

      {filterData.map((item, index) => (
        <div key={index}>
          {item.name === "Location" && (
            <select
              className="w-full relative px-3 py-3 flex justify-between items-center self-stretch rounded-lg border border-[#B1B2B2]"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              <option value="">Select Location</option>
              {item.filter.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          )}
        </div>
      ))}

      <div className="flex mt-1.5 flex-wrap gap-2">
        {selectedFilters["Location"]?.map((location, index) => (
          <span
            key={index}
            className="px-[10px] flex justify-center items-center gap-1.5 h-[30px] py-1.5 rounded-[50px] bg-[#06F] text-white text-xs cursor-pointer"
            onClick={() => handleRemoveLocation(location)}
          >
            {location} <span>x</span>
          </span>
        ))}
      </div>

      {filterData.map((filter, index) => (
        <div className="flex flex-col" key={index}>
          <div
            className={`flex flex-row items-center justify-between cursor-pointer ${
              filter.name !== "Location" && "mt-6"
            }`}
            onClick={() => handleFilterClick(index)}
          >
            <label className="cursor-pointer">
              {filter.name !== "Location" && filter.name}
            </label>
            <div className="text-[#666666] ">
              {filter.isOpen
                ? filter.name !== "Location" && <IoIosArrowUp />
                : filter.name !== "Location" && <IoIosArrowDown />}
            </div>
          </div>

          {filter.isOpen && filter.name !== "Location" && (
            <ul>
              {filter.filter.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center cursor-pointer ${
                    selectedFilters[filter.name] &&
                    selectedFilters[filter.name].includes(item)
                      ? "text-[#0066FF]" // Text color when selected
                      : ""
                  }`}
                  onClick={() => handleCheckboxChange(filter.name, item)}
                >
                  <li
                    className={`flex ${
                      filter.name === "Rating" && "text-[#0066FF]"
                    }`}
                  >
                    {item}
                  </li>
                  <input
                    type="checkbox"
                    checked={
                      selectedFilters[filter.name] &&
                      selectedFilters[filter.name].includes(item)
                    }
                    readOnly
                  />
                </div>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="flex items-center justify-center gap-[14px] self-stretch mt-10">
        <button
          className="h-[30px] px-4 flex items-center justify-center gap-2 flex-[1_0_0] rounded border border-[#06F] text-[#06F]"
          onClick={() => setFilterVisible(false)}
        >
          Cancel
        </button>
        <button
          className="flex w-[170px] h-[30px] px-4 ite justify-center gap-3 border rounded bg-[#06F] text-white"
          onClick={() => setFilterVisible(false)}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
