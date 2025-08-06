import React from 'react';
import PropTypes from 'prop-types';

const MealCard = ({ title, description, time, image, onClick }) => {
  return (
    <div className="col mt-5 ">
      <div
        className="card text-bg-dark shadow-sm meal-card"
        onClick={onClick}
        role="button"
        style={{ cursor: 'pointer' }}
      >
        <img
          src={image}
          className="card-img-top"
          alt={`${title} image`}
          style={{ height: '225px', objectFit: 'cover' }}
        />

        <div className="card-body">
          {/* Title & time on one line */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <strong>{title}</strong>
            <small className="text-body-primary">{time}</small>
          </div>

          {/* Description */}
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
