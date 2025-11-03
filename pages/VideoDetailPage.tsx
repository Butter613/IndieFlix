import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchVideoById } from '../services/videoService';
import { PlayIcon, PlusIcon } from '../components/icons/Icons';
import Spinner from '../components/Spinner';

const VideoDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: video, isLoading, isError, error } = useQuery({
    queryKey: ['video', id],
    queryFn: () => fetchVideoById(id!),
    enabled: !!id, // Only run the query if the id exists
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (isError) {
     return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-red-400">
          <h2 className="text-2xl font-bold mb-2">Error loading video</h2>
          <p>{error instanceof Error ? error.message : 'An unknown error occurred.'}</p>
        </div>
      </div>
    );
  }
  
  if (!video) {
    return <div className="text-center py-20 text-xl">Video not found.</div>;
  }

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };
  
  const releaseYear = new Date(video.releaseDate).getFullYear();

  return (
    <div className="animate-fade-in">
      {/* --- Banner Section --- */}
      <div className="relative h-[40vh] md:h-[60vh] bg-black">
        <img src={video.bannerURL || video.thumbnailURL} alt={video.title} className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 md:pb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white drop-shadow-lg">{video.title}</h1>
           <div className="flex items-center space-x-4 text-gray-300 mt-2">
              <span>{releaseYear}</span>
              <span>&bull;</span>
              <span>{formatDuration(video.durationSec)}</span>
              <span>&bull;</span>
              <span className="border border-gray-500 px-2 py-0.5 rounded text-sm">{video.category}</span>
            </div>
        </div>
      </div>
      
      {/* --- Content Section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* --- Action Buttons --- */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white transition-transform hover:scale-105">
            <PlayIcon className="w-6 h-6 mr-3" aria-hidden="true" />
            Watch Now (Mock)
          </button>
           <button className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-3 border border-gray-600 text-lg font-medium rounded-md shadow-sm text-white bg-gray-500/40 hover:bg-gray-500/60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white transition-transform hover:scale-105">
            <PlusIcon className="w-6 h-6 mr-3" aria-hidden="true" />
            Add to Watchlist
          </button>
        </div>

        {/* --- Details Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-gray-800 pt-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
            <p className="text-lg text-gray-300 leading-relaxed">{video.description}</p>
          </div>
          <div>
             <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Tags</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {video.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetailPage;