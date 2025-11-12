import React from "react";
import BannerSlider from "./BannerSlider";
import OverviewSection from "./OverviewSection";

const Home = () => {
  return (
    <div className="relative bg-[#f2f8f3]">
      <BannerSlider />
      <OverviewSection />
    </div>
  );
};

export default Home;
