// components/PreloaderWrapper.jsx
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../Preloader.css"; // We'll reuse the same styles


export default function PreloaderWrapper({ imageUrls, children }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const total = imageUrls.length;

    if (total === 0) {
      setLoaded(true); // No images to load
      return;
    }

    imageUrls.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === total) {
          setLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === total) {
          setLoaded(true);
        }
      };
    });
  }, [imageUrls]);

  return (
    <>
      {!loaded ? (
        <div className="preloader">
          <div className="spinner"></div>
          <p>Loading menu...</p>
        </div>
      ) : (
        <div className="fade-in">{children}</div>
      )}
    </>
  );
}

PreloaderWrapper.propTypes = {
  imageUrls: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};
