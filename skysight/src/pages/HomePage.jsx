import WeatherCard from "../components/WeatherCard";
import FeatureStrip from "../components/FeatureStrip";
import Footer from "../components/Footer";

const HomePage = ({ searchedCity }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center px-6 py-10">

      <section className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4 text-blue-900">SkySight 🌤️</h1>
        <p className="text-xl text-blue-800 mb-6">Your daily weather, simplified.</p>
        <p className="text-blue-700 mb-6">
          {searchedCity
            ? `You searched for: ${searchedCity}`
            : "Search for a city above to see its weather."}
        </p>
      </section>
      <WeatherCard city={searchedCity || "City Name"} />
      <FeatureStrip />
      <Footer />
    </div>
  );
};

export default HomePage;
