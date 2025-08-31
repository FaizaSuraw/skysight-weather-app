import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  const [searchedCity, setSearchedCity] = useState("");

  return (
    <>
      <Navbar onSearch={setSearchedCity} />
      <Routes>
        <Route path="/" element={<HomePage searchedCity={searchedCity} />} />
      </Routes>
    </>
  );
}

export default App;
