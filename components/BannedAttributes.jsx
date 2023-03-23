import React from "react";

const BanList = ({ bannedAttributes, removeFromBannedList }) => {
  return (
    <div className="ban_list_container">
      <h2>Ban List</h2>
      <h4>Select an attribute in your listing to ban it</h4>
      {bannedAttributes && bannedAttributes.length > 0 ? (
        bannedAttributes.map((attribute, index) => (
          <button
            className="banned_attribute"
            key={index}
            onClick={(event) => removeFromBannedList(attribute)}
          >
            {attribute}
          </button>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default BanList;
