import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "https://cdn.sanity.io/images/cphrnle8/production/6716434f714f72974d7f5150242baaa8cbb51c4a-1440x720.webp?w=1440&q=100",
  "https://ceragem.co.in/wp-content/uploads/2023/07/blood-donation5.jpg",
  "https://mmvietnam.com/wp-content/uploads/2025/04/AP-Mar-2.jpg",
  "https://tds-images.thedailystar.net/sites/default/files/styles/very_big_201/public/images/2022/06/29/1_d.jpeg",
  "https://img.freepik.com/free-photo/volunteers-little-kid-planting-tree-covering-hole-ground_482257-91057.jpg?semt=ais_hybrid&w=740&q=80",
  "https://ik.imagekit.io/a4izklulj/images/2024/09/devastating-floods-affect-the-lives-of-over-5-million-jaago-foundation-and-volunteer-for-bangladesh-launch-initiative-to-provide-relief-support_1725885436_ntv-I1ylp.jpg?tr=f-auto,w-1200,h-630,fo-auto,pr-true",
];

const GallerySection = () => {
  return (
    <section className="py-15 bg-base-100" id="gallery">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-base-content mb-4"
        >
          Event <span className="text-green-600">Gallery</span>
        </motion.h2>
        <p className="text-base-content/70 max-w-2xl mx-auto mb-10">
          Glimpses of our community-driven social service activities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={img}
                alt={`Gallery ${index}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
