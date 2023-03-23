import React from "react";

const APICatInfo = ({
  catValues,
  currentCatName,
  onSubmit,
  addToBannedList,
}) => {
  return (
    <div className="cat_api_container">
      {catValues.url == "" ? (
        <div></div>
      ) : (
        <div className="cat_info">
          <h3>{currentCatName}</h3>
          <div className="cat_attribute_container">
            <button
              className="cat_attribute"
              onClick={(event) => addToBannedList(catValues.breed)}
            >
              {catValues.breed}
            </button>
            <button className="cat_attribute">{catValues.origin}</button>
            <button className="cat_attribute">{catValues.life_span}</button>
            <button className="cat_attribute">{catValues.weight}</button>
          </div>
          <img
            className="cat_img"
            src={catValues.url}
            alt="Cat picture returned"
          />
        </div>
      )}
      <button type="submit" className="button" onClick={onSubmit}>
        🔀 Discover
      </button>
    </div>
  );
};

export default APICatInfo;
