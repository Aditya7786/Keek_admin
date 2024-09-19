import React, { useState, useRef } from "react";
import { FaHeart } from "react-icons/fa";
import { GoKebabHorizontal } from "react-icons/go";
import { IoBookmark } from "react-icons/io5";
import { Link } from "react-router-dom";

const InfluencerCard = ({
  name,
  influencers,
  index,
  openIndex,
  onOpenIndex,
  onDelete,
  onRename,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const inputRef = useRef(null);

  const handleRenameClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const handleBlur = () => {
    if (newName.trim() !== "" && newName !== name) {
      onRename(name, newName);
    }
    setIsEditing(false);
  };

  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <div
      className="flex flex-row items-center h-[90px] w-[250px] rounded-[10px] bg-white shadow-[2px_4px_14px_2px_rgba(0,0,0,0.25)]"
      onClick={() => setIsEditing(false)}
    >
      <div className="box-content flex relative items-center space-x-6 w-[172px] h-[40px] px-[32px] py-[25px]">
        <Link className="scale-150" to={`/savedList/${name}`}>
          {name === "Favorites" ? (
            <span className="mt-1 scale-150 text-red-600">
              <FaHeart size={"1.3em"} aria-hidden="true" />
            </span>
          ) : (
            <IoBookmark
              size={"1.5em"}
              className="text-[#8E9090]"
              aria-hidden="true"
            />
          )}
        </Link>
        <Link to={`/savedList/${name}`}>
          <div className="flex flex-col box-content items-center border-l border-border cursor-pointer">
            <div className="ml-[8px]">
              {isEditing ? (
                <input
                  ref={inputRef}
                  value={newName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className="text-sm border border-gray-300 rounded px-2 py-1 w-[70px]"
                  autoFocus
                />
              ) : (
                <h3 className="text-sm">{newName}</h3>
              )}
              <p className="text-[10px] flex text-gray-500">
                {influencers ? influencers?.length : 0} Influencers
              </p>
            </div>
          </div>
        </Link>
        {name !== "Favorites" && (
          <button
            className="relative"
            onClick={(e) => {
              e.stopPropagation(); // Prevents triggering onClick of parent div
              onOpenIndex(index);
            }}
            aria-label="More options"
          >
            <GoKebabHorizontal
              className="text-[#8E9090] rotate-90"
              aria-hidden="true"
            />

            {openIndex === index && (
              <div className="absolute top-5 w-[100px] text-sm space-y-2 flex flex-col items-start py-[10px] pl-[14px] h-[66px] bg-white box-border rounded-[8px] shadow-[2px_4px_16px_0px_rgba(0,0,0,0.25)] card-options">
                <button
                  onClick={handleRenameClick}
                  className="mr-2"
                  aria-label="Rename"
                >
                  Rename
                </button>
                <p
                  className="text-[#D30B0B]"
                  onClick={handleDelete}
                  aria-label="Delete"
                >
                  Delete
                </p>
              </div>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InfluencerCard;
