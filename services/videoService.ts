import { Video } from '../types';

// Mock data is now part of the service, simulating a database.
const MOCK_VIDEOS: Video[] = [
  {
    id: '1',
    slug: 'the-roman-secret',
    title: 'The Roman Secret',
    description: 'In the shadow of ancient Rome, fresh from the conquest of Judea in 70 AD, a brilliant Roman general creates its first propaganda pamphlet, the Roman gospel of Mark, a story that would ignite an empire and change the world forever.',
    durationSec: 245,
    tags: ['Historical', 'Epic', 'Drama'],
    category: 'Short Film',
    releaseDate: '2023-10-26T00:00:00.000Z',
    thumbnailURL: 'https://i.imgur.com/Ur15n3a.jpg',
    bannerURL: 'https://i.imgur.com/8Q5mX8t.jpeg',
    featured: true,
  },
  {
    id: '2',
    slug: 'the-last-leaf',
    title: 'The Last Leaf',
    description: 'In a world where trees are a myth, a young girl discovers a single, living leaf, sparking a journey to find its source.',
    durationSec: 180,
    tags: ['Fantasy', 'Short Film', 'Drama'],
    category: 'Short Film',
    releaseDate: '2023-09-15T00:00:00.000Z',
    thumbnailURL: 'https://i.imgur.com/aKaQ38i.jpg',
    bannerURL: 'https://i.imgur.com/pVKqg1F.jpg',
    featured: false,
  },
  {
    id: '3',
    slug: 'neon-echoes',
    title: 'Neon Echoes',
    description: 'A cyberpunk detective hunts a rogue AI through the rain-slicked streets of a futuristic city, questioning the nature of consciousness.',
    durationSec: 310,
    tags: ['Cyberpunk', 'Animation', 'Thriller'],
    category: 'Animation',
    releaseDate: '2023-11-05T00:00:00.000Z',
    thumbnailURL: 'https://i.imgur.com/02k5y7b.jpg',
    bannerURL: 'https://i.imgur.com/9yC7n2j.jpg',
    featured: false,
  },
  {
    id: '4',
    slug: 'a-simple-gesture',
    title: 'A Simple Gesture',
    description: 'The story of a friendship that blossoms between a grumpy old man and a curious child over a shared love for pigeons.',
    durationSec: 215,
    tags: ['Heartwarming', 'Short Film', 'Slice of Life'],
    category: 'Short Film',
    releaseDate: '2023-08-20T00:00:00.000Z',
    thumbnailURL: 'https://i.imgur.com/n102Uj7.jpg',
    bannerURL: 'https://i.imgur.com/hXQ2V5X.jpg',
    featured: false,
  },
  {
    id: '5',
    slug: 'the-clockwork-heart',
    title: 'The Clockwork Heart',
    description: 'An inventor creates a clockwork bird that can sing, but must protect it from a greedy collector who wants its magic for himself.',
    durationSec: 280,
    tags: ['Steampunk', 'Animation', 'Adventure'],
    category: 'Animation',
    releaseDate: '2023-07-11T00:00:00.000Z',
    thumbnailURL: 'https://i.imgur.com/Kx9Q2Bw.jpg',
    bannerURL: 'https://i.imgur.com/z4iQy8s.jpg',
    featured: false,
  },
  {
    id: '6',
    slug: 'beneath-the-surface',
    title: 'Beneath the Surface',
    description: 'A deep-sea diver documents the mesmerizing, bioluminescent creatures of the ocean depths, but finds something not of this world.',
    durationSec: 195,
    tags: ['Documentary', 'Short Film', 'Mystery'],
    category: 'Short Film',
    releaseDate: '2023-10-02T00:00:00.000Z',
    thumbnailURL: 'https://i.imgur.com/YwG503P.jpg',
    bannerURL: 'https://i.imgur.com/5V3wT3e.jpg',
    featured: false,
  }
];


/**
 * Simulates fetching all videos from an API.
 */
export const fetchVideos = async (): Promise<Video[]> => {
  console.log('Fetching all videos...');
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return MOCK_VIDEOS;
};

/**
 * Simulates fetching a single video by its ID from an API.
 */
export const fetchVideoById = async (id: string): Promise<Video> => {
  console.log(`Fetching video with id: ${id}...`);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  const video = MOCK_VIDEOS.find(v => v.id === id);
  if (video) {
    return video;
  } else {
    throw new Error('Video not found');
  }
};