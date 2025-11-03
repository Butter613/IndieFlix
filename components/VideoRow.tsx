
import React from 'react';
import { Video } from '../types';
import VideoCard from './VideoCard';

interface VideoRowProps {
  title: string;
  videos: Video[];
}

const VideoRow: React.FC<VideoRowProps> = ({ title, videos }) => {
  return (
    <div className="mb-10">
      <h2 className="text-xl md:text-2xl font-bold mb-4 px-4 sm:px-6 lg:px-8 text-gray-100">{title}</h2>
      <div className="relative group">
        <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex space-x-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {videos.map((video) => (
            <div key={video.id} className="flex-shrink-0 w-64 md:w-72">
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoRow;