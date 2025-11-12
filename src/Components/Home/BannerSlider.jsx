import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://www.green.earth/hubfs/Happy%20friends%20gardening%20for%20the%20community%20on%20a%20sunny%20day.jpeg",
    title: "Welcome to Our Community!",
    subtitle: "Join hands to make the world cleaner, greener, and better 🌿",
  },
  {
    id: 2,
    image:
      "https://ecdn.dhakatribune.net/contents/cache/images/900x0x1/uploads/dten/2019/08/unnamed-1565079445743.jpg",
    title: "Together We Grow Stronger",
    subtitle: "Empowering people through collective social action 💪",
  },
  {
    id: 3,
    image:
      "https://asezwao.org/wp-content/themes/watv/images/event/plastic-free/campaign_visual.jpg",
    title: "Act Today for a Better Tomorrow",
    subtitle: "Let’s make every event count towards social development 🌎",
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[85vh] overflow-hidden shadow-lg z-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-6">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl font-light"
            >
              {slides[current].subtitle}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
      >
        <ChevronLeft className="text-white" size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
      >
        <ChevronRight className="text-white" size={28} />
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f2f8f3] to-transparent"></div>
    </div>
  );
};

export default BannerSlider;
