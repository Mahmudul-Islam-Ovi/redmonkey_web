import React from "react";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/BG 1.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover md:object-fill blur-[2px]"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Where Bangla Stories <br />
            Come Alive
          </h1>
          <p className="mt-4 text-gray-200 text-lg">
            Original animations, comics, and merch from Bangladesh — crafted by
            RedMonkey.
          </p>
          <div className="mt-8">
            <a
              className="btn btn-primary inline-block px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded transition"
              href="/works"
            >
              See Our Work
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="card overflow-hidden shadow-2xl">
            <video
              src="/Video/Intro Video.mp4"
              className="w-full h-full object-cover"
              controls
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
