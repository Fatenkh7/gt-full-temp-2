import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col items-center">
        <div
          className="bg-cover bg-center rounded-lg w-full h-64 md:h-96 lg:h-128 mb-4"
          style={{ backgroundImage: "url('https://w0.peakpx.com/wallpaper/211/602/HD-wallpaper-batman-black-dark-hero.jpg')" }}
        ></div>
        <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-lg text-center mb-8">
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
