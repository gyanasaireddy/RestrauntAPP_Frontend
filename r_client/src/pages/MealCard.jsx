import React from 'react';
import PropTypes from 'prop-types';
import '../MealCard.css';

const MealCard = ({ title, description, time, image, onClick }) => {
  return (
    <div className="col">
      <div
        className="card text-bg-dark shadow-sm meal-card"
        onClick={onClick}
        role="button"
      >
        <div className="meal-card-img-wrapper">
          <img
            src={image}
            className="card-img-top meal-card-img"
            alt={`${title} image`}
          />
        </div>

        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <strong>{title}</strong>
            <small className="text-light">{time}</small>
          </div>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

MealCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MealCard;
