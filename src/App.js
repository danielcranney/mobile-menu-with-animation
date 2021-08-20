import React, { useState } from "react";
import Header from "./components/Header";
import MenuOverlay from "./components/MenuOverlay";

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="App w-full min-h-screen bg-gray-800">
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />

      {/* Main */}
      <main className="text-white mx-auto p-10 pt-24 pb-96">
        <p className="hidden lg:block">
          Please adjust your browser width to &lt;1024px to see the menu icon.
        </p>
      </main>
    </div>
  );
}

export default App;
