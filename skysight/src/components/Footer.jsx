const Footer = () => {
  return (
    <footer className="relative bg-slate-900/95 backdrop-blur-xl border-t border-white/10 text-white py-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <p className="text-white/80 text-sm mb-1">
            © 2025 SkySight. Weather data from OpenWeatherMap.
          </p>
          <p className="text-white/60 text-xs">
            Designed for weather enthusiasts worldwide
          </p>
        </div>

        <div className="flex gap-8 text-sm">
          <a
            href="/help"
            className="text-white/70 hover:text-blue-400 transition-colors duration-200 font-medium"
          >
            Help
          </a>
          <a
            href="/privacy"
            className="text-white/70 hover:text-blue-400 transition-colors duration-200 font-medium"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="text-white/70 hover:text-blue-400 transition-colors duration-200 font-medium"
          >
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
