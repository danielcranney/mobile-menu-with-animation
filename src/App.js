import React, { useState } from "react";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="App w-full h-screen bg-gray-800">
      {/* Full-screen Menu */}
      <div
        className={`fixed top-0 left-0 w-full p-12 z-10 h-screen pt-24 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
          navbarOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        {/* Menu Items */}
        <ul className="z-30 flex flex-col items-start">
          <li className="nav-li">
            <a
              href="/"
              className="nav-link"
              onClick={() => {
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
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              About
            </a>
          </li>
          <li className="nav-li">
            <a
              href="/"
              className="nav-link"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              Services
            </a>
          </li>
          <li className="nav-li">
            <a
              href="/"
              className="nav-link"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Burger / Close Icon */}
      <button
        className="lg:hidden flex z-20 absolute right-8 top-8 w-10 h-10 text-white focus:outline-none"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <path
            className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
              navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
          ></path>
          <path
            className={`block absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
              navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
            }`}
          ></path>
          <path
            className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
              navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
          ></path>
        </div>
      </button>

      <div className="text-white mx-auto p-10">
        <h1 className="lg:hidden block text-2xl font-bold my-0">Logo</h1>
        <p className="hidden lg:block">
          Please adjust your browser width to &lt;1024px to see the menu icon.
        </p>
      </div>
    </div>
  );
}

export default App;
