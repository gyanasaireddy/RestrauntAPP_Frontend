import React, { useState } from "react";
import MealCard from "./MealCard";
import MealMenu from "./MealMenu";
import { Link } from "react-router-dom";
import PreloaderWrapper from "./Preloader";
const imageUrls = ['/breakfast.jpg','/lunch.jpg','/dinner.jpg']
const MenuPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const menus = {
    breakfast: {
      specials: [
        { name: "Masala Dosa", price: "₹80", tag: "Bestseller" },
        { name: "Idli Sambar", price: "₹50" },
      ],
      items: [
        { name: "Plain Dosa", price: "₹60" },
        { name: "Uttapam", price: "₹70", tag: "Trending" },

        { name: "Poori Bhaji", price: "₹90" },
        { name: "Poori Bhaji", price: "₹90" },
        { name: "Poori Bhaji", price: "₹90" },
        { name: "Poori Bhaji", price: "₹90" },
        { name: "Poori Bhaji", price: "₹90" },
        { name: "Poori Bhaji", price: "₹90" },
        { name: "Poori Bhaji", price: "₹90" },
        { name: "Poori Bhaji", price: "₹90" },
        { name: "Poori Bhaji", price: "₹90" },
        { name: "Poori Bhaji", price: "₹90" },
        { name: "Poori Bhaji", price: "₹90" },
      ],
    },
    lunch: {
      specials: [
        { name: "Veg Thali", price: "₹150", tag: "Bestseller" },
        { name: "Paneer Butter Masala", price: "₹200" },
      ],
      items: [
        { name: "Dal Tadka", price: "₹120" },
        { name: "Jeera Rice", price: "₹100" },
      ],
    },
    dinner: {
      specials: [
        { name: "Chicken Biryani", price: "₹250", tag: "Bestseller" },
        { name: "Fish Curry", price: "₹220" },
      ],
      items: [
        { name: "Roti Basket", price: "₹50" },
        { name: "Veg Pulao", price: "₹150" },
      ],
    },
  };

  return (
     <PreloaderWrapper imageUrls={imageUrls}>
    <div
      className="container d-flex justify-content-center align-items-center pt-5"
      style={{ height: "80vh" }}
    >
      {!selectedMenu ? (
        <div className="menu-wrapper">
          <div className="row menu-container row-cols-1 row-cols-md-3 g-4">
            <Link to="/menu/breakfast">
              <MealCard
                title="Breakfast"
                description="Begin your day with nourishing dishes cooked in the warmth of tradition."
                time="7:00 AM – 11:00 AM"
                image="/breakfast.jpg"
                onClick={() => setSelectedMenu("breakfast")}
              />
            </Link>
            <Link to="/menu/lunch">
              <MealCard
                title="Lunch"
                description="Midday meals bringing together regional flavors and fresh ingredients."
                time="12:00 PM – 3:00 PM"
                image="/lunch.jpg"
                onClick={() => setSelectedMenu("lunch")}
              />
            </Link>
            <Link to="/menu/dinner">
              <MealCard
                title="Dinner"
                description="End your day with soulful dishes simmered to perfection."
                time="7:00 PM – 11:00 PM"
                image="/dinner.jpg"
                onClick={() => setSelectedMenu("dinner")}
              />
            </Link>
          </div>
        </div>
      ) : (
        <MealMenu
          mealName={
            selectedMenu.charAt(0).toUpperCase() + selectedMenu.slice(1)
          }
          specials={menus[selectedMenu].specials}
          items={menus[selectedMenu].items}
          onBack={() => {
            <Link to="/menu"></Link>
            setSelectedMenu(null)}}
        />
      )}
    </div>
    </PreloaderWrapper>
  );
};

export default MenuPage;
