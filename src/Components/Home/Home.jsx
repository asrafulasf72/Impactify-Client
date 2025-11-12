import React from "react";
import BannerSlider from "./BannerSlider";
import OverviewSection from "./OverviewSection";
import FeatureSection from "./FeatureSection";
import GallerySection from "./GallerySection";
import NewsletterSection from "./NewsletterSection";

const Home = () => {
  return (
    <div>
      <div className="relative bg-[#f2f8f3]">
        <BannerSlider />
        <OverviewSection />
      </div>
      <FeatureSection />
      <GallerySection />
      <NewsletterSection />
    </div>
  );
};

export default Home;
