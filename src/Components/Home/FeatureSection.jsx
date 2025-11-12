import React from "react";
import { motion } from "framer-motion";
import { Users, CalendarDays, Leaf, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: <CalendarDays size={40} className="text-green-600" />,
    title: "Create & Manage Events",
    description:
      "Organize social events like tree plantations, road cleaning, or charity drives effortlessly.",
  },
  {
    icon: <Users size={40} className="text-green-600" />,
    title: "Join Local Initiatives",
    description:
      "Connect with volunteers in your area and take part in meaningful community actions.",
  },
  {
    icon: <Leaf size={40} className="text-green-600" />,
    title: "Eco-friendly Impact",
    description:
      "Our initiatives focus on environmental sustainability and long-term social growth.",
  },
  {
    icon: <HeartHandshake size={40} className="text-green-600" />,
    title: "Empower Communities",
    description:
      "Work hand in hand to uplift underprivileged communities and promote social harmony.",
  },
];

const FeatureSection = () => {
  return (
    <section className=" bg-white mt-60 py-20" id="features">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Platform <span className="text-green-600">Features</span>
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Empowering individuals and communities to act together for a cleaner,
          greener, and better tomorrow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#f2f8f3] rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col items-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
