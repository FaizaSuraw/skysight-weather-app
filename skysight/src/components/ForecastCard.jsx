const ForecastCard = ({ forecast }) => {
  const date = new Date(forecast.dt * 1000)
  const day = date.toLocaleDateString("en-US", { weekday: "short" })
  const time = date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })

  return (
    <div className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/15">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex flex-col items-center space-y-3">
        <div className="text-center">
          <p className="font-semibold text-white text-lg">{day}</p>
          <p className="text-xs text-white/70 font-medium">{time}</p>
        </div>

        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
            alt="Forecast icon"
            className="w-full h-full object-contain drop-shadow-lg"
          />
        </div>

        <div className="text-center space-y-1">
          <p className="text-2xl font-bold text-white">{Math.round(forecast.main.temp)}°</p>
          <p className="capitalize text-white/80 text-sm font-medium leading-tight">
            {forecast.weather[0].description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ForecastCard
