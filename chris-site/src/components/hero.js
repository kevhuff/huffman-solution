import React from 'react';

const Hero = () => {
  return (
    <div className="bg-indigo-500 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">Huffman Family Home Solutions</h1>
      <p className="text-lg mb-8 px-8 text-center">
        Welcome to Huffman Family Home Solutions, your one-stop general contracting company with a family-first attitude. We treat every client like family, ensuring top-notch service in every interaction. Our extensive range of services covers everything your family needs, from plumbing and roofing to everything in between.
      </p>
      <button className="bg-white text-indigo-500 px-6 py-2 rounded-full font-bold">
        Learn More
      </button>
    </div>
  );
};

export default Hero;
