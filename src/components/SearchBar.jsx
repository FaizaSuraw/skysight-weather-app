import { useState } from "react"

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim() !== "") {
      onSearch(city)
      setCity("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-8">
      <div className="relative flex w-full max-w-md">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for any city..."
          className="flex-grow px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-l-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200 text-lg"
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-r-2xl hover:from-blue-600 hover:to-purple-600 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 text-lg"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar
