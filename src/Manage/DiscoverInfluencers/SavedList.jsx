import React, { useContext, useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mycontext } from "../../utils/Context";
import InfluencerCard from "./InfluencerCard";
import { FaHeart } from "react-icons/fa6";

const SavedList = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;

  const [addList, setAddList] = useState([
    { name: "Food", influencersCount: 20 },
    { name: "Work", influencersCount: 40 },
    { name: "Travel", influencersCount: 15 },
    { name: "Fashion", influencersCount: 20 },
  ]);

  const [openIndex, setOpenIndex] = useState(null);

  const addNewCard = () => {
    const newCard = {
      name: `Add List Name ${addList.length + 1}`,
      influencersCount: 0,
    };
    setAddList([...addList, newCard]);
  };

  const handleRename = (oldName, newName) => {
    setAddList(
      addList.map((item) =>
        item.name === oldName ? { ...item, name: newName } : item
      )
    );
  };

  const handleDelete = (name) => {
    setAddList(addList.filter((item) => item.name !== name));
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
      } overflow-y-auto bg-white space-y-4 p-4`}
    >
      <div className="bg-white w-full">
        <div className="flex w-full justify-between items-center bg-white border-border">
          <div className="pt-[18px] px-2 pb-8">
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

        <nav className="mb-[27px]">
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

        <div className="flex space-x-4">
          <div className="flex flex-row mt-[47px] flex-wrap gap-x-[18px] gap-y-[37px] items-center">
            <Link to={"/favouriteslist"}>
              <div className="flex box-border items-center h-[90px] w-[250px] rounded-[10px] bg-white shadow-[2px_4px_14px_2px_rgba(0,0,0,0.25)]">
                <div className="flex items-center space-x-6 px-[32px] py-[25px]">
                  <span className="mt-1 scale-150 text-red-600">
                    <FaHeart size={"1.3em"} aria-hidden="true" />
                  </span>
                  <div className="flex flex-col items-center border-l border-border">
                    <h3 className="text-sm ml-[19px]">Favorites</h3>
                    <p className="text-[10px] text-[#797A7B]">Influencer</p>
                  </div>
                </div>
              </div>
            </Link>
            {addList.map((list, index) => (
              <InfluencerCard
                key={list.name} // Assuming names are unique
                name={list.name}
                influencersCount={list.influencersCount}
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
