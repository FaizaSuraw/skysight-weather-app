import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
  const [searchedCity, setSearchedCity] = useState("");

  const handleSearch = (city) => {
    setSearchedCity(city);
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />

      <Routes>
        <Route path="/" element={<HomePage searchedCity={searchedCity} />} />
      </Routes>
    </Router>
  );
};

export default App;
