import React from "react";
import { motion } from "framer-motion";

const NewsletterSection = () => {
  return (
    <section className="py-10 bg-base-100" id="newsletter">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-base-content mb-4"
        >
          Stay <span className="text-green-600">Connected</span>
        </motion.h2>
        <p className="text-base-content/70 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter and get updates on upcoming community
          events, volunteer opportunities, and success stories.
        </p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="button"
            className="bg-green-600 hover:bg-green-700 text-base-100 px-6 py-3 rounded-full transition"
          >
            Subscribe
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default NewsletterSection;
