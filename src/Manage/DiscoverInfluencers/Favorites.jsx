/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, useContext } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { FaHeart, FaPlus } from "react-icons/fa6";
import { Mycontext } from "../../utils/Context";

const Favorites = ({
  favorites,
  handleAddToList,
  onMouseEnter,
  onMouseLeave,
  influencersRef, // Pass the Influencers component reference here
}) => {
  const contextState = useContext(Mycontext);
  const listItem = contextState.listItemData;
  const setListItem = contextState.setListItemData;
  const [progress, setProgress] = useState(100);
  const [openIndex, setOpenIndex] = useState(null);
  const [editableIndex, setEditableIndex] = useState(null); // Track which list is being edited
  const [inputValue, setInputValue] = useState(""); // Track the input value for the new list
  const intervalRef = useRef(null);
  const favoritesRef = useRef(null);

  // Function to add a new list with editable input
  const addNewCard = () => {
    const newCard = {
      name: "", // Start with an empty name to show an input box
      influencers: [],
    };
    setListItem([...listItem, newCard]);
    setEditableIndex(listItem.length); // Set the last index as editable
    setInputValue(""); // Clear the input value
  };

  // Start the progress timer
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => (prev > 0 ? prev - 1 : 0));
    }, 30);
  };

  // Stop the progress timer
  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  // Handle input change to update the input value state
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Save input value or remove the new card if the input is empty
  const handleInputBlur = (index) => {
    if (inputValue.trim() !== "") {
      const updatedList = [...listItem];
      updatedList[index].name = inputValue;
      setListItem(updatedList);
    } else {
      // If input is empty, remove the new card
      setListItem(listItem.filter((_, i) => i !== index));
    }
    setEditableIndex(null);
  };

  // Handle click outside of Favorites component
  const handleClickOutside = (event) => {
    const clickedInsideFavorites =
      favoritesRef.current && favoritesRef.current.contains(event.target);
    const clickedInsideInfluencers =
      influencersRef?.current && influencersRef.current.contains(event.target);

    if (!clickedInsideFavorites && !clickedInsideInfluencers) {
      // Save the current input value before closing
      if (editableIndex !== null) {
        handleInputBlur(editableIndex);
      }
      setOpenIndex(null);
      setEditableIndex(null);
    } else if (clickedInsideInfluencers && editableIndex !== null) {
      // If clicked inside Influencers, save data as well
      handleInputBlur(editableIndex);
    }
  };

  useEffect(() => {
    startTimer();
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      stopTimer();
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={favoritesRef}
      className="absolute top-12 right-0 flex flex-col gap-3 shrink-0 w-[300px] rounded-[10px] bg-white p-4 font-semibold shadow-[2px_4px_14px_2px_rgba(0,0,0,0.25)]"
      onMouseEnter={() => {
        stopTimer();
        if (onMouseEnter) onMouseEnter();
      }}
      onMouseLeave={() => {
        startTimer();
        if (onMouseLeave) onMouseLeave();
      }}
    >
      <div className="flex w-full px-3 py-[10px] items-center justify-between rounded-[10px] border border-[#777]">
        <span>Favorites</span>
        <span className="mt-1 scale-150 text-red-600" aria-label="Favorites">
          <FaHeart />
        </span>
      </div>

      <div className="flex justify-between items-center text-sm">
        <span>Saved List</span>
        <button
          className="text-[#06F]"
          aria-label="Create New List"
          onClick={addNewCard}
        >
          New List
        </button>
      </div>

      {listItem?.map((item, index) => (
        <div key={index}>
          {item.name !== "Favorites" && (
            <div className="flex w-full px-3 py-[10px] items-center justify-between rounded-[10px] border border-[#777]">
              <div className="flex relative items-center gap-1">
                {editableIndex === index ? (
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={() => handleInputBlur(index)}
                    autoFocus
                    className="border-b-2 border-blue-500 focus:outline-none"
                    placeholder="Enter list name"
                  />
                ) : (
                  <>
                    {item.name}
                    <button
                      onClick={() =>
                        setOpenIndex((prev) => (prev === index ? null : index))
                      }
                    >
                      <GoKebabHorizontal
                        className="text-[#8E9090] rotate-90"
                        aria-hidden="true"
                      />
                    </button>
                  </>
                )}
                {openIndex === index && (
                  <div className="absolute top-2 translate-x-[70px] text-xs space-y-2 flex flex-col items-start py-[8px] pl-[10px] bg-white box-border rounded-[8px] shadow-[2px_4px_16px_0px_rgba(0,0,0,0.15)]">
                    <button
                      className="mr-2"
                      aria-label="Rename"
                      onClick={() => setEditableIndex(index)}
                    >
                      Rename
                    </button>
                    <button
                      className="text-[#D30B0B]"
                      aria-label="Delete"
                      onClick={() =>
                        setListItem(listItem.filter((_, i) => i !== index))
                      }
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
              <button
                className="scale-150 active:scale-95"
                onClick={() => handleAddToList(item.name, favorites[0])}
              >
                <FaPlus />
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
        <div
          className="h-2 bg-blue-600 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Favorites;
