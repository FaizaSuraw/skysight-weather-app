const Footer = () => {
  return (
    <footer className="w-full bg-blue-700 text-white py-6 px-6 flex flex-col md:flex-row justify-between items-center mt-auto shadow-inner rounded-t-xl">
      <p className="text-sm text-center md:text-left mb-3 md:mb-0">
        © 2025 SkySight. Weather data from OpenWeatherMap.
      </p>

      <div className="flex gap-6 text-sm">
        <a href="/help" className="hover:text-yellow-400 transition-colors">Help</a>
        <a href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy</a>
        <a href="/terms" className="hover:text-yellow-400 transition-colors">Terms</a>
      </div>
    </footer>
  );
};

export default Footer;
