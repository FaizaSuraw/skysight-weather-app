import { WiDaySunny, WiCloud, WiRaindrop } from "react-icons/wi";

const features = [
  { icon: <WiDaySunny size={40} />, title: "Real-time Weather" },
  { icon: <WiCloud size={40} />, title: "5-Day Forecast" },
  { icon: <WiRaindrop size={40} />, title: "Responsive Design" },
];

const FeatureStrip = () => {
  return (
    <section className="w-full max-w-5xl mt-10 mb-6 flex flex-col md:flex-row justify-around items-center gap-6 bg-white bg-opacity-30 rounded-xl p-6 shadow-md">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-blue-900 text-center">
          <div className="mb-2">{feature.icon}</div>
          <p className="font-semibold">{feature.title}</p>
        </div>
      ))}
    </section>
  );
};

export default FeatureStrip;
