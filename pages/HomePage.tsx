import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Hero from '../components/Hero';
import VideoRow from '../components/VideoRow';
import Spinner from '../components/Spinner';
import { fetchVideos } from '../services/videoService';

const HomePage: React.FC = () => {
  const { data: videos, isLoading, isError, error } = useQuery({ 
    queryKey: ['videos'], 
    queryFn: fetchVideos 
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
          <h2 className="text-2xl font-bold mb-2">Error loading videos</h2>
          <p>{error instanceof Error ? error.message : 'An unknown error occurred.'}</p>
        </div>
      </div>
    );
  }

  const featuredVideo = videos.find(v => v.featured) || videos[0];
  const animationVideos = videos.filter(v => v.category === 'Animation');
  const shortFilmVideos = videos.filter(v => v.category === 'Short Film');
  const latestReleases = [...videos].sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());

  return (
    <div className="animate-fade-in">
      {featuredVideo && <Hero video={featuredVideo} />}
      <div className="pt-8">
        <VideoRow title="Latest Releases" videos={latestReleases} />
        <VideoRow title="Animations" videos={animationVideos} />
        <VideoRow title="Short Films" videos={shortFilmVideos} />
      </div>
    </div>
  );
};

export default HomePage;