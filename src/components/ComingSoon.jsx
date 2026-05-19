import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/altair-logo.png";

export default function ComingSoon() {
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 7);

  const calculateTimeLeft = () => {
    const difference = launchDate - new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4FCFF] via-[#DDF5FF] to-[#9EDCF7] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background bubbles */}
      <div className="absolute top-16 left-16 w-24 h-24 bg-white/30 rounded-full blur-md"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/30 rounded-full"></div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-[#36BDF5]/30 to-transparent rounded-t-[100%]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-5xl"
      >
        {/* Logo */}
        <img
          src={logo}
          alt="Altair Logo"
          className="w-72 mx-auto mb-10"
        />

        <p className="uppercase tracking-[0.25em] text-[#1C6AA8] font-semibold mb-6">
          Altair Food & Beverage Pvt. Ltd.
        </p>

        <h1 className="text-6xl md:text-8xl font-black text-[#155B8C] leading-tight">
          COMING
          <span className="block text-[#36BDF5]">
            SOON
          </span>
        </h1>

        <p className="mt-8 text-2xl text-[#245B7B] font-light">
          Pure Water. Pure Life.
        </p>

        <p className="mt-8 text-lg text-[#245B7B] max-w-2xl mx-auto leading-relaxed">
          We are preparing to launch premium packaged drinking water
          crafted with purity, trust, and excellence in every drop.
        </p>

        {/* Countdown Timer */}
        <div className="mt-12 grid grid-cols-4 gap-4 max-w-2xl mx-auto">
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="bg-white/40 backdrop-blur-md rounded-2xl p-5 shadow-lg"
            >
              <p className="text-4xl font-bold text-[#1C6AA8]">
                {value}
              </p>
              <p className="uppercase text-sm text-[#245B7B] mt-2">
                {label}
              </p>
            </div>
          ))}
        </div>

        <a
          href="mailto:info@altairfbs.com"
          className="inline-block mt-12 px-10 py-4 bg-[#1C6AA8] text-white rounded-full font-semibold hover:bg-[#155B8C] transition"
        >
          Contact Us
        </a>

        <p className="mt-16 text-[#155B8C] text-sm">
          © 2026 Altair Food & Beverage Pvt. Ltd.
        </p>
      </motion.div>
    </div>
  );
}