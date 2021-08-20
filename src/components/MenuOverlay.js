import React from "react";

const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <nav
      className={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
        navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <ul className="w-full flex flex-col items-start">
        <li className="nav-li">
          <a
            href="/"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              setNavbarOpen(false);
            }}
          >
            Home
          </a>
        </li>
        <li className="nav-li">
          <a
            href="/"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              setNavbarOpen(false);
            }}
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MenuOverlay;
