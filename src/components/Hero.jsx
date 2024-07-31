import React from 'react';
import logo2 from '../assets/logo2.png'; // PNG image

const Hero = () => {
  return (
    <section className='relative overflow-hidden w-full min-h-screen flex items-center justify-center bg-slate-950'>
      {/* Background Image */}
      <div
        className='absolute top-0 left-[-140px] w-full h-full bg-cover bg-center'
        style={{ backgroundImage: `url(${logo2})` }}
      />
      {/* Video Overlay */}
      <video
        className='absolute top-0  w-full h-full object-cover left-[-140px]'
        src='https://res.cloudinary.com/dymfsdc1w/video/upload/v1722421125/samples/videoplayback_kpryr2.mp4'
        autoPlay
        loop
        muted
        style={{
          maskImage: `url(${logo2})`,
          maskSize: 'cover',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskImage: `url(${logo2})`, // For WebKit-based browsers
          WebkitMaskSize: 'cover',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center'
        }}
      />
      {/* Content */}
      <div className='relative z-10 text-center px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-20'>
        <h1 className='text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight'>
          Welcome to Our Store
        </h1>
        <p className='text-white text-base md:text-lg lg:text-xl mt-4'>
          Discover the best products at unbeatable prices.
        </p>
        <button className='mt-6 bg-white text-slate-950 px-6 py-3 rounded-full text-base md:text-lg lg:text-xl hover:bg-gray-200 transition'>
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
