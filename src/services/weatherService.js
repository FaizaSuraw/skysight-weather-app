export const getWeather = async (city) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  return res.json();
};

export const getForecast = async (city) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
  );
  return res.json();
};
