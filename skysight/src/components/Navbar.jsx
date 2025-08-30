import { useState } from "react"

const Navbar = ({ onSearch }) => {
  const [city, setCity] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim() !== "") {
      onSearch(city)
      setCity("")
    }
  }

  return (
    <nav className="relative bg-slate-900/95 backdrop-blur-xl border-b border-white/10 text-white px-6 py-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-xl">🌤️</span>
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            SkySight
          </div>
        </div>

        {/* Search box */}
        <form onSubmit={handleSubmit} className="flex w-full md:w-auto max-w-md">
          <div className="relative flex-grow md:flex-grow-0">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search city, e.g., Nairobi"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-l-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-200"
              aria-label="Search city"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-r-xl hover:from-blue-600 hover:to-purple-600 font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar
