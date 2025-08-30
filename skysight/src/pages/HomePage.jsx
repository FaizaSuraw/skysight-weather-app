import { useEffect, useState } from "react"
import WeatherCard from "../components/WeatherCard"
import Footer from "../components/Footer"

const HomePage = ({ searchedCity }) => {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

useEffect(() => {
  if (!searchedCity) return;

  const fetchWeather = async () => {
    setLoading(true);
    setError("");
    setWeatherData(null);

    try {
      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          searchedCity
        )}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to fetch weather data");
      }

      const data = await res.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchWeather();
}, [searchedCity]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex flex-col">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex-grow flex flex-col items-center px-6 py-16">
        <section className="text-center mb-16 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              SkySight
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-8"></div>
          </div>

          <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
            Your daily weather, beautifully simplified
          </p>

          {searchedCity ? (
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 inline-block">
              <p className="text-white/80 text-lg">
                Showing weather for: <span className="font-semibold text-white">{searchedCity}</span>
              </p>
            </div>
          ) : (
            <p className="text-white/70 text-lg">Search for a city above to discover its current weather</p>
          )}
        </section>

        <div className="w-full max-w-2xl mb-16">
          {loading && (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
              <p className="text-white/80 text-lg">Fetching weather data...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-500/20 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 text-center">
              <p className="text-red-200 text-lg font-medium">{error}</p>
            </div>
          )}

          {!loading && !error && weatherData && (
            <div className="animate-fade-in">
              <WeatherCard data={weatherData} />
            </div>
          )}
        </div>

        <section className="relative z-10 px-6 py-20 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About SkySight
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-white mb-4">Weather Intelligence, Simplified</h3>
                <p className="text-white/80 text-lg leading-relaxed">
                  SkySight transforms complex meteorological data into beautiful, easy-to-understand weather insights.
                  Our platform delivers real-time weather information with stunning visuals and intuitive design.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Whether you're planning your day, week, or just curious about the weather anywhere in the world,
                  SkySight provides accurate forecasts with a modern, sleek interface that makes checking the weather a
                  delight.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Real-time Data</h4>
                      <p className="text-white/70">Live weather updates from trusted sources</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Global Coverage</h4>
                      <p className="text-white/70">Weather data for cities worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Beautiful Design</h4>
                      <p className="text-white/70">Modern interface that's a joy to use</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage