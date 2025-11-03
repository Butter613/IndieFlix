
import React from 'react';
import { Link } from 'react-router-dom';
import { Video } from '../types';
import { InfoIcon, PlayIcon } from './icons/Icons';

interface HeroProps {
  video: Video;
}

const Hero: React.FC<HeroProps> = ({ video }) => {
  return (
    <div className="relative h-[70vh] w-full text-white bg-black">
      {/* The image background has been replaced with a solid black color to match the screenshot */}
      <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="w-full md:w-1/2 lg:w-2/5 pb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            {video.title}
          </h1>
          <p className="mt-4 text-lg text-gray-200 line-clamp-3">
            {video.description}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              to={`/video/${video.id}`}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white transition-transform hover:scale-105"
            >
              <PlayIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              Play
            </Link>
             <Link
              to={`/video/${video.id}`}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-500/70 hover:bg-gray-400/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white transition-transform hover:scale-105"
            >
              <InfoIcon className="w-5 h-5 mr-2" aria-hidden="true" />
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
