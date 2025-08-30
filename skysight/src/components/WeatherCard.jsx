const WeatherCard = ({ data }) => {
  if (!data || !data.main || !data.weather) {
    return (
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl text-center max-w-md mx-auto">
        <div className="animate-pulse">
          <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4"></div>
          <div className="h-4 bg-white/20 rounded w-3/4 mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl text-center max-w-md mx-auto group hover:scale-105 transition-all duration-300">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">{data.name}</h2>
          <p className="text-white/80 text-lg capitalize font-medium">
            {data.weather[0]?.description}
          </p>
        </div>

        <div className="flex justify-center items-center mb-6">
          <div className="relative">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0]?.icon}@4x.png`}
              alt="weather icon"
              className="w-24 h-24 drop-shadow-2xl"
            />
          </div>
          <div className="ml-6">
            <p className="text-6xl font-bold text-white">
              {Math.round(data.main.temp)}°
            </p>
            <p className="text-white/70 text-sm font-medium">Celsius</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/20">
          <div className="text-center">
            <p className="text-white/70 text-sm font-medium">Feels like</p>
            <p className="text-white text-xl font-semibold">
              {Math.round(data.main.feels_like)}°
            </p>
          </div>
          <div className="text-center">
            <p className="text-white/70 text-sm font-medium">Humidity</p>
            <p className="text-white text-xl font-semibold">
              {data.main.humidity}%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
