import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  const [searchedCity, setSearchedCity] = useState("");

  return (
    <Router>
      <Navbar onSearch={setSearchedCity} />
      <Routes>
        <Route path="/" element={<HomePage searchedCity={searchedCity} />} />
      </Routes>
    </Router>
  );
}

export default App;
