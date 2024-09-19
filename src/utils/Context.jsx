import { createContext, useState } from "react";
import { formData } from "./formData";
import { listItem, influencersData } from "../Manage/DiscoverInfluencers/InfluencerData";
export const Mycontext = createContext(null);

export const ContextProvider = (props) => {
  const [expanded, setExpanded] = useState(true);
  const [campData, setCampData] = useState(formData);
  const [listItemData, setListItemData] = useState(listItem);
  const [influencersItemData, setInfluencersItemData] = useState(influencersData);
  return (
    <Mycontext.Provider
      value={{
        expanded,
        setExpanded,
        campData,
        setCampData,
        listItemData,
        setListItemData,
        influencersItemData,
        setInfluencersItemData,
      }}
    >
      {props.children}
    </Mycontext.Provider>
  );
};
