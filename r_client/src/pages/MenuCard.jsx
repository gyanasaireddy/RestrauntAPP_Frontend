import React from 'react';
import PropTypes from 'prop-types';
// import './MenuCard.css'; // Optional for custom styling


const MenuCard = ({ title, image, time, author, category }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm position-relative overflow-hidden">
        <div className="position-absolute top-0 end-0 p-2">
          {/* Like Icon */}
          <svg className="text-danger" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55Z"
            />
          </svg>
        </div>

        <img
          src={image}
          className="card-img-top object-fit-cover"
          alt={title}
          style={{ height: '250px' }}
        />

        <div className="card-body d-flex flex-column">
          <h6 className="card-subtitle text-muted mb-1">{category}</h6>
          <h5 className="card-title">{title}</h5>
          <p className="card-text mb-1">
            <small className="text-muted">{time}</small>
          </p>
          <p className="card-text mt-auto">
            <small>
              by <a href="#">{author}</a>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

MenuCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default MenuCard;
