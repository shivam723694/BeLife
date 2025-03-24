import React from "react";
import videoBanner from "../banner/videoBanner.mp4";

const OverviewSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src={videoBanner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      {/* <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Overview</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Welcome to Fifty One Plus
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Any kind of health tests are now just a call away. Keeping your
            convenience and busy schedule in mind, we have a dedicated Home
            Collection Team to provide services at the comfort of your home or
            workplace. You can access our state-of-the-art facilities from the
            safety and comfort of your preferred location, at a time which works
            best for you.
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default OverviewSection;