import React from "react";
import Portal from "./Portal";

import closeIcon from "../../public/icons/icon-close.svg";

const SideNav = ({ toggleNav, isNavOpen }) => {
  if (!isNavOpen) return null;
  return (
    <Portal>
      <div
        onClick={(e) => {
          if (e.target.classList.contains("absolute")) toggleNav(false);
        }}
        className="absolute inset-0 bg-black bg-opacity-65"
      >
        <div
          className={`bg-white max-w-[70%] min-h-full font-bold p-6 -translate-x-full sm:p-12
          ${isNavOpen ? "slideIn" : ""}`}
        >
          <button
            onClick={() => {
              toggleNav(!isNavOpen);
            }}
            className="mb-12"
          >
            <img src={closeIcon} alt="Exit menu icon" />
          </button>
          <ul className="space-y-4">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </Portal>
  );
};

export default SideNav;
