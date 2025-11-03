
export interface Video {
  id: string;
  slug: string;
  title: string;
  description: string;
  durationSec: number;
  tags: string[];
  category: string;
  releaseDate: string; // ISO
  thumbnailURL: string;
  bannerURL?: string;
  featured: boolean;
}

export interface GeneratedIdea {
  title: string;
  logline: string;
  tags: string[];
}
