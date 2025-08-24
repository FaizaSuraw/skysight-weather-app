import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);              
      navigate(`/weather/${city}`); 
      setCity("");
    }
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <div className="text-2xl font-bold mb-3 md:mb-0">SkySight 🌤️</div>

      <ul className="flex gap-4 mb-3 md:mb-0">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
      </ul>

      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search city, e.g., Nairobi"
          className="px-3 py-1 rounded-l-md text-black"
        />
        <button
          type="submit"
          className="bg-yellow-400 px-3 py-1 rounded-r-md hover:bg-yellow-500 font-semibold"
        >
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
