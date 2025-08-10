// src/pages/MenuPage.jsx (replace your current file)
import React, { useState } from "react";
import MealCard from "./MealCard";
import MealMenu from "./MealMenu";
import PreloaderWrapper from "./Preloader";
import "../MenuPage.css";

const imageUrls = ["/breakfast.jpg", "/lunch.jpg", "/dinner.jpg"];

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
      <div className="menu-page-container">
        {!selectedMenu ? (
          // Mobile-friendly scroll wrapper — harmless on desktop
          <div className="menu-scroll">
            <div className="menu-scroll">
              <div className="menu-grid">
                <MealCard
                  title="Breakfast"
                  description="Begin your day with nourishing dishes cooked in the warmth of tradition."
                  time="7:00 AM – 11:00 AM"
                  image="/breakfast.jpg"
                  onClick={() => setSelectedMenu("breakfast")}
                />
                <MealCard
                  title="Lunch"
                  description="Midday meals bringing together regional flavors and fresh ingredients."
                  time="12:00 PM – 3:00 PM"
                  image="/lunch.jpg"
                  onClick={() => setSelectedMenu("lunch")}
                />
                <MealCard
                  title="Dinner"
                  description="End your day with soulful dishes cooked and simmered to perfection."
                  time="7:00 PM – 11:00 PM"
                  image="/dinner.jpg"
                  onClick={() => setSelectedMenu("dinner")}
                />
              </div>
            </div>
          </div>
        ) : (
          <MealMenu
            mealName={
              selectedMenu.charAt(0).toUpperCase() + selectedMenu.slice(1)
            }
            specials={menus[selectedMenu].specials}
            items={menus[selectedMenu].items}
            onBack={() => setSelectedMenu(null)}
          />
        )}
      </div>
    </PreloaderWrapper>
  );
};

export default MenuPage;
