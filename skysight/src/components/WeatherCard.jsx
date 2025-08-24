const WeatherCard = ({ city = "City Name", temperature = "--", condition = "--", humidity = "--", wind = "--" }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md text-center">
      <h2 className="text-2xl font-semibold mb-2">{city}</h2>
      <p className="text-lg mb-2">Temperature: {temperature}°C</p>
      <p className="text-md text-gray-600 mb-2">Condition: {condition}</p>
      <p className="text-sm text-gray-500">Humidity: {humidity} | Wind: {wind}</p>
    </div>
  );
};

export default WeatherCard;
