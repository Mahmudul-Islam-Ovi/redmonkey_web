import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <div className="container py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold">
            Where Bangla Stories <br />
            Come Alive
          </h1>
          <p className="mt-4 text-gray-300">
            Original animations, comics, and merch from Bangladesh — crafted by
            RedMonkey.
          </p>
          <div className="mt-6">
            <a className="btn" href="#work">
              See Our Work
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="card md:h-48 overflow-hidden">
            <img
              src="/images/hero.jpg"
              alt="hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
