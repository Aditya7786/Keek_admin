import React, { useContext, useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mycontext } from "../../utils/Context";
import InfluencerCard from "./InfluencerCard";

const SavedList = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const listData = contextState.listItemData;
  const setListData = contextState.setListItemData;

  // const [addList, setAddList] = useState(listItem);
  const [openIndex, setOpenIndex] = useState(null);

  const addNewCard = () => {
    const newCard = {
      name: `Add List Name ${listData.length + 1}`,
      influencers: [],
    };
    setListData([...listData, newCard]);
  };

  const handleRename = (oldName, newName) => {
    setListData(
      listData.map((item) =>
        item.name === oldName ? { ...item, name: newName } : item
      )
    );
  };

  const handleDelete = (name) => {
    setListData(listData.filter((item) => item.name !== name));
  };

  const handleOpenIndex = useCallback((index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  const handleClickOutside = useCallback((event) => {
    if (!event.target.closest(".card-options")) {
      setOpenIndex(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  return (
    <div
      className={`flex relative h-screen max-h-[895px] ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[320px] w-[calc(100%-320px)]"
      } overflow-y-auto  space-y-4 p-4`}
    >
      <div className={ `bg-white ${expanded ? "w-[1120px] h-[897px]" : "w-full "} `}>
        <div className="flex w-full justify-between items-center bg-white border-border">
          <div className="pt-[18px] ml-4 px-2 pb-8">
            <h1 className="text-[24px] font-semibold text-[#101828]">
              Discover Influencer
            </h1>
            <span className="text-sm text-[#57595A]">
              Discover the perfect influencer to elevate your brand - Connect &
              Collaborate
            </span>
          </div>

          <button
            onClick={addNewCard}
            className="bg-[#06F] h-[40px] w-[175px] text-white px-4 py-2.5 flex items-center rounded-lg mr-[72px]"
            aria-label="Add New List"
          >
            <span className="mr-2 text-3xl">+</span> Add New List
          </button>
        </div>

        <nav className={`mb-[27px] ml-4 ${expanded ?" w-[1050px] " : " " }`}>
          <ul className="flex gap-5"> 
            <Link to={"/discoverInfluencers"}>
              <li className="text-[#57595A]">Influencers</li>
            </Link>
            <Link to={"/savedlist"}>
              <li className="font-semibold text-[#191D23] px-[6px] border-b-2 border-[#0066FF]">
                Saved Lists
              </li>
            </Link>
          </ul>
          <hr className="h-[2px] w-full" />
        </nav>

        <div className="flex ml-4 space-x-4">
          <div className="flex flex-row mt-[47px] flex-wrap gap-x-[18px] gap-y-[37px] items-center">
            {listData.map((list, index) => (
              <InfluencerCard
                key={list.name} // Use list.name or a unique ID if available
                name={list.name}
                influencers={list.influencers}
                index={index}
                openIndex={openIndex}
                onOpenIndex={handleOpenIndex}
                onDelete={() => handleDelete(list.name)}
                onRename={(newName) => handleRename(list.name, newName)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedList;
