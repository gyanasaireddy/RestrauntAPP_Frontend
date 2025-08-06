import React from "react";
import PropTypes from "prop-types";

const MealMenu = ({ mealName, specials, items, onBack }) => {
  return (
    <div className="container  text-light">
      {/* Back Button */}
    

      {/* Meal Title */}
      <h2 className="border-bottom pb-2 mb-4">{mealName} Menu   <button
        className="btn btn-outline-light py-`"
        onClick={onBack}
      >
        ← Back
      </button></h2>

      {/* Today's Specials */}
      <div className="mb-5">
        <h3 className="border-bottom pb-2">Today's Specials</h3>
        <ul className="list-group list-group-flush">
          {specials.map((special, index) => (
            <li
              key={index}
              className="list-group-item bg-transparent d-flex justify-content-between align-items-center text-light"
            >
              <span>
                {special.name}
                {special.tag && (
                  <span className="badge bg-warning text-dark ms-2">
                    {special.tag}
                  </span>
                )}
              </span>
              <span className="fw-bold">{special.price}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* All Items */}
      <div>
        <h3 className="border-bottom pb-2">All Items</h3>
        <ul className="list-group list-group-flush scrollable-menu">
          {items.map((item, index) => (
            <li
              key={index}
              className="list-group-item bg-transparent d-flex justify-content-between align-items-center text-light"
            >
              <span>
                {item.name}
                {item.tag && (
                  <span className="badge bg-warning text-dark ms-2">
                    {item.tag}
                  </span>
                )}
              </span>
              <span className="fw-bold">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

MealMenu.propTypes = {
  mealName: PropTypes.string.isRequired,
  specials: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  onBack: PropTypes.func.isRequired, // back button click handler
};

export default MealMenu;
