import React from 'react';
import { Link } from 'react-router-dom';
import { Video } from '../types';
import { PlayIcon } from './icons/Icons';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <Link to={`/video/${video.id}`} className="block group rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-4 focus:ring-offset-black">
      <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-red-600/30">
        <img src={video.thumbnailURL} alt={video.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:brightness-50" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black/50 rounded-full p-3">
            <PlayIcon className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 p-3 text-white w-full bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="font-bold truncate text-sm transition-transform duration-300 ease-in-out">
            {video.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;