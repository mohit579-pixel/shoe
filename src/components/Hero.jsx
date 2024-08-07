import React from 'react';
import logo3 from '../assets/logo4.png';
import shoe2 from '../assets/shoe2.png'; // PNG image
const Hero = () => {
  return (
    <section className='relative overflow-hidden w-full min-h-[90vh] flex items-center justify-center bg-slate-950'>
      {/* Video Overlay */}
      <video
        className='absolute top-20 left-[-200px]  w-full h-full object-cover opacity-60' 
        src='https://res.cloudinary.com/dymfsdc1w/video/upload/v1722427852/samples/7181_Purple_Lights_HD___Background_Animation___Mood_Lights___LED_Lights_Purple_Blue_Pink_-_YouTube_-_Google_Chrome_2024-07-31_17-38-55_ip8dpg.mp4'
        autoPlay
        loop
        muted
        style={{
          maskImage: `url(${logo3})`,
          maskSize: 'cover',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskImage: `url(${logo3})`, // For WebKit-based browsers
          WebkitMaskSize: 'cover',
          WebkitMaskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center'
        }}
      />
      {/* Content */}
      <div className='relative z-3 top-[-150px]  flex flex-row  min-h-full'>
        <div className="flex flex-col mt-14 ml-10 justify-center ">
          <h1 className='text-4xl font-bold text-gray-500 z-10'>React <span className='text-4xl font-bold text-pink-500 z-10'>Infinity</span></h1>
          <p className='text-xl text-gray-700'>Run Flyknit </p>
          <p className='text-xl text-gray-800'>React</p>
          <h1 className='text-3xl font-bold text-white mt-3 mb-3'>$272</h1>
          <p className='text-lg text-white mb-2'>Color</p>
          <div className='flex gap-2 mb-2'>
          <div className="color rounded-full z-10 bg-red-600 h-5 w-5 border border-transparent hover:border-white transition-colors duration-200"></div>
          <div className="color rounded-full z-10 bg-blue-500 h-5 w-5 border border-transparent hover:border-white transition-colors duration-300"></div>
          <div className="color rounded-full z-10 bg-green-500 h-5 w-5 border border-transparent hover:border-white transition-colors duration-300"></div>
          <div className="color rounded-full z-10 bg-yellow-400 h-5 w-5 border border-transparent hover:border-white transition-colors duration-300"></div>
          </div>
          <div className='text-white mb-3 text-medium flex gap-6'>
          Size:
          <span className='font-bold text-gray-700'>L</span>
          <span className='font-bold text-gray-700'>M</span>
          <span className='font-bold text-red-600'>XL</span>
          </div>
          <div className='flex  relative left-8 mb-4'>
            <button className='rounded-full w-10 h-10 bg-transparent text-white bg-black' >7</button>
            <button className='rounded-full w-10 h-10 bg-transparent text-white'>9</button>
            <button className='rounded-full w-10 h-10 bg-transparent text-white'>11</button>
          </div>
          <button className='bg-orange-800 w-20 rounded-md tracking-wider z-10 hover:bg-orange-700 text-white font-extrabold p-2'>Buy</button>
          
        </div>
        <div className="text-black z-0 mt-4 min-w-[70vw] text-[24rem] font-bold tracking-tighter">
          <span>NIKE</span>
          <div className='h-[35vh] w-[35vw] absolute top-[27vh] rotate-15 left-[29vw]'>
          <img src={shoe2} alt="" srcset="" className='w-full'/>
          </div>
        </div>
        <div className=" ">
        </div>
      </div>
    </section>
  );
};

export default Hero;
