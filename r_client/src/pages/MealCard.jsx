import React from 'react';
import PropTypes from 'prop-types';

const MealCard = ({ title, description, time,image }) => {
  return (
      <div className="col">
      <div className="card text-bg-dark shadow-sm">
        {/* Replace SVG with actual image */}
        <img
          src={image}
          className="card-img-top"
          alt={`${title} image`}
          style={{ height: '225px', objectFit: 'cover' }}
        />

        <div className="card-body">
          <strong >{title}</strong>

          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-light">
                Explore More 
              </button>
            
            </div>
            <small className="text-body-primary">{time}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

MealCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default MealCard;
