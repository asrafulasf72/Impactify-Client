import React from "react";

const OverviewSection = () => {
  return (
    <section className="relative bg-[#f2f8f3] pb-16">
      <div className="absolute top-[-40px] md:top-[-80px] left-1/2 transform -translate-x-1/2 w-full flex justify-center z-30">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row overflow-hidden">
          {/* Text Part */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Impactify{" "}
              <span className="text-green-600 font-bold">Overview</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At <span className="font-semibold text-green-700">Impactify</span>
              , we believe that small acts of kindness can lead to big social
              change. Our community-driven initiatives focus on improving the
              environment, uplifting local communities, and building a
              sustainable future for everyone.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              From <span className="font-medium">tree plantation</span> drives
              and
              <span className="font-medium"> road-cleaning campaigns</span> to
              <span className="font-medium"> food distribution</span> and
              <span className="font-medium"> disaster relief</span> efforts we
              unite volunteers and changemakers to take action for the
              betterment of society. Together, we work towards a cleaner,
              greener, and more compassionate world.
            </p>
          </div>

          {/* Image Part */}
          <div className="md:w-1/2">
            <img
              src="https://admin.jirehshope.com/wp-content/uploads/2018/02/456393_483937434971773_1713350447_o.jpg"
              alt="Impactify Volunteers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
