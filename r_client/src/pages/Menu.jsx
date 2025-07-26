import React from "react";
import "../App.css";
import MenuCard from "./MenuCard";
import MealCard from "./MealCard";

  const mealData = [
    {
      title: 'Breakfast',
      description: 'Start your day with authentic South Indian dishes like Idli, Dosa, and Upma.',
      time: 'Served: 7–11 AM',
      image: '/breakfast.jpg'
    },
    {
      title: 'Lunch',
      description: 'Midday meals with rich curries, biryani, and thalis curated from Andhra & Telangana.',
      time: 'Served: 12–3 PM',
      image: '/lunch.jpg'
    },
    {
      title: 'Dinner',
      description: 'Finish strong with light tiffins or hearty meals. Perfect balance of taste & comfort.',
      time: 'Served: 7–10 PM',
      image: '/dinner.jpg'
    },
  ];

function Menu() {
  return (
    

    <div>
      <div className="menu-overlay"></div>
      <div className="Menu-container text-bg-dark z-3">
        <div className="container py-5">
      <h2 className="text-center mb-4">Our Meals</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {mealData.map((meal, index) => (
          <MealCard key={index} {...meal} />
        ))}
      </div>
    </div>

        
      </div>
    </div>
  );
}

export default Menu;
