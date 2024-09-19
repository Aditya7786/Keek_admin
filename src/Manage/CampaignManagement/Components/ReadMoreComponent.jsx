import React, { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  const truncatedText = text.slice(0, maxLength);

  return (
    <p>
      {isExpanded ? text : `${truncatedText}...`}
      <span onClick={toggleReadMore} className="text-blue-500 cursor-pointer">
        {isExpanded ? ' Read less' : ' Read more'}
      </span>
    </p>
  );
};

export default ReadMore;