import React, { useState, useEffect } from "react";
import HeaderMenu from "../../components/navigation/HeaderMenu";
import "./Navigation.css";

const Navigation = () => {
  const [showWhiteBackground, setShowWhiteBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = window.innerHeight * 0.1;

      setShowWhiteBackground(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full z-[100] navigation-container ${
        showWhiteBackground ? "white-bg" : ""
      }`}
    >
      <HeaderMenu />
    </div>
  );
};

export default Navigation;
